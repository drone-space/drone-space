import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import PartialPageSrplsAdminView from '@/components/partial/page/srpls/admin/view';

const metaTitle = `SRPLs`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function Srpls() {
  return (
    <LayoutPage>
      <PartialPageSrplsAdminView />
    </LayoutPage>
  );
}
