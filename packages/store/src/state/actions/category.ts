import { useStoreCategory } from '../../state/category';
import { useStoreSession } from '../../state/session';
import { CategoryGet } from '@repo/types';
import { CategoryType, Status, SyncStatus } from '@repo/types';
import { generateUUID } from '@repo/utils';

export const useCategoryActions = () => {
  const session = useStoreSession((s) => s.session);
  const addCategory = useStoreCategory((s) => s.addCategory);
  const updateCategory = useStoreCategory((s) => s.updateCategory);
  const deleteCategory = useStoreCategory((s) => s.deleteCategory);

  const categoryCreate = (params: Partial<CategoryGet>) => {
    if (!session) return;

    const id = generateUUID();
    const now = new Date();

    const newCategory: CategoryGet = {
      id: params.id || id,
      title: params.title || 'New Project',
      type: params.type || CategoryType.BLOG,
      status: params.status || Status.ACTIVE,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt || now).toISOString() as any,
      updatedAt: new Date(params.updatedAt || now).toISOString() as any,
    };

    addCategory(newCategory);
  };

  const categoryUpdate = (params: CategoryGet) => {
    if (!session) return;

    const now = new Date();

    const newCategory: CategoryGet = {
      ...params,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    };

    updateCategory(newCategory);
  };

  const categoryDelete = (params: CategoryGet) => {
    if (!session) return;

    const now = new Date();

    deleteCategory({
      ...params,
      syncStatus: SyncStatus.DELETED,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    });
  };

  return { categoryCreate, categoryUpdate, categoryDelete };
};
