'use client';

import React from 'react';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import appData from '@/data/app';
import LayoutSection from '../../section';
import {
  ActionIcon,
  Anchor,
  Grid,
  GridCol,
  Group,
  TextInput,
} from '@mantine/core';
import Link from 'next/link';
import { useMediaQuery } from '@mantine/hooks';
import MenuUser from '@/components/common/menus/user';
import DrawerUser from '@/components/common/drawers/user';
import { IconBell, IconSearch } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';

export default function Dashboard() {
  const desktop = useMediaQuery('(min-width: 62em)');

  return (
    <LayoutSection
      id={'partial-header-academy-dashboard'}
      containerized={false}
      px={'lg'}
      w={'100%'}
    >
      <Grid align="center" gutter={0}>
        <GridCol span={{ sm: 2 }}>
          <Group>
            <Anchor component={Link} href={'/'} py={'sm'}>
              {imageBrand}
            </Anchor>
          </Group>
        </GridCol>

        <GridCol span={{ base: 6, sm: 8 }}>
          <Group gap={'lg'} visibleFrom="sm" justify="center">
            <TextInput
              leftSection={
                <IconSearch
                  size={ICON_SIZE / 1.25}
                  stroke={ICON_STROKE_WIDTH * 2}
                />
              }
              styles={{ input: { width: 480 } }}
              variant="filled"
              placeholder="Search..."
              radius={'xl'}
            />
          </Group>
        </GridCol>

        <GridCol span={{ base: 4, sm: 2 }} visibleFrom="sm">
          <Group justify="end">
            <ActionIcon
              size={ICON_WRAPPER_SIZE * 1.33}
              color="gray"
              variant="light"
              radius={'xl'}
            >
              <IconBell size={ICON_SIZE * 1.33} stroke={ICON_STROKE_WIDTH} />
            </ActionIcon>

            {desktop ? <MenuUser /> : <DrawerUser />}
          </Group>
        </GridCol>
      </Grid>
    </LayoutSection>
  );
}

const imageBrand = (
  <ImageDefault
    src={images.brand.droneSpace.logo.landscape.default}
    alt={appData.name.app}
    height={{ base: 40 }}
    width={{ base: 220 }}
    fit="contain"
    mode="grid"
  />
);
