import { useEffect, useRef, useState } from 'react';
import { FormClaudeType } from './form/claude';

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }

  interface SpeechRecognition extends EventTarget {
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    start(): void;
    stop(): void;
    onresult: (event: any) => void;
    onaudioend?: () => void;
  }

  interface SpeechRecognitionEvent extends Event {
    resultIndex: number;
    results: SpeechRecognitionResultList;
  }
}

export const useSTT = (params?: {
  form?: FormClaudeType;
  handleSubmit?: (suVa?: any, noVa?: boolean) => Promise<any>;
  onAutoStop?: () => void;
  streamSpeech?: (input: { text: string }) => Promise<void>;
}) => {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const transcriptRef = useRef('');
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const volumeRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const silenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const silenceThresholdRef = useRef(0.1); // starts low, will be calibrated

  useEffect(() => {
    if (typeof window === 'undefined' || !('webkitSpeechRecognition' in window))
      return;

    const SpeechRecognition =
      window.webkitSpeechRecognition || window.SpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let text = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        text += event.results[i][0].transcript;
      }
      // Store the transcript in the ref and form
      transcriptRef.current = text;
      params?.form?.setFieldValue('content', text);
    };

    recognitionRef.current = recognition;
  }, []);

  const updateVolume = () => {
    if (!analyserRef.current || !dataArrayRef.current) return;

    analyserRef.current.getByteFrequencyData(dataArrayRef.current);
    const avg =
      dataArrayRef.current.reduce((a, b) => a + b, 0) /
      dataArrayRef.current.length;
    const normalizedVolume = avg / 255;
    volumeRef.current = normalizedVolume;

    if (normalizedVolume < silenceThresholdRef.current) {
      if (!silenceTimerRef.current) {
        silenceTimerRef.current = setTimeout(() => {
          stopListening();
          params?.onAutoStop?.();
        }, 4000);
      }
    } else {
      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = null;
      }
    }

    animationFrameRef.current = requestAnimationFrame(updateVolume);
  };

  const startListening = async () => {
    setListening(true);
    recognitionRef.current?.start();

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaStreamRef.current = stream;

    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 64;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    source.connect(analyser);

    audioContextRef.current = audioContext;
    analyserRef.current = analyser;
    dataArrayRef.current = dataArray;

    // 🚀 Calibrate ambient noise floor first
    const samples: number[] = [];

    const captureBaseline = () => {
      analyser.getByteFrequencyData(dataArray);
      const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
      samples.push(avg / 255);

      if (samples.length < 20) {
        requestAnimationFrame(captureBaseline);
      } else {
        const baseline = samples.reduce((a, b) => a + b, 0) / samples.length;
        silenceThresholdRef.current = baseline + 0.05; // small margin above ambient
        updateVolume(); // begin normal volume tracking
      }
    };

    captureBaseline();
  };

  const stopListening = async () => {
    recognitionRef.current?.stop();
    setListening(false);

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
    }

    audioContextRef.current?.close();
    audioContextRef.current = null;
    analyserRef.current = null;
    dataArrayRef.current = null;

    // 🔇 STOP mic stream
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }

    // auto submit from the ref
    if (transcriptRef.current.trim().length > 0) {
      if (params?.handleSubmit) {
        const response = await params.handleSubmit(transcriptRef.current);

        if (params.streamSpeech) {
          await params.streamSpeech({ text: response });
        }
      }
    }
  };

  return { listening, volumeRef, startListening, stopListening };
};
