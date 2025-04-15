'use client';

export const playAudio = async (params: { streamResponse: Response }) => {
  if (typeof window === 'undefined') return;

  try {
    const blob = await params.streamResponse.blob();
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.play();
  } catch (error) {
    console.error('---> wrapper error (play audio):', error);
    throw error;
  }
};

export const playAudioStream = async (params: {
  streamResponse: Response;
  onVolume?: (volume: number) => void;
}) => {
  if (typeof window === 'undefined') return;

  try {
    const mediaSource = new MediaSource();
    const audio = new Audio();
    audio.src = URL.createObjectURL(mediaSource);

    // 🔊 Web Audio Setup
    const audioContext = new AudioContext();
    const source = audioContext.createMediaElementSource(audio);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    // Connect nodes
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    // 🔁 Volume detection loop
    const detectVolume = () => {
      analyser.getByteFrequencyData(dataArray);
      const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;

      const normalized = avg / 255;
      params.onVolume?.(normalized);

      requestAnimationFrame(detectVolume);
    };

    detectVolume();

    mediaSource.addEventListener('sourceopen', async () => {
      const sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg');

      if (!params.streamResponse.body)
        throw new Error('No body found in response');

      const reader = params.streamResponse.body.getReader();

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

    await audio.play();
  } catch (error) {
    console.error('---> wrapper error (play audio stream):', error);
    throw error;
  }
};
