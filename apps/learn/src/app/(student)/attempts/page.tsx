import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import PartialPageAttemptsStudentViewMany from '@learn/ui/partial/page/attempts/student/view/many';

const metaTitle = `Attempts`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function AttemptsQuizzes() {
  return (
    <LayoutPage>
      <PartialPageAttemptsStudentViewMany />
    </LayoutPage>
  );
}
