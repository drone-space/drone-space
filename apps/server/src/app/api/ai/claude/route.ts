import anthropic from '@/libraries/anthropic';
import { NextRequest, NextResponse } from 'next/server';
import { MessageParam } from '@anthropic-ai/sdk/resources';

const documentUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/documents/anthropic.txt`;

export async function POST(req: NextRequest) {
  try {
    const messages: MessageParam[] = await req.json();

    const document = await fetch(documentUrl);

    if (!document.ok) throw new Error('Failed to Drone Space content');

    const content = await document.text();

    const stream = await anthropic.messages.stream({
      model: process.env.ANTHROPIC_MODEL_HAIKU!,
      max_tokens: 1024,
      messages,
      system: [
        {
          type: 'text',
          text: content,
        },
      ],
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          if (
            chunk.type === 'content_block_delta' &&
            chunk.delta.type === 'text_delta'
          ) {
            controller.enqueue(
              encoder.encode(
                `data: ${JSON.stringify({ content: chunk.delta.text })}\n\n`
              )
            );
          }
        }

        controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
        controller.close();
      },
    });

    return new Response(readable, {
      status: 200,
      statusText: 'Text Chunks Retrieved',
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
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
