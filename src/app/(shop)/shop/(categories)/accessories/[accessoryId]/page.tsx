import React from 'react';

import {
  Center,
  Divider,
  Grid,
  GridCol,
  Group,
  NumberFormatter,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import accessories from '@/data/accessories';
import { linkify } from '@/utilities/formatters/string';
import CarouselImage from '@/components/common/carousels/image';
import IntroPage from '@/components/layout/intro/page';
import { typeParams } from './layout';
import { IconArrowRightDashed } from '@tabler/icons-react';
import classes from './drone.module.scss';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';

export default function AccessoryDetails({ params }: typeParams) {
  const product = accessories.find(
    (a) => linkify(a.title.long) == params.accessoryId
  );

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: `Accessories`,
          title:
            product?.title.long || product?.title.short || 'Drone Accessories',
        }}
      />

      <LayoutSection
        id="accessories-intro"
        padded
        shadowed
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid>
          <GridCol span={{ md: 4, lg: 5 }} className={classes.card}>
            {product?.images && <CarouselImage data={product.images} />}
          </GridCol>
          <GridCol span={{ md: 1 }}>
            <Center h={'100%'}>
              <Divider orientation="vertical" />
            </Center>
          </GridCol>
          <GridCol span={{ md: 7, lg: 6 }}>
            <Title order={2} fz={{ md: 32 }}>
              {product?.title.long}
            </Title>

            {product?.price && (
              <Text mt={'md'}>
                Kshs.{' '}
                <Text
                  component="span"
                  inherit
                  fw={500}
                  c={
                    'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'
                  }
                  fz={{ md: 'xl' }}
                >
                  <NumberFormatter
                    value={product.price.former}
                    thousandSeparator
                  />
                </Text>
              </Text>
            )}

            {typeof product?.specs == 'string' ? (
              <Text mt={'xl'}>{product.specs}</Text>
            ) : (
              <Grid mt={'xl'}>
                {product?.specs.map((spec, index) => (
                  <GridCol key={index} span={12}>
                    <Group gap={'xs'} wrap="nowrap" align="start">
                      <ThemeIcon
                        size={ICON_WRAPPER_SIZE / 1.5}
                        radius={'xl'}
                        color="sec.4"
                        c={'pri.9'}
                        mt={4}
                      >
                        <IconArrowRightDashed
                          size={ICON_SIZE / 1.5}
                          stroke={ICON_STROKE_WIDTH}
                        />
                      </ThemeIcon>

                      <Text>
                        <Text component="span" inherit fw={500}>
                          {spec.label}
                        </Text>
                        : {spec.desc}
                      </Text>
                    </Group>
                  </GridCol>
                ))}
              </Grid>
            )}
          </GridCol>
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
