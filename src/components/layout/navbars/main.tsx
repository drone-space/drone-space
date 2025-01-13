'use client';

import React from 'react';
import Link from 'next/link';
import { Group, Anchor, Grid, GridCol } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import DrawerNavbarMain from '@/components/common/drawers/navbar/main';
import MenuNavbar from '@/components/common/menus/navbar';
import classes from './main.module.scss';
import { IconChevronDown } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
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

  const navLinks = links.navbar.main.map((link) => {
    const linkIsShop = link.link != '/shop';

    return (
      <MenuNavbar
        key={link.link}
        subLinks={linkIsShop ? link.subLinks : undefined}
      >
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
            onClick={(e) => {
              if (!linkIsShop) {
                e.preventDefault();
              }
            }}
          >
            <Group gap={4}>
              <span>{link.label}</span>

              {linkIsShop && (
                <IconChevronDown
                  size={ICON_SIZE - 4}
                  stroke={ICON_STROKE_WIDTH}
                  style={{ marginTop: 2 }}
                />
              )}
            </Group>
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
        <GridCol span={{ base: 6 }} hiddenFrom="md">
          <Group>
            <Anchor component={Link} href={'/'} py={'md'}>
              {imageBrand}
            </Anchor>
          </Group>
        </GridCol>

        <GridCol span={{ base: 6, md: 10 }}>
          <Group gap={'lg'} visibleFrom="md">
            <Group component={'nav'}>{navLinks}</Group>
          </Group>

          <Group hiddenFrom="md" gap={'xs'} justify="end">
            <DrawerNavbarMain
              props={links.navbar.main}
              options={{ absolute: options?.absolute }}
            />
          </Group>
        </GridCol>

        {/* <GridCol span={{ base: 4, md: 2 }} visibleFrom="md">
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
                  <Button size="xs" visibleFrom="md">
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
