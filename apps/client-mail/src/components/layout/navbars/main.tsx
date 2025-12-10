'use client';

import React from 'react';
import { Group, Divider } from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';
import MenuNavbar from '@/components/common/menus/navbar';
import classes from './main.module.scss';
import { usePathname } from 'next/navigation';
import { links } from '@/data/links';
import ImageDefault from '@repo/components/common/images/default';
import { images } from '@/assets/images';
import { appName } from '@repo/constants/app';
import NextLink from '@repo/components/common/anchor/next-link';

export default function Main({
  options,
}: {
  options?: { absolute?: boolean };
}) {
  const pathname = usePathname();

  const matchesPath = (link: string) => {
    return pathname == link || (pathname != '/' && pathname.includes(link));
  };

  const navLinks = links.map((link, index) => {
    return (
      <MenuNavbar key={index} subLinks={link.subLinks}>
        {!link.subLinks ? (
          <NextLink
            href={link.link}
            className={`${options?.absolute ? classes.linkAbsolute : classes.link} ${
              matchesPath(link.link) ? classes.linkActive : ''
            }`}
          >
            {link.label}
          </NextLink>
        ) : (
          <NextLink
            href={link.link}
            className={`${options?.absolute ? classes.linkAbsolute : classes.link} ${
              matchesPath(link.link) ? classes.linkActive : ''
            }`}
          >
            {link.label}
          </NextLink>
        )}
      </MenuNavbar>
    );
  });

  const imageBrand = (
    <ImageDefault
      src={images.brand.droneSpace.logo.landscape.default}
      alt={appName}
      height={{ base: 40 }}
      width={{ base: 200 }}
      fit="contain"
      mode="grid"
    />
  );

  return (
    <>
      <LayoutSection
        id={'partial-navbar-main'}
        pos={options?.absolute ? 'absolute' : undefined}
        left={options?.absolute ? 0 : undefined}
        top={options?.absolute ? 0 : undefined}
        right={options?.absolute ? 0 : undefined}
        bg={'var(--mantine-color-body)'}
        style={{ zIndex: 1 }}
      >
        <Group justify="space-between">
          <NextLink href={'/'} py={{ base: 5, md: 0 }}>
            {imageBrand}
          </NextLink>

          <Group gap={'lg'} visibleFrom="md">
            <Group gap={'lg'}>{navLinks}</Group>
          </Group>
        </Group>
      </LayoutSection>

      {!options?.absolute && <Divider />}
    </>
  );
}
