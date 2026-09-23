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

const service = services.find((c) => c.title == services[1].title);

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
          <GridCol span={{ base: 12, md: 6, lg: 6.5 }} order={2}>
            <LayoutIntroSection
              props={{
                title: 'Agriculture',
                desc: `From precise crop monitoring and targeted spraying to efficient data collection for informed decision­making, our drone technology optimizes resource allocation, reduces costs, and maximizes yields.`,
              }}
              options={{ alignment: 'start' }}
            />

            {features.agriculture.map((item, index) => (
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
                  subject: `Agriculture Service Inquiry`,
                  message: `Hello, I am interested in your agriculture service. Please send me more information about it.`,
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
              src={images.services.droSee}
              alt={'Agriculture'}
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
          title: 'Precision Agriculture with Drone Technology',
          desc: 'Transform modern farming with data-driven aerial insights. Our agricultural drone solutions support crop monitoring, field analysis, spraying, and yield optimization. Improve productivity, reduce costs, and make smarter farming decisions using high-resolution imaging and analytics.',
          options: { service },
        }}
      />
    </LayoutPage>
  );
}

const features = {
  agriculture: [
    {
      title: 'Increased Efficiency',
      desc: 'Drone technology allows us to spread seedballs and other seeds quickly and efficiently, reducing the time and effort required to reforest large areas of land.',
    },
    {
      title: 'Increased Accuracy',
      desc: 'Our drones can precisely target areas for reforestation, increasing the chances of successful seed germination and growth.',
    },
    {
      title: 'Cost-Effective',
      desc: 'Drone seeding is a cost-effective alternative to traditional reforestation methods, saving you time and money.',
    },
    {
      title: 'Improved Access',
      desc: 'Drone technology allows us to access difficult or remote areas for reforestation efforts, improving the overall success of reforestation efforts.',
    },
    {
      title: 'Climate Change Mitigation',
      desc: 'By spreading seedballs and other seeds for reforestation, we can help mitigate the effects of climate change and improve the health of our planet.',
    },
  ],
};
