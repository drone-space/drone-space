import React from 'react';
import LayoutMain from '@repo/components/layout/main';
import { typeParams } from '@/app/(admin)/layout';
import { Metadata } from 'next';
import { QuizGet } from '@repo/types/models/quiz';
import { quizzesGet } from '@repo/handlers/requests/database/quizzes';
import { images } from '@repo/constants/images';
import { COMPANY_NAME } from '@repo/constants/app';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<typeParams>;
}): Promise<Metadata> => {
  const { items: quizzes }: { items: QuizGet[] } = await quizzesGet();

  if (quizzes == null) {
    console.error('x--> Quizzes not found');
  }

  const quizId = (await params).quizId;

  const quiz = quizzes.find((p) => p.id == quizId);

  const metaTitle = `${quiz?.title}`;

  return {
    title: metaTitle,
    description: quiz?.description || '',
    openGraph: {
      title: metaTitle,
      description: quiz?.description || '',
      // url: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/blog/${linkify(quiz?.title || '')}-${quiz?.id}`,
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
};

export default function LayoutQuiz({
  children, // will be a page or nested layout
  // params,
}: {
  children: React.ReactNode;
  params: typeParams;
}) {
  return <LayoutMain>{children}</LayoutMain>;
}
