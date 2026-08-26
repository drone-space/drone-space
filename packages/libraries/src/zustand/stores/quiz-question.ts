import { create } from 'zustand';
import type { QuizQuestionGet } from '@repo/types/models/quiz-question';
import { hasChanges } from '@repo/utilities/object';

export type QuizQuestionsValue = QuizQuestionGet[] | null | undefined;

interface QuizQuestionState {
  quizQuestions: QuizQuestionsValue;
  deleted: QuizQuestionGet[];
  setQuizQuestions: (data: QuizQuestionsValue) => void;
  setDeletedQuizQuestions: (data: QuizQuestionsValue) => void;
  clearQuizQuestions: () => void;
  clearDeletedQuizQuestions: () => void;
  addQuizQuestion: (data: QuizQuestionGet) => void;
  updateQuizQuestion: (data: QuizQuestionGet) => void;
  mergeQuizQuestions: (data: QuizQuestionGet[]) => void;
  deleteQuizQuestion: (data: QuizQuestionGet) => void;
}

export const useStoreQuizQuestion = create<QuizQuestionState>((set) => ({
  quizQuestions: undefined,
  deleted: [],

  setQuizQuestions: (data) => {
    set({ quizQuestions: data });
  },

  setDeletedQuizQuestions: (data) => {
    set({ deleted: data || [] });
  },

  clearQuizQuestions: () => {
    set({ quizQuestions: [] });
  },

  clearDeletedQuizQuestions: () => {
    set({ deleted: [] });
  },

  addQuizQuestion: (data) => {
    set((state) => ({
      quizQuestions: [...(state.quizQuestions ?? []), data],
    }));
  },

  updateQuizQuestion: (data) => {
    set((state) => ({
      quizQuestions:
        state.quizQuestions?.map((i) => (i.id === data.id ? { ...data } : i)) ??
        undefined,
    }));
  },

  mergeQuizQuestions: (incomingQuizQuestions) => {
    set((state) => {
      if (!incomingQuizQuestions || incomingQuizQuestions.length === 0)
        return state;

      // If initial state is empty, set it directly
      if (!state.quizQuestions) {
        return { quizQuestions: incomingQuizQuestions };
      }

      let hasChanged = false;
      const incomingMap = new Map(
        incomingQuizQuestions.map((n) => [String(n.id), n])
      );

      // 1. Update existing quizQuestions in place if fields differ
      const nextQuizQuestions = state.quizQuestions.map((existing) => {
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

      // 2. Append new quizQuestions that aren't in the store yet
      const existingIds = new Set(state.quizQuestions.map((n) => String(n.id)));
      for (const incoming of incomingQuizQuestions) {
        if (!existingIds.has(String(incoming.id))) {
          nextQuizQuestions.push(incoming);
          hasChanged = true;
        }
      }

      // CRITICAL: Return original `state` if nothing changed.
      // Zustand skips re-rendering all subscribers when the returned state reference is identical.
      if (!hasChanged) return state;

      return { quizQuestions: nextQuizQuestions };
    });
  },

  deleteQuizQuestion: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      quizQuestions:
        state.quizQuestions?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
