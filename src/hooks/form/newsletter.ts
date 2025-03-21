import { Variant } from '@/enums/notification';
import { showNotification } from '@/utilities/notifications';
import { email } from '@/utilities/validators/email';
import { useForm } from '@mantine/form';
import { useNetwork } from '@mantine/hooks';
import { useState } from 'react';
import { contactAdd } from '@/handlers/requests/contact';

export const useFormNewsletter = () => {
  const [submitted, setSubmitted] = useState(false);
  const networkStatus = useNetwork();

  const form = useForm({
    initialValues: { email: '' },
    validate: { email: (value) => email(value.trim()) },
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
          return;
        }

        setSubmitted(true);

        const response = await contactAdd({
          email: form.values.email.trim().toLowerCase(),
        });

        if (response.status >= 400) {
          showNotification({
            variant: Variant.FAILED,
            title: response.statusText,
          });
          return;
        }

        form.reset();

        if (response.status == 201) {
          showNotification({
            variant: Variant.SUCCESS,
            title: response.statusText,
            desc: 'You are now a subscriber',
          });
          return;
        }

        if (response.status == 200) {
          showNotification({
            variant: Variant.SUCCESS,
            title: response.statusText,
            desc: 'You are already a subscriber',
          });
          return;
        }

        showNotification({ variant: Variant.FAILED }, response);
        return;
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
