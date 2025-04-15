import { Variant } from '@/enums/notification';
import { playAudioStream } from '@/libraries/wrappers/tts';
import { showNotification } from '@/utilities/notifications';
import { useRef, useState } from 'react';

export const useTTS = () => {
  const [fetching, setFetching] = useState(false);
  const volumeRef = useRef(0);

  const handleFetch = async (params: { text: string }) => {
    try {
      setFetching(true);

      await playAudioStream({
        text: params.text,
        onVolume: (v) => {
          volumeRef.current = v;
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
