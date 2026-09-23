import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import { APP_NAME } from '@repo/constants';

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
