/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import React from 'react';
import LayoutMain from '@repo/components/layout/main';
import AppshellAdmin from '@/components/layout/appshell/admin';
import ProviderStore from '@/components/provider/store';

export type typeParams = Promise<{
  quizId: string;
}>;

export default async function LayoutAdmin({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutMain>
      <ProviderStore>
        <AppshellAdmin>{children}</AppshellAdmin>
      </ProviderStore>
    </LayoutMain>
  );
}
