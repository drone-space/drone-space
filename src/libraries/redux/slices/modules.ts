import { DATABASE_MODELS } from '@/data/constants';
import { ModuleGet } from '@/types/models/module';
import { createSlice } from '@reduxjs/toolkit';

export const sliceModules = createSlice({
  name: DATABASE_MODELS.MODULES,
  initialState: {
    value: null satisfies ModuleGet | null as ModuleGet | null,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update: updateModules } = sliceModules.actions;

const reducerModules = sliceModules.reducer;

export default reducerModules;
