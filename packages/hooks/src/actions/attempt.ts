import { useStoreAttempt } from '@repo/libraries/zustand/stores/attempt';
import { useStoreSession } from '@repo/libraries/zustand/stores/session';
import { AttemptGet } from '@repo/types/models/attempt';
import { Status, SyncStatus } from '@repo/types/models/enums';
import { generateUUID } from '@repo/utilities/generators';

export const useAttemptActions = () => {
  const session = useStoreSession((s) => s.session);
  const addAttempt = useStoreAttempt((s) => s.addAttempt);
  const updateAttempt = useStoreAttempt((s) => s.updateAttempt);
  const deleteAttempt = useStoreAttempt((s) => s.deleteAttempt);

  const attemptCreate = (params: Partial<AttemptGet>) => {
    if (!session) return;

    if (!params.quiz_id) {
      console.error('Quiz id must be provided.');
      return;
    }

    const id = generateUUID();
    const now = new Date();

    const newAttempt: AttemptGet = {
      id: params.id || id,
      score: params.score || null,
      profile_id: params.profile_id || session.id,
      quiz_id: params.quiz_id,
      status: params.status || Status.INTRO,
      sync_status: SyncStatus.PENDING,
      created_at: new Date(params.created_at || now).toISOString() as any,
      updated_at: new Date(params.updated_at || now).toISOString() as any,
    };

    addAttempt(newAttempt);

    return newAttempt;
  };

  const attemptUpdate = (params: AttemptGet) => {
    if (!session) return;

    const now = new Date();

    const newAttempt: AttemptGet = {
      ...params,
      sync_status: SyncStatus.PENDING,
      created_at: new Date(params.created_at).toISOString() as any,
      updated_at: new Date(now).toISOString() as any,
    };

    updateAttempt(newAttempt);

    return newAttempt;
  };

  const attemptDelete = (params: AttemptGet) => {
    if (!session) return;

    const now = new Date();

    deleteAttempt({
      ...params,
      sync_status: SyncStatus.DELETED,
      created_at: new Date(params.created_at).toISOString() as any,
      updated_at: new Date(now).toISOString() as any,
    });
  };

  return { attemptCreate, attemptUpdate, attemptDelete };
};
