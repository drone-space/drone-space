import { useStoreSrpl } from '@repo/libraries/zustand/stores/srpl';
import { useStoreSession } from '@repo/libraries/zustand/stores/session';
import { SrplGet } from '@repo/types/models/srpl';
import { Status, SyncStatus } from '@repo/types/models/enums';
import { generateUUID } from '@repo/utilities/generators';

export const useSrplActions = () => {
  const session = useStoreSession((s) => s.session);
  const addSrpl = useStoreSrpl((s) => s.addSrpl);
  const updateSrpl = useStoreSrpl((s) => s.updateSrpl);
  const deleteSrpl = useStoreSrpl((s) => s.deleteSrpl);

  const srplCreate = (params: Partial<SrplGet>) => {
    if (!session) return;

    if (!params.srplNumber) {
      console.error('SRPL number must be provided.');
      return;
    }

    const id = generateUUID();
    const now = new Date();

    const newSrpl: SrplGet = {
      id: params.id || id,
      srplNumber: params.srplNumber,
      profile_id: params.profile_id || null,
      status: params.status || Status.ACTIVE,
      sync_status: SyncStatus.PENDING,
      created_at: new Date(params.created_at || now).toISOString() as any,
      updated_at: new Date(params.updated_at || now).toISOString() as any,
    };

    addSrpl(newSrpl);

    return newSrpl;
  };

  const srplUpdate = (params: SrplGet) => {
    if (!session) return;

    const now = new Date();

    const newSrpl: SrplGet = {
      ...params,
      sync_status: SyncStatus.PENDING,
      created_at: new Date(params.created_at).toISOString() as any,
      updated_at: new Date(now).toISOString() as any,
    };

    updateSrpl(newSrpl);

    return newSrpl;
  };

  const srplDelete = (params: SrplGet) => {
    if (!session) return;

    const now = new Date();

    deleteSrpl({
      ...params,
      sync_status: SyncStatus.DELETED,
      created_at: new Date(params.created_at).toISOString() as any,
      updated_at: new Date(now).toISOString() as any,
    });
  };

  return { srplCreate, srplUpdate, srplDelete };
};
