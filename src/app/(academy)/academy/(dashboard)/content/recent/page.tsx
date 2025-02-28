import React from 'react';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import LayoutMainAcademy from '@/components/layout/main/academy';
import AsideAcademyContent from '@/components/layout/asides/academy/content';
import { Group, Stack, Title } from '@mantine/core';
import TableAcademyContent from '@/components/common/table/academy/content';

// import { Metadata } from 'next';
// import appData from '@/data/app';
// import { HOSTED_BASE_URL } from '@/data/constants';
// import { images } from '@/assets/images';

// const metaTitle = `Privacy Policy - How ${appData.name.app} Protects Your Data`;
// const metaDesc = `Learn how ${appData.name.app} collects, uses, and protects your personal information. Your privacy is our priority.`;

// export const metadata: Metadata = {
//   title: metaTitle,
//   description: metaDesc,
//   openGraph: {
//     title: metaTitle,
//     description: metaDesc,
//     url: `${HOSTED_BASE_URL.DRONE_SPACE}/legal/policy`,
//     type: 'website',
//     images: [
//       {
//         url: images.brand.droneSpace.logo.potrait.meta,
//         width: 1200,
//         height: 1200,
//         alt: appData.name.company,
//       },
//     ],
//   },
// };

export default async function Project() {
  return (
    <LayoutPage>
      <LayoutSection id="project" containerized={false}>
        <LayoutMainAcademy props={{ navigation: <AsideAcademyContent /> }}>
          <Stack>
            <Group justify="space-between" align="end" mih={36}>
              <Title fw={500} fz={'1.5rem'} c={'var(--mantine-color-text)'}>
                Recent Files
              </Title>
            </Group>

            <TableAcademyContent />
          </Stack>
        </LayoutMainAcademy>
      </LayoutSection>
    </LayoutPage>
  );
}
