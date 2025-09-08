import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { FormAIType } from './form/ai';

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
  form?: FormAIType;
  handleSubmit?: (suVa?: any, noVa?: boolean) => Promise<any>;
  onAutoStop?: () => void;
  voiceMode?: boolean;
  streamSpeech?: (input: {
    text: string;
    onPlaybackEnd?: () => void;
  }) => Promise<void>;
  listening: boolean;
  setListening: Dispatch<SetStateAction<boolean>>;
}) => {
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const transcriptRef = useRef('');
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  // ✅ Always a Uint8Array<ArrayBuffer> (empty until startListening)
  const dataArrayRef = useRef<Uint8Array<ArrayBuffer>>(
    new Uint8Array(new ArrayBuffer(0))
  );

  const volumeRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const silenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const silenceThresholdRef = useRef(0.1);

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
      let liveText = transcriptRef.current;

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const result = event.results[i];
        const transcript = result[0].transcript;

        if (result.isFinal) {
          transcriptRef.current += transcript + ' ';
          liveText = transcriptRef.current;
        } else {
          liveText = transcriptRef.current + transcript;
        }
      }

      params?.form?.setFieldValue('content', liveText.trim());
    };

    recognitionRef.current = recognition;
  }, []);

  const updateVolume = () => {
    if (!analyserRef.current) return;

    analyserRef.current.getByteFrequencyData(dataArrayRef.current);
    const avg =
      dataArrayRef.current.reduce((a, b) => a + b, 0) /
      dataArrayRef.current.length;
    const normalizedVolume = avg / 255;
    volumeRef.current = normalizedVolume;

    const threshold = silenceThresholdRef.current;
    const hasTranscript = transcriptRef.current.trim().length > 0;

    if (normalizedVolume > threshold) {
      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = null;
      }
    } else {
      if (hasTranscript && !silenceTimerRef.current && params?.voiceMode) {
        silenceTimerRef.current = setTimeout(() => {
          stopListening({ submit: true });
          params?.onAutoStop?.();
        }, 1000);
      }
    }

    animationFrameRef.current = requestAnimationFrame(updateVolume);
  };

  const startListening = async () => {
    params?.setListening(true);

    const currentFormContent = params?.form?.values?.content?.trim() || '';
    if (params?.voiceMode) {
      transcriptRef.current = '';
    } else {
      if (!currentFormContent && transcriptRef.current) {
        params?.form?.setFieldValue('content', transcriptRef.current);
      } else {
        transcriptRef.current = currentFormContent;
      }
    }

    recognitionRef.current?.start();

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaStreamRef.current = stream;

    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 64;

    const bufferLength = analyser.frequencyBinCount;
    // ✅ Always plain ArrayBuffer
    const dataArray = new Uint8Array(new ArrayBuffer(bufferLength));

    source.connect(analyser);

    audioContextRef.current = audioContext;
    analyserRef.current = analyser;
    dataArrayRef.current = dataArray;

    const samples: number[] = [];
    const captureBaseline = () => {
      analyser.getByteFrequencyData(dataArray);
      const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
      samples.push(avg / 255);

      if (samples.length < 20) {
        requestAnimationFrame(captureBaseline);
      } else {
        const baseline = samples.reduce((a, b) => a + b, 0) / samples.length;
        silenceThresholdRef.current = baseline + 0.05;
        updateVolume();
      }
    };

    if (params?.voiceMode) {
      captureBaseline();
    }
  };

  const stopListening = async (stopParams?: { submit?: boolean }) => {
    recognitionRef.current?.stop();
    params?.setListening(false);

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }

    audioContextRef.current?.close();
    audioContextRef.current = null;
    analyserRef.current = null;

    // ✅ Keep dataArrayRef as empty array instead of null
    dataArrayRef.current = new Uint8Array(new ArrayBuffer(0));

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }

    const spokenText = transcriptRef.current.trim();
    if (stopParams?.submit && spokenText.length > 0) {
      const response = await params?.handleSubmit?.(spokenText);
      if (params?.streamSpeech && params?.voiceMode) {
        await params?.streamSpeech({
          text: response,
          onPlaybackEnd: async () => await startListening(),
        });
      }
    }

    if (params?.voiceMode) resetTranscript();
  };

  const resetTranscript = () => {
    transcriptRef.current = '';
    params?.form?.setValues({ content: '' });
  };

  return {
    volumeRef,
    startListening,
    stopListening,
    resetTranscript,
    transcript: transcriptRef.current,
  };
};
