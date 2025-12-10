/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { useCallback, useEffect } from 'react';
import { STORE_NAME } from '@repo/constants/names';
import { emailsUpdate } from '@repo/handlers/requests/database/emails';
import { useStoreEmail } from '@/libraries/zustand/stores/email';
import { SyncParams } from '@repo/types/sync';

export const useSyncEmails = (params: {
  syncFunction: (input: SyncParams) => void;
  online: boolean;
}) => {
  const { syncFunction, online } = params;

  const {
    emails,
    deleted: deletedEmails,
    setEmails,
    clearDeletedEmails,
  } = useStoreEmail();

  const syncEmails = useCallback(() => {
    syncFunction({
      items: emails || [],
      deletedItems: deletedEmails,
      dataStore: STORE_NAME.EMAILS,
      stateUpdateFunctionDeleted: () => clearDeletedEmails(),
      stateUpdateFunction: (i) => setEmails(i),
      serverUpdateFunction: async (i, di) => await emailsUpdate(i, di),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emails, deletedEmails, setEmails, clearDeletedEmails]);

  useEffect(() => syncEmails(), [emails, syncEmails, online]);

  return { syncEmails };
};
