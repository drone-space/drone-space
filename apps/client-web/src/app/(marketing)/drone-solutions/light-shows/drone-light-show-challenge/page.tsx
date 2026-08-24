import React from 'react';
import { Metadata } from 'next';
import { images } from '@repo/constants/images';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { COMPANY_NAME } from '@repo/constants/app';
import PartialLightShowChallenge from '@/components/partial/page/light-show-challenge';

export const dynamic = 'force-static';

const metaTitle = 'Drone Light Shows - Stunning Aerial Displays by Drone Space';
const metaDesc =
  'Experience breathtaking drone light shows for events and celebrations. Discover how Drone Space creates unforgettable aerial art.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/drone-solutions/light-shows`,
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

export default async function LighShow() {
  return <PartialLightShowChallenge />;
}
