import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.NEXT_ANTHROPIC_KEY,
});

export default anthropic;
