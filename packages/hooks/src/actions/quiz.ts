import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import { useStoreSession } from '@repo/libraries/zustand/stores/session';
import { QuizGet } from '@repo/types/models/quiz';
import { Status, SyncStatus } from '@repo/types/models/enums';
import { generateUUID } from '@repo/utilities/generators';

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
      pass_threshold: params.pass_threshold || 70,
      status: params.status || Status.ACTIVE,
      sync_status: SyncStatus.PENDING,
      created_at: new Date(params.created_at || now).toISOString() as any,
      updated_at: new Date(params.updated_at || now).toISOString() as any,
    };

    addQuiz(newQuiz);

    return newQuiz;
  };

  const quizUpdate = (params: QuizGet) => {
    if (!session) return;

    const now = new Date();

    const newQuiz: QuizGet = {
      ...params,
      sync_status: SyncStatus.PENDING,
      created_at: new Date(params.created_at).toISOString() as any,
      updated_at: new Date(now).toISOString() as any,
    };

    updateQuiz(newQuiz);

    return newQuiz;
  };

  const quizDelete = (params: QuizGet) => {
    if (!session) return;

    const now = new Date();

    deleteQuiz({
      ...params,
      sync_status: SyncStatus.DELETED,
      created_at: new Date(params.created_at).toISOString() as any,
      updated_at: new Date(now).toISOString() as any,
    });
  };

  return { quizCreate, quizUpdate, quizDelete };
};
