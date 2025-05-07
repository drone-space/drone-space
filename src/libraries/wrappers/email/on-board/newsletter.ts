import appData from '@/data/app';
import resend from '@/libraries/resend';
import EmailOnboardNewsletter from '@/components/email/onboard/newsletter';
import { isProduction } from '@/utilities/helpers/environment';
import { render } from '@react-email/render';

export const emailSendOnboardNewsletter = async (params: { to: string }) => {
  const devEmail = process.env.NEXT_PUBLIC_EMAIL_DEV || '';
  const noReplyEmail = process.env.NEXT_PUBLIC_EMAIL_NOREPLY || '';

  const { data, error } = await resend.emails.send({
    from: `${appData.name.app} <${noReplyEmail}>`,
    to: [isProduction() ? params.to : devEmail],
    subject: `Welcome To ${appData.name.app} Newsletter`,
    replyTo: noReplyEmail,
    html: await render(EmailOnboardNewsletter()),
  });
  if (!error) {
    return data;
  } else {
    console.error(
      '---> wrapper error - (send newsletter onboard email):',
      error
    );
    throw error;
  }
};
