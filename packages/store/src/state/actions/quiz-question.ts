import { useStoreQuizQuestion } from '../../state/quiz-question';
import { useStoreSession } from '../../state/session';
import { QuizQuestionGet } from '@repo/types';
import { Status, SyncStatus } from '@repo/types';
import { generateUUID } from '@repo/utils';

export const useQuizQuestionActions = () => {
  const session = useStoreSession((s) => s.session);
  const addQuizQuestion = useStoreQuizQuestion((s) => s.addQuizQuestion);
  const updateQuizQuestion = useStoreQuizQuestion((s) => s.updateQuizQuestion);
  const deleteQuizQuestion = useStoreQuizQuestion((s) => s.deleteQuizQuestion);

  const quizQuestionCreate = (params: Partial<QuizQuestionGet>) => {
    if (!session) return;

    if (!params.quizId) {
      console.error('Quiz id must be provided.');
      return;
    }

    if (!params.questionId) {
      console.error('Question id must be provided.');
      return;
    }

    const id = generateUUID();
    const now = new Date();

    const newQuizQuestion: QuizQuestionGet = {
      id: params.id || id,
      quizId: params.quizId,
      questionId: params.questionId,
      status: params.status || Status.ACTIVE,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt || now).toISOString() as any,
      updatedAt: new Date(params.updatedAt || now).toISOString() as any,
    };

    addQuizQuestion(newQuizQuestion);
  };

  const quizQuestionUpdate = (params: QuizQuestionGet) => {
    if (!session) return;

    const now = new Date();

    const newQuizQuestion: QuizQuestionGet = {
      ...params,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    };

    updateQuizQuestion(newQuizQuestion);
  };

  const quizQuestionDelete = (params: QuizQuestionGet) => {
    if (!session) return;

    const now = new Date();

    deleteQuizQuestion({
      ...params,
      syncStatus: SyncStatus.DELETED,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    });
  };

  return { quizQuestionCreate, quizQuestionUpdate, quizQuestionDelete };
};
