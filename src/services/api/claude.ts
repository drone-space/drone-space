'use server';

import { Turn } from '@/types/claude';
import { API_URL } from '@/data/constants';

import fs from 'fs/promises'; // Node.js file system module
import path from 'path';

export const sendPrompt = async (params: {
  content: string;
  conversation: Turn[];
}) => {
  try {
    // Construct the path to the file in the public folder
    const filePath = path.join(
      process.cwd(),
      'public/documents',
      'anthropic.txt'
    );
    const documentContent = await fs.readFile(filePath, 'utf-8');

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
            text: "You're a consultant at the drone training and reselling company Drone Space.",
            cache_control: { type: 'ephemeral' },
          },
          {
            type: 'text',
            text: 'Please refer to the included information for context.',
            cache_control: { type: 'ephemeral' },
          },
          {
            type: 'text',
            text: documentContent,
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
