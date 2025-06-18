import { textToSpeech } from '@/services/api/tts';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    const textSpeech = await textToSpeech({ text });

    if (!textSpeech.ok || !textSpeech.body) {
      return new Response('Failed to fetch stream', { status: 500 });
    }

    return new NextResponse(textSpeech.body, {
      status: 200,
      statusText: 'Text Speech Retrieved',
      headers: {
        'Content-Type': 'audio/mpeg',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error) {
    console.error('---> route handler error (get text speech):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
