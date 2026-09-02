import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import PartialPageQuestionsAdminView from '@/components/partial/page/questions/admin/view';

const metaTitle = `Questions`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function Questions() {
  return (
    <LayoutPage>
      <PartialPageQuestionsAdminView />
    </LayoutPage>
  );
}
