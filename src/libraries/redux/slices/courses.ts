import { DATABASE_MODELS } from '@/data/constants';
import { CourseRelations } from '@/types/models/course';
import { createSlice } from '@reduxjs/toolkit';

export const sliceCourses = createSlice({
  name: DATABASE_MODELS.COURSES,
  initialState: {
    value: null satisfies CourseRelations[] | null as CourseRelations[] | null,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update: updateCourses } = sliceCourses.actions;

const reducerCourses = sliceCourses.reducer;

export default reducerCourses;
