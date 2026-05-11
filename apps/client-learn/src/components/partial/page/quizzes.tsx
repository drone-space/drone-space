'use client';

import React from 'react';
import IntroPageSection from '@repo/components/layout/intros/section';
import BreadcrumbsMain from '@repo/components/common/breadcrumbs/main';
import { usePathname } from 'next/navigation';
import { crumbify } from '@repo/utilities/url';
import { Box } from '@mantine/core';
import { SECTION_SPACING } from '@repo/constants/sizes';
import TablesQuizzes from '@repo/components/common/tables/quizzes';

export default function Quizzes() {
  const pathname = usePathname();
  const crumbs = crumbify(pathname);

  return (
    <div>
      <div>
        <IntroPageSection
          props={{ title: 'Quizzes' }}
          options={{ alignment: 'left' }}
        />

        <BreadcrumbsMain props={crumbs} />
      </div>

      <Box mt={SECTION_SPACING}>
        <TablesQuizzes />
      </Box>
    </div>
  );
}
