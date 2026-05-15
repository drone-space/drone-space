import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import PartialPageQuizzesStudentViewMany from '@/components/partial/page/quizzes/student/view/many';

const metaTitle = `Quizzes`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function Quizzes() {
  return (
    <LayoutPage>
      <PartialPageQuizzesStudentViewMany />
    </LayoutPage>
  );
}
