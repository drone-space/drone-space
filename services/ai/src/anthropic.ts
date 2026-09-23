import Anthropic from '@anthropic-ai/sdk';

export const anthropic = new Anthropic({
  apiKey: process.env.NEXT_ANTHROPIC_API_KEY,
});
