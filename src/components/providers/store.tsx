'use client';

import React, { useMemo, useRef } from 'react';
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
  session,
  colorScheme,
  academy,
}: {
  children: React.ReactNode;
  session: AuthUser | null;
  colorScheme: string;
  academy: {
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
  const storeRef = useRef<AppStore>();

  const store = useMemo(() => {
    if (storeRef.current) return storeRef.current;

    // Create the store instance the first time this renders
    const newStore = makeStore();

    if (session) newStore.dispatch(updateSession(session));
    if (colorScheme) newStore.dispatch(updateColorScheme(colorScheme));

    newStore.dispatch(updateProjects(academy.projects));
    newStore.dispatch(updateCourses(academy.courses));
    newStore.dispatch(updateSections(academy.sections));
    newStore.dispatch(updateModules(academy.modules));
    newStore.dispatch(updatePages(academy.pages));
    newStore.dispatch(updateAssignments(academy.assignments));
    newStore.dispatch(updateQuizzes(academy.quizzes));
    newStore.dispatch(updateQuestions(academy.questions));
    newStore.dispatch(updateProfiles(academy.profiles));

    return newStore;
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
