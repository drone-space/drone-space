import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
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
  voiceMode?: boolean;
  streamSpeech?: (input: {
    text: string;
    onPlaybackEnd?: () => void;
  }) => Promise<void>;
  listening: boolean;
  setListening: Dispatch<SetStateAction<boolean>>;
}) => {
  // const [listening, setListening] = useState(false);
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
      let liveText = transcriptRef.current;

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const result = event.results[i];
        const transcript = result[0].transcript;

        if (result.isFinal) {
          // Persist final text to reference
          transcriptRef.current += transcript + ' ';
          // Update liveText with confirmed transcript
          liveText = transcriptRef.current;
        } else {
          // Show interim combined with confirmed transcript
          liveText = transcriptRef.current + transcript;
        }
      }

      // Show live combined text in the form field
      params?.form?.setFieldValue('content', liveText.trim());
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

    const threshold = silenceThresholdRef.current;
    const hasTranscript = transcriptRef.current.trim().length > 0;

    if (normalizedVolume > threshold) {
      // Reset silence timer — we’re still talking
      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = null;
      }
    } else {
      // 🧠 Only stop if we've captured *some* speech
      if (
        hasTranscript &&
        !silenceTimerRef.current &&
        params?.voiceMode // 👈 only auto-stop if in voice mode
      ) {
        silenceTimerRef.current = setTimeout(() => {
          stopListening({ submit: true });
          params?.onAutoStop?.();
        }, 1000); // short silence period is fine now
      }
    }

    animationFrameRef.current = requestAnimationFrame(updateVolume);
  };

  const startListening = async () => {
    params?.setListening(true);
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

    // capture in voice mode only
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
    dataArrayRef.current = null;

    // 🔇 STOP mic stream
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }

    // Store transcript locally before resetting
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
    // 🔁 Reset transcript so next round starts fresh
    transcriptRef.current = '';
    // Optional: clear UI too
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
