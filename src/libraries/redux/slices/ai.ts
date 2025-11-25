import { Turn } from '@/types/ai';
import { createSlice } from '@reduxjs/toolkit';

export const sliceConversation = createSlice({
  name: 'ai.conversation',
  initialState: {
    value: [] satisfies Turn[] as Turn[],
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update: updateConversation } = sliceConversation.actions;

const reducerConversation = sliceConversation.reducer;
export default reducerConversation;
