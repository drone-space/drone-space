import { useStoreQuiz } from '../../state/quiz';
import { useStoreSession } from '../../state/session';
import { QuizGet } from '@repo/types';
import { Status, SyncStatus } from '@repo/types';
import { generateUUID } from '@repo/utils';

export const useQuizActions = () => {
  const session = useStoreSession((s) => s.session);
  const addQuiz = useStoreQuiz((s) => s.addQuiz);
  const updateQuiz = useStoreQuiz((s) => s.updateQuiz);
  const deleteQuiz = useStoreQuiz((s) => s.deleteQuiz);

  const quizCreate = (params: Partial<QuizGet>) => {
    if (!session) return;

    const id = generateUUID();
    const now = new Date();

    const newQuiz: QuizGet = {
      id: params.id || id,
      title: params.title || 'New Quiz',
      description: params.description || '',
      passThreshold: params.passThreshold || 70,
      status: params.status || Status.ACTIVE,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt || now).toISOString() as any,
      updatedAt: new Date(params.updatedAt || now).toISOString() as any,
    };

    addQuiz(newQuiz);

    return newQuiz;
  };

  const quizUpdate = (params: QuizGet) => {
    if (!session) return;

    const now = new Date();

    const newQuiz: QuizGet = {
      ...params,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    };

    updateQuiz(newQuiz);

    return newQuiz;
  };

  const quizDelete = (params: QuizGet) => {
    if (!session) return;

    const now = new Date();

    deleteQuiz({
      ...params,
      syncStatus: SyncStatus.DELETED,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    });
  };

  return { quizCreate, quizUpdate, quizDelete };
};
