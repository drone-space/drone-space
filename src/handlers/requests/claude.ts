import { Turn } from '@/types/claude';
import { API_URL } from '@/data/constants';

export const sendPrompt = async (params: {
  content: string;
  conversation: Turn[];
}) => {
  try {
    const response = await fetch(`${API_URL}/claude`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([
        ...params.conversation,
        { role: 'user', content: params.content },
      ]),
    });

    if (!response.ok || !response.body) {
      throw new Error('Claude stream failed to start');
    }

    return response;
  } catch (error) {
    console.error('---> service error (send prompt):', error);
    throw error;
  }
};
