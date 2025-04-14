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

export const useSTT = (params?: { form?: FormClaudeType }) => {
  const [listening, setListening] = useState(false);
  const volumeRef = useRef(0); // 👈 shared ref instead of setState
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const micStreamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Volume analyzer loop
  const updateVolume = () => {
    if (!analyserRef.current || !dataArrayRef.current) return;
    analyserRef.current.getByteFrequencyData(dataArrayRef.current);
    const avg =
      dataArrayRef.current.reduce((a, b) => a + b, 0) /
      dataArrayRef.current.length;
    volumeRef.current = avg / 255; // 👈 update ref, no re-render
    animationFrameRef.current = requestAnimationFrame(updateVolume);
  };

  const setupAudioAnalysis = async () => {
    micStreamRef.current = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    audioContextRef.current = new AudioContext();
    const source = audioContextRef.current.createMediaStreamSource(
      micStreamRef.current
    );
    analyserRef.current = audioContextRef.current.createAnalyser();
    analyserRef.current.fftSize = 32;

    const bufferLength = analyserRef.current.frequencyBinCount;
    dataArrayRef.current = new Uint8Array(bufferLength);

    source.connect(analyserRef.current);
    updateVolume(); // start loop
  };

  const cleanupAudioAnalysis = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    micStreamRef.current?.getTracks().forEach((track) => track.stop());
    audioContextRef.current?.close();
  };

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
      params?.form?.setFieldValue('content', text);
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = async () => {
    await setupAudioAnalysis();
    recognitionRef.current?.start();
    setListening(true);
  };

  const stopListening = () => {
    cleanupAudioAnalysis();
    recognitionRef.current?.stop();
    setListening(false);
    volumeRef.current = 0;
  };

  return { listening, volumeRef, startListening, stopListening };
};
