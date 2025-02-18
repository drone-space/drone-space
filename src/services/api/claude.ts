import { Turn } from '@/types/claude';
import { API_URL } from '@/data/constants';

export const sendPrompt = async (params: {
  content: string;
  conversation: Turn[];
}) => {
  try {
    const response = await fetch(`${API_URL}/claude`, {
      method: 'POST',
      cache: 'no-store',
      body: JSON.stringify([
        ...params.conversation,
        { role: 'user', content: params.content },
      ]),
      headers: { 'Content-Type': 'application/json' },
    });

    const reader = response.body?.getReader();

    return reader;
  } catch (error) {
    console.error('---> service error (send prompt):', error);
    throw error;
  }
};
