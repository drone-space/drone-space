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
