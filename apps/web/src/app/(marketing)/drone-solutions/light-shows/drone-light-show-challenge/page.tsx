import React from 'react';
import { Metadata } from 'next';
import { getBaseUrl, images } from '@repo/constants';
import { COMPANY_NAME } from '@repo/constants';
import PartialLightShowChallenge from '@web/ui/partial/page/light-show-challenge';

export const dynamic = 'force-static';

const metaTitle = 'Drone Light Show Challenge | Win an Event Ticket';
const metaDesc =
  'Take our quick 1-question alumni challenge for a chance to win an exclusive ticket to a stunning Drone Space drone light show. Test your knowledge now!';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();

  return {
    title: metaTitle,
    description: metaDesc,
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: `${baseUrl.WEB}/drone-solutions/light-shows/drone-light-show-challenge`,
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

export default async function LighShow() {
  return <PartialLightShowChallenge />;
}
