'use client';

import React from 'react';
import { LayoutIntroSection } from '@repo/ui';
import { BreadcrumbMain } from '@repo/ui';
import { Group } from '@mantine/core';
import { crumbify } from '@repo/utils';
import { usePathname } from 'next/navigation';
import { SECTION_SPACING } from '@repo/constants';

export default function AppContent({ props }: { props?: { title?: string; subTitle?: string } }) {
  const pathname = usePathname();
  const crumbs = crumbify(pathname);

  return (
    <Group mb={SECTION_SPACING}>
      <div>
        <LayoutIntroSection
          props={{
            subTitle: props?.subTitle || '',
            title: props?.title || crumbs[crumbs.length - 1].label,
          }}
          options={{ alignment: 'left' }}
        />

        <BreadcrumbMain props={crumbs} />
      </div>
    </Group>
  );
}
