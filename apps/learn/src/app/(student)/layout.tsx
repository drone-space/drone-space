import React from 'react';
import LayoutMain from '@repo/ui/layout/main';
import AppshellStudent from '@/components/layout/appshell/student';
import { Metadata } from 'next';
import { APP_NAME } from '@repo/constants/app';

export const metadata: Metadata = {
  title: {
    default: 'Student Portal',
    template: `%s - Student Portal - ${APP_NAME.LMS}`,
  },
};

export default async function LayoutStudent({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutMain>
      <AppshellStudent>{children}</AppshellStudent>
    </LayoutMain>
  );
}
