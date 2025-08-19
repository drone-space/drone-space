import { createSlice } from '@reduxjs/toolkit';

export const sliceModals = createSlice({
  name: 'modals',
  initialState: {
    newsletter: null as boolean | null satisfies boolean | null,
    featuredDrone: null as boolean | null satisfies boolean | null,
  },
  reducers: {
    updateModalNewsletter: (state, action) => {
      state.newsletter = action.payload;
    },
    updateModalFeaturedDrone: (state, action) => {
      state.featuredDrone = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateModalNewsletter, updateModalFeaturedDrone } =
  sliceModals.actions;

const reducerModals = sliceModals.reducer;

export default reducerModals;
