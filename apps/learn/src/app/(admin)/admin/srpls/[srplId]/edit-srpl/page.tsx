import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import { typeParams } from '../../layout';
import { redirect } from 'next/navigation';
import PartialPageSrplsAdminEdit from '@learn/ui/partial/page/srpls/admin/edit';

const metaTitle = `Edit ID/Passport Number`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function Srpl({ params }: { params: Promise<typeParams> }) {
  const srplId = (await params).srplId;

  if (!srplId) redirect('/not-found');

  return (
    <LayoutPage>
      <PartialPageSrplsAdminEdit props={{ srplId }} />
    </LayoutPage>
  );
}
