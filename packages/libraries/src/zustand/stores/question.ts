import { create } from 'zustand';
import type { QuestionGet } from '@repo/types/models/question';
import { hasChanges } from '@repo/utilities/object';

export type QuestionsValue = QuestionGet[] | null | undefined;

interface QuestionState {
  questions: QuestionsValue;
  deleted: QuestionGet[];
  setQuestions: (data: QuestionsValue) => void;
  setDeletedQuestions: (data: QuestionsValue) => void;
  clearQuestions: () => void;
  clearDeletedQuestions: () => void;
  addQuestion: (data: QuestionGet) => void;
  updateQuestion: (data: QuestionGet) => void;
  mergeQuestions: (data: QuestionGet[]) => void;
  deleteQuestion: (data: QuestionGet) => void;
}

export const useStoreQuestion = create<QuestionState>((set) => ({
  questions: undefined,
  deleted: [],

  setQuestions: (data) => {
    set({ questions: data });
  },

  setDeletedQuestions: (data) => {
    set({ deleted: data || [] });
  },

  clearQuestions: () => {
    set({ questions: [] });
  },

  clearDeletedQuestions: () => {
    set({ deleted: [] });
  },

  addQuestion: (data) => {
    set((state) => ({
      questions: [...(state.questions ?? []), data],
    }));
  },

  updateQuestion: (data) => {
    set((state) => ({
      questions:
        state.questions?.map((i) => (i.id === data.id ? { ...data } : i)) ??
        undefined,
    }));
  },

  mergeQuestions: (incomingQuestions) => {
    set((state) => {
      if (!incomingQuestions || incomingQuestions.length === 0) return state;

      // If initial state is empty, set it directly
      if (!state.questions) {
        return { questions: incomingQuestions };
      }

      let hasChanged = false;
      const incomingMap = new Map(
        incomingQuestions.map((n) => [String(n.id), n])
      );

      // 1. Update existing questions in place if fields differ
      const nextQuestions = state.questions.map((existing) => {
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

      // 2. Append new questions that aren't in the store yet
      const existingIds = new Set(state.questions.map((n) => String(n.id)));
      for (const incoming of incomingQuestions) {
        if (!existingIds.has(String(incoming.id))) {
          nextQuestions.push(incoming);
          hasChanged = true;
        }
      }

      // CRITICAL: Return original `state` if nothing changed.
      // Zustand skips re-rendering all subscribers when the returned state reference is identical.
      if (!hasChanged) return state;

      return { questions: nextQuestions };
    });
  },

  deleteQuestion: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      questions: state.questions?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
