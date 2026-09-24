'use client';

import { useEffect } from 'react';
import { STORE_NAME } from '@repo/constants';
import { openDatabase } from '../../indexed-db/actions';
import { config } from '../../indexed-db/config';
import { FileSyncAdapter, SyncStatus } from '@repo/types';
import { SessionValue, useStoreSession } from '../session';
import { useStoreCategory } from '../category';
// import { useStoreUserStates } from '../user-states';
import { useStorePost } from '../post';
import { useStoreQuiz } from '../quiz';
import { useStoreQuestion } from '../question';
import { useStoreOption } from '../option';
import { useStoreAttempt } from '../attempt';
import { useStoreAnswer } from '../answer';
import { useStoreQuizQuestion } from '../quiz-question';
import { useStoreSrpl } from '../srpl';
import { useStoreAlumniChallenger } from '../alumni-challenger';
import { useStoreStudent } from '../student';
import { useStoreProfile } from '../profile';

const mergeItems = async (
  dataStore: string,
  clientItems: any[],
  serverItems: any[],
): Promise<any[]> => {
  const db = await openDatabase(config);

  // 1. Identify items the server says are deleted
  const serverDeletedItems = serverItems
    .filter((item) => item.syncStatus === SyncStatus.DELETED)
    .map((item) => ({ id: item.id })); // Wrap in object to satisfy your helper's 'item[actualKeyPath]'

  const serverDeletedIds = serverDeletedItems.map((i) => i.id);

  // 2. Remove those IDs from IndexedDB immediately to ensure consistency
  if (serverDeletedItems.length > 0) {
    await db.delete(dataStore, serverDeletedItems);
  }

  // 3. Filter client items: remove what server deleted + what client marked deleted
  const activeClientItems = clientItems.filter(
    (item) => !serverDeletedIds.includes(item.id) && item.syncStatus !== SyncStatus.DELETED,
  );

  const mergedMap = new Map(activeClientItems.map((item) => [item.id, item]));

  // 4. Merge Server updates
  serverItems.forEach((serverItem) => {
    if (serverItem.syncStatus === SyncStatus.DELETED) return;

    const localItem = mergedMap.get(serverItem.id);
    const serverTime = new Date(serverItem.updatedAt).getTime();
    const localTime = localItem ? new Date(localItem.updatedAt).getTime() : 0;

    // Update if local doesn't exist OR server is strictly newer
    if (!localItem || serverTime > localTime) {
      mergedMap.set(serverItem.id, {
        ...serverItem,
        syncStatus: SyncStatus.SYNCED,
        updatedAt: new Date(serverItem.updatedAt).toISOString(),
      });
    }
  });

  return Array.from(mergedMap.values());
};

const loadInitialData = async (params: {
  dataStore: string;
  session: SessionValue;
  serverItems: any[];
  options?: { clientOnly?: boolean; fileSyncAdapter?: FileSyncAdapter };
  stateUpdateFunction: (items: any[]) => void;
}) => {
  const { clientOnly, fileSyncAdapter } = params.options || {};
  const { session, dataStore, serverItems, stateUpdateFunction } = params;

  try {
    const db = await openDatabase(config);
    let clientItems: any[] = (await db.get(dataStore)) || [];

    // 1. Attach profileId for offline-created items if session exists
    if (session?.id) {
      clientItems = clientItems.map((i) => {
        // Only set profileId if the property already exists on the object
        if (Object.hasOwn(i, 'profileId')) {
          return {
            ...i,
            profileId: i.profileId || session.id,
          };
        }
        return i;
      });
    }

    let combinedItems: any[] = [];

    // 2. Scenario A: Local-Only Mode (Filesystem Backup or Pure Local)
    if (clientOnly) {
      let source = clientItems;
      if (fileSyncAdapter) {
        const bundle = await fileSyncAdapter.readBackup();
        source = bundle?.[dataStore.toLowerCase()] || clientItems;
      }
      // Filter out items the user deleted locally while offline
      combinedItems = source.filter((i) => i.syncStatus !== SyncStatus.DELETED);
    }

    // 3. Scenario B: Server-Sync Mode
    else {
      if (clientItems.length === 0 && serverItems.length > 0) {
        // First-time sync (Cold start)
        combinedItems = serverItems
          .filter((item) => item.syncStatus !== SyncStatus.DELETED)
          .map((item) => ({
            ...item,
            updatedAt: new Date(item.updatedAt).toISOString(),
          }));
      } else {
        // Standard Reconcile (The logic that fixes your multi-device lag)
        combinedItems = await mergeItems(dataStore, clientItems, serverItems);
      }
    }

    // 4. Persistence: Sync the Merged State back to IndexedDB
    // We use .put to ensure the local DB is an exact mirror of our merged logic
    await db.put(dataStore, combinedItems);

    // 5. Update UI State (Zustand)
    stateUpdateFunction(combinedItems);
  } catch (error) {
    console.error(`Sync error for ${dataStore}:`, error);
  }
};

type LoadStoreConfig<TItems = any, THookReturn = any> = {
  dataStore: (typeof STORE_NAME)[keyof typeof STORE_NAME];
  useStoreHook: () => THookReturn;
  setState: (store: THookReturn, items: TItems[]) => void;
};

export const LOAD_STORES: Record<string, LoadStoreConfig> = {
  [STORE_NAME.CATEGORIES]: {
    dataStore: STORE_NAME.CATEGORIES,
    useStoreHook: useStoreCategory,
    setState: (store, items) => store.setCategories(items),
  },
  [STORE_NAME.POSTS]: {
    dataStore: STORE_NAME.POSTS,
    useStoreHook: useStorePost,
    setState: (store, items) => store.setPosts(items),
  },
  [STORE_NAME.QUIZZES]: {
    dataStore: STORE_NAME.QUIZZES,
    useStoreHook: useStoreQuiz,
    setState: (store, items) => store.setQuizzes(items),
  },
  [STORE_NAME.QUESTIONS]: {
    dataStore: STORE_NAME.QUESTIONS,
    useStoreHook: useStoreQuestion,
    setState: (store, items) => store.setQuestions(items),
  },
  [STORE_NAME.QUIZ_QUESTIONS]: {
    dataStore: STORE_NAME.QUIZ_QUESTIONS,
    useStoreHook: useStoreQuizQuestion,
    setState: (store, items) => store.setQuizQuestions(items),
  },
  [STORE_NAME.OPTIONS]: {
    dataStore: STORE_NAME.OPTIONS,
    useStoreHook: useStoreOption,
    setState: (store, items) => store.setOptions(items),
  },
  [STORE_NAME.ATTEMPTS]: {
    dataStore: STORE_NAME.ATTEMPTS,
    useStoreHook: useStoreAttempt,
    setState: (store, items) => store.setAttempts(items),
  },
  [STORE_NAME.ANSWERS]: {
    dataStore: STORE_NAME.ANSWERS,
    useStoreHook: useStoreAnswer,
    setState: (store, items) => store.setAnswers(items),
  },
  [STORE_NAME.SRPLS]: {
    dataStore: STORE_NAME.SRPLS,
    useStoreHook: useStoreSrpl,
    setState: (store, items) => store.setSrpls(items),
  },
  [STORE_NAME.ALUMNI_CHALLENGERS]: {
    dataStore: STORE_NAME.ALUMNI_CHALLENGERS,
    useStoreHook: useStoreAlumniChallenger,
    setState: (store, items) => store.setAlumniChallengers(items),
  },
  [STORE_NAME.STUDENTS]: {
    dataStore: STORE_NAME.STUDENTS,
    useStoreHook: useStoreStudent,
    setState: (store, items) => store.setStudents(items),
  },
  [STORE_NAME.PROFILES]: {
    dataStore: STORE_NAME.PROFILES,
    useStoreHook: useStoreProfile,
    setState: (store, items) => store.setProfiles(items),
  },
} as const;

type LoadStoreKey = keyof typeof LOAD_STORES;

export const useLoadAppData = (options: {
  sourceSite: string;
  apiUrl: string;
  storesToLoad: Partial<Record<LoadStoreKey, boolean>>;
  clientOnly?: boolean;
}) => {
  const session = useStoreSession((s) => s.session);

  const stores = {
    [STORE_NAME.CATEGORIES]: useStoreCategory(),
    [STORE_NAME.POSTS]: useStorePost(),
    [STORE_NAME.QUIZZES]: useStoreQuiz(),
    [STORE_NAME.QUESTIONS]: useStoreQuestion(),
    [STORE_NAME.QUIZ_QUESTIONS]: useStoreQuizQuestion(),
    [STORE_NAME.OPTIONS]: useStoreOption(),
    [STORE_NAME.ATTEMPTS]: useStoreAttempt(),
    [STORE_NAME.ANSWERS]: useStoreAnswer(),
    [STORE_NAME.SRPLS]: useStoreSrpl(),
    [STORE_NAME.ALUMNI_CHALLENGERS]: useStoreAlumniChallenger(),
    [STORE_NAME.STUDENTS]: useStoreStudent(),
    [STORE_NAME.PROFILES]: useStoreProfile(),
  };

  useEffect(() => {
    if (!session?.id) return;

    const syncAll = async () => {
      try {
        // 1. Identify which keys are set to 'true'
        const activeStoreKeys = (Object.keys(options.storesToLoad) as LoadStoreKey[]).filter(
          (key) => options.storesToLoad[key],
        );

        if (activeStoreKeys.length === 0) return;

        // 2. Fetch only the required data
        // Pass the requested stores as a query param so the server can optimize
        const storeQuery = activeStoreKeys.join(',');

        const res = await fetch(
          `${options.apiUrl}/app-data?userId=${session.id}&sourceSite=${options.sourceSite}&stores=${storeQuery}`,
        );

        if (!res.ok) {
          const errorText = await res.text().catch(() => 'No response body');

          throw new Error(
            `Failed to fetch app data (${res.status} ${res.statusText}): ${errorText}`,
          );
        }

        const fullPayload = await res.json();

        // 2. Process each store in parallel (only the active stores)
        const syncPromises = activeStoreKeys.map(async (key) => {
          const config = LOAD_STORES[key];
          const serverData = fullPayload[key] || [];
          const storeInstance = stores[key as keyof typeof stores];

          if (!config || !storeInstance) return;

          return loadInitialData({
            dataStore: config.dataStore,
            session,
            options: { clientOnly: options.clientOnly },
            serverItems: serverData,
            stateUpdateFunction: (items) => config.setState(storeInstance, items),
          });
        });

        await Promise.all(syncPromises);
      } catch (e) {
        console.error('Data initialization failed:', e);
      }
    };

    syncAll();
  }, [session?.id, JSON.stringify(options.storesToLoad), options.clientOnly]);
};
