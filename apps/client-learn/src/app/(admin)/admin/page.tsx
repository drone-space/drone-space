import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import { APP_NAME } from '@repo/constants/app';

const metaTitle = `Dashboard`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function Quizzes() {
  return (
    <LayoutPage>
      <div>admin home page</div>
    </LayoutPage>
  );
}
