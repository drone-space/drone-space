import { DATABASE_MODELS } from '@/data/constants';
import { AssignmentGet } from '@/types/models/assignment';
import { createSlice } from '@reduxjs/toolkit';

export const sliceAssignments = createSlice({
  name: DATABASE_MODELS.ASSIGNMENTS,
  initialState: {
    value: null satisfies AssignmentGet[] | null as AssignmentGet[] | null,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update: updateAssignments } = sliceAssignments.actions;

const reducerAssignments = sliceAssignments.reducer;

export default reducerAssignments;
