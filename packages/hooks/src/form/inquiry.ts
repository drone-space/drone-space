/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { capitalizeWords } from '@repo/utilities/string';
import { validators } from '@repo/utilities/validation';
import { hasLength, UseFormReturnType } from '@mantine/form';
import { handleInquiry } from '@repo/handlers/requests/email/inquiry';
import { contactAdd } from '@repo/handlers/requests/contact';
import {
  formValuesInitialInquiry,
  FormValuesInquiry,
  InquiryType,
} from '@repo/types/form';
import { useFormBase } from '../form';
import { COMPANY_NAME } from '@repo/constants/app';
import { useNotification } from '@repo/hooks/notification';
import { downloadBrochure } from '@repo/handlers/downloaders/brochure';
import { downloadProfile } from '@repo/handlers/downloaders/profile';
import { Variant } from '@repo/types/enums';

type UseFormEmailInquiryOptions = {
  saveEmailContact?: boolean;
  close?: () => void;
  withKit?: boolean;
  noMessage?: boolean;
  document?: 'profile' | 'brochure';
  type?: InquiryType;
};

export type FormEmailInquiry = UseFormReturnType<
  FormValuesInquiry,
  (values: FormValuesInquiry) => FormValuesInquiry
>;

export const useFormEmailInquiry = (
  initialValues?: Partial<FormValuesInquiry>,
  options?: UseFormEmailInquiryOptions
) => {
  const { showNotification } = useNotification();

  const { form, submitted, handleSubmit, reset, validate } =
    useFormBase<FormValuesInquiry>(
      {
        ...formValuesInitialInquiry,
        // APP_NAME: COMPANY_NAME,
        ...initialValues,
      },
      {
        fname: hasLength({ min: 2, max: 24 }, 'Between 2 and 24 characters'),
        lname: hasLength({ min: 2, max: 24 }, 'Between 2 and 24 characters'),
        email: (value) => validators.email(value.trim()),
        subject: options?.document
          ? undefined
          : hasLength({ min: 2, max: 255 }, 'Between 2 and 255 characters'),
        phone: hasLength({ min: 7, max: 15 }, 'Between 7 and 15 characters'),
        company: hasLength({ min: 2, max: 48 }, 'Between 2 and 48 characters'),
        message: options?.document
          ? undefined
          : hasLength({ min: 3, max: 2048 }, 'Between 3 and 2048 characters'),
      },
      {
        close: options?.close,
        resetOnSuccess: true,
        hideSuccessNotification: true,

        onSubmit: async (rawValues) => {
          // handle download
          if (options?.document) {
            setTimeout(() => {
              if (options?.document === 'profile') {
                downloadProfile();
              }

              if (options?.document === 'brochure') {
                downloadBrochure();
              }
            }, 2000);

            showNotification({
              variant: Variant.SUCCESS,
              title: `Done`,
              desc: `The ${options?.document === 'brochure' ? 'brochure' : 'company profile'} will load shortly`,
            });

            form.reset();

            // close modal if exists
            if (options.close) options.close();
            return;
          }

          const values = normalizeFormValues(rawValues);

          // --- send the inquiry ---
          const response = await handleInquiry(values);

          if (!response) throw new Error('No response from server');

          if (!response.ok) {
            const result = await response.json().catch(() => null);
            throw new Error(result?.message || 'Failed to send inquiry');
          }

          const result = await response.json();

          // Optionally save contact
          if (options?.saveEmailContact) {
            const addContact = await contactAdd(values);
            if (!addContact.ok) console.error('Failed to add email contact');
          }

          setTimeout(() => {
            showNotification({
              variant: Variant.SUCCESS,
              title: `Inquiry Sent`,
              desc: `You'll hear from us within 24 hours`,
            });
          }, 500);

          return { response, result };
        },

        onError: (error) => {
          // Optional: handle unexpected errors (caught by base hook)
          console.error('Form submission error:', error);
        },
      }
    );

  return {
    form,
    submitted,
    handleSubmit,
    reset,
    validate,
  };
};

const normalizeFormValues = (v: FormValuesInquiry): FormValuesInquiry => ({
  ...v,
  fname: capitalizeWords(v.fname.trim()),
  lname: capitalizeWords(v.lname.trim()),
  email: v.email.trim().toLowerCase(),
  subject: v.subject.trim(),
  phone: v.phone.trim(),
  message: v.message.trim(),
});
