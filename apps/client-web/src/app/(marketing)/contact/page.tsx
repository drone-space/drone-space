import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import LayoutSection from '@repo/components/layout/section';
import IntroSection from '@repo/components/layout/intros/section';
import { Anchor, Card, Grid, GridCol, Stack, Text, Title } from '@mantine/core';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { SECTION_SPACING } from '@repo/constants/sizes';
import IframeContact from '@repo/components/common/iframes/contact';
import { images } from '@repo/constants/images';
import IntroPage from '@repo/components/layout/intros/page';
import {
  APP_NAME,
  COMPANY_NAME,
  EMAILS,
  LOCATIONS,
  PHONES,
} from '@repo/constants/app';
import FormContact from '@repo/components/form/contact';
import NextLink from '@repo/components/common/anchor/next-link';
import ImageDefault from '@repo/components/common/images/default';
import TabsContact from '@/components/common/tabs/contact';

export const dynamic = 'force-static';

const metaTitle = `Contact ${APP_NAME.WEB} - Reach Out for Training & Services`;
const metaDesc =
  'Have questions or need assistance? Get in touch with Drone Space today for drone training, services, and inquiries in Kenya.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/contact`,
    type: 'website',
    images: [
      {
        url: images.brand.droneSpace.logo.potrait.meta,
        width: 1200,
        height: 1200,
        alt: COMPANY_NAME,
      },
    ],
  },
};

export default async function Contact() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Reach Out',
          title: 'Contact Us',
          desc: 'Please reach out to us if you have questions about Drone Space, our offerings, or anything else.',
          bg: images.web.hero.light,
        }}
      />

      <LayoutSection
        id="page-contact"
        padded
        // bg={'var(--mantine-color-gray-1)'}
      >
        <TabsContact />
      </LayoutSection>
    </LayoutPage>
  );
}
