'use client';

import { configureStore } from '@reduxjs/toolkit';
import reducerSession from './slices/session';
import { isProduction } from '@/utilities/helpers/environment';
import reducerColorScheme from './slices/color-scheme';
import reducerComments from './slices/comments';
import reducerAi from './slices/ai';
import reducerModals from './slices/modals';

export const makeStore = () => {
  return configureStore({
    reducer: {
      colorScheme: reducerColorScheme,
      session: reducerSession,
      comments: reducerComments,
      ai: reducerAi,
      modals: reducerModals,
    },

    devTools: isProduction(),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
