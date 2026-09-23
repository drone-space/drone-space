import { NextRequest, NextResponse } from 'next/server';
import { emailContactAdd } from '@repo/email';
import { FormValuesInquiry } from '@repo/types';

export async function POST(request: NextRequest) {
  try {
    const formValues: Partial<FormValuesInquiry> = await request.json();

    const result = await emailContactAdd(formValues, true);

    return new NextResponse(JSON.stringify({ ...result }), {
      status: 200,
      statusText: 'Subscriber Added',
    });
  } catch (error) {
    console.error('---> route handler error (add email contact):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
