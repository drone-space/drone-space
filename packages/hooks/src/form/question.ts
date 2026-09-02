import { hasLength } from '@mantine/form';
import { useQuestionActions } from '../actions/question';
import { useFormBase } from '../form';
import { QuestionGet } from '@repo/types/models/question';
import { useState } from 'react';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import { Variant } from '@repo/types/enums';
import { useNotification } from '../notification';
import { useQuizQuestionActions } from '../actions/quiz-question';

export const useFormQuestion = (params?: {
  defaultValues?: Partial<QuestionGet>;
  options: { quizId?: string; inline?: boolean }; // newly added because it's no longer in defaultValues (i'll pass it manually)
}) => {
  const { questionCreate, questionUpdate } = useQuestionActions();
  // 🔥 NEW ACTION: You need your action hook for creating the join table row
  const { quizQuestionCreate } = useQuizQuestionActions();
  const [stay, setStay] = useState(!params?.options.inline ? true : false);
  const { showNotification } = useNotification();

  const { form, submitted, handleSubmit } = useFormBase<Partial<QuestionGet>>(
    {
      id: params?.defaultValues?.id || '',
      explanation: params?.defaultValues?.explanation || '',
      content: params?.defaultValues?.content || '',
    },
    {
      content: hasLength(
        { min: 2, max: 2048 },
        'Between 2 and 2048 characters required'
      ),
    },
    {
      resetOnSuccess: false,
      hideSuccessNotification: true,
      clientOnly: false,

      onSubmit: async (rawValues) => {
        const trimmedContent = rawValues?.content?.trim().toLowerCase();

        // 🔥 OPTIMIZED GLOBAL SIMILARITY CHECK
        // Since content is unique across the entire app, check the entire pool directly.
        const isDuplicate = useStoreQuestion
          .getState()
          .questions?.some(
            (qi) =>
              qi.content.toLowerCase() === trimmedContent &&
              qi.id !== params?.defaultValues?.id
          );

        if (rawValues.content && isDuplicate) {
          showNotification({
            title: 'Error',
            desc: 'A question with this exact content already exists in the question pool.',
            variant: Variant.FAILED,
          });

          return;
        }

        if (!params?.options.quizId) {
          showNotification({
            title: 'Error',
            desc: 'Quiz id must be provided to avoid orphan questions.',
            variant: Variant.FAILED,
          });

          return;
        }

        if (!params?.defaultValues?.updated_at) {
          // --- 1. Creating a Brand New Question ---
          // Create the question record globally
          const newQuestion = questionCreate(rawValues);

          // Link it to the current quiz immediately via the join table
          if (newQuestion?.id && params?.options.quizId) {
            quizQuestionCreate({
              quiz_id: params.options.quizId,
              question_id: newQuestion.id,
            });
          }

          if (params.options.inline) {
            form.reset();
          } else {
            form.setValues({ id: newQuestion?.id });
          }
        } else {
          // --- 2. Updating an Existing Question ---
          questionUpdate({
            ...params?.defaultValues,
            ...rawValues,
          } as QuestionGet);

          form.reset();
        }
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
