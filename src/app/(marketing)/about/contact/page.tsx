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
import FormInquiryGeneral from '@/components/form/inquiry/general';
// import IntroPage from '@/components/layout/intro/page';
import Link from 'next/link';
import {
  Icon,
  IconHelpCircle,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSchool,
  IconShoppingBag,
} from '@tabler/icons-react';
import TooltipWhatsApp from '@/components/common/tooltips/whatsapp';
import appData from '@/data/app';
import {
  HOSTED_BASE_URL,
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
import IframeContact from '@/components/common/iframes/contact';
import { images } from '@/assets/images';

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
      {/* <IntroPage
        props={{
          path: 'Reach Out',
          title: 'Contact Us',
          desc: 'Please reach out to us if you have questions about our enterprise offerings, or anything else.',
        }}
      /> */}

      <IframeContact props={{ src: appData.locations.main.iframe }} />

      <LayoutSection
        id="page-contact-cards"
        margined={SECTION_SPACING / 2}
        containerized={'responsive'}
      >
        <Grid>
          <GridCol span={{ base: 12, xs: 6, md: 4 }} order={{ xs: 1, md: 1 }}>
            <CardContact
              props={{
                icon: IconMail,
                title: 'Email Us',
                bg: 'var(--mantine-color-sec-3)',
              }}
            >
              <Anchor
                inherit
                ta={'center'}
                fz={'sm'}
                href={`mailto:${appData.emails.info}`}
              >
                {appData.emails.info}
              </Anchor>

              <Anchor
                inherit
                ta={'center'}
                fz={'sm'}
                href={`mailto:${appData.emails.training}`}
              >
                {appData.emails.training}
              </Anchor>
            </CardContact>
          </GridCol>

          <GridCol span={{ base: 12, md: 4 }} order={{ xs: 3, md: 2 }}>
            <CardContact
              props={{
                icon: IconMapPin,
                title: 'Office Address',
                bg: 'var(--mantine-color-pri-9)',
                c: 'var(--mantine-color-sec-3)',
              }}
            >
              <Text
                ta={'center'}
                fz={'sm'}
                c={'sec.3'}
                w={{ md: '75%', lg: '66%' }}
              >
                {appData.locations.main.location}
              </Text>
            </CardContact>
          </GridCol>

          <GridCol span={{ base: 12, xs: 6, md: 4 }} order={{ xs: 2, md: 3 }}>
            <CardContact
              props={{
                icon: IconPhone,
                title: 'Call Us',
                bg: 'var(--mantine-color-sec-3)',
              }}
            >
              <Anchor
                inherit
                ta={'center'}
                fz={'sm'}
                href={`tel:${appData.phones.main}`}
              >
                {appData.phones.main}
              </Anchor>

              <Anchor
                inherit
                ta={'center'}
                fz={'sm'}
                href={`tel:${appData.phones.other}`}
              >
                {appData.phones.other}
              </Anchor>
            </CardContact>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="page-contact"
        margined={SECTION_SPACING / 2}
        containerized={'responsive'}
      >
        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12, md: 6, lg: 5 }} order={{ base: 2, md: 1 }}>
            <Card withBorder bg={'white'} shadow="xs">
              <FormInquiryGeneral />
            </Card>

            <Text ta={'center'} fz={'sm'} mt={'md'}>
              Please consult the{' '}
              <Anchor component={Link} inherit fw={500} href="/resources/faq">
                FAQ
              </Anchor>
              &apos;s first.
            </Text>
          </GridCol>
          <GridCol span={{ base: 12, md: 6, lg: 7 }} order={{ base: 1, md: 2 }}>
            <Title
              order={2}
              fz={'xl'}
              fw={'bold'}
              ta={{ base: 'center', md: 'start' }}
            >
              Thanks for your interest. How can we help?
            </Title>

            <Text ta={{ base: 'center', md: 'start' }} mt={'md'}>
              Please let us know if you have a question about our enterprise,
              have an offering or proposal, want to leave a comment or would
              like further information.
            </Text>

            <Grid gutter={'xl'} mt={'xl'}>
              {options.map((option, index) => (
                <GridCol key={index} span={{ base: 12, xs: 6, sm: 6, md: 6 }}>
                  <Flex
                    direction={'column'}
                    align={{ base: 'center', md: 'start' }}
                    ta={{ base: 'center', md: 'start' }}
                    gap={'md'}
                  >
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE}
                      variant="light"
                      // display={{ base: undefined, sm: "none", md: "inherit" }}
                    >
                      <option.icon
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>

                    <Title order={3} fz={'md'} fw={'bold'}>
                      {option.title}
                    </Title>

                    {option.description}
                  </Flex>
                </GridCol>
              ))}
            </Grid>
          </GridCol>
        </Grid>
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
  props: { icon: Icon; title: string; bg?: string; c?: string };
  children: React.ReactNode;
}) => (
  <Card
    padding={'xl'}
    bg={props.bg}
    h={'100%'}
    style={{ display: 'flex', alignItems: 'center' }}
  >
    <ThemeIcon
      size={ICON_WRAPPER_SIZE * 1.5}
      radius={'xl'}
      color="white"
      c={'pri.9'}
    >
      <props.icon size={ICON_SIZE * 1.25} stroke={ICON_STROKE_WIDTH} />
    </ThemeIcon>

    <Title ta={'center'} order={3} c={props.c} my={'md'}>
      {props.title}
    </Title>

    {children}
  </Card>
);
