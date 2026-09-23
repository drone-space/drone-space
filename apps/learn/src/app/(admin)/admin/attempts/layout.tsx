import React from 'react';
import { LayoutMain } from '@repo/ui';
import { Metadata } from 'next';
import { APP_NAME } from '@repo/constants';

export type typeParams = Promise<{
  attemptId: string;
}>;

export const metadata: Metadata = {
  title: {
    default: 'Attempts',
    template: `%s - Attempts - Admin - ${APP_NAME.LEARN}`,
  },
};

export default async function LayoutAdmin({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutMain>{children}</LayoutMain>;
}
