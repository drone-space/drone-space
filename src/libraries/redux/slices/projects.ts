import { DATABASE_MODELS } from '@/data/constants';
import { ProjectRelations } from '@/types/models/project';
import { createSlice } from '@reduxjs/toolkit';

export const sliceProjects = createSlice({
  name: DATABASE_MODELS.PROJECTS,
  initialState: {
    value: null satisfies ProjectRelations[] | null as
      | ProjectRelations[]
      | null,
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
