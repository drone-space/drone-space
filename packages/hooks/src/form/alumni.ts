import { Variant } from '@repo/types';
import { validators } from '@repo/utils';
import { contactAdd } from '@repo/handlers';
import { useFormBase } from '../form';
import { useNotification } from '@repo/hooks';
import { hasLength } from '@mantine/form';
import { alumniChallengeSubmit } from '@repo/handlers';
import { AlumniChallengerGet } from '@repo/types';
import { generateUUID } from '@repo/utils';
import { Status, SyncStatus } from '@repo/types';
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

  const { form, submitted, handleSubmit } = useFormBase<Partial<AlumniChallengerGet>>(
    { srpl: '', fname: '', lname: '', email: '', phone: '' },
    {
      srpl: (value) =>
        /^YK-RPL-\d{5}$/.test(value || '')
          ? null
          : 'Invalid format. Format must be YK-RPL-NNNNN (e.g., YK-RPL-12345)',
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
          createdAt: new Date(rawValues.createdAt || now),
          updatedAt: new Date(rawValues.updatedAt || now),
          answerOption: params.answerOption,

          status: Status.ACTIVE,
          syncStatus: SyncStatus.SYNCED,
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
    },
  );

  return { form, submitted, handleSubmit };
};
