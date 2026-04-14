import anthropic from '@repo/libraries/anthropic';
import { NextRequest, NextResponse } from 'next/server';
import { MessageParam } from '@anthropic-ai/sdk/resources';
import { unstable_cache } from 'next/cache';

const documentUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/documents/anthropic.txt`;

const getCachedDocument = unstable_cache(
  async () => {
    const response = await fetch(documentUrl);
    if (!response.ok) throw new Error('Failed fetch');
    return response.text();
  },
  ['drone-space-content'], // Cache key
  {
    revalidate: 3600, // Revalidate every hour (in seconds)
    tags: ['document-content'],
  }
);

export async function POST(req: NextRequest) {
  try {
    const messages: MessageParam[] = await req.json();
    const content = await getCachedDocument(); // Fast after first call

    const stream = await anthropic.messages.stream({
      model: process.env.NEXT_ANTHROPIC_MODEL_NAME!,
      max_tokens: 1024,
      temperature: 0.2,
      messages: [messages[messages.length - 1]],
      system: [
        {
          type: 'text',
          text: content,
          cache_control: { type: 'ephemeral' }, // This triggers the cache
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
