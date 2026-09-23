import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import PartialPageSrplsAdminNew from '@learn/ui/partial/page/srpls/admin/new';

const metaTitle = `New ID/Passport Number`;

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
