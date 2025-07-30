'use client';

import { configureStore } from '@reduxjs/toolkit';
import reducerSession from './slices/session';
import { isProduction } from '@/utilities/helpers/environment';
import reducerColorScheme from './slices/color-scheme';
import reducerComments from './slices/comments';
import reducerConversation from './slices/claude';

export const makeStore = () => {
  return configureStore({
    reducer: {
      colorScheme: reducerColorScheme,
      session: reducerSession,
      comments: reducerComments,
      claude: reducerConversation,
    },

    devTools: isProduction(),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
