'use client';

import { configureStore } from '@reduxjs/toolkit';

import reducerColorScheme from './slices/color-scheme';
import reducerSession from './slices/session';
import reducerComments from './slices/comments';
import reducerConversation from './slices/claude';
import reducerProjects from './slices/projects';
import reducerCourses from './slices/courses';
import reducerSections from './slices/sections';
import reducerModules from './slices/modules';
import reducerPages from './slices/pages';
import reducerAssignments from './slices/assignments';
import reducerQuizzes from './slices/quizzes';
import reducerQuestions from './slices/questions';
import reducerProfiles from './slices/profiles';

export const makeStore = () => {
  return configureStore({
    reducer: {
      colorScheme: reducerColorScheme,
      session: reducerSession,
      comments: reducerComments,
      claude: reducerConversation,

      // academy
      projects: reducerProjects,
      courses: reducerCourses,
      sections: reducerSections,
      modules: reducerModules,
      pages: reducerPages,
      assignments: reducerAssignments,
      quizzes: reducerQuizzes,
      questions: reducerQuestions,
      profiles: reducerProfiles,
    },

    devTools: process.env.NODE_ENV !== 'production',
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
