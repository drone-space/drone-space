import resend from '@/libraries/resend';
import { Inquiry as EmailInquiry } from '@repo/email';
import { isProduction } from '@repo/utils/helpers';
import { EmailInquiry as TypeEmailInquiry } from '@/types/email';
import { render } from '@react-email/render';

export const sendEmailMarketingInquiry = async (params: {
  from: TypeEmailInquiry['from'];
  to: TypeEmailInquiry['to'];
  phone: string;
  subject: TypeEmailInquiry['subject'];
  message: string;
  inquiry?: string;
}) => {
  const { data, error } = await resend.emails.send({
    from: `${params.from.name} <${
      isProduction()
        ? process.env.NEXT_PUBLIC_EMAIL_INFO || ''
        : process.env.NEXT_RESEND_EMAIL || ''
    }>`,
    to: [
      params.inquiry == 'technical'
        ? process.env.NEXT_PUBLIC_EMAIL_TECHNICAL || ''
        : process.env.NEXT_PUBLIC_EMAIL_INFO || '',
    ],
    subject: params.subject,
    html: await render(
      EmailInquiry({
        userName: params.from.name,
        userMessage: params.message,
        userPhone: params.phone,
      })
    ),
    replyTo: params.to,
  });

  if (!error) {
    return data;
  } else {
    console.error('---> wrapper error - (create (send) email inquiry):', error);
    throw error;
  }
};
