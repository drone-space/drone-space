import React from 'react';

import LayoutPage from '@/components/layout/page';
import HeroHome from '@/components/layout/hero/home';
import HeaderMain from '@/components/layout/headers/main';
import NavbarMain from '@/components/layout/navbars/main';
import LayoutSection from '@/components/layout/section';
import LayoutBody from '@/components/layout/body';
import FooterMain from '@/components/layout/footers/main';
import AffixNavbar from '@/components/common/affixi/navbar';
import AffixTop from '@/components/common/affixi/top';
import AffixAssistant from '@/components/common/affixi/assistant';
import AffixWhatsapp from '@/components/common/affixi/whatsapp';
import { Button, Grid, GridCol, Stack, Text, Title } from '@mantine/core';
import ModalDownloadBrochure from '@/components/common/modals/download/brochure';
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
import categories from '@/data/categories';
import { linkify } from '@/utilities/formatters/string';
import partners from '@/data/partners';
import CardPartner from '@/components/common/cards/partner';
import CardWhy from '@/components/common/cards/why';
import CtaTraining from '@/components/partial/cta/training';

export default function Home() {
  return (
    <LayoutBody
      header={<HeaderMain />}
      nav={<NavbarMain />}
      footer={<FooterMain />}
    >
      <main>
        <LayoutPage>
          <HeroHome />

          <LayoutSection
            id="home-cta1"
            padded
            containerized={'md'}
            bg={
              'light-dark(var(--mantine-color-pri-light), var(--mantine-color-pri-light))'
            }
            shadowed
          >
            <Grid gutter={{ base: 'md', md: 'xl' }} justify="center">
              <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
                <ModalDownloadBrochure>
                  <Button h={'100%'} fullWidth>
                    <Stack align="center" py={'md'}>
                      <IconFileDownload size={24} stroke={2} />
                      <Text inherit component="span" ta={'center'}>
                        Download Brochure
                      </Text>
                    </Stack>
                  </Button>
                </ModalDownloadBrochure>
              </GridCol>
              <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
                <ModalContactCallback>
                  <Button h={'100%'} fullWidth>
                    <Stack align="center" py={'md'}>
                      <IconPhoneCall size={24} stroke={2} />
                      <Text inherit component="span" ta={'center'}>
                        Request Callback
                      </Text>
                    </Stack>
                  </Button>
                </ModalContactCallback>
              </GridCol>
              <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
                <ModalContactTraining>
                  <Button h={'100%'} fullWidth>
                    <Stack align="center" py={'md'}>
                      <IconSchool size={24} stroke={2} />
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
                    <IconShoppingCart size={24} stroke={2} />
                    <Text inherit component="span" ta={'center'}>
                      Shop for a Drone
                    </Text>
                  </Stack>
                </Button>
              </GridCol>
            </Grid>
          </LayoutSection>

          <LayoutSection
            id="home-solutions"
            bordered
            padded
            containerized={'responsive'}
          >
            <Stack gap={'xl'}>
              <Title order={2} ta={'center'}>
                Our Drone Solutions
              </Title>

              <Grid justify="center">
                {services.map((service) => (
                  <GridCol key={service.title} span={{ md: 4, xs: 6, lg: 3 }}>
                    <CardService data={service} />
                  </GridCol>
                ))}
              </Grid>
            </Stack>
          </LayoutSection>

          <LayoutSection
            id="home-products"
            shadowed
            padded
            containerized={'responsive'}
            bg={
              'light-dark(var(--mantine-color-gray-1), var(--mantine-color-gray-1))'
            }
          >
            <Stack gap={'xl'}>
              <Title order={2} ta={'center'}>
                Our Products
              </Title>

              <Grid>
                {drones.camera.map(
                  (product) =>
                    drones.camera.indexOf(product) < 2 && (
                      <GridCol
                        key={product.title.long}
                        span={{ base: 12, xs: 6, md: 4 }}
                      >
                        <CardShopDroneMain data={product} />
                      </GridCol>
                    )
                )}

                {drones.enterprise.map(
                  (product) =>
                    drones.enterprise.indexOf(product) < 2 && (
                      <GridCol
                        key={product.title.long}
                        span={{ base: 12, xs: 6, md: 4 }}
                      >
                        <CardShopDroneMain data={product} />
                      </GridCol>
                    )
                )}

                {drones.agriculture.map(
                  (product) =>
                    drones.agriculture.indexOf(product) < 1 && (
                      <GridCol
                        key={product.title.long}
                        span={{ base: 12, xs: 6, md: 4 }}
                      >
                        <CardShopDroneMain data={product} />
                      </GridCol>
                    )
                )}

                <GridCol span={{ base: 12, xs: 6, md: 4 }}>
                  <Stack justify="space-between" h={'100%'}>
                    <Button
                      component={Link}
                      href={'/shop'}
                      h={'100%'}
                      fullWidth
                      variant="light"
                      style={{ boxShadow: 'var(--mantine-shadow-xs)' }}
                    >
                      <Stack align="center" p={'md'}>
                        <IconShoppingCart size={24} stroke={2} />
                        <Text inherit component="span" ta={'center'}>
                          Go to Shop
                        </Text>
                      </Stack>
                    </Button>

                    {categories.map((category) => (
                      <Button
                        key={category.label}
                        component={Link}
                        href={`/shop/drones/${linkify(category.label)}`}
                        h={'100%'}
                        fullWidth
                        variant="light"
                        style={{ boxShadow: 'var(--mantine-shadow-xs)' }}
                      >
                        <Stack align="center" p={'md'}>
                          <category.icon size={24} stroke={2} />
                          <Text inherit component="span" ta={'center'}>
                            {category.label} Drones
                          </Text>
                        </Stack>
                      </Button>
                    ))}
                  </Stack>
                </GridCol>
              </Grid>
            </Stack>
          </LayoutSection>

          <LayoutSection
            id="home-partners"
            bordered
            padded
            containerized={'responsive'}
          >
            <Stack gap={'xl'}>
              <Title order={2} ta={'center'}>
                Our Partners
              </Title>

              <Grid>
                {partners.map((partner) => (
                  <GridCol
                    key={partner.title}
                    span={{ base: 6, xs: 4, md: 3, lg: 2 }}
                  >
                    <CardPartner data={partner} />
                  </GridCol>
                ))}
              </Grid>
            </Stack>
          </LayoutSection>

          <LayoutSection
            id="home-why"
            shadowed
            padded
            containerized={'responsive'}
            bg={
              'light-dark(var(--mantine-color-gray-1), var(--mantine-color-gray-1))'
            }
          >
            <Stack gap={'xl'}>
              <Stack>
                <Title order={2} ta={'center'}>
                  Why Choose Us
                </Title>
                <Text ta={'center'}>
                  Soar to new heights with us! As the leading provider of drone
                  license training and commercial drone operations in Kenya, we
                  are dedicated to helping you take your skills and business to
                  the next level. Join us today and experience the power of
                  flight.
                </Text>
              </Stack>

              <Grid justify="center">
                {whyUs.map((item) => (
                  <GridCol key={item.title} span={{ base: 12, xs: 6, sm: 4 }}>
                    <CardWhy data={item} />
                  </GridCol>
                ))}
              </Grid>
            </Stack>
          </LayoutSection>

          <CtaTraining data={{ type: 'basic' }} />
        </LayoutPage>
      </main>

      <AffixNavbar />
      <AffixTop />
      <AffixWhatsapp />
      <AffixAssistant />
    </LayoutBody>
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
