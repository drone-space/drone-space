import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
// import IntroPage from '@/components/layout/intro/page';
import appData from '@/data/app';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import HeroAcademy from '@/components/layout/hero/academy';
import TabsAcademyCourses from '@/components/common/tabs/academy/courses';

const metaTitle = `${appData.name.app} FAQ - Answers to Your Drone Training Questions`;
const metaDesc =
  'Get quick answers to common questions about drone training, services, and requirements in Kenya. Your guide to Drone Space resources.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DRONE_SPACE}/resources/faq`,
    type: 'website',
    images: [
      {
        url: images.brand.droneSpace.logo.potrait.meta,
        width: 1200,
        height: 1200,
        alt: appData.name.company,
      },
    ],
  },
};

export default async function Faq() {
  return (
    <LayoutPage>
      <HeroAcademy props={{ title: 'My Courses' }} />

      <LayoutSection id="academy-courses-tab" containerized={false}>
        <TabsAcademyCourses />
      </LayoutSection>
    </LayoutPage>
  );
}
