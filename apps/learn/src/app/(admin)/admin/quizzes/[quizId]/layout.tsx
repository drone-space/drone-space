import React from 'react';
import { LayoutMain } from '@repo/ui';
import { typeParams } from '../layout';
import { Metadata } from 'next';
import { QuizGet } from '@repo/types';
import { quizzesGet } from '@repo/handlers';
import { APP_NAME, getApiUrl, getBaseUrl } from '@repo/constants';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<typeParams>;
}): Promise<Metadata> => {
  const { items: quizzes }: { items: QuizGet[] } = await quizzesGet({
    apiUrl: await getApiUrl(),
  });

  if (quizzes == null) {
    console.error('x--> Quizzes not found');
  }

  const quizId = (await params).quizId;

  const quiz = quizzes.find((p) => p.id == quizId);

  const metaTitle = `${quiz?.title}`;

  return {
    title: {
      default: metaTitle,
      template: `%s - Quizzes - Admin - ${APP_NAME.LEARN}`,
    },
  };
};

export default function LayoutQuiz({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutMain>{children}</LayoutMain>;
}
