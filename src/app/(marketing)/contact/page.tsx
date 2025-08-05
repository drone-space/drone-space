import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import Link from 'next/link';
import IntroSection from '@/components/layout/intros/section';
import { Anchor, Card, Grid, GridCol, Text, Title } from '@mantine/core';
import FormInquiryGeneral from '@/components/form/inquiry/general';
import { HOSTED_BASE_URL, SECTION_SPACING } from '@/data/constants';
import IframeContact from '@/components/common/iframes/contact';
import { images } from '@/assets/images';
import IntroPage from '@/components/layout/intros/page';
import { appName, companyName, emails, locations, phones } from '@/data/app';

export const dynamic = 'force-static';

const metaTitle = `Contact ${appName} - Reach Out for Training & Services`;
const metaDesc =
  'Have questions or need assistance? Get in touch with Drone Space today for drone training, services, and inquiries in Kenya.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DEFAULT}/contact`,
    type: 'website',
    images: [
      {
        url: images.brand.droneSpace.logo.potrait.meta,
        width: 1200,
        height: 1200,
        alt: companyName,
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
        }}
      />

      <IframeContact props={{ src: locations.main.iframe }} />

      <LayoutSection
        id="page-contact-cards"
        padded={SECTION_SPACING / 2}
        containerized={'responsive'}
      >
        <Grid>
          <GridCol span={{ base: 12, xs: 6, md: 4 }} order={{ xs: 1, md: 1 }}>
            <CardContact props={{ title: 'Email Us' }}>
              <Anchor
                inherit
                ta={'center'}
                fz={'sm'}
                href={`mailto:${emails.info}`}
                underline="hover"
                c={'var(--mantine-color-text)'}
              >
                {emails.info}
              </Anchor>

              <Anchor
                inherit
                ta={'center'}
                fz={'sm'}
                href={`mailto:${emails.training}`}
                underline="hover"
                c={'var(--mantine-color-text)'}
              >
                {emails.training}
              </Anchor>
            </CardContact>
          </GridCol>

          <GridCol span={{ base: 12, md: 4 }} order={{ xs: 3, md: 2 }}>
            <CardContact props={{ title: 'Office Address' }}>
              <Text ta={'center'} fz={'sm'} w={{ md: '75%', lg: '66%' }}>
                {locations.main.location}
              </Text>
            </CardContact>
          </GridCol>

          <GridCol span={{ base: 12, xs: 6, md: 4 }} order={{ xs: 2, md: 3 }}>
            <CardContact props={{ title: 'Call Us' }}>
              <Anchor
                inherit
                ta={'center'}
                fz={'sm'}
                href={`tel:${phones.main}`}
                underline="hover"
                c={'var(--mantine-color-text)'}
              >
                {phones.main}
              </Anchor>

              <Anchor
                inherit
                ta={'center'}
                fz={'sm'}
                href={`tel:${phones.other}`}
                underline="hover"
                c={'var(--mantine-color-text)'}
              >
                {phones.other}
              </Anchor>
            </CardContact>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="page-contact"
        padded={SECTION_SPACING / 2}
        containerized={'sm'}
        bg={'var(--mantine-color-gray-1)'}
      >
        <IntroSection
          props={{
            subTitle: 'Inquiries',
            title: 'Thanks for your interest. How can we help?',
            desc: `Please let us know if you have a question about our enterprise, have an offering or proposal, want to leave a comment or would like further information.`,
          }}
          options={{ spacing: true }}
        />

        <Card bg={'white'}>
          <FormInquiryGeneral />
        </Card>

        <Text ta={'center'} fz={'xs'} mt={'md'}>
          Please consult the{' '}
          <Anchor component={Link} inherit fw={500} href="/faq">
            FAQ
          </Anchor>
          &apos;s first.
        </Text>
      </LayoutSection>
    </LayoutPage>
  );
}

const CardContact = ({
  props,
  children,
}: {
  props: { title: string };
  children: React.ReactNode;
}) => {
  return (
    <Card
      padding={'xl'}
      h={'100%'}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <Title ta={'center'} order={3} my={'md'} fz={'xl'}>
        {props.title}
      </Title>

      {children}
    </Card>
  );
};
