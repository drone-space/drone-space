import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import LayoutSection from '@repo/components/layout/section';
import { Grid, GridCol, Text, Button } from '@mantine/core';
import ModalContactService from '@repo/components/common/modals/contact/service';
import { IconMessage } from '@tabler/icons-react';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';
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
  (c) => linkify(c.titleShort || c.title) == 'thermal-inspection'
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
          <GridCol span={{ base: 12, md: 6, lg: 6.5 }} order={2}>
            <IntroSection
              props={{
                title: 'Thermal Inspection',
                desc: `Our thermal inspection services leverage advanced drone technology to provide detailed thermal imaging and analysis for a variety of applications. We specialize in identifying anomalies and potential issues in solar panels, landfills, dumpsites, geothermal sites, and power lines. Our high-resolution thermal data enables early detection of problems, facilitating timely maintenance and preventing costly failures.`,
              }}
              options={{ alignment: 'start' }}
            />

            <Text mt={'md'}>
              By combining innovative technologies with extensive inspection
              experience, our inspectors perform thorough examinations of solar
              panels as well as associated wiring and hardware in a
              professional, safe, and efficient manner.
            </Text>

            <Text mt={'md'}>
              Our field employees have access to FLIR (Infra-Red Cameras) as
              well as Unmanned Aircraft Systems with Infra-red capabilities
              solution that enables customers to watch inspections. This
              facilitates real-time responses as opposed to long email chains
              that take up valuable time and data.
            </Text>

            <ModalContactService
              props={{
                initialValues: {
                  subject: `Thermal Inspection Service Inquiry`,
                  message: `Hello, I am interested in your thermal inspection service. Please send me more information about it.`,
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

          <GridCol span={{ base: 12, md: 6, lg: 5.5 }} order={1}>
            <ImageDefault
              src={images.services.solIns}
              alt={'Thermal Inspection'}
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
          title: 'Advanced Thermal Inspection Services',
          desc: 'Detect issues before they become costly problems. Our thermal drone inspections identify heat loss, electrical faults, structural weaknesses, and equipment anomalies. Ideal for industrial facilities, solar farms, power lines, and building diagnostics.',
          options: { service },
        }}
      />
    </LayoutPage>
  );
}
