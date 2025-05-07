import anthropic from '@/libraries/anthropic';
import { NextRequest, NextResponse } from 'next/server';

const documentUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/documents/anthropic.txt`;

export async function POST(req: NextRequest) {
  try {
    const messages = await req.json();

    // Fetch document content from Supabase
    const documentResponse = await fetch(documentUrl);

    if (!documentResponse.ok) {
      throw new Error('Failed to fetch document content');
    }

    const documentContent = await documentResponse.text();

    const response = await anthropic.messages.create({
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
        {
          type: 'text',
          text: 'Be concise but retain some comprehensiveness.',
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: messages,
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('---> route handler error (send prompt):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
