import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import appData from '@/data/app';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';

const metaTitle = `Drone Accessories`;

export const metadata: Metadata = {
  title: {
    default: `Drone Accessories`,
    template: `%s - ${metaTitle} - ${appData.name.company} Kenya`,
  },
  openGraph: {
    title: metaTitle,
    // description: metaDesc,
    url: `${HOSTED_BASE_URL.DRONE_SPACE}/shop/accessories`,
    type: 'website',
    images: [
      {
        url: images.brand.droneSpace.logo.potrait.meta,
        width: 1200,
        height: 1200,
        alt: appData.name.company,
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
