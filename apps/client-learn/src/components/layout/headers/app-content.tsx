'use client';

import React from 'react';
import IntroPageSection from '@repo/components/layout/intros/section';
import BreadcrumbsMain from '@repo/components/common/breadcrumbs/main';
import { Group } from '@mantine/core';
import { crumbify } from '@repo/utilities/url';
import { usePathname } from 'next/navigation';
import { SECTION_SPACING } from '@repo/constants/sizes';

export default function AppContent({
  props,
}: {
  props?: { title?: string; subTitle?: string };
}) {
  const pathname = usePathname();
  const crumbs = crumbify(pathname);

  return (
    <Group mb={SECTION_SPACING}>
      <div>
        <IntroPageSection
          props={{
            subTitle: props?.subTitle || '',
            title: props?.title || crumbs[crumbs.length - 1].label,
          }}
          options={{ alignment: 'left' }}
        />

        <BreadcrumbsMain props={crumbs} />
      </div>
    </Group>
  );
}
