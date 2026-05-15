import { hasLength } from '@mantine/form';
import { useQuestionActions } from '../actions/question';
import { useFormBase } from '../form';
import { QuestionGet } from '@repo/types/models/question';
import { useState } from 'react';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import { Variant } from '@repo/types/enums';
import { useNotification } from '../notification';

export const useFormQuestion = (params?: {
  defaultValues?: Partial<QuestionGet>;
}) => {
  const { questionCreate, questionUpdate } = useQuestionActions();
  const [stay, setStay] = useState(false);
  const { showNotification } = useNotification();
  const questions = useStoreQuestion((s) => s.questions);

  const { form, submitted, handleSubmit } = useFormBase<Partial<QuestionGet>>(
    {
      content: params?.defaultValues?.content || '',
      quiz_id: params?.defaultValues?.quiz_id || '',
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
        const similarContents = questions
          ?.filter(
            (qi) =>
              // find all that match current question's content
              qi.content.toLowerCase() ==
                rawValues?.content?.trim().toLowerCase() &&
              // exclude current question
              qi.id != params?.defaultValues?.id &&
              // include only those from current quiz
              qi.quiz_id == params?.defaultValues?.quiz_id
          )
          .map((sq) => sq.content);

        if (rawValues.content && similarContents?.length) {
          showNotification({
            title: 'Error',
            desc: 'A question with similar content exists.',
            variant: Variant.FAILED,
          });

          return;
        }

        if (!params?.defaultValues?.updated_at) {
          questionCreate(rawValues);
        } else {
          questionUpdate({
            ...params?.defaultValues,
            ...rawValues,
          } as QuestionGet);
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
