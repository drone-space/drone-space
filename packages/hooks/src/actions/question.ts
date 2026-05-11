import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import { useStoreSession } from '@repo/libraries/zustand/stores/session';
import { QuestionGet } from '@repo/types/models/question';
import { Status, SyncStatus } from '@repo/types/models/enums';
import { generateUUID } from '@repo/utilities/generators';

export const useQuestionActions = () => {
  const session = useStoreSession((s) => s.session);
  const addQuestion = useStoreQuestion((s) => s.addQuestion);
  const updateQuestion = useStoreQuestion((s) => s.updateQuestion);
  const deleteQuestion = useStoreQuestion((s) => s.deleteQuestion);

  const questionCreate = (params: Partial<QuestionGet>) => {
    if (!session) return;

    if (!params.quiz_id) {
      console.error('Quiz id must be provided.');
      return;
    }

    const id = generateUUID();
    const now = new Date();

    const newQuestion: QuestionGet = {
      id: params.id || id,
      content: params.content || 'New question',
      quiz_id: params.quiz_id,
      status: params.status || Status.ACTIVE,
      sync_status: SyncStatus.PENDING,
      created_at: new Date(params.created_at || now).toISOString() as any,
      updated_at: new Date(params.updated_at || now).toISOString() as any,
    };

    addQuestion(newQuestion);
  };

  const questionUpdate = (params: QuestionGet) => {
    if (!session) return;

    const now = new Date();

    const newQuestion: QuestionGet = {
      ...params,
      sync_status: SyncStatus.PENDING,
      created_at: new Date(params.created_at).toISOString() as any,
      updated_at: new Date(now).toISOString() as any,
    };

    updateQuestion(newQuestion);
  };

  const questionDelete = (params: QuestionGet) => {
    if (!session) return;

    const now = new Date();

    deleteQuestion({
      ...params,
      sync_status: SyncStatus.DELETED,
      created_at: new Date(params.created_at).toISOString() as any,
      updated_at: new Date(now).toISOString() as any,
    });
  };

  return { questionCreate, questionUpdate, questionDelete };
};
