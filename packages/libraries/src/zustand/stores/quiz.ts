import { create } from 'zustand';
import type { QuizGet } from '@repo/types/models/quiz';

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

  deleteQuiz: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      quizzes: state.quizzes?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
