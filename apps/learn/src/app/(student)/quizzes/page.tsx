import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import PartialPageQuizzesStudentViewMany from '@learn/ui/partial/page/quizzes/student/view/many';

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
