import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import { typeParams } from '../layout';
import { redirect } from 'next/navigation';
import PartialPageQuizStudentViewOne from '@/components/partial/page/quizzes/student/view/one';

export default async function Quizzes({
  params,
}: {
  params: Promise<typeParams>;
}) {
  const quizId = (await params).quizId;

  if (!quizId) redirect('/not-found');

  return (
    <LayoutPage>
      <PartialPageQuizStudentViewOne props={{ quizId }} />
    </LayoutPage>
  );
}
