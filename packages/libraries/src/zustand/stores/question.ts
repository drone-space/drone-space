import { create } from 'zustand';
import type { QuestionGet } from '@repo/types/models/question';

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

  deleteQuestion: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      questions: state.questions?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
