import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import { LayoutSection } from '@repo/ui';
import CardShopDroneAccessory from '@web/ui/common/cards/shop/accessory';
import { Grid, GridCol } from '@mantine/core';
import { accessories, getBaseUrl } from '@repo/constants';
import { images } from '@repo/constants';
import { LayoutIntroPage } from '@repo/ui';
import { COMPANY_NAME } from '@repo/constants';

export const dynamic = 'force-static';
// export const revalidate = 3600;

const metaTitle = 'Drone Accessories - Enhance Your Drone Experience';
const metaDesc = `Shop high-quality drone accessories, including batteries, propellers, and carrying cases. Everything you need for a seamless drone experience.`;

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();

  return {
    title: metaTitle,
    description: metaDesc,
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: `${baseUrl.WEB}/shop/accessories`,
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

export default async function Accessories() {
  return (
    <LayoutPage>
      <LayoutIntroPage
        props={{
          path: 'Shop',
          title: 'Drone Accessories',
          desc: metaDesc,
          bg: images.web.hero.light,
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
