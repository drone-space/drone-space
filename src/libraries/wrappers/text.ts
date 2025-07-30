type SSEChunk = Record<string, any>; // You can narrow this based on your expected Claude chunk shape

export const parseSSEStream = async (
  response: Response,
  onMessage: (data: SSEChunk) => void,
  onDone?: () => void
) => {
  if (!response.body) throw new Error('No response body');

  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';

  const processBuffer = () => {
    const lines = buffer.split('\n\n');

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const json = line.slice(6).trim(); // Remove 'data: ' prefix
        if (json === '[DONE]') {
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

    // Keep any incomplete trailing chunk in buffer
    buffer = lines[lines.length - 1];
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

  onDone?.();
};
