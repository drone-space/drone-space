import { Turn } from '@/types/claude';
import { createSlice } from '@reduxjs/toolkit';

export const sliceConversation = createSlice({
  name: 'claude',
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
