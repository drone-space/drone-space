import OpenAI from 'openai';

const openAiClient = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_API_KEY,
});

export default openAiClient;
