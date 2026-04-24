/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import resend from '../resend';
import { isProduction } from '@repo/utilities/misc';
import { FormValuesInquiry } from '@repo/types/form';
import { COMPANY_NAME, EMAILS } from '@repo/constants/app';

type SendEmailOptions = {
  to: string;
  cc?: string;
  subject?: string;
  replyTo?: string;
  fromName?: string;
  fromType?: 'delivery' | 'noreply';
  template: { id: string; variables?: any };
  APP_NAME?: string;
};

const emailSendBase = async (options: SendEmailOptions) => {
  if (!EMAILS.DEV) throw new Error('Missing dev email');
  if (!EMAILS.DELIVERY) throw new Error('Missing delivery email');
  if (!EMAILS.NO_REPLY) throw new Error('Missing no-reply email');
  if (!EMAILS.TONY) throw new Error('Missing tony email');

  const fromEmail =
    options.fromType === 'delivery' ? EMAILS.DELIVERY : EMAILS.NO_REPLY;

  const { data, error } = await resend.emails.send({
    from: `${options.fromName ?? options.APP_NAME ?? COMPANY_NAME} <${fromEmail}>`,
    to: [isProduction() ? options.to : EMAILS.DEV],
    cc: isProduction() ? (options.cc ? [options.cc] : undefined) : undefined,
    subject: options.subject,
    replyTo: options.replyTo ?? EMAILS.NO_REPLY,
    template: {
      ...options.template,
      variables: {
        ...options.template.variables,
        NEWSLETTER_EMAIL: EMAILS.NEWSLETTER || undefined,
        CONTACT_EMAIL: EMAILS.INFO || undefined,
        COMPANY_NAME: COMPANY_NAME,
        YEAR: new Date().getFullYear().toString(),
      },
    },
  });

  if (error) {
    console.error('---> wrapper error - (send email):', error);
    throw error;
  }

  return data;
};

export const emailSendInquiry = async (params: FormValuesInquiry) => {
  if (!EMAILS.INFO) throw new Error('Missing INFO email');
  if (!EMAILS.TRAINING) throw new Error('Missing TRAINING email');

  const fullName = `${params.fname || ''} ${params.lname || ''}`.trim();

  let toEmail = '';

  switch (params.type) {
    case 'training':
      toEmail = EMAILS.TRAINING;
      break;

    default:
      toEmail = EMAILS.INFO;
      break;
  }

  emailSendBase({
    fromName: 'Drone Space Inquiries',
    to: toEmail,
    cc: isWeekend(new Date()) ? EMAILS.TONY : undefined, // CC Tony on weekends
    replyTo: params.email,
    fromType: 'delivery',
    template: {
      id: 'inquiry',
      variables: {
        MESSAGE_PREVIEW: params.message,
        SUBJECT: `${params.subject} (From ${fullName})`,
        MESSAGE: params.message,
        NAME: fullName,
        PHONE: params.phone,
        KIT: params.kit,
        SOURCE_SITE: params.APP_NAME,
      },
    },
  });
};

export const emailSendOnboardNewsletter = async (params: {
  to: string;
  APP_NAME: string;
}) => emailSendBase({ to: params.to, template: { id: 'onboard-newsletter' } });

export const emailSendOnboarding = async (params: {
  to: string;
  userName: string;
  APP_NAME: string;
}) =>
  emailSendBase({
    to: params.to,
    template: { id: 'onboarding', variables: { NAME: params.userName } },
  });

// helper to return true if it is a weekend
export const isWeekend = (date: Date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};
