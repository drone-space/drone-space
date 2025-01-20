import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import products from '@/data/products';
import { Grid, GridCol } from '@mantine/core';
import CardShopDronesMain from '@/components/common/cards/shop/drones/main';
import appData from '@/data/app';

export const metadata: Metadata = {
  title: `Camera Drones - Capture Stunning Aerial Shots with ${appData.name.app}`,
  description: `Shop advanced camera drones designed for professional photography and videography. Discover models that elevate your creative vision.`,
};

export default async function Camera() {
  const drones = products.filter((p) => p.category == 'camera');

  return (
    <LayoutPage>
      <LayoutSection id="page-drones-agri" padded containerized={'responsive'}>
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
