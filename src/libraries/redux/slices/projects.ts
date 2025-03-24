import { DATABASE_MODELS } from '@/data/constants';
import { ProjectGet } from '@/types/models/project';
import { createSlice } from '@reduxjs/toolkit';

export const sliceProjects = createSlice({
  name: DATABASE_MODELS.PROJECTS,
  initialState: {
    value: null satisfies ProjectGet | null as ProjectGet | null,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update: updateProjects } = sliceProjects.actions;

const reducerProjects = sliceProjects.reducer;

export default reducerProjects;
