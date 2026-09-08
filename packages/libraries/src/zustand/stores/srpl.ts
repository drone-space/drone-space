import { create } from 'zustand';
import type { SrplGet } from '@repo/types/models/srpl';
import { hasChanges } from '@repo/utilities/object';

export type SrplsValue = SrplGet[] | null | undefined;

interface SrplState {
  srpls: SrplsValue;
  deleted: SrplGet[];
  setSrpls: (data: SrplsValue) => void;
  setDeletedSrpls: (data: SrplsValue) => void;
  clearSrpls: () => void;
  clearDeletedSrpls: () => void;
  addSrpl: (data: SrplGet) => void;
  updateSrpl: (data: SrplGet) => void;
  mergeSrpls: (data: SrplGet[]) => void;
  deleteSrpl: (data: SrplGet) => void;
}

export const useStoreSrpl = create<SrplState>((set) => ({
  srpls: undefined,
  deleted: [],

  setSrpls: (data) => {
    set({ srpls: data });
  },

  setDeletedSrpls: (data) => {
    set({ deleted: data || [] });
  },

  clearSrpls: () => {
    set({ srpls: [] });
  },

  clearDeletedSrpls: () => {
    set({ deleted: [] });
  },

  addSrpl: (data) => {
    set((state) => ({
      srpls: [...(state.srpls ?? []), data],
    }));
  },

  updateSrpl: (data) => {
    set((state) => ({
      srpls:
        state.srpls?.map((i) => (i.id === data.id ? { ...data } : i)) ??
        undefined,
    }));
  },

  mergeSrpls: (incomingSrpls) => {
    set((state) => {
      if (!incomingSrpls || incomingSrpls.length === 0) return state;

      // If initial state is empty, set it directly
      if (!state.srpls) {
        return { srpls: incomingSrpls };
      }

      let hasChanged = false;
      const incomingMap = new Map(incomingSrpls.map((n) => [String(n.id), n]));

      // 1. Update existing srpls in place if fields differ
      const nextSrpls = state.srpls.map((existing) => {
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

      // 2. Append new srpls that aren't in the store yet
      const existingIds = new Set(state.srpls.map((n) => String(n.id)));
      for (const incoming of incomingSrpls) {
        if (!existingIds.has(String(incoming.id))) {
          nextSrpls.push(incoming);
          hasChanged = true;
        }
      }

      // CRITICAL: Return original `state` if nothing changed.
      // Zustand skips re-rendering all subscribers when the returned state reference is identical.
      if (!hasChanged) return state;

      return { srpls: nextSrpls };
    });
  },

  deleteSrpl: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      srpls: state.srpls?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
