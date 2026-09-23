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

const service = services.find((c) => c.title == services[7].title);

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();

  return {
    title: service?.metaTitle,
    description: service?.linkDesc,
    openGraph: {
      title: service?.metaTitle,
      description: service?.linkDesc,
      url: `${baseUrl.WEB}/drone-solutions/${service?.title}`,
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
}

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
          <GridCol span={{ base: 12, md: 6, lg: 6.5 }} order={2}>
            <LayoutIntroSection
              props={{
                title: 'ROC Support',
                desc: `A ROC is a certification approved and issued by the KCAA that demonstrates that an organization fulfils the legal requirements to commercially operate a drone; Both the drone and the pilot will need to operate under a RPAS Operating Certificate.`,
              }}
              options={{ alignment: 'start' }}
            />

            <Text mt={'xl'}>
              We are the holders of ROC 002. We support our clients&apos; commercial operations
              through our ROC at affordable rates to ensure safety and legal compliance. Our ROC
              enables you carry out missions in a legal and compliant manner with significant cost
              savings on setup costs.
            </Text>

            {features.roc.map((item, index) => (
              <Group key={index} gap={'xs'} wrap="nowrap" align="start" pl={{ md: 'md' }} mt={'xs'}>
                <ThemeIcon size={ICON_WRAPPER_SIZE / 1.5} mt={2} color="sec.3" c={'pri.9'}>
                  <IconArrowRightDashed size={ICON_SIZE / 1.5} stroke={ICON_STROKE_WIDTH} />
                </ThemeIcon>

                <Text fz={'sm'}>{item}</Text>
              </Group>
            ))}

            <ModalContactService
              props={{
                initialValues: {
                  subject: `ROC Support Service Inquiry`,
                  message: `Hello, I am interested in your ROC support services. Please send me more information about it.`,
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

          <GridCol span={{ base: 12, md: 6, lg: 5.5 }} order={1}>
            <ImageDefault
              src={images.services.rocSup}
              alt={'ROC Support'}
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
          title: 'Remote Operations Centre',
          desc: 'Optimize your drone operations with centralized monitoring and control. Our ROC support services provide mission planning, fleet management, live monitoring, data processing, and compliance oversight for scalable and efficient drone programs.',
          options: { service },
        }}
      />
    </LayoutPage>
  );
}

const features = {
  roc: [
    'Simplified Monthly Subscription',
    'Paperwork Support',
    'Timely Processing of Authorizations',
    'Incident/accident reporting',
  ],
};
