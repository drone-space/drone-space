import { useStoreOption } from '../../state/option';
import { useStoreSession } from '../../state/session';
import { OptionGet } from '@repo/types';
import { Status, SyncStatus } from '@repo/types';
import { generateUUID } from '@repo/utils';

export const useOptionActions = () => {
  const session = useStoreSession((s) => s.session);
  const addOption = useStoreOption((s) => s.addOption);
  const updateOption = useStoreOption((s) => s.updateOption);
  const deleteOption = useStoreOption((s) => s.deleteOption);

  const optionCreate = (params: Partial<OptionGet>) => {
    if (!session) return;

    if (!params.questionId) {
      console.error('Question id must be provided.');
      return;
    }

    const id = generateUUID();
    const now = new Date();

    const newOption: OptionGet = {
      id: params.id || id,
      content: params.content || 'New option',
      correct: params.correct || false,
      questionId: params.questionId,
      status: params.status || Status.ACTIVE,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt || now).toISOString() as any,
      updatedAt: new Date(params.updatedAt || now).toISOString() as any,
    };

    addOption(newOption);
  };

  const optionUpdate = (params: OptionGet) => {
    if (!session) return;

    const now = new Date();

    const newOption: OptionGet = {
      ...params,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    };

    updateOption(newOption);
  };

  const optionDelete = (params: OptionGet) => {
    if (!session) return;

    const now = new Date();

    deleteOption({
      ...params,
      syncStatus: SyncStatus.DELETED,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    });
  };

  return { optionCreate, optionUpdate, optionDelete };
};
