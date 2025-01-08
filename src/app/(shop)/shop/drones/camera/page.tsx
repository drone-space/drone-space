import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import products from '@/data/products';
import { Grid, GridCol } from '@mantine/core';
import CardShopDronesMain from '@/components/common/cards/shop/drones/main';

export const metadata: Metadata = { title: 'Camera Drones' };

export default async function Camera() {
  const drones = products.filter((p) => p.category == 'camera');

  return (
    <LayoutPage>
      <LayoutSection id="page-drones-agri" padded containerized={'responsive'}>
        <Grid>
          {drones.map((drone) => (
            <GridCol
              key={drone.title.long}
              span={{ base: 12, xs: 6, md: 4, lg: 3 }}
            >
              <CardShopDronesMain data={drone} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
