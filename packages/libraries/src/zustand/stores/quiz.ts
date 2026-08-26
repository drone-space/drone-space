import { create } from 'zustand';
import type { QuizGet } from '@repo/types/models/quiz';
import { hasChanges } from '@repo/utilities/object';

export type QuizzesValue = QuizGet[] | null | undefined;

interface QuizState {
  quizzes: QuizzesValue;
  deleted: QuizGet[];
  setQuizzes: (data: QuizzesValue) => void;
  setDeletedQuizzes: (data: QuizzesValue) => void;
  clearQuizzes: () => void;
  clearDeletedQuizzes: () => void;
  addQuiz: (data: QuizGet) => void;
  updateQuiz: (data: QuizGet) => void;
  mergeQuizzes: (data: QuizGet[]) => void;
  deleteQuiz: (data: QuizGet) => void;
}

export const useStoreQuiz = create<QuizState>((set) => ({
  quizzes: undefined,
  deleted: [],

  setQuizzes: (data) => {
    set({ quizzes: data });
  },

  setDeletedQuizzes: (data) => {
    set({ deleted: data || [] });
  },

  clearQuizzes: () => {
    set({ quizzes: [] });
  },

  clearDeletedQuizzes: () => {
    set({ deleted: [] });
  },

  addQuiz: (data) => {
    set((state) => ({
      quizzes: [...(state.quizzes ?? []), data],
    }));
  },

  updateQuiz: (data) => {
    set((state) => ({
      quizzes:
        state.quizzes?.map((i) => (i.id === data.id ? { ...data } : i)) ??
        undefined,
    }));
  },

  mergeQuizzes: (incomingQuizzes) => {
    set((state) => {
      if (!incomingQuizzes || incomingQuizzes.length === 0) return state;

      // If initial state is empty, set it directly
      if (!state.quizzes) {
        return { quizzes: incomingQuizzes };
      }

      let hasChanged = false;
      const incomingMap = new Map(
        incomingQuizzes.map((n) => [String(n.id), n])
      );

      // 1. Update existing quizzes in place if fields differ
      const nextQuizzes = state.quizzes.map((existing) => {
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

      // 2. Append new quizzes that aren't in the store yet
      const existingIds = new Set(state.quizzes.map((n) => String(n.id)));
      for (const incoming of incomingQuizzes) {
        if (!existingIds.has(String(incoming.id))) {
          nextQuizzes.push(incoming);
          hasChanged = true;
        }
      }

      // CRITICAL: Return original `state` if nothing changed.
      // Zustand skips re-rendering all subscribers when the returned state reference is identical.
      if (!hasChanged) return state;

      return { quizzes: nextQuizzes };
    });
  },

  deleteQuiz: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      quizzes: state.quizzes?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
