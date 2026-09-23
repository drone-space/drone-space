import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import PartialPageDashboardStudent from '@learn/ui/partial/page/dashboard/student';

const metaTitle = `Dashboard`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function Dashboard() {
  return (
    <LayoutPage>
      <PartialPageDashboardStudent />
    </LayoutPage>
  );
}
