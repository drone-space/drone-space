import { createAnthropic } from '@ai-sdk/anthropic';

const anthropic = createAnthropic({
  apiKey: process.env.NEXT_ANTHROPIC_KEY,
});

export const ai = { anthropic };
