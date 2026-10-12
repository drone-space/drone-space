import React from 'react';
import { LayoutMain } from '@repo/ui';
import { typeParams } from '../layout';
import { Metadata } from 'next';
import { QuestionGet } from '@repo/types';
import { questionsGet } from '@repo/handlers';
import { APP_NAME, getApiUrl } from '@repo/constants';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<typeParams>;
}): Promise<Metadata> => {
  const { items: questions }: { items: QuestionGet[] } = await questionsGet({
    apiUrl: await getApiUrl(),
  });

  if (questions == null) {
    console.error('x--> Questions not found');
  }

  const questionId = (await params).questionId;

  const question = questions.find((p) => p.id == questionId);

  const metaTitle = `${question?.content}`;

  return {
    title: {
      default: metaTitle,
      template: `%s - Questions - Admin - ${APP_NAME.LEARN}`,
    },
  };
};

export default function LayoutQuestion({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutMain>{children}</LayoutMain>;
}
