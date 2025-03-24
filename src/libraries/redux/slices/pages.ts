import { DATABASE_MODELS } from '@/data/constants';
import { PageGet } from '@/types/models/page';
import { createSlice } from '@reduxjs/toolkit';

export const slicePages = createSlice({
  name: DATABASE_MODELS.PAGES,
  initialState: {
    value: null satisfies PageGet | null as PageGet | null,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update: updatePages } = slicePages.actions;

const reducerPages = slicePages.reducer;

export default reducerPages;
