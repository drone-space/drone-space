import anthropic from '@/libraries/anthropic';
import { getFileContent } from '@/utilities/helpers/file';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const messages = await req.json();

    const documentContent = await getFileContent({
      directory: 'public/documents',
      file: 'anthropic.txt',
      encoding: 'utf-8',
    });

    const stream = new ReadableStream({
      async start(controller) {
        try {
          const response = anthropic.messages.stream({
            model: process.env.NEXT_PUBLIC_CLAUDE_MODEL || '',
            max_tokens: 1024,
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
            messages: messages,
          });

          for await (const chunk of response) {
            console.log('Chunk received: ', chunk.text); // Add logging here
            controller.enqueue(new TextEncoder().encode(chunk.text));
          }

          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          controller.enqueue(
            new TextEncoder().encode('Error processing request.')
          );
          controller.close();
        }
      },
    });

    return NextResponse.json(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error) {
    console.error('---> route handler error (send prompt):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
