import { API_URL } from '@/data/constants';

export const textToSpeech = async (params: { text: string }) => {
  try {
    const response = await fetch(`${API_URL}/tts`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        // Accept: 'audio/mpeg',
      },
      credentials: 'include', // Add this if you need to send cookies
    });

    if (!response.ok || !response.body) {
      throw new Error('TTS stream failed');
    }

    return response;
  } catch (error) {
    console.error('---> handler error (get text speech):', error);
    throw error;
  }
};
