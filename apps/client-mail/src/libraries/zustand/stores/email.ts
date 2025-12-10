import { create } from 'zustand';
import type { EmailGet } from '@repo/types/models/email';

export type EmailsValue = EmailGet[] | null | undefined;

interface EmailState {
  emails: EmailsValue;
  deleted: EmailGet[];
  setEmails: (data: EmailsValue) => void;
  setDeletedEmails: (data: EmailsValue) => void;
  clearEmails: () => void;
  clearDeletedEmails: () => void;
  addEmail: (data: EmailGet) => void;
  updateEmail: (data: EmailGet) => void;
  deleteEmail: (data: EmailGet) => void;
}

export const useStoreEmail = create<EmailState>((set) => ({
  emails: undefined,
  deleted: [],

  setEmails: (data) => {
    set({ emails: data });
  },

  setDeletedEmails: (data) => {
    set({ deleted: data || [] });
  },

  clearEmails: () => {
    set({ emails: [] });
  },

  clearDeletedEmails: () => {
    set({ deleted: [] });
  },

  addEmail: (data) => {
    set((state) => ({
      emails: [...(state.emails ?? []), data],
    }));
  },

  updateEmail: (data) => {
    set((state) => ({
      emails:
        state.emails?.map((i) => (i.id === data.id ? { ...data } : i)) ??
        undefined,
    }));
  },

  deleteEmail: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      emails: state.emails?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
