'use client';

/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { validators } from '@repo/utilities/validation';
import { signIn } from '@repo/handlers/requests/auth';
import { AuthAction } from '@repo/types/enums';
import { useFormBase } from '../form';
import { useState } from 'react';

type FormValuesAuth = {
  email: string;
  srpl?: string;
  remember: boolean;
  otp?: string;
};

export const useFormAuth = (params: {
  action: AuthAction;
  baseUrl: string;
}) => {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [resent, setResent] = useState(false);

  const { form, submitted, handleSubmit } = useFormBase<FormValuesAuth>(
    { email: '', srpl: '', otp: '', remember: false },
    {
      email: (value) => validators.email(value.trim()),
      srpl: (value) => !((value || '').trim().length > 0),
    },
    {
      resetOnSuccess: false,
      hideSuccessNotification: true,

      onSubmit: async (rawValues, options) => {
        const email = rawValues.email.trim().toLowerCase();
        const srpl = rawValues.srpl?.trim();
        const otp = rawValues.otp?.trim();

        if (!otp || options?.resent) {
          setError(undefined);

          const response = await signIn({
            formData: { email, srpl },
            options: { action: params.action },
            apiUrl: `${params.baseUrl}/api`,
          });
          const result = await response.json();
          if (result.data.error) {
            setError(result.data.error);
          } else {
            setMessage(result.data.message);
          }
          if (options?.resent) setResent(false);
        }
      },
    }
  );

  return {
    form,
    submitted,
    handleSubmit,
    message,
    setMessage,
    error,
    setError,
    resent,
    setResent,
  };
};
