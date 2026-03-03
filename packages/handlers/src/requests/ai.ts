import { API_URL } from '@repo/constants/paths';
import {Turn} from '@repo/types/ai'

export const getClaudeResponse = async (params: {
  content: string;
  conversation: Turn[];
}): Promise<Response> => {
  const response = await fetch(`${API_URL}/ai/claude`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([
        ...params.conversation,
        { role: 'user', content: params.content },
      ]),
  });

  if (!response.ok) throw new Error('Claude API error');

  if (!response.body) {
      throw new Error('Stream failed to start');
    }

  return response;
}
