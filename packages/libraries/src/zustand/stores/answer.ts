import { create } from 'zustand';
import type { AnswerGet } from '@repo/types/models/answer';
import { hasChanges } from '@repo/utilities/object';

export type AnswersValue = AnswerGet[] | null | undefined;

interface AnswerState {
  answers: AnswersValue;
  deleted: AnswerGet[];
  setAnswers: (data: AnswersValue) => void;
  setDeletedAnswers: (data: AnswersValue) => void;
  clearAnswers: () => void;
  clearDeletedAnswers: () => void;
  addAnswer: (data: AnswerGet) => void;
  updateAnswer: (data: AnswerGet) => void;
  mergeAnswers: (data: AnswerGet[]) => void;
  deleteAnswer: (data: AnswerGet) => void;
}

export const useStoreAnswer = create<AnswerState>((set) => ({
  answers: undefined,
  deleted: [],

  setAnswers: (data) => {
    set({ answers: data });
  },

  setDeletedAnswers: (data) => {
    set({ deleted: data || [] });
  },

  clearAnswers: () => {
    set({ answers: [] });
  },

  clearDeletedAnswers: () => {
    set({ deleted: [] });
  },

  addAnswer: (data) => {
    set((state) => ({
      answers: [...(state.answers ?? []), data],
    }));
  },

  updateAnswer: (data) => {
    set((state) => ({
      answers:
        state.answers?.map((i) => (i.id === data.id ? { ...data } : i)) ??
        undefined,
    }));
  },

  mergeAnswers: (incomingAnswers) => {
    set((state) => {
      if (!incomingAnswers || incomingAnswers.length === 0) return state;

      // If initial state is empty, set it directly
      if (!state.answers) {
        return { answers: incomingAnswers };
      }

      let hasChanged = false;
      const incomingMap = new Map(
        incomingAnswers.map((n) => [String(n.id), n])
      );

      // 1. Update existing answers in place if fields differ
      const nextAnswers = state.answers.map((existing) => {
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

      // 2. Append new answers that aren't in the store yet
      const existingIds = new Set(state.answers.map((n) => String(n.id)));
      for (const incoming of incomingAnswers) {
        if (!existingIds.has(String(incoming.id))) {
          nextAnswers.push(incoming);
          hasChanged = true;
        }
      }

      // CRITICAL: Return original `state` if nothing changed.
      // Zustand skips re-rendering all subscribers when the returned state reference is identical.
      if (!hasChanged) return state;

      return { answers: nextAnswers };
    });
  },

  deleteAnswer: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      answers: state.answers?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
