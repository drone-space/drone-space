import { useStoreQuestion } from '../../state/question';
import { useStoreSession } from '../../state/session';
import { QuestionGet } from '@repo/types';
import { Status, SyncStatus } from '@repo/types';
import { generateUUID } from '@repo/utils';
import { useStoreOption } from '../../state/option';

export const useQuestionActions = () => {
  const session = useStoreSession((s) => s.session);
  const addQuestion = useStoreQuestion((s) => s.addQuestion);
  const updateQuestion = useStoreQuestion((s) => s.updateQuestion);
  const options = useStoreOption((s) => s.options);
  const setOptions = useStoreOption((s) => s.setOptions);
  const setDeletedOptions = useStoreOption((s) => s.setDeletedOptions);
  const deleteQuestion = useStoreQuestion((s) => s.deleteQuestion);

  const questionCreate = (params: Partial<QuestionGet>) => {
    if (!session) return;

    const id = generateUUID();
    const now = new Date();

    const newQuestion: QuestionGet = {
      id: params.id || id,
      content: params.content || 'New question',
      explanation: params.explanation || '',
      status: params.status || Status.ACTIVE,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt || now).toISOString() as any,
      updatedAt: new Date(params.updatedAt || now).toISOString() as any,
    };

    addQuestion(newQuestion);

    return newQuestion;
  };

  const questionUpdate = (params: QuestionGet) => {
    if (!session) return;

    const now = new Date();

    const newQuestion: QuestionGet = {
      ...params,
      syncStatus: SyncStatus.PENDING,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    };

    updateQuestion(newQuestion);
  };

  const questionDelete = (params: QuestionGet) => {
    if (!session) return;

    const now = new Date();

    // mark current question options as deleted
    setDeletedOptions(
      options
        ?.filter((oi) => oi.questionId == params.id)
        .map((oi2) => {
          return {
            ...oi2,
            syncStatus: SyncStatus.DELETED,
            createdAt: new Date(params.createdAt).toISOString() as any,
            updatedAt: new Date(now).toISOString() as any,
          };
        }),
    );

    // remove question options from state
    setOptions(options?.filter((oi) => oi.questionId != params.id));

    deleteQuestion({
      ...params,
      syncStatus: SyncStatus.DELETED,
      createdAt: new Date(params.createdAt).toISOString() as any,
      updatedAt: new Date(now).toISOString() as any,
    });
  };

  return { questionCreate, questionUpdate, questionDelete };
};
