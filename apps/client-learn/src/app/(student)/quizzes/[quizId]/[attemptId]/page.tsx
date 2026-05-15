import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import PartialPageQuizzesStudentAttempt from '@/components/partial/page/quizzes/student/attempt';
import { typeParams } from '@/app/(student)/layout';
import { redirect } from 'next/navigation';

export default async function Quizzes({
  params,
}: {
  params: Promise<typeParams>;
}) {
  const resolvedParams = await params;
  const quizId = resolvedParams.quizId;
  const attemptId = resolvedParams.attemptId;

  if (!quizId) redirect('/not-found');

  return (
    <LayoutPage>
      <PartialPageQuizzesStudentAttempt props={{ quizId, attemptId }} />
    </LayoutPage>
  );
}
