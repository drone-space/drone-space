import { handleInquiry } from '@/handlers/requests/email/inquiry';
import { Variant } from '@/enums/notification';
import { showNotification } from '@/utilities/notifications';
import { capitalizeWords } from '@/utilities/formatters/string';
import { email } from '@/utilities/validators/email';
import { hasLength, useForm, UseFormReturnType } from '@mantine/form';
import { useNetwork } from '@mantine/hooks';
import { useState } from 'react';
import { downloadProfile } from '@/handlers/downloaders/profile';
import { downloadBrochure } from '@/handlers/downloaders/brochure';

export type FormInquiryValues = {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  company: string;
  kit: string;
  subject: string;
  message: string;
};

export type FormInquiry = UseFormReturnType<
  FormInquiryValues,
  (values: FormInquiryValues) => FormInquiryValues
>;

export const useFormInquiry = (params: {
  recipient: string;
  initialValues?: Partial<FormInquiryValues>;
  document?: 'profile' | 'brochure';
  close?: () => void;
  options?: {
    withKit?: boolean;
  };
}) => {
  const [submitted, setSubmitted] = useState(false);
  const networkStatus = useNetwork();

  const form = useForm({
    initialValues: {
      fname: params?.initialValues?.fname || '',
      lname: params?.initialValues?.lname || '',
      email: params?.initialValues?.email || '',
      phone: params?.initialValues?.phone || '',
      company: params?.initialValues?.company || '',
      kit: params?.initialValues?.kit || '',
      subject: params?.initialValues?.subject || '',
      message: params?.initialValues?.message || '',
    },

    validate: {
      fname: hasLength({ min: 2, max: 24 }, 'Between 2 and 24 characters'),
      lname: hasLength({ min: 2, max: 24 }, 'Between 2 and 24 characters'),
      email: (value) => email(value.trim()),
      phone: hasLength({ min: 7, max: 15 }, 'Between 7 and 15 characters'),
      company: hasLength({ min: 0, max: 24 }, 'Between 0 and 24 characters'),
      kit: hasLength(
        { min: params.options?.withKit ? 1 : 0, max: 24 },
        'Please select a drone kit'
      ),
      subject: params.document
        ? undefined
        : hasLength({ min: 2, max: 255 }, 'Between 2 and 255 characters'),
      message: params.document
        ? undefined
        : hasLength({ min: 3, max: 2048 }, 'Between 3 and 2048 characters'),
    },
  });

  const handleSubmit = async () => {
    if (form.isValid()) {
      try {
        if (!networkStatus.online) {
          showNotification({
            variant: Variant.WARNING,
            title: 'Network Error',
            desc: 'Please check your internet connection.',
          });
        } else {
          setSubmitted(true);

          // handle download
          if (params?.document) {
            // const response = await contactAdd(parseFormValues(form.values));

            // if (!response.ok) {
            //   throw new Error('Internal server error');
            // }

            form.reset();

            showNotification({
              variant: Variant.SUCCESS,
              desc: 'Your download will start shortly',
            });

            if (params.document === 'profile') {
              downloadProfile();
            }

            if (params.document === 'brochure') {
              downloadBrochure();
            }

            // close modal if exists
            if (params.close) params?.close();
            return;
          }

          const response = await handleInquiry(
            parseFormValues(form.values),
            params.recipient
          );

          if (!response.ok) {
            throw new Error('Internal server error');
          } else {
            form.reset();

            const result = await response.json();

            showNotification({ variant: Variant.SUCCESS }, response, result);

            // close modal if exists
            if (params.close) params?.close();
            return;
          }
        }
      } catch (error) {
        showNotification({
          variant: Variant.FAILED,
          desc: (error as Error).message,
        });
        return;
      } finally {
        setSubmitted(false);
      }
    }
  };

  return {
    form,
    submitted,
    handleSubmit,
  };
};

const parseFormValues = (formValues: FormInquiryValues): FormInquiryValues => {
  return {
    fname: capitalizeWords(formValues.fname.trim()),
    lname: capitalizeWords(formValues.lname.trim()),
    email: formValues.email.trim().toLowerCase(),
    phone: formValues.phone.trim(),
    company: formValues.company.trim(),
    kit: capitalizeWords(formValues.kit.trim()),
    subject: formValues.subject.trim(),
    message: formValues.message.trim(),
  };
};
