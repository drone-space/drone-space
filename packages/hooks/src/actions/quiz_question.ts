import { useStoreQuizQuestion } from '@repo/libraries/zustand/stores/quiz-question';
import { useStoreSession } from '@repo/libraries/zustand/stores/session';
import { QuizQuestionGet } from '@repo/types/models/quiz_question';
import { Status, SyncStatus } from '@repo/types/models/enums';
import { generateUUID } from '@repo/utilities/generators';

export const useQuizQuestionActions = () => {
  const session = useStoreSession((s) => s.session);
  const addQuizQuestion = useStoreQuizQuestion((s) => s.addQuizQuestion);
  const updateQuizQuestion = useStoreQuizQuestion((s) => s.updateQuizQuestion);
  const deleteQuizQuestion = useStoreQuizQuestion((s) => s.deleteQuizQuestion);

  const quizQuestionCreate = (params: Partial<QuizQuestionGet>) => {
    if (!session) return;

    if (!params.quiz_id) {
      console.error('Quiz id must be provided.');
      return;
    }

    if (!params.question_id) {
      console.error('Question id must be provided.');
      return;
    }

    const id = generateUUID();
    const now = new Date();

    const newQuizQuestion: QuizQuestionGet = {
      id: params.id || id,
      quiz_id: params.quiz_id,
      question_id: params.question_id,
      status: params.status || Status.ACTIVE,
      sync_status: SyncStatus.PENDING,
      created_at: new Date(params.created_at || now).toISOString() as any,
      updated_at: new Date(params.updated_at || now).toISOString() as any,
    };

    addQuizQuestion(newQuizQuestion);
  };

  const quizQuestionUpdate = (params: QuizQuestionGet) => {
    if (!session) return;

    const now = new Date();

    const newQuizQuestion: QuizQuestionGet = {
      ...params,
      sync_status: SyncStatus.PENDING,
      created_at: new Date(params.created_at).toISOString() as any,
      updated_at: new Date(now).toISOString() as any,
    };

    updateQuizQuestion(newQuizQuestion);
  };

  const quizQuestionDelete = (params: QuizQuestionGet) => {
    if (!session) return;

    const now = new Date();

    deleteQuizQuestion({
      ...params,
      sync_status: SyncStatus.DELETED,
      created_at: new Date(params.created_at).toISOString() as any,
      updated_at: new Date(now).toISOString() as any,
    });
  };

  return { quizQuestionCreate, quizQuestionUpdate, quizQuestionDelete };
};
