'use client';

import { config } from '@repo/store';
import { deleteDatabase, openDatabase } from '@repo/store';
import { Database } from '@repo/store';
import { useEffect, useState, useCallback } from 'react';

// Module-level singleton — ensures the DB is opened only once
let globalDb: Database | null = null;
let waiters: ((db: Database) => void)[] = [];

export function useDatabase() {
  const [state, setState] = useState<{
    db: Database | null;
    loading: boolean;
    error: Error | null;
  }>({
    db: globalDb,
    loading: !globalDb,
    error: null,
  });

  useEffect(() => {
    if (globalDb) return; // already initialized ✅

    (async () => {
      try {
        const dbInstance = await openDatabase(config);
        globalDb = dbInstance;

        // Resolve any pending waiters
        waiters.forEach((resolve) => resolve(dbInstance));
        waiters = [];

        setState({ db: dbInstance, loading: false, error: null });
      } catch (error) {
        setState({
          db: null,
          loading: false,
          error: error as Error,
        });
      }
    })();
  }, []);

  // 🔄 Helper: Wait for DB to be ready (useful in other async hooks)
  const waitForDb = useCallback(async (): Promise<Database> => {
    if (globalDb) return globalDb;

    return new Promise<Database>((resolve, reject) => {
      waiters.push(resolve);

      // Failsafe timeout
      setTimeout(() => {
        reject(new Error('Timed out waiting for IndexedDB initialization.'));
      }, 5000);
    });
  }, []);

  // 🗑️ Helper: Delete DB & reset global state
  const resetDb = useCallback(async (dbName: string) => {
    if (globalDb) {
      globalDb = null;
      await deleteDatabase(dbName);
      window.location.reload();
    }
  }, []);

  return {
    db: state.db,
    loading: state.loading,
    error: state.error,
    ready: !!state.db,
    waitForDb,
    resetDb,
  };
}
