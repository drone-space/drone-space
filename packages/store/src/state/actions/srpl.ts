import { useStoreSrpl } from '../../state/srpl';
import { useStoreSession } from '../../state/session';
import { SrplGet } from '@repo/types';
import { Status, SyncStatus } from '@repo/types';
import { generateUUID } from '@repo/utils';

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
      profileId: params.profileId || null,
      status: params.status || Status.ACTIVE,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt || now).toISOString() as any,
      updatedAt: new Date(params.updatedAt || now).toISOString() as any,
    };

    addSrpl(newSrpl);

    return newSrpl;
  };

  const srplUpdate = (params: SrplGet) => {
    if (!session) return;

    const now = new Date();

    const newSrpl: SrplGet = {
      ...params,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    };

    updateSrpl(newSrpl);

    return newSrpl;
  };

  const srplDelete = (params: SrplGet) => {
    if (!session) return;

    const now = new Date();

    deleteSrpl({
      ...params,
      syncStatus: SyncStatus.DELETED,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    });
  };

  return { srplCreate, srplUpdate, srplDelete };
};
