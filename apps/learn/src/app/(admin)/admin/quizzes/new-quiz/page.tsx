import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import PartialPageQuizzesAdminNew from '@learn/ui/partial/page/quizzes/admin/new';

const metaTitle = `New Quiz`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function Quizzes() {
  return (
    <LayoutPage>
      <PartialPageQuizzesAdminNew />
    </LayoutPage>
  );
}
