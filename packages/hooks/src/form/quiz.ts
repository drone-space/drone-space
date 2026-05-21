import { hasLength } from '@mantine/form';
import { useQuizActions } from '../actions/quiz';
import { useFormBase } from '../form';
import { QuizGet } from '@repo/types/models/quiz';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import { useNotification } from '../notification';
import { Variant } from '@repo/types/enums';
import { Status } from '@repo/types/models/enums';

export const useFormQuiz = (params?: { defaultValues?: Partial<QuizGet> }) => {
  const router = useRouter();
  const { quizCreate, quizUpdate } = useQuizActions();
  const [stay, setStay] = useState(false);
  const quizzes = useStoreQuiz((s) => s.quizzes);
  const quizTitles = quizzes
    ?.filter((q) => q.id != params?.defaultValues?.id)
    ?.map((q) => q.title.toLocaleLowerCase());
  const { showNotification } = useNotification();

  const { form, submitted, handleSubmit } = useFormBase<Partial<QuizGet>>(
    {
      title: params?.defaultValues?.title || '',
      description: params?.defaultValues?.description || '',
      status: params?.defaultValues?.status || Status.ACTIVE,
    },
    {
      title: hasLength(
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
          rawValues.title &&
          quizTitles?.includes(rawValues.title.trim().toLowerCase())
        ) {
          showNotification({
            title: 'Error',
            desc: 'A quiz with a similar title exists.',
            variant: Variant.FAILED,
          });

          return;
        }

        if (!params?.defaultValues?.updated_at) {
          const newQuiz = quizCreate(rawValues);

          if (!stay && newQuiz) {
            router.push(`/admin/quizzes/${newQuiz.id}/edit-quiz`);
          }
        } else {
          const newQuiz = quizUpdate({
            ...params?.defaultValues,
            ...rawValues,
          } as QuizGet);

          if (!stay && newQuiz) {
            router.push(`/admin/quizzes`);
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
