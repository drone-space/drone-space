/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { Variant } from '@repo/types/enums';
import { validators } from '@repo/utilities/validation';
import { contactAdd } from '@repo/handlers/requests/contact';
import { useFormBase } from '../form';
import { useNotification } from '@repo/hooks/notification';
import { hasLength } from '@mantine/form';
import { alumniChallengeSubmit } from '@repo/handlers/requests/alumni';
import { AlumniChallengerGet } from '@repo/types/models/alumni-challenger';
import { generateUUID } from '@repo/utilities/generators';
import { Status, SyncStatus } from '@repo/types/models/enums';
import { useRouter } from 'next/navigation';

export type FormValues = {
  srpl: '';
  fname: '';
  lname: '';
  email: '';
  phone: '';
};

export const useFormAlumni = (params: {
  answerOption: string;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { showNotification } = useNotification();

  const router = useRouter();

  const { form, submitted, handleSubmit } = useFormBase<
    Partial<AlumniChallengerGet>
  >(
    { srpl: '', fname: '', lname: '', email: '', phone: '' },
    {
      srpl: hasLength({ min: 2, max: 48 }, true),
      fname: hasLength({ min: 2, max: 48 }, true),
      lname: hasLength({ min: 2, max: 48 }, true),
      email: (value) => validators.email((value || '').trim()),
      phone: (value) => validators.phone((value || '').trim()),
    },
    {
      resetOnSuccess: false,
      hideSuccessNotification: true,
      onSubmit: async (rawValues) => {
        const now = new Date();

        const cleanValues: AlumniChallengerGet = {
          id: generateUUID(),
          srpl: (rawValues.srpl || '').trim().toLowerCase(),
          fname: (rawValues.fname || '').trim().toLowerCase(),
          lname: (rawValues.lname || '').trim().toLowerCase(),
          email: (rawValues.email || '').trim().toLowerCase(),
          phone: (rawValues.phone || '').trim().toLowerCase(),
          created_at: new Date(rawValues.created_at || now),
          updated_at: new Date(rawValues.updated_at || now),
          answer_option: params.answerOption,

          status: Status.ACTIVE,
          sync_status: SyncStatus.SYNCED,
        };

        const response = await alumniChallengeSubmit(cleanValues);

        if (!response) throw new Error('No response from server');

        const result = await response.json();

        params.setSubmitted(true);
        router.push('#challenge');

        if (!response.ok) {
          showNotification({
            variant: Variant.FAILED,
            title: 'Submission Failed',
            desc: 'An unexpected error occured',
          });
        } else {
          if (result.exists) {
            showNotification({
              variant: Variant.WARNING,
              title: 'Alredy Submitted',
              desc: 'Someone with the provided SRPL already sent a submission.',
            });
          }
        }

        return { response, result };
      },
      onError: (error) => {
        console.error('Submission error:', error);
      },
    }
  );

  return { form, submitted, handleSubmit };
};
