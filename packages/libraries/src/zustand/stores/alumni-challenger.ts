import { create } from 'zustand';
import type { AlumniChallengerGet } from '@repo/types/models/alumni-challenger';

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
  deleteAlumniChallenger: (data: AlumniChallengerGet) => void;
}

export const useStoreAlumniChallenger = create<AlumniChallengerState>(
  (set) => ({
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
          state.alumniChallengers?.map((i) =>
            i.id === data.id ? { ...data } : i
          ) ?? undefined,
      }));
    },

    deleteAlumniChallenger: (data) => {
      set((state) => ({
        deleted: [...state.deleted, data],
        alumniChallengers:
          state.alumniChallengers?.filter((i) => i.id !== data.id) ?? undefined,
      }));
    },
  })
);
