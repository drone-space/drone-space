import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@repo/components/layout/body';
import { APP_NAME } from '@repo/constants/app';

export type typeParams = Promise<{
  courseTitle: string;
}>;

export const metadata: Metadata = {
  title: {
    default: 'Drone Solutions ',
    template: `%s - Drone Solutions  - ${APP_NAME.WEB}`,
  },
};

export default function LayoutServices({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
