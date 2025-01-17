import React from 'react';
// import { Metadata } from "next";
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import HeroShop from '@/components/layout/hero/shop';
import CardShopFactor from '@/components/common/cards/shop/factor';
import CtaShopCategories from '@/components/partial/cta/shop/categories';
import CardShopDroneFeatured from '@/components/common/cards/shop/drones/featured';
import { Grid, GridCol, Stack, Text, Title } from '@mantine/core';
import {
  IconDiscount2,
  IconDropletBolt,
  IconGavel,
  IconHeadset,
  IconLayersIntersect,
  IconPhotoSensor3,
} from '@tabler/icons-react';
import products from '@/data/products';

// export const metadata: Metadata = { title: "Shop" };

export default async function Shop() {
  const productFeatured = products.find((p) => p.featured);

  return (
    <LayoutPage>
      <HeroShop />

      <LayoutSection id="page-shop-intro" padded shadowed>
        <Stack gap={'xl'}>
          <Stack gap={'xs'}>
            <Title ta={'center'} order={2}>
              Which Drone Should I Buy?
            </Title>
            <Text ta={'center'}>
              The drone you get mainly depends on the purpose for which you need
              it. There are plenty of factors to consider before selecting a
              drone.
            </Text>
          </Stack>

          <Grid>
            {factors.map((factor, index) => (
              <GridCol key={index} span={{ base: 12, sm: 6, md: 4 }}>
                <CardShopFactor data={factor} />
              </GridCol>
            ))}
          </Grid>
        </Stack>
      </LayoutSection>

      <LayoutSection
        id="page-shop-featured"
        padded
        containerized={'responsive'}
        bg={
          'light-dark(var(--mantine-color-pri-light), var(--mantine-color-pri-light))'
        }
      >
        <Stack gap={'xl'} align="center">
          {productFeatured && <CardShopDroneFeatured data={productFeatured} />}
        </Stack>
      </LayoutSection>

      <CtaShopCategories />
    </LayoutPage>
  );
}

const factors = [
  {
    icon: IconGavel,
    title: 'Laws and Licences',
    desc: 'One major difference between commercial drones and camera drones is the question of commercial drone laws and commercial drone licences which is a lot less for camera drones.',
  },
  {
    icon: IconDropletBolt,
    title: 'Durability',
    desc: 'The first difference between commercial drones and hobbyist drones is the durability of the product—commercial drones, like other pieces of commercial equipment, are designed to do work day in and day out, and they have a much more robust construction than drones meant for occasional use.',
  },
  {
    icon: IconHeadset,
    title: 'Support',
    desc: 'Does your supplier offer ongoing support and maintenance? This is probable with commercial drone manufacturers, who will provide support with customization, ongoing maintenance and repairs, unlike the case with consumer-grade drones.',
  },
  {
    icon: IconDiscount2,
    title: 'Cost',
    desc: 'Price is often the most visible difference. The higher price is for commercial drones because of the industrial nature of its construction which will down as technologies mature.',
  },
  {
    icon: IconLayersIntersect,
    title: 'Sensor Integration',
    desc: 'Many hobbyist drones allow for some level of camera integration, but the when accuracy and precision are essential, they are not the best, which makes them a poor choice for creating accurate maps or taking precise readings for research purposes.',
  },
  {
    icon: IconPhotoSensor3,
    title: 'Sensor Control',
    desc: 'Most camera drones do not control the points at which images are taken; photographs are taken at ad hoc moments. This results in sub-optimal photographs creating more unnecessary data and time-consuming post-processing. This lack of detail could also result in a failed mapping mission for example.',
  },
];
