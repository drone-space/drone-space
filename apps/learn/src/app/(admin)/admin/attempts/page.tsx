import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import PartialPageAttemptsAdminView from '@learn/ui/partial/page/attempts/admin/view';

const metaTitle = `Attempts`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function Attempts() {
  return (
    <LayoutPage>
      <PartialPageAttemptsAdminView />
    </LayoutPage>
  );
}
