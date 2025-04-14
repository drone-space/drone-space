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
  const recognitionRef = useRef<SpeechRecognition | null>(null);

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

  const startListening = () => {
    recognitionRef.current?.start();
    setListening(true);
  };
  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  return { listening, startListening, stopListening };
};
