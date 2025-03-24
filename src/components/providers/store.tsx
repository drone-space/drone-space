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

export default function Store({
  children,
  session,
  colorScheme,
  academy,
}: {
  children: React.ReactNode;
  session: AuthUser | null;
  colorScheme: string;
  academy: {
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
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();

    // initialize store

    if (session) {
      // session
      storeRef.current.dispatch(updateSession(session));
    }

    // color scheme
    storeRef.current.dispatch(updateColorScheme(colorScheme));

    // academy
    storeRef.current.dispatch(updateProjects(academy.projects));
    storeRef.current.dispatch(updateCourses(academy.courses));
    storeRef.current.dispatch(updateSections(academy.sections));
    storeRef.current.dispatch(updateModules(academy.modules));
    storeRef.current.dispatch(updatePages(academy.pages));
    storeRef.current.dispatch(updateAssignments(academy.assignments));
    storeRef.current.dispatch(updateQuizzes(academy.quizzes));
    storeRef.current.dispatch(updateQuestions(academy.questions));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
