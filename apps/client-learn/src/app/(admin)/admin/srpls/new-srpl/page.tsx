import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import PartialPageSrplsAdminNew from '@/components/partial/page/quizzes/admin/new';

const metaTitle = `New SRPL`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function Srpls() {
  return (
    <LayoutPage>
      <PartialPageSrplsAdminNew />
    </LayoutPage>
  );
}
