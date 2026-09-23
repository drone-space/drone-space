import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import PartialPageQuestionsAdminNew from '@learn/ui/partial/page/questions/admin/new';

const metaTitle = `New Quiz`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function Questions() {
  return (
    <LayoutPage>
      <PartialPageQuestionsAdminNew />
    </LayoutPage>
  );
}
