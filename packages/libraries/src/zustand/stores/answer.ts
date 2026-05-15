import { create } from 'zustand';
import type { AnswerGet } from '@repo/types/models/answer';

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

  deleteAnswer: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      answers: state.answers?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
