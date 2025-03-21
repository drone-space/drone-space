import React from 'react';

import { Metadata } from 'next';

import {
  Anchor,
  Card,
  Flex,
  Grid,
  GridCol,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

import ModalContactTraining from '@/components/common/modals/contact/training';
import ModalContactShop from '@/components/common/modals/contact/shop';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import FormContact from '@/components/form/contact';
// import IntroPage from '@/components/layout/intro/page';
import Link from 'next/link';
import {
  Icon,
  IconHeadset,
  IconHelpCircle,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSchool,
  IconShoppingBag,
} from '@tabler/icons-react';
import TooltipWhatsApp from '@/components/common/tooltips/whatsapp';
import appData from '@/data/app';
import { HOSTED_BASE_URL, SECTION_SPACING } from '@/data/constants';
import IframeContact from '@/components/common/iframes/contact';
import { images } from '@/assets/images';
import IntroPage from '@/components/layout/intro/page';

const metaTitle = `Contact ${appData.name.app} - Reach Out for Training & Services`;
const metaDesc =
  'Have questions or need assistance? Get in touch with Drone Space today for drone training, services, and inquiries in Kenya.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DRONE_SPACE}/about/contact`,
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

      <IframeContact props={{ src: appData.locations.main.iframe }} />

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
                href={`mailto:${appData.emails.info}`}
                underline="hover"
                c={'var(--mantine-color-text)'}
              >
                {appData.emails.info}
              </Anchor>

              <Anchor
                inherit
                ta={'center'}
                fz={'sm'}
                href={`mailto:${appData.emails.training}`}
                underline="hover"
                c={'var(--mantine-color-text)'}
              >
                {appData.emails.training}
              </Anchor>
            </CardContact>
          </GridCol>

          <GridCol span={{ base: 12, md: 4 }} order={{ xs: 3, md: 2 }}>
            <CardContact props={{ title: 'Office Address' }}>
              <Text ta={'center'} fz={'sm'} w={{ md: '75%', lg: '66%' }}>
                {appData.locations.main.location}
              </Text>
            </CardContact>
          </GridCol>

          <GridCol span={{ base: 12, xs: 6, md: 4 }} order={{ xs: 2, md: 3 }}>
            <CardContact props={{ title: 'Call Us' }}>
              <Anchor
                inherit
                ta={'center'}
                fz={'sm'}
                href={`tel:${appData.phones.main}`}
                underline="hover"
                c={'var(--mantine-color-text)'}
              >
                {appData.phones.main}
              </Anchor>

              <Anchor
                inherit
                ta={'center'}
                fz={'sm'}
                href={`tel:${appData.phones.other}`}
                underline="hover"
                c={'var(--mantine-color-text)'}
              >
                {appData.phones.other}
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
        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12, md: 6, lg: 5 }} order={{ base: 2, md: 1 }}>
            <Card withBorder bg={'white'} shadow="xs">
              <FormContact />
            </Card>

        <Text ta={'center'} fz={'xs'} mt={'md'}>
          Please consult the{' '}
          <Anchor component={Link} inherit fw={500} href="/resources/faq">
            FAQ
          </Anchor>
          &apos;s first.
        </Text>
      </LayoutSection>
    </LayoutPage>
  );
}

const options = [
  {
    title: 'Training Inquiries',
    description: (
      <Text inherit fz={{ base: 'xs', lg: 'sm' }}>
        For course details please visit our training section, for course prices
        go to{' '}
        <Anchor
          component={Link}
          href="/drone-training/pricing"
          inherit
          fw={500}
        >
          pricing
        </Anchor>{' '}
        and for any other training inquiries, please send us a{' '}
        <ModalContactTraining>
          <Anchor inherit fw={500}>
            training inquiry
          </Anchor>
        </ModalContactTraining>
        .
      </Text>
    ),
    icon: IconSchool,
  },
  {
    title: 'Product Inquiries',
    description: (
      <Text inherit fz={{ base: 'xs', lg: 'sm' }}>
        To see available drones and drone prices please visit our{' '}
        <Anchor component={Link} href="/shop" inherit fw={500}>
          shop section
        </Anchor>
        , for drone importation or other drone purchase inquiries, please send
        us a{' '}
        <ModalContactShop>
          <Anchor inherit fw={500}>
            product/purchase inquiry
          </Anchor>
        </ModalContactShop>
        .
      </Text>
    ),
    icon: IconShoppingBag,
  },
  {
    title: 'Technical Inquiries',
    description: (
      <Text inherit fz={{ base: 'xs', lg: 'sm' }}>
        Found a persistent bug to report? Have a new feature to suggest or any
        other technical issue to address? Please{' '}
        <ModalContactTechnical>
          <Anchor inherit fw={500}>
            contact our developer
          </Anchor>
          .
        </ModalContactTechnical>
      </Text>
    ),
    icon: IconHeadset,
  },
  {
    title: 'General Inquiries',
    description: (
      <Text inherit fz={{ base: 'xs', lg: 'sm' }}>
        For any inquiry that doesn&apos;t fit in the other three brackets, fill
        in the form on this page or{' '}
        <TooltipWhatsApp>
          <Anchor
            inherit
            fw={500}
            href={`${appData.socials.whatsapp.link}`}
            target="_blank"
          >
            start a chat with us
          </Anchor>
        </TooltipWhatsApp>
        .
      </Text>
    ),
    icon: IconHelpCircle,
  },
];

const CardContact = ({
  props,
  children,
}: {
  props: { title: string };
  children: React.ReactNode;
}) {
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
}
