import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import products from '@/data/products';
import { Grid, GridCol } from '@mantine/core';
import CardShopDronesMain from '@/components/common/cards/shop/drones/main';
import appData from '@/data/app';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import IntroPage from '@/components/layout/intro/page';

const metaTitle = `Upcoming Drones - New Drone Releases & Innovations | ${appData.name.app}`;
const metaDesc = `Stay ahead with the latest drone technology. Get a sneak peek at upcoming releases and cutting-edge models launching soon.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DRONE_SPACE}/shop/drones/camera`,
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

export default async function Camera() {
  const drones = products.filter((p) => p.category == 'camera');

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

      <LayoutSection
        id="page-drones-agri"
        padded
        containerized={'responsive'}
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid>
          {drones.map((drone, index) => (
            <GridCol key={index} span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
              <CardShopDronesMain data={drone} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
