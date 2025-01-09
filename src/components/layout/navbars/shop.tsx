'use client';

import React from 'react';
import Link from 'next/link';
import { Group, Anchor, Flex } from '@mantine/core';
import DrawerNavbarMain from '@/components/common/drawers/navbar/main';
import LayoutSection from '../section';
import MenuNavbar from '@/components/common/menus/navbar';
import classes from './shop.module.scss';
import { usePathname } from 'next/navigation';
import links from '@/data/links';

export default function Shop({ options }: { options?: { variant?: string } }) {
  const pathname = usePathname();
  const matchesPath = (link: string) => {
    return pathname == link || (link != '/' && pathname.includes(link));
  };

  const navLinks = links.navbar.shop.map((link) => (
    <MenuNavbar key={link.link}>
      <Anchor
        component={Link}
        href={link.link}
        className={`${classes.link} ${options?.variant == 'hero' ? classes.linkAbsolute : classes.link} ${
          matchesPath(link.link) ? classes.linkActive : ''
        }`}
      >
        {link.label}
      </Anchor>
    </MenuNavbar>
  ));

  return (
    <LayoutSection
      id="layout-hero-shop"
      padded="md"
      shadowed
      className={classes.navbar}
      visibleFrom="sm"
    >
      <Flex
        gap={'md'}
        align={'center'}
        justify={{ base: 'end', sm: 'space-between' }}
      >
        <Group component={'nav'} visibleFrom="sm">
          {navLinks}
        </Group>

        <DrawerNavbarMain
          props={links.navbar.shop}
          hiddenFrom="sm"
          options={{ absolute: options?.variant == 'hero' }}
        />
      </Flex>
    </LayoutSection>
  );
}
