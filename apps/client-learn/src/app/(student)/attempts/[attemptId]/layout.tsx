import React from 'react';
import LayoutMain from '@repo/components/layout/main';
import { typeParams } from '../layout';
import { Metadata } from 'next';
import { AttemptGet } from '@repo/types/models/attempt';
import { attemptsGet } from '@repo/handlers/requests/database/attempts';
import { APP_NAME } from '@repo/constants/app';

// export const generateMetadata = async ({
//   params,
// }: {
//   params: Promise<typeParams>;
// }): Promise<Metadata> => {
//   const { items: attempts }: { items: AttemptGet[] } = await attemptsGet();

//   if (attempts == null) {
//     console.error('x--> Attempts not found');
//   }

//   // const attemptId = (await params).attemptId;

//   // const attempt = attempts.find((p) => p.id == attemptId);

//   const metaTitle = `Attempt`;

//   return {
//     title: {
//       default: metaTitle,
//       template: `%s - Attempts - Admin - ${APP_NAME.LMS}`,
//     },
//   };
// };

export default function LayoutAttempt({
  children, // will be a page or nested layout
  // params,
}: {
  children: React.ReactNode;
  params: typeParams;
}) {
  return <LayoutMain>{children}</LayoutMain>;
}
