import React from 'react';
import { LayoutMain } from '@repo/ui';
import { Metadata } from 'next';
import { APP_NAME } from '@repo/constants';

export type typeParams = Promise<{
  srplId: string;
}>;

export const metadata: Metadata = {
  title: {
    default: 'SRPLs',
    template: `%s - SRPLs - Admin - ${APP_NAME.LEARN}`,
  },
};

export default async function LayoutSrpls({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutMain>{children}</LayoutMain>;
}
