import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import { LayoutSection } from '@repo/ui';
import {
  Grid,
  GridCol,
  Text,
  ThemeIcon,
  Group,
  Card,
  Divider,
  Title,
  Button,
  Stack,
} from '@mantine/core';
import { ModalContactService } from '@repo/ui';
import { IconArrowRightDashed, IconMessage } from '@tabler/icons-react';
import { getBaseUrl, ICON_SIZE, ICON_STROKE_WIDTH, ICON_WRAPPER_SIZE } from '@repo/constants';
import { LayoutIntroSection } from '@repo/ui';
import { ImageDefault } from '@repo/ui';
import { images } from '@repo/constants';
import { linkify } from '@repo/utils';
import { LayoutIntroPage } from '@repo/ui';
import { COMPANY_NAME } from '@repo/constants';
import services from '@web/data/services';
import { GetLayout } from '../../faq/page';
import AccordionFaq from '@web/ui/common/accordions/faq';
import CtaMain from '@web/ui/partial/cta/main';

const service = services.find((c) => c.title == services[6].title);

export const metadata: Metadata = {
  title: service?.metaTitle,
  description: service?.linkDesc,
  openGraph: {
    title: service?.metaTitle,
    description: service?.linkDesc,
    url: `${(await getBaseUrl()).WEB}/drone-solutions/${service?.title}`,
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
      <LayoutIntroPage
        props={{
          path: 'Drone Services',
          title: service.title || '',
          bg: images.web.hero.light,
          desc: service?.linkDesc,
        }}
      />

      <LayoutSection id={linkify(service.title)} padded>
        <Grid gap={'xl'}>
          <GridCol span={{ base: 12, md: 6, lg: 6.5 }} order={{ base: 2, md: 1 }}>
            <LayoutIntroSection
              props={{
                title: 'Consultancy and Resale',
                desc: `We are authorized drone importers and resellers, offering a wide range of high-quality drone solutions to meet your needs. We
                        also offer drone consultancy services to help you get the most
                        out of your drone solutions. Our team of experts can help you
                        with everything from drone selection and setup, to training and
                        maintenance.`,
              }}
              options={{ alignment: 'start' }}
            />

            {features.consRes.map((item, index) => (
              <Group key={index} gap={'xs'} wrap="nowrap" align="start" pl={{ md: 'md' }} mt={'xs'}>
                <ThemeIcon size={ICON_WRAPPER_SIZE / 1.5} mt={2} color="sec.3" c={'pri.9'}>
                  <IconArrowRightDashed size={ICON_SIZE / 1.5} stroke={ICON_STROKE_WIDTH} />
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
                  subject: `Drone Consultancy and Resale Service Inquiry`,
                  message: `Hello, I am interested in your drone consultancy and resale services. Please send me more information about it.`,
                },
              }}
            >
              <Button
                mt={'xl'}
                variant="outline"
                leftSection={<IconMessage size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
              >
                <Text component="span" inherit>
                  Inquire or Request a Quote
                </Text>
              </Button>
            </ModalContactService>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 5.5 }} order={{ base: 1, md: 2 }}>
            <ImageDefault
              src={images.services.conRes}
              alt={'Consultancy and Resale'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
            />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="pricing-training-faq" padded bg={'var(--mantine-color-gray-1)'}>
        <GetLayout
          props={{
            header: (
              <LayoutIntroSection
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
          title: 'Drone Consultancy & Equipment Resale',
          desc: 'Get expert guidance on choosing and deploying the right drone solutions. We offer professional consultancy for businesses and individuals, along with trusted resale of high-performance drones and accessories tailored to your operational needs.',
          options: { service },
        }}
      />
    </LayoutPage>
  );
}

const features = {
  consRes: [
    {
      title: 'Wide Range of Products',
      desc: 'We offer a wide range of drones and drone accessories, including multirotor, fixed-wing drones, and more, to meet your needs.',
    },
    {
      title: 'Expert Advice',
      desc: 'Our team of experts can help you choose the right drone for your needs, taking into account your budget, requirements, and goals.',
    },
    {
      title: 'Affordable Prices',
      desc: 'We offer competitive pricing on all of our products, ensuring that you can get the drone solutions you need at a price you can afford.',
    },
    {
      title: 'Authorized Reseller',
      desc: 'Hassle-free importation and registration of your drone.',
    },
  ],
};
