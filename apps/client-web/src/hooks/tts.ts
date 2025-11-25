import { Variant } from '@repo/types/enums';
import { textToSpeech } from '@/handlers/requests/tts';
import { useRef, useState } from 'react';
import { useNotification } from '@repo/hooks/notification';
import { playAudioStream } from '@/libraries/wrappers/tts';

export const useTTS = () => {
  const [fetching, setFetching] = useState(false);
  const volumeRef = useRef(0);
  const { showNotification } = useNotification();

  const handleFetch = async (params: {
    text: string;
    onPlaybackEnd?: () => void;
  }) => {
    try {
      setFetching(true);

      const speechStream = await textToSpeech({ text: params.text });

      await playAudioStream({
        streamResponse: speechStream,
        onVolume: (v) => {
          volumeRef.current = v;
        },
        onPlaybackEnd: () => {
          if (params.onPlaybackEnd) params?.onPlaybackEnd();
        },
      });
    } catch (error) {
      showNotification({
        variant: Variant.FAILED,
        title: 'Speech Engine Failed',
        desc: 'Could not generate text speech.',
      });
      console.error('---> handler error (get text speech):', error);
      throw error;
    } finally {
      setFetching(false);
    }
  };

  return {
    fetching,
    streamSpeech: handleFetch,
    volumeRef,
  };
};
