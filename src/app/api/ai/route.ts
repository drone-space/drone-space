import openAiClient from '@/libraries/open-ai';
import { Turn } from '@/types/ai';
import { NextRequest, NextResponse } from 'next/server';

const documentUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/documents/anthropic.txt`;

export async function POST(req: NextRequest) {
  try {
    const messages: Turn[] = await req.json();

    const document = await fetch(documentUrl);

    if (!document.ok) throw new Error('Failed to fetch document');

    const content = await document.text();

    const stream = new ReadableStream({
      async start(controller) {
        const response = await openAiClient.chat.completions.create({
          model: process.env.NEXT_PUBLIC_AI_MODEL || '',
          stream: true,
          messages: [
            {
              role: 'system',
              content: `You're a consultant at the drone training and reselling company Drone Space. Please refer to the included information for context:\n\n${content}\n\nBe concise but retain some comprehensiveness.`,
            },
            ...messages,
          ],
        });

        console.log('response', response);

        try {
          for await (const chunk of response) {
            const delta = chunk.choices[0]?.delta?.content || '';
            if (delta) {
              controller.enqueue(
                new TextEncoder().encode(
                  `data: ${JSON.stringify({ content: delta })}\n\n`
                )
              );
            }
          }
        } catch (err) {
          console.error('Streaming error:', err);
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      status: 200,
      statusText: 'Text Chunks Retrieved',
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
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
