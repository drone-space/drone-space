import { NextRequest, NextResponse } from 'next/server';
import { EmailContactCreate } from '@/types/email';
import { addSubscriber } from '@/services/api/mail-handler';

export async function POST(request: NextRequest) {
  try {
    const contactOptions: EmailContactCreate = await request.json();

    const response = await addSubscriber({
      email: contactOptions.params.email,
      company: contactOptions.params.company,
    });

    if (response) {
      if (response.status >= 400) {
        return NextResponse.json(
          { error: 'Internal server error' },
          { status: 500 }
        );
      }

      if (response.status == 200) {
        return NextResponse.json(
          { message: 'You are already a subscriber' },
          { status: 200, statusText: 'Subscribed' }
        );
      }
    }

    return NextResponse.json(
      { message: 'You have subscribed to the mailing list' },
      { status: response.status, statusText: 'Subscribed' }
    );
  } catch (error) {
    console.error('---> route handler error (create contact):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
