import OpenAI from 'openai';

const openAiClient = new OpenAI({
  apiKey: process.env.NEXT_AI_KEY,
});

export default openAiClient;
