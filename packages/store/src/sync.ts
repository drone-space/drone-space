import { useCallback, useEffect, useRef } from 'react';
import { useIdle, UserNetworkReturnValue } from '@mantine/hooks';
import { config } from './indexed-db/config';
import { openDatabase } from './indexed-db/actions';
import { Database, DatabaseError } from './indexed-db/transactions';
import { STORE_NAME } from '@repo/constants';
import { SyncParams, SyncStatus } from '@repo/types';
import { categoriesUpdate } from '@repo/handlers';
import { quizzesUpdate } from '@repo/handlers';
import { questionsUpdate } from '@repo/handlers';
import { quizQuestionsUpdate } from '@repo/handlers';
import { optionsUpdate } from '@repo/handlers';
import { attemptsUpdate } from '@repo/handlers';
import { answersUpdate } from '@repo/handlers';
import { srplsUpdate } from '@repo/handlers';
import { SyncStatusValue } from './state/sync-status';
import { SessionValue, useStoreSession } from './state/session';
import { useStoreCategory } from './state/category';
import { useStoreAnswer } from './state/answer';
import { useStoreAttempt } from './state/attempt';
import { useStoreOption } from './state/option';
import { useStoreQuestion } from './state/question';
import { useStoreQuiz } from './state/quiz';
import { useStoreQuizQuestion } from './state/quiz-question';
import { useStoreSrpl } from './state/srpl';

const useSessionCheck = () => {
  const session = useStoreSession((s) => s.session);
  const noSession =
    session === undefined || (!session && (!(session as SessionValue)?.email as any));

  return { noSession };
};

type SyncStoreConfig<TItems = any, THookReturn = any> = {
  dataStore: (typeof STORE_NAME)[keyof typeof STORE_NAME];
  useStoreHook: () => THookReturn;
  serverUpdate: (apiurl: string, items: TItems[], deleted: TItems[]) => Promise<any>;
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
  [STORE_NAME.SRPLS]: {
    dataStore: STORE_NAME.SRPLS,
    useStoreHook: useStoreSrpl,
    serverUpdate: srplsUpdate,
    getItems: (store) => store.srpls,
    getDeleted: (store) => store.deleted,
    setItems: (store, items) => store.setSrpl(items),
    clearDeleted: (store) => store.clearDeletedSrpl(),
  },
} as const;

type SyncStoreKey = keyof typeof SYNC_STORES;

const SYNC_REGISTRY: Record<SyncStoreKey, any> = {
  [STORE_NAME.QUIZZES]: {
    store: useStoreQuiz,
    updateState: (items: any) => useStoreQuiz.getState().mergeQuizzes(items),
    clearDeleted: () => useStoreQuiz.getState().clearDeletedQuizzes(),
  },
  [STORE_NAME.QUESTIONS]: {
    store: useStoreQuestion,
    updateState: (items: any) => useStoreQuestion.getState().mergeQuestions(items),
    clearDeleted: () => useStoreQuestion.getState().clearDeletedQuestions(),
  },
  [STORE_NAME.QUIZ_QUESTIONS]: {
    store: useStoreQuizQuestion,
    updateState: (items: any) => useStoreQuizQuestion.getState().mergeQuizQuestions(items),
    clearDeleted: () => useStoreQuizQuestion.getState().clearDeletedQuizQuestions(),
  },
  [STORE_NAME.OPTIONS]: {
    store: useStoreOption,
    updateState: (items: any) => useStoreOption.getState().mergeOptions(items),
    clearDeleted: () => useStoreOption.getState().clearDeletedOptions(),
  },
  [STORE_NAME.ATTEMPTS]: {
    store: useStoreAttempt,
    updateState: (items: any) => useStoreAttempt.getState().mergeAttempts(items),
    clearDeleted: () => useStoreAttempt.getState().clearDeletedAttempts(),
  },
  [STORE_NAME.ANSWERS]: {
    store: useStoreAnswer,
    updateState: (items: any) => useStoreAnswer.getState().mergeAnswers(items),
    clearDeleted: () => useStoreAnswer.getState().clearDeletedAnswers(),
  },
  [STORE_NAME.SRPLS]: {
    store: useStoreSrpl,
    updateState: (items: any) => useStoreSrpl.getState().mergeSrpls(items),
    clearDeleted: () => useStoreSrpl.getState().clearDeletedSrpls(),
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
  [STORE_NAME.SRPLS]?: { items: any[]; deleted: any[] };
}

// Update the MergedSyncParams to handle multiple datasets
export type MergedSyncParams = {
  apiUrl: string;
  payload: MergedSyncPayload;
  onSuccess?: (key: keyof MergedSyncPayload, updatedItems: any[]) => void;
  onClearDeleted?: (key: keyof MergedSyncPayload) => void;
};

export const useMergedSync = (params: {
  online: boolean;
  storesToSync: SyncStoreKey[];
  handleSync: (payload: MergedSyncPayload) => Promise<void>;
  syncStatus: SyncStatusValue;
}) => {
  const { online } = params;
  const idle = useIdle(4000, { events: ['keypress', 'click'] });
  const { noSession } = useSessionCheck();

  // Store params in a ref so sync always reads fresh state without re-triggering useEffect
  const paramsRef = useRef(params);
  paramsRef.current = params;

  // Ref guard to prevent concurrent sync executions
  const isSyncingRef = useRef(false);

  const triggerSync = useCallback(async () => {
    // Prevent execution if already syncing or pending
    if (isSyncingRef.current || paramsRef.current.syncStatus === SyncStatus.PENDING) {
      return;
    }

    const stores = {
      [STORE_NAME.QUIZZES]: useStoreQuiz.getState(),
      [STORE_NAME.QUESTIONS]: useStoreQuestion.getState(),
      [STORE_NAME.QUIZ_QUESTIONS]: useStoreQuizQuestion.getState(),
      [STORE_NAME.OPTIONS]: useStoreOption.getState(),
      [STORE_NAME.ATTEMPTS]: useStoreAttempt.getState(),
      [STORE_NAME.ANSWERS]: useStoreAnswer.getState(),
      [STORE_NAME.SRPLS]: useStoreSrpl.getState(),
    };

    const payload: MergedSyncPayload = {};
    let hasDirtyData = false;

    paramsRef.current.storesToSync.forEach((key) => {
      const config = SYNC_STORES[key];

      // Safety Check: skip if config doesn't exist for this key
      if (!config) {
        console.warn(`Sync config for hook key "${key}" is missing in SYNC_STORES.`);
        return;
      }

      const store = (stores as any)[key];
      const items = config.getItems(store) ?? [];
      const deleted = config.getDeleted(store) ?? [];

      const needsSync = items.some(
        (i) =>
          i.syncStatus === SyncStatus.PENDING ||
          i.syncStatus === SyncStatus.SAVED ||
          i.syncStatus === SyncStatus.ERROR ||
          (i.syncStatus === SyncStatus.SYNCED_CLIENT && isRecent(i.updatedAt || i.createdAt)),
      );

      if (needsSync || deleted.length > 0) {
        console.log('--> [info] syncing', key);
        (payload as any)[key] = { items, deleted };
        hasDirtyData = true;
      }
    });

    if (hasDirtyData) {
      try {
        isSyncingRef.current = true;
        await paramsRef.current.handleSync(payload);
      } finally {
        isSyncingRef.current = false;
      }
    }
  }, []);

  // Effect ONLY re-runs when idle, online, or session state actually transitions
  useEffect(() => {
    if (!noSession && idle && online) {
      triggerSync();
    }
  }, [online, noSession, idle, triggerSync]);
};

export const handleMergedSync = async (
  params: MergedSyncParams & {
    setSyncStatus: (data: SyncStatusValue) => void;
    session: SessionValue;
    networkStatus: UserNetworkReturnValue;
    syncStatus: SyncStatusValue;
    debounceMergedSyncToServer: (...args: any) => void;
    clientOnly?: boolean;
  },
) => {
  const { payload, networkStatus, session, setSyncStatus, debounceMergedSyncToServer, clientOnly } =
    params;

  try {
    const db = await openDatabase(config);

    // 1. Client-Side Batch Update
    // We loop through the payload keys (e.g., ['posts', 'categories'])
    for (const [storeKey, data] of Object.entries(payload)) {
      const config = SYNC_STORES[storeKey as SyncStoreKey];
      const registry = SYNC_REGISTRY[storeKey as SyncStoreKey];

      await syncToClientDB({
        ...data,
        items: data?.items || [],
        deletedItems: data?.deleted || [],
        dataStore: config!.dataStore,
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

export const syncToServerDBMerged = async (
  payload: MergedSyncPayload,
  options: { apiUrl: string },
) => {
  const now = new Date();
  const finalPayload: Record<string, any> = {};
  const activeStores: string[] = [];

  // Iterate through the keys (posts, categories, etc.)
  (Object.keys(payload) as SyncStoreKey[]).forEach((key) => {
    const data = (payload as any)[key];
    if (data && (data.items.length > 0 || data.deleted.length > 0)) {
      // This now contains { upserts: [...], deletedIds: [...] }
      finalPayload[key] = prepareStorePayload(key, data, now);
      activeStores.push(key);
    }
  });

  try {
    if (activeStores.length === 0) return;

    const response = await fetch(`${options.apiUrl}/app-data?stores=${activeStores.join(',')}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(finalPayload),
    });

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
  now: Date,
) => {
  if (!data) return null;

  // 1. Get items that need saving/updating
  const upserts = data.items
    .filter((i) => i.syncStatus !== SyncStatus.SYNCED && i.syncStatus !== SyncStatus.DELETED)
    // ... rest of map
    .map((item) => ({
      ...item,
      updatedAt: now.toISOString(),
      syncStatus: SyncStatus.SYNCED,
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
  db: Database,
) => {
  // 1. Iterate through the keys returned by the server
  for (const [key, items] of Object.entries(responsePayload)) {
    const config = SYNC_STORES[key as SyncStoreKey];
    const registry = SYNC_REGISTRY[key as SyncStoreKey];

    // Safety Check: skip if config doesn't exist for this key
    if (!config || !registry) {
      console.warn(`Sync config for hook key "${key}" is missing in SYNC_STORES.`);
      continue;
    }

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
  },
) => {
  const { setSyncStatus, networkStatus, payload } = params;

  try {
    setSyncStatus(SyncStatus.PENDING);

    // 1. Send the merged payload
    const result = await syncToServerDBMerged(payload, { apiUrl: params.apiUrl });

    if (result?.error) {
      // handle errors (marking items with SyncStatus.ERROR)
      setSyncStatus(SyncStatus.ERROR);
      return;
    }

    // 2. Process the successful return to update local state
    if (result?.data) {
      await handleServerResponse(result.data.items, networkStatus, params.db);
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
  },
) => {
  if (params.options?.fromServer) {
    params.items = dedupeBy(params.items, (i) => i.id);
    params.deletedItems = dedupeBy(params.deletedItems || [], (i) => i.id);
  }

  const syncedItems = params.items.filter((p) => p.syncStatus == SyncStatus.SYNCED);

  const unsyncedItems = [
    ...params.items,
    ...(params.options?.fromServer ? [] : params.deletedItems || []),
  ].filter((p) => p.syncStatus != SyncStatus.SYNCED);

  try {
    // Update IndexedDB with unsynced items items

    let savedItems: any[] = params.options?.fromServer ? params.items : [];

    if (unsyncedItems.length) {
      savedItems = unsyncedItems.map((item) => {
        return {
          ...item,
          updatedAt: params.sameDate ? item.updatedAt : new Date().toISOString(),
          syncStatus:
            item.syncStatus == SyncStatus.DELETED
              ? SyncStatus.DELETED
              : item.syncStatus == SyncStatus.ERROR
                ? SyncStatus.ERROR
                : params.online && !params.clientOnly
                  ? SyncStatus.SYNCED_CLIENT
                  : SyncStatus.SAVED,
        };
      });
    }

    if (!savedItems.length) return;

    if (params.cleanup) {
      const deletedItems = savedItems.filter((i) => i.syncStatus == SyncStatus.DELETED);

      if (deletedItems.length) {
        // remove items with sync status DELETE from client
        await params.db.delete(params.dataStore, deletedItems);
      }
    }

    const savedItemsNotDeleted: any[] = savedItems.filter(
      (i) => i.syncStatus != SyncStatus.DELETED,
    );

    const clientDbItems = params.cleanup ? savedItemsNotDeleted : savedItems;

    const finalClientDbItems = params.options?.fromServer
      ? clientDbItems
      : [...clientDbItems, ...syncedItems];

    await params.db.put(params.dataStore, finalClientDbItems);

    const stateItems = params.options?.fromServer
      ? syncedItems
      : finalClientDbItems.filter((i) => i.syncStatus != SyncStatus.DELETED);

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
