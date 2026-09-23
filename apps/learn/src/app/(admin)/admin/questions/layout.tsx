import React from 'react';
import { LayoutMain } from '@repo/ui';
import { Metadata } from 'next';
import { APP_NAME } from '@repo/constants';

export type typeParams = Promise<{
  quizId: string;
}>;

export const metadata: Metadata = {
  title: {
    default: 'Questions',
    template: `%s - Questions - Admin - ${APP_NAME.LEARN}`,
  },
};

export default async function LayoutAdminQuestions({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutMain>{children}</LayoutMain>;
}
