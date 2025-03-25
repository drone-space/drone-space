import { DATABASE_MODELS } from '@/data/constants';
import { SectionGet } from '@/types/models/section';
import { createSlice } from '@reduxjs/toolkit';

export const sliceSections = createSlice({
  name: DATABASE_MODELS.SECTIONS,
  initialState: {
    value: null satisfies SectionGet[] | null as SectionGet[] | null,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update: updateSections } = sliceSections.actions;

const reducerSections = sliceSections.reducer;

export default reducerSections;
