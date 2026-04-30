import React from 'react';
import { Metadata } from 'next';
import LayoutMain from '@repo/components/layout/main';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { images } from '@repo/constants/images';
import { APP_NAME, COMPANY_NAME } from '@repo/constants/app';

const metaTitle = `Drone Accessories`;

export const metadata: Metadata = {
  title: {
    default: `Drone Accessories`,
    template: `%s - ${metaTitle} - ${APP_NAME.WEB} Kenya`,
  },
  openGraph: {
    title: metaTitle,
    // description: metaDesc,
    url: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/shop/accessories`,
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

export default function AccessoriesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutMain>
      <main>{children}</main>
    </LayoutMain>
  );
}
