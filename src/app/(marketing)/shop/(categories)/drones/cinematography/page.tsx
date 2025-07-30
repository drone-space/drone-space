import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import products from '@/data/products';
import { Grid, GridCol } from '@mantine/core';
import CardShopDronesMain from '@/components/common/cards/shop/drones/main';

import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import IntroPage from '@/components/layout/intros/page';
import CtaFeatured from '@/components/partials/cta/featured';
import { appName, companyName } from '@/data/app';

const metaTitle = `Cinematography Drones - Film in Stunning Detail with ${appName}`;
const metaDesc = `Explore drones engineered for cinematic excellence. Capture ultra-smooth, high-resolution footage for film, TV, and content creation.`;

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
  const drones = products.filter((p) => p.category == 'cinematography');

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Shop',
          title: 'Cinematography & Filmmaking',
          desc: 'Professional-grade drones built for filmmakers and content creators, offering smooth, high-resolution aerial footage.',
          bg: images.carousel.shop.image5,
        }}
      />

      <CtaFeatured />

      <LayoutSection
        id="page-drones-cinematography"
        padded
        containerized={'responsive'}
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid>
          {drones.map((drone, index) => (
            <GridCol key={index} span={{ base: 12, xs: 6 }}>
              <CardShopDronesMain data={drone} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
