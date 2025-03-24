import { DATABASE_MODELS } from '@/data/constants';
import { QuizGet } from '@/types/models/quiz';
import { createSlice } from '@reduxjs/toolkit';

export const sliceQuizzes = createSlice({
  name: DATABASE_MODELS.QUIZZES,
  initialState: {
    value: null satisfies QuizGet | null as QuizGet | null,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update: updateQuizzes } = sliceQuizzes.actions;

const reducerQuizzes = sliceQuizzes.reducer;

export default reducerQuizzes;
