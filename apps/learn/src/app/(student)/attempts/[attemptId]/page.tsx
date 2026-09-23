import React from 'react';
import { LayoutPage } from '@repo/ui';
import { typeParams } from '../layout';
import { redirect } from 'next/navigation';
import PartialPageAttemptsStudentResult from '@learn/ui/partial/page/attempts/student/result';

export default async function Attempt({ params }: { params: Promise<typeParams> }) {
  const attemptId = (await params).attemptId;

  if (!attemptId) redirect('/not-found');

  return (
    <LayoutPage>
      <PartialPageAttemptsStudentResult props={{ attemptId }} />
    </LayoutPage>
  );
}
