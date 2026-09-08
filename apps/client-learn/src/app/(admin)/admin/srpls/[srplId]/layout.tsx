import React from 'react';
import LayoutMain from '@repo/components/layout/main';
import { typeParams } from '../layout';
import { Metadata } from 'next';
import { SrplGet } from '@repo/types/models/srpl';
import { srplsGet } from '@repo/handlers/requests/database/srpls';
import { APP_NAME } from '@repo/constants/app';
import { API_URL } from '@repo/constants/paths';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<typeParams>;
}): Promise<Metadata> => {
  const { items: srpls }: { items: SrplGet[] } = await srplsGet({
    apiUrl: API_URL,
  });

  if (srpls == null) {
    console.error('x--> SRPLs not found');
  }

  const srplId = (await params).srplId;

  const srpl = srpls.find((p) => p.id == srplId);

  const metaTitle = `${srpl?.srplNumber}`;

  return {
    title: {
      default: metaTitle,
      template: `%s - SRPLs - Admin - ${APP_NAME.LMS}`,
    },
  };
};

export default function LayoutSrpl({
  children, // will be a page or nested layout
  // params,
}: {
  children: React.ReactNode;
  params: typeParams;
}) {
  return <LayoutMain>{children}</LayoutMain>;
}
