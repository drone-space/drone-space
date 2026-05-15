import { useStoreAnswer } from '@repo/libraries/zustand/stores/answer';
import { useStoreSession } from '@repo/libraries/zustand/stores/session';
import { AnswerGet } from '@repo/types/models/answer';
import { Status, SyncStatus } from '@repo/types/models/enums';
import { generateUUID } from '@repo/utilities/generators';

export const useAnswerActions = () => {
  const session = useStoreSession((s) => s.session);
  const addAnswer = useStoreAnswer((s) => s.addAnswer);
  const updateAnswer = useStoreAnswer((s) => s.updateAnswer);
  const deleteAnswer = useStoreAnswer((s) => s.deleteAnswer);

  const answerCreate = (params: Partial<AnswerGet>) => {
    if (!session) return;

    if (!params.attempt_id) {
      console.error('Attempt id must be provided.');
      return;
    }

    if (!params.question_id) {
      console.error('Question id must be provided.');
      return;
    }

    if (!params.option_id) {
      console.error('Option id must be provided.');
      return;
    }

    const id = generateUUID();
    const now = new Date();

    const newAnswer: AnswerGet = {
      id: params.id || id,
      attempt_id: params.attempt_id,
      question_id: params.question_id,
      option_id: params.option_id,
      status: params.status || Status.ACTIVE,
      sync_status: SyncStatus.PENDING,
      created_at: new Date(params.created_at || now).toISOString() as any,
      updated_at: new Date(params.updated_at || now).toISOString() as any,
    };

    addAnswer(newAnswer);
  };

  const answerUpdate = (params: AnswerGet) => {
    if (!session) return;

    const now = new Date();

    const newAnswer: AnswerGet = {
      ...params,
      sync_status: SyncStatus.PENDING,
      created_at: new Date(params.created_at).toISOString() as any,
      updated_at: new Date(now).toISOString() as any,
    };

    updateAnswer(newAnswer);
  };

  const answerDelete = (params: AnswerGet) => {
    if (!session) return;

    const now = new Date();

    deleteAnswer({
      ...params,
      sync_status: SyncStatus.DELETED,
      created_at: new Date(params.created_at).toISOString() as any,
      updated_at: new Date(now).toISOString() as any,
    });
  };

  return { answerCreate, answerUpdate, answerDelete };
};
