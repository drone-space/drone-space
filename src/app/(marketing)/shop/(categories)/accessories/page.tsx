import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import CardShopDroneAccessory from '@/components/common/cards/shop/accessory';
import { Grid, GridCol } from '@mantine/core';
import accessories from '@/data/accessories';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import IntroPage from '@/components/layout/intros/page';
import { companyName } from '@/data/app';

const metaTitle = 'Drone Accessories - Enhance Your Drone Experience';
const metaDesc = `Shop high-quality drone accessories, including batteries, propellers, and carrying cases. Everything you need for a seamless drone experience.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
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

export default async function Accessories() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Shop',
          title: 'Drone Accessories',
          desc: metaDesc,
          bg: images.gallery.innovation.jamuhuri.yr2020.image9,
        }}
      />

      <LayoutSection
        id="accessories-grid"
        padded
        containerized={'responsive'}
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid>
          {accessories.map((accessory, index) => (
            <GridCol key={index} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
              <CardShopDroneAccessory data={accessory} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
