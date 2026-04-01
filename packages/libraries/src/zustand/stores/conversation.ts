import { create } from 'zustand';
import { Turn } from '@repo/types/ai';

export type ConversationValue = Turn[];

interface ConversationState {
  conversation: ConversationValue;
  setConversation: (data: ConversationValue) => void;
  clearConversation: () => void;
}

export const useStoreConversation = create<ConversationState>((set) => ({
  conversation: [],

  setConversation: (data) => {
    set({ conversation: data });
  },

  clearConversation: () => {
    set({ conversation: undefined });
  },
}));
