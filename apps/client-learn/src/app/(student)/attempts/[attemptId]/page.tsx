import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { images } from '@repo/constants/images';
import { APP_NAME, COMPANY_NAME } from '@repo/constants/app';
import { typeParams } from '@/app/(student)/layout';
import { redirect } from 'next/navigation';
import PartialPageAttemptsStudentResult from '@/components/partial/page/attempts/student/result';

export default async function Attempt({
  params,
}: {
  params: Promise<typeParams>;
}) {
  const attemptId = (await params).attemptId;

  if (!attemptId) redirect('/not-found');

  return (
    <LayoutPage>
      <PartialPageAttemptsStudentResult props={{ attemptId }} />
    </LayoutPage>
  );
}
