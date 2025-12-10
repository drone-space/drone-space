import { create } from 'zustand';

export type ModalValue =
  | { newsletter: boolean; featuredDrone: boolean }
  | null
  | undefined;

interface ModalState {
  modal: ModalValue;
  setModal: (data: ModalValue) => void;
  clearModal: () => void;
}

export const useStoreModal = create<ModalState>((set) => ({
  modal: undefined,

  setModal: (data) => {
    set({ modal: data });
  },

  clearModal: () => {
    set({ modal: undefined });
  },
}));
