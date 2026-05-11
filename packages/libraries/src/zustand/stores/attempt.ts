import { create } from 'zustand';
import type { AttemptGet } from '@repo/types/models/attempt';

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

  deleteAttempt: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      attempts: state.attempts?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
