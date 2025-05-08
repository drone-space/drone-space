import React from 'react';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import HeroShop from '@/components/layout/hero/shop';
import CardShopFactor from '@/components/common/cards/shop/factor';
import CardShopDroneFeatured from '@/components/common/cards/shop/drones/featured';
import { Anchor, Grid, GridCol, Group, Stack } from '@mantine/core';
import {
  IconChevronRight,
  IconDiscount2,
  IconDropletBolt,
  IconGavel,
  IconHeadset,
  IconLayersIntersect,
  IconPhotoSensor3,
} from '@tabler/icons-react';
import products from '@/data/products';
import IntroSection from '@/components/layout/intro/section';
import { droneCategories } from '@/data/drone-categories';
import Link from 'next/link';
import ImageDefault from '@/components/common/images/default';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default async function Shop() {
  return (
    <LayoutPage>
      <HeroShop />

      <CtaFeatured />

      <LayoutSection id="page-shop-intro" padded>
        <IntroSection
          props={{
            subTitle: 'Factors',
            title: 'Which Drone Should I Buy?',
            desc: `The drone you get mainly depends on the purpose for which you need it.
          There are plenty of factors to consider before selecting a drone.`,
          }}
          options={{ spacing: true }}
        />

        <Grid mt={'xl'}>
          {factors.map((factor, index) => (
            <GridCol key={index} span={{ base: 12, sm: 6 }}>
              <CardShopFactor data={factor} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="page-shop-camera"
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <DroneCategorySection
          props={{
            category: 'camera',
            title: droneCategories[0].title,
            desc: droneCategories[0].desc,
            link: droneCategories[0].anchor.link,
            image: droneCategories[0].image,
          }}
        />
      </LayoutSection>

      <LayoutSection id="page-shop-enterprise" padded>
        <DroneCategorySection
          props={{
            category: 'enterprise',
            title: droneCategories[1].title,
            desc: droneCategories[1].desc,
            link: droneCategories[1].anchor.link,
            image: droneCategories[1].image,
            alternate: true,
          }}
        />
      </LayoutSection>

      <LayoutSection
        id="page-shop-agriculture"
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <DroneCategorySection
          props={{
            category: 'agriculture',
            title: droneCategories[2].title,
            desc: droneCategories[2].desc,
            link: droneCategories[2].anchor.link,
            image: droneCategories[2].image,
          }}
        />
      </LayoutSection>

      <LayoutSection
        id="page-shop-featured"
        padded
        containerized={'responsive'}
      >
        {productFeatured && <CardShopDroneFeatured data={productFeatured} />}
      </LayoutSection>
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

function DroneCategorySection({
  props,
}: {
  props: {
    category: string;
    title: string;
    desc: string;
    link: string;
    image: string;
    alternate?: boolean;
  };
}) {
  return (
    <Grid mt={'xl'} gutter={'xl'}>
      <GridCol span={{ md: 6 }} order={{ md: props.alternate ? 2 : undefined }}>
        <Stack align="start">
          <IntroSection
            props={{
              subTitle: 'Drones',
              title: props.title,
              desc: props.desc,
            }}
            options={{ alignment: 'start' }}
          />

          <Anchor
            inherit
            ta={{ base: 'center', md: 'start' }}
            component={Link}
            href={props.link}
            mt={'md'}
          >
            <Group gap={'xs'}>
              See {props.category} drones
              <IconChevronRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            </Group>
          </Anchor>
        </Stack>
      </GridCol>

      <GridCol span={{ md: 6 }} order={{ md: props.alternate ? 1 : undefined }}>
        <ImageDefault
          src={props.image}
          alt={'Agriculture'}
          height={{ base: 240, xs: 320, sm: 400, md: 300 }}
          mode="grid"
          radius={'sm'}
        />
      </GridCol>
    </Grid>
  );
}
