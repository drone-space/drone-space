import React from 'react';

import LayoutPage from '@/components/layout/page';
import HeroHome from '@/components/layout/heros/home';
import HeaderMain from '@/components/layout/headers/main';
import NavbarMain from '@/components/layout/navbars/main';
import LayoutSection from '@/components/layout/section';
import LayoutBody from '@/components/layout/body';
import FooterMain from '@/components/layout/footers/main';
import AffixNavbar from '@/components/common/affixi/navbar';
// import AffixAssistant from '@/components/common/affixi/assistant';
import {
  Anchor,
  Button,
  Grid,
  GridCol,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import ModalDownloadDocument from '@/components/common/modals/download/document';
import {
  IconCertificate,
  IconCertificate2,
  IconFileDownload,
  IconPhoneCall,
  IconSchool,
  IconShoppingCart,
} from '@tabler/icons-react';
import ModalContactCallback from '@/components/common/modals/contact/callback';
import ModalContactTraining from '@/components/common/modals/contact/training';
import services from '@/data/services';
import Link from 'next/link';
import CardService from '@/components/common/cards/service';
import { shuffleArray } from '@/utilities/helpers/array';
import products from '@/data/products';
import CardShopDroneMain from '@/components/common/cards/shop/drones/main';
import partners from '@/data/partners';
import CardPartner from '@/components/common/cards/partner';
import CardWhy from '@/components/common/cards/why';
import CtaNewsletter from '@/components/partials/cta/newsletter';
import {
  COOKIE_NAME,
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@/data/constants';
import { Metadata } from 'next';

import IntroSection from '@/components/layout/intros/section';
import ProviderStore from '@/components/providers/store';
import { cookies } from 'next/headers';
import { appName } from '@/data/app';

export const dynamic = 'force-static';
// export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL('https://dronespace.co.ke'),
  title: `${appName} Training - Premier Drone School & Services`,
  description:
    "Discover professional drone training, cutting-edge aerial services, and resources to elevate your skills. Join Drone Space, Kenya's trusted drone school.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'googlea27f7bc993f72c37',
  //   bing: '5983CB3ED415F82CBABAACB9D08395E1',
  //   // Add other search engine verification codes
  // },
};

export default function Home() {
  return (
    <HomeLayout>
      <LayoutPage>
        <HeroHome />

        <LayoutSection
          id="home-cta1"
          padded={SECTION_SPACING / 2}
          containerized={'md'}
          bg={
            'light-dark(var(--mantine-color-pri-light), var(--mantine-color-pri-light))'
          }
        >
          <Grid gutter={{ base: 'md', md: 'xl' }} justify="center">
            <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
              <ModalDownloadDocument props={{ type: 'brochure' }}>
                <Button h={'100%'} fullWidth>
                  <Stack align="center" py={'md'}>
                    <IconFileDownload
                      size={ICON_SIZE * 1.5}
                      stroke={ICON_STROKE_WIDTH}
                    />
                    <Text inherit component="span" ta={'center'}>
                      Download Brochure
                    </Text>
                  </Stack>
                </Button>
              </ModalDownloadDocument>
            </GridCol>
            <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
              <ModalContactCallback>
                <Button h={'100%'} fullWidth>
                  <Stack align="center" py={'md'}>
                    <IconPhoneCall
                      size={ICON_SIZE * 1.5}
                      stroke={ICON_STROKE_WIDTH}
                    />
                    <Text inherit component="span" ta={'center'}>
                      Request Callback
                    </Text>
                  </Stack>
                </Button>
              </ModalContactCallback>
            </GridCol>
            <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
              <ModalContactTraining
                props={{
                  initialValues: {
                    subject: `RPL Training Inquiry`,
                    message: `I'm interested in enrolling in your RPL training program.`,
                  },
                }}
              >
                <Button h={'100%'} fullWidth>
                  <Stack align="center" py={'md'}>
                    <IconSchool
                      size={ICON_SIZE * 1.5}
                      stroke={ICON_STROKE_WIDTH}
                    />
                    <Text inherit component="span" ta={'center'}>
                      Register for RPL
                    </Text>
                  </Stack>
                </Button>
              </ModalContactTraining>
            </GridCol>
            <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
              <Button component={Link} href={'/shop'} h={'100%'} fullWidth>
                <Stack align="center" py={'md'}>
                  <IconShoppingCart
                    size={ICON_SIZE * 1.5}
                    stroke={ICON_STROKE_WIDTH}
                  />
                  <Text inherit component="span" ta={'center'}>
                    Shop for a Drone
                  </Text>
                </Stack>
              </Button>
            </GridCol>
          </Grid>
        </LayoutSection>

        <LayoutSection id="home-solutions" padded containerized={'responsive'}>
          <IntroSection
            props={{
              subTitle: 'Services',
              title: 'Our Drone Solutions',
              desc: `At ${appName}, we pride ourselves on delivering solutions tailored to meet your unique needs. From innovative strategies to hands-on support, our services are designed to help you achieve your goals and excel in a competitive landscape.`,
            }}
            options={{ spacing: true }}
          />

          <Stack gap={SECTION_SPACING / 2}>
            <Grid justify="center">
              {services.map(
                (service, index) =>
                  services.indexOf(service) < 4 && (
                    <GridCol key={index} span={{ xs: 6, lg: 3 }}>
                      <CardService data={service} />
                    </GridCol>
                  )
              )}
            </Grid>

            <Anchor
              ta={'center'}
              component={Link}
              href={'/drone-solutions'}
              fz={'sm'}
              underline="hover"
              c={'dimmed'}
            >
              See more drone solutions
            </Anchor>
          </Stack>
        </LayoutSection>

        <LayoutSection
          id="home-products"
          padded
          containerized={'responsive'}
          bg={
            'light-dark(var(--mantine-color-gray-1), var(--mantine-color-gray-1))'
          }
        >
          <IntroSection
            props={{
              subTitle: 'Shop',
              title: 'Our Products',
              desc: `Browse our selection of drones, accessories, and equipment for every need. Shop high-quality drones for photography, agriculture, and enterprise.`,
            }}
            options={{ spacing: true }}
          />

          <Grid>
            {drones.camera.map(
              (product, index) =>
                drones.camera.indexOf(product) < 2 && (
                  <GridCol key={index} span={{ base: 12, xs: 6 }}>
                    <CardShopDroneMain data={product} />
                  </GridCol>
                )
            )}

            {drones.enterprise.map(
              (product, index) =>
                drones.enterprise.indexOf(product) < 2 && (
                  <GridCol key={index} span={{ base: 12, xs: 6 }}>
                    <CardShopDroneMain data={product} />
                  </GridCol>
                )
            )}

            <GridCol span={12}>
              <Group justify="center" mt={'md'}>
                <Anchor
                  inherit
                  ta={'center'}
                  component={Link}
                  href={'/shop'}
                  fz={'sm'}
                  underline="hover"
                >
                  See more drones & categories
                </Anchor>
              </Group>
            </GridCol>
          </Grid>
        </LayoutSection>

        <LayoutSection id="home-partners" padded containerized={'responsive'}>
          <IntroSection
            props={{
              subTitle: 'Relations',
              title: 'Our Clients',
              desc: `At ${appName}, our clients are at the heart of everything we do. Over the years, we've had the privilege of collaborating with forward-thinking organizations across diverse industries, delivering tailored solutions that empower their success.`,
            }}
            options={{ spacing: true }}
          />

          <SimpleGrid cols={{ base: 2, xs: 3, md: 4, lg: 5 }}>
            {partners.map((partner, index) => (
              <CardPartner key={index} data={partner} />
            ))}
          </SimpleGrid>
        </LayoutSection>

        <LayoutSection
          id="home-why"
          padded
          containerized={'responsive'}
          bg={
            'light-dark(var(--mantine-color-gray-1), var(--mantine-color-gray-1))'
          }
        >
          <IntroSection
            props={{
              subTitle: 'Merits',
              title: 'Why Choose Us',
              desc: `Soar to new heights with us! As the leading provider of drone
                  license training and commercial drone operations in Kenya, we
                  are dedicated to helping you take your skills and business to
                  the next level. Join us today and experience the power of
                  flight.`,
            }}
            options={{ spacing: true }}
          />

          <Grid justify="center">
            {whyUs.map((item, index) => (
              <GridCol key={index} span={{ base: 12, xs: 6, sm: 4 }}>
                <CardWhy data={item} />
              </GridCol>
            ))}
          </Grid>
        </LayoutSection>

        <CtaNewsletter />
      </LayoutPage>
    </HomeLayout>
  );
}

const drones = {
  camera: shuffleArray(products.filter((p) => p.category == 'camera')),
  enterprise: shuffleArray(products.filter((p) => p.category == 'enterprise')),
  agriculture: shuffleArray(
    products.filter((p) => p.category == 'agriculture')
  ),
};

const whyUs = [
  {
    icon: IconSchool,
    title: 'Skilled Instructors',
    desc: 'Our highly skilled trainers use a rigorous teaching technique that ensures efficient learning.',
  },
  {
    icon: IconCertificate,
    title: 'KCAA Certified',
    desc: 'Approved and licensed by Kenya Civil Aviation Authority (KCAA).',
  },
  {
    icon: IconCertificate2,
    title: 'KFCB Certified',
    desc: 'Approved and licensed by Kenya Film Classification Board (KFCB) as a local film agent.',
  },
];

async function HomeLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const colorSchemeState = cookieStore.get(
    COOKIE_NAME.COLOR_SCHEME_STATE
  )?.value;

  return (
    <ProviderStore colorScheme={colorSchemeState || 'light'}>
      <LayoutBody
        header={<HeaderMain />}
        nav={<NavbarMain />}
        footer={<FooterMain />}
      >
        <main>{children}</main>

        <AffixNavbar />
        {/* <AffixAssistant /> */}
      </LayoutBody>
    </ProviderStore>
  );
}
