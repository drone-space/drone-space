'use server';

import { Turn } from '@/types/claude';
import { API_URL } from '@/data/constants';

export const sendPrompt = async (params: {
  content: string;
  conversation: Turn[];
}) => {
  try {
    const response = await fetch(`${API_URL}/claude`, {
      method: 'POST',
      body: JSON.stringify([
        ...params.conversation,
        { role: 'user', content: params.content },
      ]),
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> service error (send prompt):', error);
    throw error;
  }
};
