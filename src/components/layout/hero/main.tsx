'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Group, Stack, Title } from '@mantine/core';
import LayoutSection from '../section';
import BreadcrumbMain from '@/components/common/breadcrumbs/main';
import links from '@/data/links';
import classes from './main.module.scss';
import { crumbify } from '@/utilities/formatters/string';

export default function Main({ title }: { title?: string }) {
  const pathname = usePathname();
  const segments = crumbify(pathname);

  const dynamicRoutes = [
    '/stories/blog',
    '/services',
    '/training/basic',
    '/training/advanced',
    '/shop/drones',
    '/shop/accessories',
  ];

  const dynamic = dynamicRoutes.find((r) => pathname.includes(r));

  const selectTitle = () => {
    if (segments.length > 2) {
      return dynamic
        ? links.navbar.main
            .find(
              (l) =>
                l.link == segments[segments.length - (segments.length - 1)].link
            )
            ?.subLinks?.find((sl) => pathname.includes(sl.link))?.label
        : links.navbar.main
            .find(
              (l) =>
                l.link == segments[segments.length - (segments.length - 1)].link
            )
            ?.subLinks?.find((sl) => sl.link == pathname)?.label;
    } else {
      return links.navbar.main.find((l) => l.link == pathname)?.label;
    }
  };

  return (
    <LayoutSection
      id="layout-hero-main"
      padded="xl"
      shadowed
      className={classes.hero}
    >
      <Group justify="space-between" align="center">
        <Stack>
          {selectTitle() && (
            <Title order={1} fw={'bolder'} fz={24} c={'white'}>
              {title ? title : selectTitle()}
            </Title>
          )}
          <BreadcrumbMain props={segments} />
        </Stack>
      </Group>
    </LayoutSection>
  );
}
