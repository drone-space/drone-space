import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { Grid, GridCol } from '@mantine/core';
import CardShopDronesMain from '@/components/common/cards/shop/drones/main';
import products from '@/data/products';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';

import IntroPage from '@/components/layout/intros/page';
import { companyName } from '@/data/app';

export const dynamic = 'force-static';
// export const revalidate = 3600;

const metaTitle = 'Enterprise Drones - High-Performance Drones for Business';
const metaDesc = `Explore enterprise-grade drones built for commercial applications like surveying, inspections, and logistics. Reliable solutions for your business needs.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DEFAULT}/shop/drones/enterprise`,
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

export default async function Enterprise() {
  const drones = products.filter((p) => p.category == 'enterprise');

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Shop',
          title: 'Industrial & Enterprise Applications',
          desc: 'Powerful drones designed for industrial and commercial applications.',
          bg: images.carousel.shop.image2,
        }}
      />

      <LayoutSection
        id="page-drones-enterprise"
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
