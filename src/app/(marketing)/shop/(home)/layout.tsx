import React from 'react';

import { Metadata } from 'next';

import LayoutBody from '@/components/layout/body';
import AffixNavbar from '@/components/common/affixi/navbar';
// import AffixAssistant from '@/components/common/affixi/assistant';

import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import { appName, companyName } from '@/data/app';

const metaTitle = `Drone Shop - Top Drones & Accessories at ${appName} Kenya`;
const metaDesc = `Discover the best DJI drones in Kenya for every need at ${appName}. Shop top-rated drones for beginners, professionals, and enthusiasts. Elevate your aerial experience today!`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DEFAULT}/shop`,
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

export default function ShopLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody>
      {children}

      <AffixNavbar />
      {/* <AffixAssistant /> */}
    </LayoutBody>
  );
}
