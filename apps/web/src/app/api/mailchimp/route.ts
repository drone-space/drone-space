import addSubscriber from '@/handlers/mailchimp';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Add CORS headers

    // const origin = request.headers.get('origin') || '*';

    const headers = {
      // 'Access-Control-Allow-Origin': origin, // Allow requests from any origin
      'Access-Control-Allow-Methods': 'POST', // Specify allowed methods
      'Access-Control-Allow-Headers': 'Content-Type', // Specify allowed headers
    };

    const formValues = await request.json();

    const result = await addSubscriber(formValues);

    // Return the response with CORS headers
    return new NextResponse(JSON.stringify({ ...result }), {
      headers,
      status: 200,
      statusText: 'Subscriber Added',
    });
  } catch (error) {
    console.error('---> route handler error (add subscriber):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
