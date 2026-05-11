import { useStoreOption } from '@repo/libraries/zustand/stores/option';
import { useStoreSession } from '@repo/libraries/zustand/stores/session';
import { OptionGet } from '@repo/types/models/option';
import { Status, SyncStatus } from '@repo/types/models/enums';
import { generateUUID } from '@repo/utilities/generators';

export const useOptionActions = () => {
  const session = useStoreSession((s) => s.session);
  const addOption = useStoreOption((s) => s.addOption);
  const updateOption = useStoreOption((s) => s.updateOption);
  const deleteOption = useStoreOption((s) => s.deleteOption);

  const optionCreate = (params: Partial<OptionGet>) => {
    if (!session) return;

    if (!params.question_id) {
      console.error('Question id must be provided.');
      return;
    }

    const id = generateUUID();
    const now = new Date();

    const newOption: OptionGet = {
      id: params.id || id,
      content: params.content || 'New option',
      correct: params.correct || false,
      question_id: params.question_id,
      status: params.status || Status.ACTIVE,
      sync_status: SyncStatus.PENDING,
      created_at: new Date(params.created_at || now).toISOString() as any,
      updated_at: new Date(params.updated_at || now).toISOString() as any,
    };

    addOption(newOption);
  };

  const optionUpdate = (params: OptionGet) => {
    if (!session) return;

    const now = new Date();

    const newOption: OptionGet = {
      ...params,
      sync_status: SyncStatus.PENDING,
      created_at: new Date(params.created_at).toISOString() as any,
      updated_at: new Date(now).toISOString() as any,
    };

    updateOption(newOption);
  };

  const optionDelete = (params: OptionGet) => {
    if (!session) return;

    const now = new Date();

    deleteOption({
      ...params,
      sync_status: SyncStatus.DELETED,
      created_at: new Date(params.created_at).toISOString() as any,
      updated_at: new Date(now).toISOString() as any,
    });
  };

  return { optionCreate, optionUpdate, optionDelete };
};
