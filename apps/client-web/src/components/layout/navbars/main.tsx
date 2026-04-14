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
import ModalContactTraining from '@repo/components/common/modals/contact/training';
import { APP_NAME } from '@repo/constants/app';
import NextLink from '@repo/components/common/anchor/next-link';

export default function Main({
  options,
}: {
  options?: { absolute?: boolean; border?: boolean };
}) {
  const pathname = usePathname();

  const matchesPath = (link: string) => {
    return pathname == link || (pathname != '/' && pathname.includes(link));
  };

  const navLinks = links.navbar.map((link, index) => {
    return (
      <MenuNavbar
        key={index}
        link={link}
        subLinks={link.subLinks}
        cta={link.cta}
      >
        {!link.subLinks ? (
          <NextLink
            inherit
            href={link.link}
            className={`${options?.absolute ? classes.linkAbsolute : classes.link} ${
              matchesPath(link.link) ? classes.linkActive : ''
            }`}
          >
            {link.label}
          </NextLink>
        ) : (
          <Text
            inherit
            style={{ cursor: 'pointer' }}
            c={'pri.9'}
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
      src={images.brand.droneSpace.logo.landscape.left.default}
      alt={APP_NAME.WEB}
      height={{ base: 45 }}
      width={{ base: 200 }}
      fit="contain"
      mode="grid"
      radius={0}
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
        style={{ zIndex: 1, boxShadow: 'var(--mantine-shadow-xs)' }}
      >
        <Group justify="space-between">
          <NextLink href={'/'} py={{ base: 5, md: 0 }}>
            {imageBrand}
          </NextLink>

          <Group gap={'lg'} visibleFrom="md">
            <Group gap={0}>{navLinks}</Group>

            <Group gap={'xs'}>
              <ModalContactCallback>
                <Button variant="light">Get a Quote</Button>
              </ModalContactCallback>

              <ModalContactTraining
                props={{
                  initialValues: {
                    subject: `Course Inquiry`,
                    message: `I'm interested in enrolling in one of your drone training courses.`,
                  },
                }}
              >
                <Button variant="gradient">Start Training</Button>
              </ModalContactTraining>
            </Group>
          </Group>

          <DrawerNavbarMain
            props={links.navbar}
            options={{ absolute: options?.absolute }}
          />
        </Group>
      </LayoutSection>

      {options?.border && <Divider />}
    </>
  );
}
