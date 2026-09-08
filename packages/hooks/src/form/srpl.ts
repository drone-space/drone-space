import { hasLength } from '@mantine/form';
import { useSrplActions } from '../actions/srpl';
import { useFormBase } from '../form';
import { SrplGet } from '@repo/types/models/srpl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useStoreSrpl } from '@repo/libraries/zustand/stores/srpl';
import { useNotification } from '../notification';
import { Variant } from '@repo/types/enums';
import { Status } from '@repo/types/models/enums';

export const useFormSrpl = (params?: { defaultValues?: Partial<SrplGet> }) => {
  const router = useRouter();
  const { srplCreate, srplUpdate } = useSrplActions();
  const [stay, setStay] = useState(false);
  const srpls = useStoreSrpl((s) => s.srpls);
  const srplNumbers = srpls
    ?.filter((srpl) => srpl.id != params?.defaultValues?.id)
    ?.map((srpl) => srpl.srplNumber.toLocaleLowerCase());
  const { showNotification } = useNotification();

  const { form, submitted, handleSubmit } = useFormBase<Partial<SrplGet>>(
    {
      srplNumber: params?.defaultValues?.srplNumber || '',
      status: params?.defaultValues?.status || Status.ACTIVE,
    },
    {
      srplNumber: hasLength(
        { min: 2, max: 48 },
        'Between 2 and 48 characters required'
      ),
    },
    {
      // resetOnSuccess: true,
      hideSuccessNotification: true,
      clientOnly: false,

      onSubmit: async (rawValues) => {
        if (
          rawValues.srplNumber &&
          srplNumbers?.includes(rawValues.srplNumber.trim().toLowerCase())
        ) {
          showNotification({
            title: 'Error',
            desc: 'An SRPL with that number already exists.',
            variant: Variant.FAILED,
          });

          return;
        }

        if (!params?.defaultValues?.updated_at) {
          const newSrpl = srplCreate(rawValues);

          if (!stay && newSrpl) {
            router.push(`/admin/srpls/${newSrpl.id}/edit-srpl`);
          }
        } else {
          const newSrpl = srplUpdate({
            ...params?.defaultValues,
            ...rawValues,
          } as SrplGet);

          if (!stay && newSrpl) {
            router.push(`/admin/srpls`);
          }
        }

        form.reset();
        setStay(false);
      },
    }
  );

  return {
    form,
    submitted,
    handleSubmit,
    stay,
    setStay,
  };
};
