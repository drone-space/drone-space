// import { contactCreate } from '@/libraries/wrappers/email/contact';
import { NextRequest, NextResponse } from 'next/server';
import { EmailContactCreate } from '@/types/email';
import { addSubscriber } from '@/services/api/mailchimp';

export async function POST(request: NextRequest) {
  try {
    const contactOptions: EmailContactCreate = await request.json();

    // const createContact = await contactCreate(contactOptions);

    const response = await addSubscriber({
      email: contactOptions.params.email,
      company: contactOptions.params.company,
    });

    if (response) {
      const result = await response.json();

      if (result.status >= 400) {
        console.error(
          '---> route handler error (add subscriber):',
          result.title
        );
        return NextResponse.json(
          { error: 'Internal server error' },
          { status: 500 }
        );
      }
    }

    // if (createContact.exists) {
    //   return NextResponse.json(
    //     { error: "You're already a subscriber", exists: true },
    //     { status: 409, statusText: 'Already Subscribed' }
    //   );
    // }

    return NextResponse.json(
      {
        // contact: createContact,
        message: 'You have subscribed to the mailing list',
      },
      { status: 200, statusText: 'Subscribed' }
    );
  } catch (error) {
    console.error('---> route handler error (create contact):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
