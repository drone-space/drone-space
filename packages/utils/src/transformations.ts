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
  onStreamEnd?: () => void; // 🔁 Called when stream is fully read
  onPlaybackEnd?: () => void; // 🔊 Called when audio finishes playing
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

    // 📢 Playback complete
    audio.addEventListener('ended', () => {
      params.onPlaybackEnd?.();
    });

    mediaSource.addEventListener('sourceopen', async () => {
      const sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg');

      if (!params.streamResponse.body) throw new Error('No body found in response');

      const reader = params.streamResponse.body.getReader();

      const streamData = async () => {
        const { done, value } = await reader.read();

        if (done) {
          mediaSource.endOfStream();
          params.onStreamEnd?.(); // 👈 Trigger when streaming ends
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

type SSEChunk = Record<string, any>;

export const parseSSEStream = async (
  response: Response,
  onMessage: (data: SSEChunk) => void,
  onDone?: () => void,
) => {
  if (!response.body) throw new Error('No response body');

  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';

  let finished = false;

  const processBuffer = () => {
    const lines = buffer.split('\n\n');

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const json = line.slice(6).trim();

        if (json === '[DONE]') {
          finished = true;
          onDone?.();
          return;
        }

        try {
          const parsed = JSON.parse(json);
          onMessage(parsed);
        } catch (err) {
          console.warn('Failed to parse SSE JSON chunk:', err, json);
        }
      }
    }

    buffer = lines[lines.length - 1] ?? '';
  };

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    processBuffer();
  }

  // In case there’s something left in buffer after the stream ends
  if (buffer.length > 0) {
    processBuffer();
  }

  if (!finished) onDone?.();
};
