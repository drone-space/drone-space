import { NextRequest, NextResponse } from 'next/server';
import { sendEmailMarketingInquiry } from '@/libraries/wrappers/email/marketing/inquiry';
import { EmailInquiry } from '@/types/email';

export async function POST(request: NextRequest) {
  try {
    const email: EmailInquiry & {
      message: string;
      phone: string;
      inquiry?: string;
    } = await request.json();

    return NextResponse.json(
      {
        email: await sendEmailMarketingInquiry({
          from: email.from,
          to: email.to,
          subject: email.subject,
          message: email.message,
          phone: email.phone,
          inquiry: email.inquiry,
        }),
        message: 'Email sent successfully',
      },
      { status: 200, statusText: 'Email Sent' }
    );
  } catch (error) {
    console.error('---> route handler error (send email):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
