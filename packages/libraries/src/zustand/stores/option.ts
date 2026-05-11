import { create } from 'zustand';
import type { OptionGet } from '@repo/types/models/option';

export type OptionsValue = OptionGet[] | null | undefined;

interface OptionState {
  options: OptionsValue;
  deleted: OptionGet[];
  setOptions: (data: OptionsValue) => void;
  setDeletedOptions: (data: OptionsValue) => void;
  clearOptions: () => void;
  clearDeletedOptions: () => void;
  addOption: (data: OptionGet) => void;
  updateOption: (data: OptionGet) => void;
  deleteOption: (data: OptionGet) => void;
}

export const useStoreOption = create<OptionState>((set) => ({
  options: undefined,
  deleted: [],

  setOptions: (data) => {
    set({ options: data });
  },

  setDeletedOptions: (data) => {
    set({ deleted: data || [] });
  },

  clearOptions: () => {
    set({ options: [] });
  },

  clearDeletedOptions: () => {
    set({ deleted: [] });
  },

  addOption: (data) => {
    set((state) => ({
      options: [...(state.options ?? []), data],
    }));
  },

  updateOption: (data) => {
    set((state) => ({
      options:
        state.options?.map((i) => (i.id === data.id ? { ...data } : i)) ??
        undefined,
    }));
  },

  deleteOption: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      options: state.options?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
