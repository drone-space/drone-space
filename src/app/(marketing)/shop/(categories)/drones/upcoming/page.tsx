import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { upcomingDrones } from '@/data/products';
import { Grid, GridCol } from '@mantine/core';

import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import IntroPage from '@/components/layout/intros/page';
import CtaFeatured from '@/components/partials/cta/featured';
import CardShopDroneUpcoming from '@/components/common/cards/shop/drones/upcoming';
import { appName, companyName } from '@/data/app';

const metaTitle = `Upcoming Drones - New Drone Releases & Innovations | ${appName}`;
const metaDesc = `Stay ahead with the latest drone technology. Get a sneak peek at upcoming releases and cutting-edge models launching soon.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DEFAULT}/shop/drones/camera`,
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

export default async function Camera() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Shop',
          title: 'Upcoming Releases',
          desc: 'Be the first to explore the latest drone innovations and upcoming models hitting the skies soon.',
          bg: images.carousel.shop.image6,
        }}
      />

      <CtaFeatured />

      <LayoutSection
        id="page-drones-upcoming"
        padded
        containerized={'responsive'}
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid>
          {upcomingDrones.map((drone, index) => (
            <GridCol key={index} span={{ base: 12, xs: 6 }}>
              <CardShopDroneUpcoming data={drone} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
