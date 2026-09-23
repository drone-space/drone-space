import { useStoreAttempt } from '../../state/attempt';
import { useStoreSession } from '../../state/session';
import { AttemptGet } from '@repo/types';
import { Status, SyncStatus } from '@repo/types';
import { generateUUID } from '@repo/utils';

export const useAttemptActions = () => {
  const session = useStoreSession((s) => s.session);
  const addAttempt = useStoreAttempt((s) => s.addAttempt);
  const updateAttempt = useStoreAttempt((s) => s.updateAttempt);
  const deleteAttempt = useStoreAttempt((s) => s.deleteAttempt);

  const attemptCreate = (params: Partial<AttemptGet>) => {
    if (!session) return;

    if (!params.quizId) {
      console.error('Quiz id must be provided.');
      return;
    }

    const id = generateUUID();
    const now = new Date();

    const newAttempt: AttemptGet = {
      id: params.id || id,
      profileId: params.profileId || session.id,
      quizId: params.quizId,
      status: params.status || Status.INTRO,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt || now).toISOString() as any,
      updatedAt: new Date(params.updatedAt || now).toISOString() as any,
    };

    addAttempt(newAttempt);

    return newAttempt;
  };

  const attemptUpdate = (params: AttemptGet) => {
    if (!session) return;

    const now = new Date();

    const newAttempt: AttemptGet = {
      ...params,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    };

    updateAttempt(newAttempt);

    return newAttempt;
  };

  const attemptDelete = (params: AttemptGet) => {
    if (!session) return;

    const now = new Date();

    deleteAttempt({
      ...params,
      syncStatus: SyncStatus.DELETED,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    });
  };

  return { attemptCreate, attemptUpdate, attemptDelete };
};
