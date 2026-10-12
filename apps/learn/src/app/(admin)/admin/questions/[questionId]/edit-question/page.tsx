import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import { typeParams } from '../../layout';
import { redirect } from 'next/navigation';
import PartialPageQuestionsAdminEdit from '@learn/ui/partial/page/questions/admin/edit';

const metaTitle = `Edit Question`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function Question({ params }: { params: Promise<typeParams> }) {
  const questionId = (await params).questionId;

  if (!questionId) redirect('/not-found');

  return (
    <LayoutPage>
      <PartialPageQuestionsAdminEdit props={{ questionId }} />
    </LayoutPage>
  );
}
