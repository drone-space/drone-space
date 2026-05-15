/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import React from 'react';
import LayoutMain from '@repo/components/layout/main';
import AppshellStudent from '@/components/layout/appshell/student';
import { Metadata } from 'next';
import { APP_NAME } from '@repo/constants/app';

export type typeParams = Promise<{
  quizId: string;
  attemptId: string;
}>;

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
