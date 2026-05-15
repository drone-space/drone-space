import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { images } from '@repo/constants/images';
import { APP_NAME, COMPANY_NAME } from '@repo/constants/app';
import { typeParams } from '@/app/(admin)/layout';
import { redirect } from 'next/navigation';
import PartialPageQuizzesAdminEdit from '@/components/partial/page/quizzes/admin/edit';

const metaTitle = `Edit Quiz`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function Quiz({
  params,
}: {
  params: Promise<typeParams>;
}) {
  const quizId = (await params).quizId;

  if (!quizId) redirect('/not-found');

  return (
    <LayoutPage>
      <PartialPageQuizzesAdminEdit props={{ quizId }} />
    </LayoutPage>
  );
}
