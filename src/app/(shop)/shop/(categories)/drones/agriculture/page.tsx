import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import CardShopDronesMain from '@/components/common/cards/shop/drones/main';
import products from '@/data/products';
import { Grid, GridCol } from '@mantine/core';

export const metadata: Metadata = {
  title: 'Agriculture Drones - Optimize Farming with Drone Space',
  description: `Discover agricultural drones for precision farming, crop monitoring, and spraying. Advanced tools to boost productivity and sustainability.`,
};

export default async function Agriculture() {
  const drones = products.filter((p) => p.category == 'agriculture');

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
