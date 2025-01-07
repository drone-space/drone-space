import { Variant } from '@repo/enums';
import { showNotification } from '@/utilities/notifications';
import { email } from '@repo/utils/validators';
import { useForm } from '@mantine/form';
import { useNetwork } from '@mantine/hooks';
import { useState } from 'react';
import { addSubscriber } from '@/services/api/mailchimp';

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

        const response = await addSubscriber({
          email: form.values.email.trim().toLowerCase(),
        });

        if (!response) {
          throw new Error('No response from server');
        }

        const result = await response.json();

        form.reset();

        if (result.status == 200) {
          showNotification({
            variant: Variant.SUCCESS,
            title: result.title,
            desc: 'You are now a subscriber',
          });
          return;
        }

        if (result.title == 'Invalid Resource') {
          showNotification({
            variant: Variant.FAILED,
            title: result.title,
            desc: 'Please provide a real email address',
          });
          return;
        }

        if (result.title == 'Member Exists') {
          showNotification({
            variant: Variant.WARNING,
            title: result.title,
            desc: `The owner of that email is already a subscriber.`,
          });
          return;
        }

        if (result.title == 'Forgotten Email Not Subscribed') {
          showNotification({
            variant: Variant.WARNING,
            title: result.title,
            desc: `That email was unsubscribed. You will be redirected to the re-subscribe page`,
          });

          setTimeout(() => (window.location.href = result.url), 5000);
          return;
        }

        showNotification({ variant: Variant.FAILED }, response, result);
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
