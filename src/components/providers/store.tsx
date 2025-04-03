'use client';

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/libraries/redux/store';
import { updateColorScheme } from '@/libraries/redux/slices/color-scheme';
import { updateSession } from '@/libraries/redux/slices/session';
import { AuthUser } from '@/types/auth';
import { ProjectGet } from '@/types/models/project';
import { CourseGet } from '@/types/models/course';
import { SectionGet } from '@/types/models/section';
import { ModuleGet } from '@/types/models/module';
import { PageGet } from '@/types/models/page';
import { AssignmentGet } from '@/types/models/assignment';
import { QuizGet } from '@/types/models/quiz';
import { QuestionGet } from '@/types/models/questions';
import { updateProjects } from '@/libraries/redux/slices/projects';
import { updateCourses } from '@/libraries/redux/slices/courses';
import { updateSections } from '@/libraries/redux/slices/sections';
import { updateModules } from '@/libraries/redux/slices/modules';
import { updatePages } from '@/libraries/redux/slices/pages';
import { updateAssignments } from '@/libraries/redux/slices/assignments';
import { updateQuizzes } from '@/libraries/redux/slices/quizzes';
import { updateQuestions } from '@/libraries/redux/slices/questions';
import { ProfileGet } from '@/types/models/profile';
import { updateProfiles } from '@/libraries/redux/slices/profiles';

export default function Store({
  children,
  colorScheme,
  session,
  academy,
}: {
  colorScheme: string;
  session?: AuthUser | null;
  children: React.ReactNode;
  academy?: {
    profiles: ProfileGet[];
    projects: ProjectGet[];
    courses: CourseGet[];
    sections: SectionGet[];
    modules: ModuleGet[];
    pages: PageGet[];
    assignments: AssignmentGet[];
    quizzes: QuizGet[];
    questions: QuestionGet[];
  };
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  // Always update store with the latest props
  const store = storeRef.current;

  store.dispatch(updateColorScheme(colorScheme));

  if (session) store.dispatch(updateSession(session));

  if (academy) {
    store.dispatch(updateProjects(academy.projects));
    store.dispatch(updateCourses(academy.courses));
    store.dispatch(updateSections(academy.sections));
    store.dispatch(updateModules(academy.modules));
    store.dispatch(updatePages(academy.pages));
    store.dispatch(updateAssignments(academy.assignments));
    store.dispatch(updateQuizzes(academy.quizzes));
    store.dispatch(updateQuestions(academy.questions));
    store.dispatch(updateProfiles(academy.profiles));
  }

  return <Provider store={store}>{children}</Provider>;
}
