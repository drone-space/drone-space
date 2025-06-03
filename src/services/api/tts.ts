const ttsUrlStream = `https://api.elevenlabs.io/v1/text-to-speech/${process.env.NEXT_TTS_VOICE_ID}/stream`;

export const textToSpeech = async (params: {
  text: string;
  options?: { stream?: boolean };
}) => {
  try {
    const response = await fetch(ttsUrlStream, {
      method: 'POST',
      headers: {
        'xi-api-key': process.env.NEXT_TTS_API_KEY as string,
        'Content-Type': 'application/json',
        Accept: 'audio/mpeg',
      },
      body: JSON.stringify({
        text: params.text,
        model_id: process.env.NEXT_TTS_MODEL_ID,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      }),
    });

    return response;
  } catch (error) {
    console.error('---> service error (convert text to speech):', error);
    throw error;
  }
};
