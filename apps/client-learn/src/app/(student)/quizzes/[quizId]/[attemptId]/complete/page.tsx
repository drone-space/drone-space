import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import PartialPageQuizzesStudentAttemptComplete from '@/components/partial/page/quizzes/student/attempt-complete';
import { typeParams } from '@/app/(student)/layout';
import { redirect } from 'next/navigation';

export default async function Quizzes({
  params,
}: {
  params: Promise<typeParams>;
}) {
  const attemptId = (await params).attemptId;

  if (!attemptId) redirect('/not-found');

  return (
    <LayoutPage>
      <PartialPageQuizzesStudentAttemptComplete props={{ attemptId }} />
    </LayoutPage>
  );
}
