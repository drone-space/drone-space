import { create } from 'zustand';
import type { AttemptGet } from '@repo/types/models/attempt';
import { hasChanges } from '@repo/utilities/object';

export type AttemptsValue = AttemptGet[] | null | undefined;

interface AttemptState {
  attempts: AttemptsValue;
  deleted: AttemptGet[];
  setAttempts: (data: AttemptsValue) => void;
  setDeletedAttempts: (data: AttemptsValue) => void;
  clearAttempts: () => void;
  clearDeletedAttempts: () => void;
  addAttempt: (data: AttemptGet) => void;
  updateAttempt: (data: AttemptGet) => void;
  mergeAttempts: (data: AttemptGet[]) => void;
  deleteAttempt: (data: AttemptGet) => void;
}

export const useStoreAttempt = create<AttemptState>((set) => ({
  attempts: undefined,
  deleted: [],

  setAttempts: (data) => {
    set({ attempts: data });
  },

  setDeletedAttempts: (data) => {
    set({ deleted: data || [] });
  },

  clearAttempts: () => {
    set({ attempts: [] });
  },

  clearDeletedAttempts: () => {
    set({ deleted: [] });
  },

  addAttempt: (data) => {
    set((state) => ({
      attempts: [...(state.attempts ?? []), data],
    }));
  },

  updateAttempt: (data) => {
    set((state) => ({
      attempts:
        state.attempts?.map((i) => (i.id === data.id ? { ...data } : i)) ??
        undefined,
    }));
  },

  mergeAttempts: (incomingAttempts) => {
    set((state) => {
      if (!incomingAttempts || incomingAttempts.length === 0) return state;

      // If initial state is empty, set it directly
      if (!state.attempts) {
        return { attempts: incomingAttempts };
      }

      let hasChanged = false;
      const incomingMap = new Map(
        incomingAttempts.map((n) => [String(n.id), n])
      );

      // 1. Update existing attempts in place if fields differ
      const nextAttempts = state.attempts.map((existing) => {
        const incoming = incomingMap.get(String(existing.id));
        if (!incoming) return existing;

        // Check if any property changed
        const isDifferent = hasChanges(existing, incoming);

        if (isDifferent) {
          hasChanged = true;
          return { ...existing, ...incoming };
        }

        // Return exact same reference if nothing changed
        return existing;
      });

      // 2. Append new attempts that aren't in the store yet
      const existingIds = new Set(state.attempts.map((n) => String(n.id)));
      for (const incoming of incomingAttempts) {
        if (!existingIds.has(String(incoming.id))) {
          nextAttempts.push(incoming);
          hasChanged = true;
        }
      }

      // CRITICAL: Return original `state` if nothing changed.
      // Zustand skips re-rendering all subscribers when the returned state reference is identical.
      if (!hasChanged) return state;

      return { attempts: nextAttempts };
    });
  },

  deleteAttempt: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      attempts: state.attempts?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
