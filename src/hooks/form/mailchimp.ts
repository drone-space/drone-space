import { downloadBrochure } from '@/handlers/downloaders/brochure';
import { addSubscriber } from '@/services/api/mailchimp';
import { Subscribe } from '@/types/mailchimp';
import { showNotification } from '@/utilities/notifications';
import { hasLength, useForm } from '@mantine/form';
import { Variant } from '@/enums/notification';
import { capitalizeWord, capitalizeWords } from '@/utilities/formatters/string';
import { email } from '@/utilities/validators/email';
import { useState } from 'react';
import { downloadProfile } from '@/handlers/downloaders/profile';

export const useFormAddSubscriber = (params: {
  document: 'profile' | 'brochure';
}) => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      company: '',
    },

    validate: {
      fname: hasLength({ min: 2, max: 24 }, 'Between 2 and 24 characters'),
      lname: hasLength({ min: 2, max: 24 }, 'Between 2 and 24 characters'),
      email: (value) => email(value),
      phone: hasLength({ min: 7, max: 15 }, 'Between 7 and 15 characters'),
      company: hasLength({ min: 0, max: 24 }, 'Between 0 and 24 characters'),
    },
  });

  const parseValues = (): Subscribe => {
    return {
      fname: capitalizeWord(form.values.fname.trim()),
      lname: capitalizeWord(form.values.lname.trim()),
      email: form.values.email.trim().toLowerCase(),
      phone: form.values.phone?.trim()
        ? form.values.phone.trim().length > 0
          ? form.values.phone
          : undefined
        : undefined,
      company: capitalizeWords(form.values.company.trim()),
    };
  };

  const handleSubmit = async () => {
    if (form.isValid()) {
      try {
        setSubmitted(true);

        const response = await addSubscriber(parseValues());

        if (!response) {
          showNotification({
            variant: Variant.FAILED,
            title: 'Server Unavailable',
            desc: `There was no response from the server.`,
          });
        } else {
          showNotification({
            variant: Variant.SUCCESS,
            title: 'Submitted',
            desc: 'Your download will start momentarily',
          });

          // trigger download
          if (params.document === 'profile') {
            await downloadProfile();
          }

          if (params.document === 'brochure') {
            await downloadBrochure();
          }
        }
      } catch (error) {
        showNotification({
          variant: Variant.FAILED,
          title: 'Submisstion Failed',
          desc: (error as Error).message,
        });
      } finally {
        form.reset();
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
