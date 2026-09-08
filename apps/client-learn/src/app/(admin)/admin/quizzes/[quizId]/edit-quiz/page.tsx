import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import { typeParams } from '../../layout';
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
