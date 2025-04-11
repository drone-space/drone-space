'use client';

import { textToSpeech } from '@/handlers/requests/tts';

export const playAudio = async (params: { text: any }) => {
  if (typeof window === 'undefined') return;

  try {
    const textSpeech = await textToSpeech({ text: params.text });
    const blob = await textSpeech.blob();
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.play();
  } catch (error) {
    console.error('---> wrapper error (play audio):', error);
    throw error;
  }
};

export const playAudioStream = async (params: { text: any }) => {
  if (typeof window === 'undefined') return;

  try {
    const textSpeech = await textToSpeech({ text: params.text });

    const mediaSource = new MediaSource();
    const audio = new Audio();
    audio.src = URL.createObjectURL(mediaSource);

    mediaSource.addEventListener('sourceopen', async () => {
      const sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg');
      const reader = textSpeech.body!.getReader();

      const streamData = async () => {
        const { done, value } = await reader.read();
        if (done) {
          mediaSource.endOfStream();
          return;
        }

        if (value) {
          sourceBuffer.appendBuffer(value);
        }

        sourceBuffer.addEventListener('updateend', streamData, { once: true });
      };

      streamData();
    });

    audio.play();
  } catch (error) {
    console.error('---> wrapper error (play audio stream):', error);
    throw error;
  }
};
