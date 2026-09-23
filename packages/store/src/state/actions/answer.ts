import { useStoreAnswer } from '../../state/answer';
import { useStoreSession } from '../../state/session';
import { AnswerGet } from '@repo/types';
import { Status, SyncStatus } from '@repo/types';
import { generateUUID } from '@repo/utils';

export const useAnswerActions = () => {
  const session = useStoreSession((s) => s.session);
  const addAnswer = useStoreAnswer((s) => s.addAnswer);
  const updateAnswer = useStoreAnswer((s) => s.updateAnswer);
  const deleteAnswer = useStoreAnswer((s) => s.deleteAnswer);

  const answerCreate = (params: Partial<AnswerGet>) => {
    if (!session) return;

    if (!params.attemptId) {
      console.error('Attempt id must be provided.');
      return;
    }

    if (!params.questionId) {
      console.error('Question id must be provided.');
      return;
    }

    if (!params.optionId) {
      console.error('Option id must be provided.');
      return;
    }

    const id = generateUUID();
    const now = new Date();

    const newAnswer: AnswerGet = {
      id: params.id || id,
      attemptId: params.attemptId,
      questionId: params.questionId,
      optionId: params.optionId,
      status: params.status || Status.ACTIVE,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt || now).toISOString() as any,
      updatedAt: new Date(params.updatedAt || now).toISOString() as any,
    };

    addAnswer(newAnswer);
  };

  const answerUpdate = (params: AnswerGet) => {
    if (!session) return;

    const now = new Date();

    const newAnswer: AnswerGet = {
      ...params,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    };

    updateAnswer(newAnswer);
  };

  const answerDelete = (params: AnswerGet) => {
    if (!session) return;

    const now = new Date();

    deleteAnswer({
      ...params,
      syncStatus: SyncStatus.DELETED,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    });
  };

  return { answerCreate, answerUpdate, answerDelete };
};
