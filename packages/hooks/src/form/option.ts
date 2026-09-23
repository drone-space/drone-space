'use client';

import { hasLength } from '@mantine/form';
import { useOptionActions } from '@repo/store';
import { useFormBase } from '../form';
import { OptionGet } from '@repo/types';
import { useState } from 'react';
import { useStoreOption } from '@repo/store';
import { useNotification } from '../notification';
import { Variant } from '@repo/types';

export const useFormOption = (params?: { defaultValues?: Partial<OptionGet> }) => {
  const { optionCreate, optionUpdate } = useOptionActions();
  const [stay, setStay] = useState(false);
  const options = useStoreOption((s) => s.options);
  const { showNotification } = useNotification();

  const { form, submitted, handleSubmit } = useFormBase<Partial<OptionGet>>(
    {
      content: params?.defaultValues?.content || '',
      questionId: params?.defaultValues?.questionId || '',
      correct: params?.defaultValues?.correct ? params?.defaultValues?.correct : false,
    },
    {
      content: hasLength({ min: 1, max: 2048 }, 'Between 1 and 2048 characters required'),
    },
    {
      // resetOnSuccess: true,
      hideSuccessNotification: true,
      clientOnly: false,

      onSubmit: async (rawValues) => {
        const similarContents = options
          ?.filter(
            (oi) =>
              // find all that match current option's content
              oi.content.toLowerCase() == rawValues?.content?.trim().toLowerCase() &&
              // exclude current option
              oi.id != params?.defaultValues?.id &&
              // include only those from current question
              oi.questionId == params?.defaultValues?.questionId,
          )
          .map((sq) => sq.content);

        if (rawValues.content && similarContents?.length) {
          showNotification({
            title: 'Error',
            desc: 'An option with that content already exists.',
            variant: Variant.FAILED,
          });

          return;
        }

        if (!params?.defaultValues?.updatedAt) {
          optionCreate(rawValues);
        } else {
          optionUpdate({
            ...params?.defaultValues,
            ...rawValues,
          } as OptionGet);
        }

        form.reset();
        setStay(false);
      },
    },
  );

  return {
    form,
    submitted,
    handleSubmit,
    stay,
    setStay,
  };
};
