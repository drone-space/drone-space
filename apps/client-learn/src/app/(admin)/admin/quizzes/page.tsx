import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import PartialPageQuizzesAdminView from '@/components/partial/page/quizzes/admin/view';

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
