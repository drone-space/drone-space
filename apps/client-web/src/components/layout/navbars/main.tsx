'use client';

import React from 'react';
import { Group, Divider, Button, Box, Text } from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';
import DrawerNavbarMain from '@repo/components/common/drawers/navbar/main';
import MenuNavbar from '@repo/components/common/menus/navbar';
import classes from './main.module.scss';
import { usePathname } from 'next/navigation';
import { links } from '@/data/links';
import ImageDefault from '@repo/components/common/images/default';
import { images } from '@repo/constants/images';
import ModalDownloadDocument from '@repo/components/common/modals/download/document';
import ModalContactCallback from '@repo/components/common/modals/contact/callback';
import { APP_NAME } from '@repo/constants/app';
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

  const navLinks = links.navbar.map((link, index) => {
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
          <Text
            // href={link.link}
            style={{ cursor: 'pointer' }}
            c={'pri.8'}
            className={`${options?.absolute ? classes.linkAbsolute : classes.link} ${
              matchesPath(link.link) ? classes.linkActive : ''
            }`}
          >
            {link.label}
          </Text>
        )}
      </MenuNavbar>
    );
  });

  const imageBrand = (
    <ImageDefault
      src={images.brand.droneSpace.logo.landscape.default}
      alt={APP_NAME.WEB}
      height={{ base: 45 }}
      width={{ base: 200 }}
      fit="contain"
      mode="grid"
      radius={0}
    />
  );

  return (
    <LayoutSection
      id={'partial-navbar-main'}
      pos={options?.absolute ? 'absolute' : undefined}
      left={options?.absolute ? 0 : undefined}
      top={options?.absolute ? 0 : undefined}
      right={options?.absolute ? 0 : undefined}
      bg={'var(--mantine-color-body)'}
      style={{ zIndex: 1000, boxShadow: 'var(--mantine-shadow-xs)' }}
    >
      <Group justify="space-between">
        <NextLink href={'/'} py={{ base: 5, md: 0 }}>
          {imageBrand}
        </NextLink>

        <Group gap={'lg'} visibleFrom="md">
          <Group gap={0}>{navLinks}</Group>

          <Group gap={'xs'}>
            <Button size="xs" variant="light">
              Get a Quote
            </Button>

            <ModalContactCallback>
              <Button size="xs" variant="gradient">
                Start Training
              </Button>
            </ModalContactCallback>
          </Group>
        </Group>

        <DrawerNavbarMain
          props={links.navbar}
          options={{ absolute: options?.absolute }}
        />
      </Group>
    </LayoutSection>
  );
}
