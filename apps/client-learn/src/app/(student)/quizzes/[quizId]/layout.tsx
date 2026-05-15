import React from 'react';
import LayoutMain from '@repo/components/layout/main';
import { typeParams } from '@/app/(admin)/layout';
import { Metadata } from 'next';
import { QuizGet } from '@repo/types/models/quiz';
import { quizzesGet } from '@repo/handlers/requests/database/quizzes';
import { APP_NAME } from '@repo/constants/app';

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
    title: {
      default: metaTitle,
      template: `%s - Quizzes - Admin - ${APP_NAME.LMS}`,
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
