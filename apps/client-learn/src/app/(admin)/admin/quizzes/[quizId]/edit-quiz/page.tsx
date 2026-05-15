import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { images } from '@repo/constants/images';
import { APP_NAME, COMPANY_NAME } from '@repo/constants/app';
import { typeParams } from '@/app/(admin)/layout';
import { redirect } from 'next/navigation';
import PartialPageQuizzesAdminEdit from '@/components/partial/page/quizzes/admin/edit';

const metaTitle = `${APP_NAME.WEB} FAQ - Answers to Your Drone Training Questions`;
const metaDesc =
  'Get quick answers to common questions about drone training, services, and requirements in Kenya. Your guide to Drone Space resources.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    // url: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/faq`,
    type: 'website',
    images: [
      {
        url: images.brand.droneSpace.logo.potrait.meta,
        width: 1200,
        height: 1200,
        alt: COMPANY_NAME,
      },
    ],
  },
};

export default async function Quiz({
  params,
}: {
  params: Promise<typeParams>;
}) {
  const quizId = (await params).quizId;

  if (!quizId) redirect('/not-found');

  return (
    <LayoutPage>
      <PartialPageQuizzesAdminEdit props={{ quizId }} />
    </LayoutPage>
  );
}
