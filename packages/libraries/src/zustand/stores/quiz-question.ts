import { create } from 'zustand';
import type { QuizQuestionGet } from '@repo/types/models/quiz_question';

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

  deleteQuizQuestion: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      quizQuestions:
        state.quizQuestions?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
