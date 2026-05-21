/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { useCallback, useEffect, useMemo, useRef } from 'react';
import { STORE_NAME } from '@repo/constants/names';
import { categoriesUpdate } from '@repo/handlers/requests/database/categories';
import { quizzesUpdate } from '@repo/handlers/requests/database/quizzes';
import { questionsUpdate } from '@repo/handlers/requests/database/questions';
import { quizQuestionsUpdate } from '@repo/handlers/requests/database/quiz_questions';
import { optionsUpdate } from '@repo/handlers/requests/database/options';
import { attemptsUpdate } from '@repo/handlers/requests/database/attempts';
import { answersUpdate } from '@repo/handlers/requests/database/answers';
import { useStoreCategory } from '@repo/libraries/zustand/stores/category';
import { useStoreAnswer } from '@repo/libraries/zustand/stores/answer';
import { useStoreAttempt } from '@repo/libraries/zustand/stores/attempt';
import { useStoreOption } from '@repo/libraries/zustand/stores/option';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import { SyncParams } from '@repo/types/sync';
import {
  SessionValue,
  useStoreSession,
} from '@repo/libraries/zustand/stores/session';
import {
  useDebouncedCallback,
  useIdle,
  UserNetworkReturnValue,
} from '@mantine/hooks';
import { SyncStatusValue } from '@repo/libraries/zustand/stores/sync-status';
import { SyncStatus } from '@repo/types/models/enums';
import { openDatabase } from '@repo/libraries/indexed-db/actions';
import { config } from '@repo/libraries/indexed-db/config';
import { API_URL } from '@repo/constants/paths';
import {
  Database,
  DatabaseError,
} from '@repo/libraries/indexed-db/transactions';
import { useStoreQuizQuestion } from '@repo/libraries/zustand/stores/quiz-question';

const useSessionCheck = () => {
  const session = useStoreSession((s) => s.session);
  const noSession =
    session === undefined ||
    (!session && (!(session as SessionValue)?.email as any));

  return { noSession };
};

type SyncStoreConfig<TItems = any, THookReturn = any> = {
  dataStore: (typeof STORE_NAME)[keyof typeof STORE_NAME];
  useStoreHook: () => THookReturn;
  serverUpdate: (items: TItems[], deleted: TItems[]) => Promise<any>;
  getItems: (store: THookReturn) => TItems[];
  getDeleted: (store: THookReturn) => TItems[];
  setItems: (store: THookReturn, items: TItems[]) => void;
  clearDeleted: (store: THookReturn) => void;
};

export const SYNC_STORES: Record<string, SyncStoreConfig> = {
  [STORE_NAME.CATEGORIES]: {
    dataStore: STORE_NAME.CATEGORIES,
    useStoreHook: useStoreCategory,
    serverUpdate: categoriesUpdate,
    getItems: (store) => store.categories,
    getDeleted: (store) => store.deleted,
    setItems: (store, items) => store.setCategories(items),
    clearDeleted: (store) => store.clearDeletedCategories(),
  },
  [STORE_NAME.QUIZZES]: {
    dataStore: STORE_NAME.QUIZZES,
    useStoreHook: useStoreQuiz,
    serverUpdate: quizzesUpdate,
    getItems: (store) => store.quizzes,
    getDeleted: (store) => store.deleted,
    setItems: (store, items) => store.setQuizzes(items),
    clearDeleted: (store) => store.clearDeletedQuizzes(),
  },
  [STORE_NAME.QUESTIONS]: {
    dataStore: STORE_NAME.QUESTIONS,
    useStoreHook: useStoreQuestion,
    serverUpdate: questionsUpdate,
    getItems: (store) => store.questions,
    getDeleted: (store) => store.deleted,
    setItems: (store, items) => store.setQuestion(items),
    clearDeleted: (store) => store.clearDeletedQuestion(),
  },
  [STORE_NAME.QUIZ_QUESTIONS]: {
    dataStore: STORE_NAME.QUIZ_QUESTIONS,
    useStoreHook: useStoreQuizQuestion,
    serverUpdate: quizQuestionsUpdate,
    getItems: (store) => store.quizQuestions,
    getDeleted: (store) => store.deleted,
    setItems: (store, items) => store.setQuizQuestion(items),
    clearDeleted: (store) => store.clearDeletedQuizQuestion(),
  },
  [STORE_NAME.OPTIONS]: {
    dataStore: STORE_NAME.OPTIONS,
    useStoreHook: useStoreOption,
    serverUpdate: optionsUpdate,
    getItems: (store) => store.options,
    getDeleted: (store) => store.deleted,
    setItems: (store, items) => store.setOption(items),
    clearDeleted: (store) => store.clearDeletedOption(),
  },
  [STORE_NAME.ATTEMPTS]: {
    dataStore: STORE_NAME.ATTEMPTS,
    useStoreHook: useStoreAttempt,
    serverUpdate: attemptsUpdate,
    getItems: (store) => store.attempts,
    getDeleted: (store) => store.deleted,
    setItems: (store, items) => store.setAttempt(items),
    clearDeleted: (store) => store.clearDeletedAttempt(),
  },
  [STORE_NAME.ANSWERS]: {
    dataStore: STORE_NAME.ANSWERS,
    useStoreHook: useStoreAnswer,
    serverUpdate: answersUpdate,
    getItems: (store) => store.answers,
    getDeleted: (store) => store.deleted,
    setItems: (store, items) => store.setAnswer(items),
    clearDeleted: (store) => store.clearDeletedAnswer(),
  },
} as const;

type SyncStoreKey = keyof typeof SYNC_STORES;

const SYNC_REGISTRY: Record<SyncStoreKey, any> = {
  [STORE_NAME.QUIZZES]: {
    store: useStoreQuiz,
    updateState: (items: any) => useStoreQuiz.getState().setQuizzes(items),
    clearDeleted: () => useStoreQuiz.getState().clearDeletedQuizzes(),
  },
  [STORE_NAME.QUESTIONS]: {
    store: useStoreQuestion,
    updateState: (items: any) =>
      useStoreQuestion.getState().setQuestions(items),
    clearDeleted: () => useStoreQuestion.getState().clearDeletedQuestions(),
  },
  [STORE_NAME.QUIZ_QUESTIONS]: {
    store: useStoreQuizQuestion,
    updateState: (items: any) =>
      useStoreQuizQuestion.getState().setQuizQuestions(items),
    clearDeleted: () =>
      useStoreQuizQuestion.getState().clearDeletedQuizQuestions(),
  },
  [STORE_NAME.OPTIONS]: {
    store: useStoreOption,
    updateState: (items: any) => useStoreOption.getState().setOptions(items),
    clearDeleted: () => useStoreOption.getState().clearDeletedOptions(),
  },
  [STORE_NAME.ATTEMPTS]: {
    store: useStoreAttempt,
    updateState: (items: any) => useStoreAttempt.getState().setAttempts(items),
    clearDeleted: () => useStoreAttempt.getState().clearDeletedAttempts(),
  },
  [STORE_NAME.ANSWERS]: {
    store: useStoreAnswer,
    updateState: (items: any) => useStoreAnswer.getState().setAnswers(items),
    clearDeleted: () => useStoreAnswer.getState().clearDeletedAnswers(),
  },
};

// Define a shape for the payload
export interface MergedSyncPayload {
  [STORE_NAME.QUIZZES]?: { items: any[]; deleted: any[] };
  [STORE_NAME.QUESTIONS]?: { items: any[]; deleted: any[] };
  [STORE_NAME.QUIZ_QUESTIONS]?: { items: any[]; deleted: any[] };
  [STORE_NAME.OPTIONS]?: { items: any[]; deleted: any[] };
  [STORE_NAME.ATTEMPTS]?: { items: any[]; deleted: any[] };
  [STORE_NAME.ANSWERS]?: { items: any[]; deleted: any[] };
}

// Update the MergedSyncParams to handle multiple datasets
export type MergedSyncParams = {
  payload: MergedSyncPayload;
  onSuccess?: (key: keyof MergedSyncPayload, updatedItems: any[]) => void;
  onClearDeleted?: (key: keyof MergedSyncPayload) => void;
};

export const useMergedSync = (params: {
  online: boolean;
  storesToSync: SyncStoreKey[]; // Use an array for stability
  handleSync: (payload: MergedSyncPayload) => Promise<void>;
  syncStatus: SyncStatusValue;
}) => {
  const { online, storesToSync, handleSync } = params;
  const idle = useIdle(1000, { events: ['keypress', 'click'] });
  const { noSession } = useSessionCheck();

  // Call all hooks at the top level (Required by Hook Rules)
  const quizStore = useStoreQuiz();
  const questionStore = useStoreQuestion();
  const quizQuestionStore = useStoreQuizQuestion();
  const optionStore = useStoreOption();
  const attemptStore = useStoreAttempt();
  const answerStore = useStoreAnswer();

  const stores = {
    [STORE_NAME.QUIZZES]: quizStore,
    [STORE_NAME.QUESTIONS]: questionStore,
    [STORE_NAME.QUIZ_QUESTIONS]: quizQuestionStore,
    [STORE_NAME.OPTIONS]: optionStore,
    [STORE_NAME.ATTEMPTS]: attemptStore,
    [STORE_NAME.ANSWERS]: answerStore,
  };

  // Use a Ref for the current sync status to check it inside the callback
  // without making the callback depend on it.
  const syncStatusRef = useRef(params.syncStatus);
  useEffect(() => {
    syncStatusRef.current = params.syncStatus;
  }, [params.syncStatus]);

  const sync = useCallback(async () => {
    // Use the ref here
    if (syncStatusRef.current === SyncStatus.PENDING) return;

    const payload: MergedSyncPayload = {};
    let hasDirtyData = false;

    // Build the payload dynamically based on what's active
    storesToSync.forEach((key) => {
      const config = SYNC_STORES[key];

      // Safety Check: skip if config doesn't exist for this key
      if (!config) {
        console.warn(
          `Sync config for hook key "${key}" is missing in SYNC_STORES.`
        );
        return;
      }

      const store = (stores as any)[key];
      const items = config.getItems(store) ?? [];
      const deleted = config.getDeleted(store) ?? [];

      // ONLY add to payload if there is something that needs action
      const needsSync = items.some(
        (i) =>
          i.sync_status === SyncStatus.PENDING ||
          i.sync_status === SyncStatus.SAVED ||
          i.sync_status === SyncStatus.ERROR ||
          (i.sync_status === SyncStatus.SYNCED_CLIENT &&
            isRecent(i.updated_at || i.created_at))
      );

      if (needsSync || deleted.length > 0) {
        (payload as any)[key] = { items, deleted };
        hasDirtyData = true;
      }
    });

    // Only proceed if we actually have work to do
    if (!hasDirtyData) return;

    await handleSync(payload);
  }, [
    JSON.stringify(storesToSync),
    handleSync,
    quizStore.quizzes,
    questionStore.questions,
    optionStore.options,
    attemptStore.attempts,
    answerStore.answers,
  ]);

  const debounceSyncFunction = useDebouncedCallback(() => sync(), 1000);
  // Add a debounced version of your sync function
  const debouncedSync = useMemo(
    () => debounceSyncFunction, // Wait 1s after the last store change/idle event
    [debounceSyncFunction]
  );

  useEffect(() => {
    if (!noSession && idle && online) {
      debouncedSync();
    }

    // Cleanup to avoid memory leaks or late executions
    return () => debouncedSync.cancel?.();
  }, [online, noSession, idle, debouncedSync]);
};

export const handleMergedSync = async (
  params: MergedSyncParams & {
    setSyncStatus: (data: SyncStatusValue) => void;
    session: SessionValue;
    networkStatus: UserNetworkReturnValue;
    syncStatus: SyncStatusValue;
    debounceMergedSyncToServer: (...args: any) => void;
    clientOnly?: boolean;
  }
) => {
  const {
    payload,
    networkStatus,
    session,
    setSyncStatus,
    debounceMergedSyncToServer,
    clientOnly,
  } = params;

  try {
    const db = await openDatabase(config);

    // 1. Client-Side Batch Update
    // We loop through the payload keys (e.g., ['notes', 'categories'])
    for (const [storeKey, data] of Object.entries(payload)) {
      const config = SYNC_STORES[storeKey as SyncStoreKey];
      const registry = SYNC_REGISTRY[storeKey as SyncStoreKey];

      await syncToClientDB({
        ...data,
        items: data?.items || [],
        deletedItems: data?.deleted || [],
        dataStore: config.dataStore,
        stateUpdateFunction: registry.updateState,
        stateUpdateFunctionDeleted: registry.clearDeleted,
        online: networkStatus.online,
        clientOnly,
        sameDate: true,
        db,
        // ... pass relevant store-specific update functions from a registry
      });
    }

    // 2. PHASE TWO: Batch Sync to Server
    if (networkStatus.online && session) {
      // Instead of multiple debounced calls, we pass the WHOLE payload
      // to one debounced function that hits a single /api/sync/batch endpoint
      debounceMergedSyncToServer({ ...payload, db, ...params });
    }
  } catch (error) {
    setSyncStatus(SyncStatus.ERROR);
  }
};

export const syncToServerDBMerged = async (payload: MergedSyncPayload) => {
  const now = new Date();
  const finalPayload: Record<string, any> = {};
  const activeStores: string[] = [];

  // Iterate through the keys (notes, categories, etc.)
  (Object.keys(payload) as SyncStoreKey[]).forEach((key) => {
    const data = (payload as any)[key];
    if (data && (data.items.length > 0 || data.deleted.length > 0)) {
      finalPayload[key] = prepareStorePayload(key, data, now);
      activeStores.push(key);
    }
  });

  try {
    if (activeStores.length === 0) return;

    const response = await fetch(
      `${API_URL}/app-data?stores=${activeStores.join(',')}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalPayload),
      }
    );

    if (!response.ok) throw new Error('Network response was not ok');

    const result = await response.json();

    return { success: true, data: result };
  } catch (error) {
    // Handle mass error state
    console.error('Merged Server Sync Error:', error);
    return { success: false, error };
  }
};

const prepareStorePayload = (
  key: SyncStoreKey,
  data: { items: any[]; deleted: any[] } | undefined,
  now: Date
) => {
  if (!data) return null;

  // 1. Get items that need saving/updating
  const upserts = data.items
    .filter(
      (i) =>
        i.sync_status !== SyncStatus.SYNCED &&
        i.sync_status !== SyncStatus.DELETED
    )
    // ... rest of map
    .map((item) => ({
      ...item,
      updated_at: now.toISOString(),
      sync_status: SyncStatus.SYNCED,
    }));

  // 2. Get the IDs of items marked for deletion
  // This is where your cart items live after orderUpdate runs
  const deletedIds = data.deleted.map((i) => i.id);

  return {
    upserts, // Changed from [key] to a fixed key for easier API parsing
    deletedIds,
  };
};

export const handleServerResponse = async (
  responsePayload: Record<string, any>,
  networkStatus: UserNetworkReturnValue,
  db: Database
) => {
  // 1. Iterate through the keys returned by the server
  for (const [key, items] of Object.entries(responsePayload)) {
    const config = SYNC_STORES[key as SyncStoreKey];
    const registry = SYNC_REGISTRY[key as SyncStoreKey];

    if (!config || !registry) continue;

    // 2. Update Client DB & Zustand to 'SYNCED'
    // We use your existing syncToClientDB but with 'fromServer' flag
    await syncToClientDB({
      items: items,
      deletedItems: [], // Server already handled deletions
      dataStore: config.dataStore,
      stateUpdateFunction: registry.updateState,
      stateUpdateFunctionDeleted: registry.clearDeleted,
      online: networkStatus.online,
      cleanup: true, // This removes DELETED items from IndexedDB
      options: { fromServer: true },
      db,
    });
  }
};

export const syncToServerAfterDelay = async (
  params: MergedSyncParams & {
    setSyncStatus: (data: SyncStatusValue) => void;
    session: SessionValue;
    networkStatus: UserNetworkReturnValue;
    syncStatus: SyncStatusValue;
    db: Database;
  }
) => {
  const { setSyncStatus, networkStatus, payload } = params;

  try {
    setSyncStatus(SyncStatus.PENDING);

    // 1. Send the merged payload
    const result = await syncToServerDBMerged(payload);

    if (result?.error) {
      // handle errors (marking items with SyncStatus.ERROR)
      setSyncStatus(SyncStatus.ERROR);
      return;
    }

    // 2. Process the successful return to update local state
    if (result?.data) {
      await handleServerResponse(result.data, networkStatus, params.db);
    }

    setSyncStatus(SyncStatus.SYNCED);
  } catch (error) {
    setSyncStatus(SyncStatus.ERROR);
    console.error('Sync to Server Error:', error);
  }
};

export const syncToClientDB = async (
  params: SyncParams & {
    sameDate?: boolean;
    online?: boolean;
    clientOnly?: boolean;
    cleanup?: boolean;
    options?: { fromServer?: boolean };
    db: Database;
  }
) => {
  if (params.options?.fromServer) {
    params.items = dedupeBy(params.items, (i) => i.id);
    params.deletedItems = dedupeBy(params.deletedItems || [], (i) => i.id);
  }

  const syncedItems = params.items.filter(
    (p) => p.sync_status == SyncStatus.SYNCED
  );

  const unsyncedItems = [
    ...params.items,
    ...(params.options?.fromServer ? [] : params.deletedItems || []),
  ].filter((p) => p.sync_status != SyncStatus.SYNCED);

  try {
    // Update IndexedDB with unsynced items items

    let savedItems: any[] = params.options?.fromServer ? params.items : [];

    if (unsyncedItems.length) {
      savedItems = unsyncedItems.map((item) => {
        return {
          ...item,
          updated_at: params.sameDate
            ? item.updated_at
            : new Date().toISOString(),
          sync_status:
            item.sync_status == SyncStatus.DELETED
              ? SyncStatus.DELETED
              : item.sync_status == SyncStatus.ERROR
                ? SyncStatus.ERROR
                : params.online && !params.clientOnly
                  ? SyncStatus.SYNCED_CLIENT
                  : SyncStatus.SAVED,
        };
      });
    }

    if (!savedItems.length) return;

    if (params.cleanup) {
      const deletedItems = savedItems.filter(
        (i) => i.sync_status == SyncStatus.DELETED
      );

      if (deletedItems.length) {
        // remove items with sync status DELETE from client
        await params.db.delete(params.dataStore, deletedItems);
      }
    }

    const savedItemsNotDeleted: any[] = savedItems.filter(
      (i) => i.sync_status != SyncStatus.DELETED
    );

    const clientDbItems = params.cleanup ? savedItemsNotDeleted : savedItems;

    const finalClientDbItems = params.options?.fromServer
      ? clientDbItems
      : [...clientDbItems, ...syncedItems];

    await params.db.put(params.dataStore, finalClientDbItems);

    const stateItems = params.options?.fromServer
      ? syncedItems
      : finalClientDbItems.filter((i) => i.sync_status != SyncStatus.DELETED);

    if (params.deletedItems?.length) {
      params.stateUpdateFunctionDeleted();
    }

    params.stateUpdateFunction(stateItems);
  } catch (error) {
    console.error('Client DB Sync Error:', (error as DatabaseError).message);
    throw error;
  }
};

function dedupeBy<T, K>(arr: T[], key: (item: T) => K): T[] {
  return Array.from(new Map(arr.map((i) => [key(i), i])).values());
}

const RECENT_THRESHOLD_MS = 10_000; // 10 seconds (tune this)

const isRecent = (date: string | Date) => {
  const t = new Date(date).getTime();
  return Date.now() - t < RECENT_THRESHOLD_MS;
};
