'use client';

import React from 'react';
import Link from 'next/link';
import { Group, Anchor, Grid, GridCol } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import DrawerNavbarMain from '@/components/common/drawers/navbar/main';
import classes from './academy.module.scss';
import { usePathname } from 'next/navigation';
import links from '@/data/links';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import appData from '@/data/app';
import MenuUser from '@/components/common/menus/user';
import DrawerUser from '@/components/common/drawers/user';
import { useMediaQuery } from '@mantine/hooks';

export default function Academy() {
  const pathname = usePathname();
  const desktop = useMediaQuery('(min-width: 62em)');

  const matchesPath = (link: string) => {
    return pathname == link || (pathname != '/' && pathname.includes(link));
  };

  const navLinks = links.academy.map((link, index) => {
    return (
      <Anchor
        key={index}
        component={Link}
        href={link.link}
        className={`${classes.link} ${
          matchesPath(link.link) ? classes.linkActive : ''
        }`}
      >
        {link.label}
      </Anchor>
    );
  });

  const imageBrand = (
    <ImageDefault
      src={images.brand.droneSpace.wording.default}
      alt={appData.name.app}
      height={{ base: 30 }}
      width={{ base: 120 }}
      fit="contain"
      mode="grid"
    />
  );

  return (
    <LayoutSection
      id={'partial-navbar-academy'}
      containerized={false}
      px={'lg'}
      shadowed
      style={{ zIndex: 1 }}
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
            <Group component={'nav'} gap={'xl'}>
              <Anchor
                component={Link}
                href={'/academy/catalog'}
                className={`${classes.link} ${
                  matchesPath('/academy/catalog') ? classes.linkActive : ''
                }`}
              >
                Catalog
              </Anchor>

              {navLinks}
            </Group>
          </Group>

          <Group hiddenFrom="sm" gap={'xs'} justify="end">
            <DrawerNavbarMain props={links.marketing} />
          </Group>
        </GridCol>

        <GridCol span={{ base: 4, sm: 2 }} visibleFrom="sm">
          <Group justify="end">{desktop ? <MenuUser /> : <DrawerUser />}</Group>
        </GridCol>
      </Grid>
    </LayoutSection>
  );
}
