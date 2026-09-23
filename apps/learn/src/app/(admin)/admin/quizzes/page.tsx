import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import PartialPageQuizzesAdminView from '@learn/ui/partial/page/quizzes/admin/view';

const metaTitle = `Quizzes`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function Quizzes() {
  return (
    <LayoutPage>
      <PartialPageQuizzesAdminView />
    </LayoutPage>
  );
}
