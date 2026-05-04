/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import LayoutPage from '@repo/components/layout/page';
import LayoutMain from '@repo/components/layout/main';
import AffixNavbar from '@repo/components/common/affixi/navbar';
import LayoutSection from '@repo/components/layout/section';
import React from 'react';
import HeroHome from '@/components/layout/heros/home';
import HeaderMain from '@/components/layout/headers/main';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import {
  Anchor,
  Button,
  Divider,
  Grid,
  GridCol,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import ModalDownloadDocument from '@repo/components/common/modals/download/document';
import {
  IconArrowRight,
  IconCalendarEvent,
  IconCertificate,
  IconCertificate2,
  IconChalkboardTeacher,
  IconDrone,
  IconFileDownload,
  IconPhoneCall,
  IconSchool,
  IconShoppingCart,
} from '@tabler/icons-react';
import ModalContactCallback from '@repo/components/common/modals/contact/callback';
import ModalContactTraining from '@repo/components/common/modals/contact/training';
import services from '@/data/services';
import CardService from '@/components/common/cards/service';
import { shuffleArray } from '@repo/utilities/array';
import { products } from '@repo/constants/products';
import CardShopDroneMain from '@/components/common/cards/shop/drones/main';
import partners from '@/data/partners';
import CardPartner from '@/components/common/cards/partner';
import CardWhy from '@/components/common/cards/why';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import IntroSection from '@repo/components/layout/intros/section';
import { ABOUT_STATS, COMPANY_NAME } from '@repo/constants/app';
import AlertKCAAUpdate from '@repo/components/common/alerts/kcaa-update';
import CtaMain from '@/components/partial/cta/main';
import NextLink from '@repo/components/common/anchor/next-link';
import { Metadata } from 'next';
import AffixAi from '@repo/components/common/affixi/ai';
import { courseList } from '@repo/constants/courses';
import CardCourse from '@/components/common/cards/training/course';
import CarouselPartners from '@/components/common/carousels/partners';

export const metadata: Metadata = {
  title: `${COMPANY_NAME} - The Leading Drone Training Academy in Kenya`,
};

export default function Home() {
  return (
    <HomeLayout>
      <HeroHome />

      <CarouselPartners data={partners} />

      <LayoutSection
        id="home-cta1"
        padded={SECTION_SPACING / 2}
        bg={'var(--mantine-color-pri-9)'}
      >
        <Grid gutter={{ base: 'md', md: 'xl' }} justify="center">
          <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
            <ModalDownloadDocument props={{ type: 'brochure' }}>
              <Button h={'100%'} fullWidth variant="gradient">
                <Stack align="center" py={SECTION_SPACING / 2} c={'sec.4'}>
                  <IconFileDownload
                    size={ICON_SIZE * 2.5}
                    stroke={ICON_STROKE_WIDTH}
                  />
                  <Text
                    inherit
                    component="span"
                    ta={'center'}
                    fz={'lg'}
                    c={'white'}
                  >
                    Download Brochure
                  </Text>
                </Stack>
              </Button>
            </ModalDownloadDocument>
          </GridCol>

          <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
            <ModalContactCallback>
              <Button h={'100%'} fullWidth variant="gradient">
                <Stack align="center" py={SECTION_SPACING / 2} c={'sec.4'}>
                  <IconPhoneCall
                    size={ICON_SIZE * 2.5}
                    stroke={ICON_STROKE_WIDTH}
                  />
                  <Text
                    inherit
                    component="span"
                    ta={'center'}
                    fz={'lg'}
                    c={'white'}
                  >
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
                  subject: `RPL Course Inquiry`,
                  message: `I'm interested in enrolling in your RPL training program.`,
                },
              }}
            >
              <Button h={'100%'} fullWidth variant="gradient">
                <Stack align="center" py={SECTION_SPACING / 2} c={'sec.4'}>
                  <IconSchool
                    size={ICON_SIZE * 2.5}
                    stroke={ICON_STROKE_WIDTH}
                  />
                  <Text
                    inherit
                    component="span"
                    ta={'center'}
                    fz={'lg'}
                    c={'white'}
                  >
                    Register for RPL
                  </Text>
                </Stack>
              </Button>
            </ModalContactTraining>
          </GridCol>

          <GridCol span={{ base: 12, xs: 6, sm: 3 }}>
            <NextLink href={'/shop'}>
              <Button h={'100%'} fullWidth variant="gradient">
                <Stack align="center" py={SECTION_SPACING / 2} c={'sec.4'}>
                  <IconShoppingCart
                    size={ICON_SIZE * 2.5}
                    stroke={ICON_STROKE_WIDTH}
                  />
                  <Text
                    inherit
                    component="span"
                    ta={'center'}
                    fz={'lg'}
                    c={'white'}
                  >
                    Shop for a Drone
                  </Text>
                </Stack>
              </Button>
            </NextLink>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="home-training" padded containerized={'responsive'}>
        <IntroSection
          props={{
            subTitle: 'Training',
            title: 'Our Training Courses',
            desc: `We offer comprehensive training programs designed to equip you with the skills and confidence to operate drone technology effectively. Whether you're a beginner or looking to advance your expertise, our courses combine practical experience with industry insights to help you stay ahead in a rapidly evolving field.`,
          }}
          options={{ spacing: true }}
        />

        <Stack gap={SECTION_SPACING}>
          <Grid justify="center" gutter={'xl'}>
            {courseList
              .filter((ci) => !ci.title.toLowerCase().includes('telephony'))
              .map(
                (item, index) =>
                  index < 3 && (
                    <GridCol key={index} span={{ base: 12, sm: 6, md: 4 }}>
                      <CardCourse data={item} />
                    </GridCol>
                  )
              )}
          </Grid>

          <Group justify="center">
            <Divider w={'75%'} />
          </Group>

          <Group justify="center">
            <NextLink href={'/drone-training'}>
              <Button
                color="pri"
                variant={'light'}
                rightSection={
                  <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                }
              >
                See more courses
              </Button>
            </NextLink>
          </Group>
        </Stack>
      </LayoutSection>

      <LayoutSection
        id="home-solutions"
        padded
        containerized={'responsive'}
        bg={
          'light-dark(var(--mantine-color-gray-1), var(--mantine-color-gray-1))'
        }
      >
        <IntroSection
          props={{
            subTitle: 'Services',
            title: 'Our Drone Solutions',
            desc: `We pride ourselves on delivering solutions tailored to meet your unique needs. From innovative strategies to hands-on support, our services are designed to help you achieve your goals and excel in a competitive landscape.`,
          }}
          options={{ spacing: true }}
        />

        <Stack gap={SECTION_SPACING}>
          <Grid justify="center">
            {services.map(
              (service, index) =>
                services.indexOf(service) < 3 && (
                  <GridCol key={index} span={{ base: 12, sm: 6, md: 4 }}>
                    <CardService data={service} />
                  </GridCol>
                )
            )}
          </Grid>

          {/* <Group justify="center">
            <Divider w={'75%'} />
          </Group> */}

          {/* <Group justify="center">
            <NextLink href={'/drone-solutions'}>
              <Button
                color="pri"
                variant={'light'}
                rightSection={
                  <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                }
              >
                See more drone solutions
              </Button>
            </NextLink>
          </Group> */}
        </Stack>
      </LayoutSection>

      <LayoutSection id="home-products" padded containerized={'responsive'}>
        <IntroSection
          props={{
            subTitle: 'Shop',
            title: 'Our Products',
            desc: `Browse our selection of drones, accessories, and equipment for every need. Shop high-quality drones for photography, agriculture, and enterprise.`,
          }}
          options={{ spacing: true }}
        />

        <Stack gap={SECTION_SPACING}>
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
          </Grid>

          <Group justify="center">
            <Divider w={'75%'} />
          </Group>

          <Group justify="center">
            <NextLink href={'/shop'}>
              <Button
                color="pri"
                variant={'light'}
                rightSection={
                  <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                }
              >
                See more drones & categories
              </Button>
            </NextLink>
          </Group>
        </Stack>
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
            <GridCol key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <CardWhy data={item} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <CtaMain />
    </HomeLayout>
  );
}

async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutMain
      header={
        <>
          <AlertKCAAUpdate />
          <HeaderMain />
        </>
      }
      nav={<NavbarMain />}
      footer={<FooterMain />}
    >
      <LayoutPage>
        <main>{children}</main>

        {/* <ModalNewsletter /> */}

        {/* <AffixNavbar> */}
        {/* <NavbarMain /> */}
        {/* </AffixNavbar> */}
        <AffixAi />
      </LayoutPage>
    </LayoutMain>
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
    icon: IconChalkboardTeacher,
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
  {
    icon: IconSchool,
    title: `Over ${ABOUT_STATS.RPL_CERTIFICATIONS} RPL Certifications`,
    desc: 'The Remote Pilot Licence (RPL) Training is the initial license required for a delegate/student to start their professional drone pilot career. Join us today and experience the power of flight.',
  },
  {
    icon: IconCalendarEvent,
    title: 'Host of First Ever Drone Tech and Data Expo in the Region',
    desc: 'Drone Space through its spaces and hub will develop different innovative spaces as well as training courses to meet the needs of drone operators, developers and innovators and to build strategic partnerships between them so as to support their innovations and developments.',
  },
  {
    icon: IconDrone,
    title: `${ABOUT_STATS.DRONE_OPERATIONS}+ Drone Operations Completed`,
    desc: 'Our skilled personnel are adept at spotting issues and verifying drone operations follow client specifications and regulatory standards. When problems arise, Drone Space provides instant reaction and communication to all parties.',
  },
];
