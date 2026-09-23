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

const service = services.find((c) => c.title == services[5].title);

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
                title: 'Medical Delivery',
                desc: `Our drones can swiftly transport essential medical supplies to remote or hard-to-reach areas, ensuring access to critical healthcare when every second counts.`,
              }}
              options={{ alignment: 'start' }}
            />

            {features.medical.map((item, index) => (
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
                  subject: `Medical Delivery Service Inquiry`,
                  message: `Hello, I am interested in your medical delivery service. Please send me more information about it.`,
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
              src={images.services.medical}
              alt={'Medical Delivery'}
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
          title: 'Fast & Reliable Medical Drone Delivery',
          desc: 'Enable life-saving logistics with aerial delivery solutions. We support the transport of essential medical supplies, blood samples, vaccines, and emergency equipment to remote or hard-to-reach locations—reducing delivery times when every second matters.',
          options: { service },
        }}
      />
    </LayoutPage>
  );
}

const features = {
  medical: [
    {
      title: 'Emergency Medical Support',
      desc: 'Drones deliver life-saving supplies like automated external defibrillators (AEDs), epinephrine injectors, and first aid kits directly to emergency scenes, ensuring rapid response during critical moments.',
    },
    // {
    //   title: 'Blood and Organ Transportation',
    //   desc: 'Time-sensitive deliveries of blood, plasma, and organs for transplants are streamlined with drone technology, saving precious minutes when every second counts.',
    // },
    {
      title: 'Remote Vaccination Campaigns',
      desc: 'Medical drones reach isolated communities to distribute vaccines efficiently, especially during health crises like epidemics or pandemics.',
    },
    {
      title: 'Faster Diagnostic Sample Transfers',
      desc: 'Quickly transport diagnostic samples—such as blood or swabs—to laboratories for prompt analysis and decision-making.',
    },
    {
      title: 'Disaster Relief and Humanitarian Aid',
      desc: 'Drones deliver essential medical supplies to areas affected by natural disasters, ensuring healthcare support when traditional routes are disrupted.',
    },
  ],
};
