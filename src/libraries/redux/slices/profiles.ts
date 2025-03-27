import { DATABASE_MODELS } from '@/data/constants';
import { ProfileGet } from '@/types/models/profile';
import { createSlice } from '@reduxjs/toolkit';

export const sliceProfiles = createSlice({
  name: DATABASE_MODELS.PROFILES,
  initialState: {
    value: null satisfies ProfileGet[] | null as ProfileGet[] | null,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update: updateProfiles } = sliceProfiles.actions;

const reducerProfiles = sliceProfiles.reducer;

export default reducerProfiles;
