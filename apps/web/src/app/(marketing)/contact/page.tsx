import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import { LayoutSection } from '@repo/ui';
import { LayoutIntroSection } from '@repo/ui';
import { Anchor, Card, Grid, GridCol, Stack, Text, Title } from '@mantine/core';
import { getBaseUrl } from '@repo/constants';
import { SECTION_SPACING } from '@repo/constants';
import { IFrameContact } from '@repo/ui';
import { images } from '@repo/constants';
import { LayoutIntroPage } from '@repo/ui';
import { APP_NAME, COMPANY_NAME, EMAILS, LOCATIONS, PHONES } from '@repo/constants';
import { FormContact } from '@repo/ui';
import { AnchorNextLink } from '@repo/ui';
import { ImageDefault } from '@repo/ui';
import TabsContact from '@web/ui/common/tabs/contact';

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
    url: `${(await getBaseUrl()).WEB}/contact`,
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
      <LayoutIntroPage
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
