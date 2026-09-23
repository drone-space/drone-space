import React from 'react';
import { Metadata } from 'next';
import { LayoutMain } from '@repo/ui';
import { getBaseUrl, images } from '@repo/constants';
import { APP_NAME, COMPANY_NAME } from '@repo/constants';

const metaTitle = `Drone Accessories`;

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();

  return {
    title: {
      default: `Drone Accessories`,
      template: `%s - ${metaTitle} - ${APP_NAME.WEB} Kenya`,
    },
    metadataBase: new URL(baseUrl.WEB),
    openGraph: {
      title: metaTitle,
      // description: metaDesc,
      url: `${baseUrl.WEB}/shop/accessories`,
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
}

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
