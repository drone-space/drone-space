import { hasLength } from '@mantine/form';
import { useOptionActions } from '../actions/option';
import { useFormBase } from '../form';
import { OptionGet } from '@repo/types/models/option';
import { useState } from 'react';
import { useStoreOption } from '@repo/libraries/zustand/stores/option';
import { useNotification } from '../notification';
import { Variant } from '@repo/types/enums';

export const useFormOption = (params?: {
  defaultValues?: Partial<OptionGet>;
}) => {
  const { optionCreate, optionUpdate } = useOptionActions();
  const [stay, setStay] = useState(false);
  const options = useStoreOption((s) => s.options);
  const { showNotification } = useNotification();

  const { form, submitted, handleSubmit } = useFormBase<Partial<OptionGet>>(
    {
      content: params?.defaultValues?.content || '',
      question_id: params?.defaultValues?.question_id || '',
      correct: params?.defaultValues?.correct
        ? params?.defaultValues?.correct
        : false,
    },
    {
      content: hasLength(
        { min: 2, max: 2048 },
        'Between 2 and 2048 characters required'
      ),
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
              oi.content.toLowerCase() ==
                rawValues?.content?.trim().toLowerCase() &&
              // exclude current option
              oi.id != params?.defaultValues?.id &&
              // include only those from current question
              oi.question_id == params?.defaultValues?.question_id
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

        if (!params?.defaultValues?.updated_at) {
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
