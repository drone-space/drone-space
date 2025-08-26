import React from 'react';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import CardShopFactor from '@/components/common/cards/shop/factor';
import { Grid, GridCol } from '@mantine/core';
import {
  IconDiscount2,
  IconDropletBolt,
  IconGavel,
  IconHeadset,
  IconLayersIntersect,
  IconPhotoSensor3,
} from '@tabler/icons-react';
import IntroSection from '@/components/layout/intros/section';
import { appName, companyName } from '@/data/app';
import { Metadata } from 'next';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import IntroPage from '@/components/layout/intros/page';
import PartialDroneListing from '@/components/partials/drone-listing';

export const dynamic = 'force-static';

const metaTitle = `Drone Shop - Top Drones & Accessories at ${appName} Kenya`;
const metaDesc = `Discover the best DJI drones in Kenya for every need at ${appName}. Shop top-rated drones for beginners, professionals, and enthusiasts. Elevate your aerial experience today!`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DEFAULT}/shop`,
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

export default async function Shop() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Shop',
          title: `Top Drones At ${appName}`,
          desc: 'Shop top-rated drones for beginners, professionals, and enthusiasts.',
          bg: images.web.hero.light,
        }}
      />

      <LayoutSection id="listing" padded>
        <PartialDroneListing />
      </LayoutSection>

      <LayoutSection
        id="page-shop-factors"
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <IntroSection
          props={{
            subTitle: 'Factors',
            title: 'Which Drone Should I Buy?',
            desc: `The drone you get mainly depends on the purpose for which you need it.
          There are plenty of factors to consider before selecting a drone.`,
          }}
          options={{ spacing: true }}
        />

        <Grid mt={'xl'} gutter={'xl'}>
          {factors.map((factor, index) => (
            <GridCol key={index} span={{ base: 12, sm: 6 }}>
              <CardShopFactor data={factor} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}

const factors = [
  {
    icon: IconGavel,
    image:
      'https://images.unsplash.com/photo-1587116987928-21e47bd76cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Laws and Licences',
    desc: 'One major difference between commercial drones and camera drones is the question of commercial drone laws and commercial drone licences which is a lot less for camera drones.',
  },
  {
    icon: IconDropletBolt,
    image:
      'https://img.freepik.com/premium-photo/crashed-drone-tangled-tree-branches-propellers-damaged_1079150-308208.jpg?w=1380',
    title: 'Durability',
    desc: 'The first difference between commercial drones and hobbyist drones is the durability of the product—commercial drones, like other pieces of commercial equipment, are designed to do work day in and day out, and they have a much more robust construction than drones meant for occasional use.',
  },
  {
    icon: IconHeadset,
    image:
      'https://img.freepik.com/free-photo/young-female-inventor-her-workshop_23-2149067222.jpg?t=st=1746616574~exp=1746620174~hmac=bd549f7c6dbc2eb7c1aeb8e8f3c0c0c70f113aa406ed28fc55b95a4ccaac8207&w=740',
    title: 'Support',
    desc: 'Does your supplier offer ongoing support and maintenance? This is probable with commercial drone manufacturers, who will provide support with customization, ongoing maintenance and repairs, unlike the case with consumer-grade drones.',
  },
  {
    icon: IconDiscount2,
    image:
      'https://images.unsplash.com/photo-1662348316911-d6aef85f8560?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cost',
    desc: 'Price is often the most visible difference. The higher price is for commercial drones because of the industrial nature of its construction which will down as technologies mature.',
  },
  {
    icon: IconLayersIntersect,
    image:
      'https://images.unsplash.com/photo-1625888131203-78bf3a8055f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Sensor Integration',
    desc: 'Many hobbyist drones allow for some level of camera integration, but the when accuracy and precision are essential, they are not the best, which makes them a poor choice for creating accurate maps or taking precise readings for research purposes.',
  },
  {
    icon: IconPhotoSensor3,
    image:
      'https://images.unsplash.com/photo-1736801379092-dc58ea7f0087?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Sensor Control',
    desc: 'Most camera drones do not control the points at which images are taken; photographs are taken at ad hoc moments. This results in sub-optimal photographs creating more unnecessary data and time-consuming post-processing. This lack of detail could also result in a failed mapping mission for example.',
  },
];
