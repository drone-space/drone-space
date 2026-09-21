import { create } from 'zustand';
import type { AlumniChallengerGet } from '@repo/types/models/alumni-challenger';
import { hasChanges } from '@repo/utils';

export type AlumniChallengersValue = AlumniChallengerGet[] | null | undefined;

interface AlumniChallengerState {
  alumniChallengers: AlumniChallengersValue;
  deleted: AlumniChallengerGet[];
  setAlumniChallengers: (data: AlumniChallengersValue) => void;
  setDeletedAlumniChallengers: (data: AlumniChallengersValue) => void;
  clearAlumniChallengers: () => void;
  clearDeletedAlumniChallengers: () => void;
  addAlumniChallenger: (data: AlumniChallengerGet) => void;
  updateAlumniChallenger: (data: AlumniChallengerGet) => void;
  mergeAlumniChallengers: (data: AlumniChallengerGet[]) => void;
  deleteAlumniChallenger: (data: AlumniChallengerGet) => void;
}

export const useStoreAlumniChallenger = create<AlumniChallengerState>((set) => ({
  alumniChallengers: undefined,
  deleted: [],

  setAlumniChallengers: (data) => {
    set({ alumniChallengers: data });
  },

  setDeletedAlumniChallengers: (data) => {
    set({ deleted: data || [] });
  },

  clearAlumniChallengers: () => {
    set({ alumniChallengers: [] });
  },

  clearDeletedAlumniChallengers: () => {
    set({ deleted: [] });
  },

  addAlumniChallenger: (data) => {
    set((state) => ({
      alumniChallengers: [...(state.alumniChallengers ?? []), data],
    }));
  },

  updateAlumniChallenger: (data) => {
    set((state) => ({
      alumniChallengers:
        state.alumniChallengers?.map((i) => (i.id === data.id ? { ...data } : i)) ?? undefined,
    }));
  },

  mergeAlumniChallengers: (incomingAlumniChallengers) => {
    set((state) => {
      if (!incomingAlumniChallengers || incomingAlumniChallengers.length === 0) return state;

      // If initial state is empty, set it directly
      if (!state.alumniChallengers) {
        return { alumniChallengers: incomingAlumniChallengers };
      }

      let hasChanged = false;
      const incomingMap = new Map(incomingAlumniChallengers.map((n) => [String(n.id), n]));

      // 1. Update existing alumniChallengers in place if fields differ
      const nextAlumniChallengers = state.alumniChallengers.map((existing) => {
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

      // 2. Append new alumniChallengers that aren't in the store yet
      const existingIds = new Set(state.alumniChallengers.map((n) => String(n.id)));
      for (const incoming of incomingAlumniChallengers) {
        if (!existingIds.has(String(incoming.id))) {
          nextAlumniChallengers.push(incoming);
          hasChanged = true;
        }
      }

      // CRITICAL: Return original `state` if nothing changed.
      // Zustand skips re-rendering all subscribers when the returned state reference is identical.
      if (!hasChanged) return state;

      return { alumniChallengers: nextAlumniChallengers };
    });
  },

  deleteAlumniChallenger: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      alumniChallengers: state.alumniChallengers?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
