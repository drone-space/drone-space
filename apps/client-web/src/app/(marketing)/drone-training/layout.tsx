import React from 'react';
import { Metadata } from 'next';
import LayoutMain from '@repo/components/layout/main';
import { APP_NAME } from '@repo/constants/app';

export type typeParams = Promise<{
  courseTitle: string;
}>;

export const metadata: Metadata = {
  title: {
    default: 'Drone Training ',
    template: `%s - Drone Training  - ${APP_NAME.WEB}`,
  },
};

export default function LayoutTraining({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutMain>{children}</LayoutMain>;
}
