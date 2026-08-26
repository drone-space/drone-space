import { create } from 'zustand';
import type { OptionGet } from '@repo/types/models/option';
import { hasChanges } from '@repo/utilities/object';

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
  mergeOptions: (data: OptionGet[]) => void;
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

  mergeOptions: (incomingOptions) => {
    set((state) => {
      if (!incomingOptions || incomingOptions.length === 0) return state;

      // If initial state is empty, set it directly
      if (!state.options) {
        return { options: incomingOptions };
      }

      let hasChanged = false;
      const incomingMap = new Map(
        incomingOptions.map((n) => [String(n.id), n])
      );

      // 1. Update existing options in place if fields differ
      const nextOptions = state.options.map((existing) => {
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

      // 2. Append new options that aren't in the store yet
      const existingIds = new Set(state.options.map((n) => String(n.id)));
      for (const incoming of incomingOptions) {
        if (!existingIds.has(String(incoming.id))) {
          nextOptions.push(incoming);
          hasChanged = true;
        }
      }

      // CRITICAL: Return original `state` if nothing changed.
      // Zustand skips re-rendering all subscribers when the returned state reference is identical.
      if (!hasChanged) return state;

      return { options: nextOptions };
    });
  },

  deleteOption: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      options: state.options?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
