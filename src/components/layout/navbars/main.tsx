'use client';

import React from 'react';
import Link from 'next/link';
import { Group, Anchor, Grid, GridCol } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import DrawerNavbarMain from '@/components/common/drawers/navbar/main';
import MenuNavbar from '@/components/common/menus/navbar';
import classes from './main.module.scss';
import { usePathname } from 'next/navigation';
import links from '@/data/links';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import appData from '@/data/app';

export default function Main({
  options,
}: {
  options?: { absolute?: boolean };
}) {
  const pathname = usePathname();
  // const session = useAppSelector((state) => state.session.value);
  // const desktop = useMediaQuery('(min-width: 62em)');

  const matchesPath = (link: string) => {
    return pathname == link || (pathname != '/' && pathname.includes(link));
  };

  const navLinks = links.marketing.map((link, index) => {
    return (
      <MenuNavbar key={index} subLinks={link.subLinks}>
        {!link.subLinks ? (
          <Anchor
            component={Link}
            href={link.link}
            className={`${options?.absolute ? classes.linkAbsolute : classes.link} ${
              matchesPath(link.link) ? classes.linkActive : ''
            }`}
          >
            {link.label}
          </Anchor>
        ) : (
          <Anchor
            component={Link}
            href={link.link}
            className={`${options?.absolute ? classes.linkAbsolute : classes.link} ${
              matchesPath(link.link) ? classes.linkActive : ''
            }`}
            onClick={(e) => e.preventDefault()}
          >
            <Group gap={4}>{link.label}</Group>
          </Anchor>
        )}
      </MenuNavbar>
    );
  });

  const imageBrand = (
    <ImageDefault
      src={images.brand.droneSpace.logo.landscape.default}
      alt={appData.name.app}
      height={{ base: 24 }}
      width={{ base: 144 }}
      fit="contain"
      mode="grid"
    />
  );

  return (
    <LayoutSection
      id={'partial-navbar-main'}
      shadowed={!options?.absolute}
      pos={options?.absolute ? 'absolute' : undefined}
      left={options?.absolute ? 0 : undefined}
      top={options?.absolute ? 0 : undefined}
      right={options?.absolute ? 0 : undefined}
      style={{ zIndex: 1 }}
    >
      <Grid align="center" gutter={0}>
        <GridCol span={{ base: 6 }} hiddenFrom="sm">
          <Group>
            <Anchor component={Link} href={'/'} py={'sm'}>
              {imageBrand}
            </Anchor>
          </Group>
        </GridCol>

        <GridCol
          span={{
            base: 6,
            // sm: 10,
            sm: 12,
          }}
        >
          <Group gap={'lg'} visibleFrom="sm" justify="center">
            <Group component={'nav'} gap={'xl'}>
              {navLinks}
            </Group>
          </Group>

          <Group hiddenFrom="sm" gap={'xs'} justify="end">
            <DrawerNavbarMain
              props={links.marketing}
              options={{ absolute: options?.absolute }}
            />
          </Group>
        </GridCol>

        {/* <GridCol span={{ base: 4, sm: 2 }} visibleFrom="sm">
          <Group justify="end">
            {!session ? (
              <Group gap={'xs'}>
                <WrapperSignIn>
                  <Button
                    size="xs"
                    variant={options?.absolute ? 'outline' : 'light'}
                    color={options?.absolute ? 'white' : undefined}
                  >
                    Log In
                  </Button>
                </WrapperSignIn>

                <WrapperSignUp>
                  <Button size="xs" visibleFrom="sm">
                    Sign Up
                  </Button>
                </WrapperSignUp>
              </Group>
            ) : desktop ? (
              <MenuUser />
            ) : (
              <DrawerUser />
            )}
          </Group>
        </GridCol> */}
      </Grid>
    </LayoutSection>
  );
}
