import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import CardShopDroneAccessory from '@/components/common/cards/shop/accessory';
import { Grid, GridCol } from '@mantine/core';
import accessories from '@/data/accessories';

export const metadata: Metadata = {
  title: 'Drone Accessories - Enhance Your Drone Experience',
  description: `Shop high-quality drone accessories, including batteries, propellers, and carrying cases. Everything you need for a seamless drone experience.`,
};

export default async function Accessories() {
  return (
    <LayoutPage>
      <LayoutSection id="accessories-grid" padded containerized={'responsive'}>
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
