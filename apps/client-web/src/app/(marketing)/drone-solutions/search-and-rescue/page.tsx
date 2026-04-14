import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import LayoutSection from '@repo/components/layout/section';
import { Grid, GridCol, Text, ThemeIcon, Group, Button } from '@mantine/core';
import ModalContactService from '@repo/components/common/modals/contact/service';
import { IconArrowRightDashed, IconMessage } from '@tabler/icons-react';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import IntroSection from '@repo/components/layout/intros/section';
import ImageDefault from '@repo/components/common/images/default';
import { images } from '@repo/constants/images';
import { linkify } from '@repo/utilities/url';
import IntroPage from '@repo/components/layout/intros/page';
import { COMPANY_NAME } from '@repo/constants/app';
import services from '@/data/services';
import { GetLayout } from '../../faq/page';
import AccordionFaq from '@/components/common/accordions/faq';
import CtaMain from '@/components/partial/cta/main';

const service = services.find(
  (c) => linkify(c.titleShort || c.title) == 'search-and-rescue'
);

export const metadata: Metadata = {
  title: service?.metaTitle,
  description: service?.linkDesc,
  openGraph: {
    title: service?.metaTitle,
    description: service?.linkDesc,
    url: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/drone-solutions/${service?.titleShort || service?.title}`,
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

export default async function Service() {
  if (!service) throw new Error('Service not foud');

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Drone Services',
          title: service.title || '',
          bg: images.web.hero.light,
          desc: service?.linkDesc,
        }}
      />

      <LayoutSection id={linkify(service.title)} padded>
        <Grid gutter={'xl'}>
          <GridCol
            span={{ base: 12, md: 6, lg: 6.5 }}
            order={{ base: 2, md: 1 }}
          >
            <IntroSection
              props={{
                title: 'Search and Rescue',
                desc: `We are equipped to support search and rescue operations with our advanced drone technology. Our drones, equipped with thermal imaging cameras and long-range capabilities, can quickly scan vast areas, providing crucial aerial support to locate missing persons or assess disaster zones efficiently and safely.`,
              }}
              options={{ alignment: 'start' }}
            />

            {features.sar.map((item, index) => (
              <Group
                key={index}
                gap={'xs'}
                wrap="nowrap"
                align="start"
                pl={{ md: 'md' }}
                mt={'xs'}
              >
                <ThemeIcon
                  size={ICON_WRAPPER_SIZE / 1.5}
                  mt={2}
                  color="sec.3"
                  c={'pri.9'}
                >
                  <IconArrowRightDashed
                    size={ICON_SIZE / 1.5}
                    stroke={ICON_STROKE_WIDTH}
                  />
                </ThemeIcon>

                <Text fz={'sm'}>
                  <Text component="span" inherit fw={'bold'} c={'pri.9'}>
                    {item.title}
                  </Text>
                  : {item.desc}
                </Text>
              </Group>
            ))}

            <ModalContactService
              props={{
                initialValues: {
                  subject: `Search and Rescue Service Inquiry`,
                  message: `Hello, I am interested in your search and rescue service. Please send me more information about it.`,
                },
              }}
            >
              <Button
                mt={'xl'}
                variant="outline"
                leftSection={
                  <IconMessage size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                }
              >
                <Text component="span" inherit>
                  Inquire or Request a Quote
                </Text>
              </Button>
            </ModalContactService>
          </GridCol>

          <GridCol
            span={{ base: 12, md: 6, lg: 5.5 }}
            order={{ base: 1, md: 2 }}
          >
            <ImageDefault
              src={images.services.sar}
              alt={'Search and Rescue'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
            />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="pricing-training-faq"
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <GetLayout
          props={{
            header: (
              <IntroSection
                props={{
                  subTitle: `FAQ's`,
                  title: `Frequently Asked Questions`,
                  desc: `For further information, please visit our training section, and for any other training inquiries, please send us a training inquiry.`,
                }}
                options={{ alignment: 'start' }}
              />
            ),
          }}
        >
          <AccordionFaq />
        </GetLayout>
      </LayoutSection>

      <CtaMain
        props={{
          title: 'Rapid Response Search & Rescue Support',
          desc: 'Enhance emergency response with aerial awareness. Our drone-based search and rescue services provide real-time imaging, thermal detection, and rapid area coverage to support missing person searches, disaster response, and critical emergency operations.',
          options: { service },
        }}
      />
    </LayoutPage>
  );
}

const features = {
  sar: [
    {
      title: 'Comprehensive Aerial Surveillance',
      desc: 'Drones provide a bird’s-eye view, enabling rapid coverage of vast or difficult terrains, including forests, mountains, and water bodies. They deliver high-resolution imagery and live video feeds to enhance situational awareness.',
    },
    {
      title: 'Thermal and Night Vision Capabilities',
      desc: 'With advanced thermal imaging, drones can detect heat signatures, making it possible to locate individuals even in darkness, dense vegetation, or challenging weather conditions.',
    },
    // {
    //   title: 'Real-Time Data Sharing',
    //   desc: 'Equipped with live-streaming technology, drones transmit critical information and visuals directly to rescue teams, ensuring quick and informed decision-making.',
    // },
    // {
    //   title: 'Access to Hard-to-Reach Locations',
    //   desc: 'Whether it’s navigating narrow canyons, collapsed structures, or flood zones, drones excel in reaching areas that are inaccessible or unsafe for human rescuers.',
    // },
    {
      title: 'Emergency Supply Delivery',
      desc: 'Drones can deliver essential items such as first aid kits, water, food, or communication tools to stranded individuals, bridging the gap until help arrives.',
    },
    // {
    //   title: 'Optimized Search Using AI',
    //   desc: 'Powered by artificial intelligence, drones can identify patterns, objects, or movements, streamlining the search process and increasing efficiency.',
    // },
  ],
};
