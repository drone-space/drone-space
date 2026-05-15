import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { images } from '@repo/constants/images';
import { APP_NAME, COMPANY_NAME } from '@repo/constants/app';
import PartialPageAttemptsStudentViewMany from '@/components/partial/page/attempts/student/view/many';

const metaTitle = `Attempts`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function AttemptsQuizzes() {
  return (
    <LayoutPage>
      <PartialPageAttemptsStudentViewMany />
    </LayoutPage>
  );
}
