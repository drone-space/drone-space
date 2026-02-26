import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_HAIKU_HEKIMA_API_KEY,
});

export default anthropic
