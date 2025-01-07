import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import CardShopDroneAccessory from '@/components/common/cards/shop/accessory';
import { Grid, GridCol } from '@mantine/core';
import accessories from '@/data/accessories';

export const metadata: Metadata = { title: 'Accessories' };

export default async function Accessories() {
  return (
    <LayoutPage>
      <LayoutSection id="accessories-grid" padded containerized={'responsive'}>
        <Grid>
          {accessories.map((accessory) => (
            <GridCol
              key={accessory.title.long}
              span={{ base: 12, sm: 6, md: 4, lg: 3 }}
            >
              <CardShopDroneAccessory data={accessory} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
