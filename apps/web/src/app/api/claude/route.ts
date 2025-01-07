import anthropic from '@/libraries/anthropic';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // create message
    const message = await anthropic.beta.promptCaching.messages.create(data);

    // console.log('Usage for current prompt:', message.usage);
    return NextResponse.json(message, {
      status: 200,
      statusText: 'Prompt Sent',
    });
  } catch (error) {
    console.error('---> route handler error (send prompt):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
