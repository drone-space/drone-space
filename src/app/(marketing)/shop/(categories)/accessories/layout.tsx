import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import { appName, companyName } from '@/data/app';

const metaTitle = `Drone Accessories`;

export const metadata: Metadata = {
  title: {
    default: `Drone Accessories`,
    template: `%s - ${metaTitle} - ${appName} Kenya`,
  },
  openGraph: {
    title: metaTitle,
    // description: metaDesc,
    url: `${HOSTED_BASE_URL.DEFAULT}/shop/accessories`,
    type: 'website',
    images: [
      {
        url: images.brand.droneSpace.logo.potrait.meta,
        width: 1200,
        height: 1200,
        alt: companyName,
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
    <LayoutBody>
      <main>{children}</main>
    </LayoutBody>
  );
}
