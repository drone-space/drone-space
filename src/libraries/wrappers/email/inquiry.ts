import resend from '@/libraries/resend';
import EmailInquiry from '@/components/email/inquiry';
import { isProduction } from '@/utilities/helpers/environment';
import { render } from '@react-email/render';
import { FormInquiryValues } from '@/hooks/form/inquiry';

export const sendEmailMarketingInquiry = async (
  params: FormInquiryValues,
  recipient: string
) => {
  const devEmail = process.env.NEXT_PUBLIC_EMAIL_DEV || '';
  const deliveryEmail = process.env.NEXT_PUBLIC_EMAIL_DELIVERY || '';
  const tonyEmail = process.env.NEXT_PUBLIC_EMAIL_TONY || '';

  const { data, error } = await resend.emails.send({
    from: `${params.fname} ${params.lname} <${deliveryEmail}>`,
    to: [!isProduction() ? devEmail : recipient],
    cc: isWeekend() ? tonyEmail : undefined,
    subject: `${params.subject} (From ${params.fname} ${params.lname})`,
    replyTo: params.email,
    html: await render(
      EmailInquiry({
        userName: `${params.fname} ${params.lname}`,
        userMessage: params.message,
        userPhone: params.phone,
        kit: params.kit,
      })
    ),
  });

  if (!error) {
    return data;
  } else {
    console.error('---> wrapper error - (send inquiry email):', error);
    throw error;
  }
};

// helper to return true if not a weekday (ie. sat and sun)
const isWeekend = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
};
