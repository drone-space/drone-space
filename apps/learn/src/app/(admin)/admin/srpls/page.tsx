import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import PartialPageSrplsAdminView from '@learn/ui/partial/page/srpls/admin/view';

const metaTitle = `ID's/Passport Numbers`;

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
