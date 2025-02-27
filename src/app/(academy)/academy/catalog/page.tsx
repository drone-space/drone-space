import React from 'react';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
// import { Metadata } from 'next';
// import appData from '@/data/app';
// import { HOSTED_BASE_URL } from '@/data/constants';
// import { images } from '@/assets/images';
import HeroAcademy from '@/components/layout/hero/academy';
import TabsAcademyCatalog from '@/components/common/tabs/academy/catalog';

// const metaTitle = `${appData.name.app} FAQ - Answers to Your Drone Training Questions`;
// const metaDesc =
//   'Get quick answers to common questions about drone training, services, and requirements in Kenya. Your guide to Drone Space resources.';

// export const metadata: Metadata = {
//   title: metaTitle,
//   description: metaDesc,
//   openGraph: {
//     title: metaTitle,
//     description: metaDesc,
//     url: `${HOSTED_BASE_URL.DRONE_SPACE}/resources/faq`,
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

export default async function Catalog() {
  return (
    <LayoutPage>
      <HeroAcademy props={{ title: 'Catalog' }} />

      <LayoutSection id="academy-courses-tab" containerized={false}>
        <TabsAcademyCatalog />
      </LayoutSection>
    </LayoutPage>
  );
}
