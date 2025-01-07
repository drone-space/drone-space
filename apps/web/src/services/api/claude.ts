'use server';

import { Turn } from '@/types/claude';
import ai from '@/data/ai';
import { API_URL } from '@/data/constants';

export const sendPrompt = async (params: {
  content: string;
  conversation: Turn[];
}) => {
  try {
    const response = await fetch(`${API_URL}/claude`, {
      method: 'POST',
      body: JSON.stringify({
        model: process.env.NEXT_PUBLIC_CLAUDE_MODEL,
        max_tokens: 1024,
        messages: [
          ...params.conversation,
          { role: 'user', content: params.content },
        ],
        system: [
          {
            type: 'text',
            text: ai,
            cache_control: { type: 'ephemeral' },
          },
        ],
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> service error (send prompt):', error);
    // throw error;
  }
};
