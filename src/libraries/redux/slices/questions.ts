import { DATABASE_MODELS } from '@/data/constants';
import { QuestionGet } from '@/types/models/questions';
import { createSlice } from '@reduxjs/toolkit';

export const sliceQuestions = createSlice({
  name: DATABASE_MODELS.QUESTIONS,
  initialState: {
    value: null satisfies QuestionGet[] | null as QuestionGet[] | null,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update: updateQuestions } = sliceQuestions.actions;

const reducerQuestions = sliceQuestions.reducer;

export default reducerQuestions;
