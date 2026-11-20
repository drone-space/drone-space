import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import { LayoutSection } from '@repo/ui';
import { Grid, GridCol, Text, ThemeIcon, Group, Button, Box, Divider } from '@mantine/core';
import { ModalContactTraining } from '@repo/ui';
import { IconArrowRightDashed, IconMessage, IconSchool } from '@tabler/icons-react';
import {
  getBaseUrl,
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants';
import { LayoutIntroSection } from '@repo/ui';
import { ImageDefault } from '@repo/ui';
import { images } from '@repo/constants';
import { linkify } from '@repo/utils';
import { courseList } from '@repo/constants';
import { LayoutIntroPage } from '@repo/ui';
import { COMPANY_NAME } from '@repo/constants';
import { GetLayout } from '../../faq/page';
import AccordionFaq from '@web/ui/common/accordions/faq';
import CtaMain from '@web/ui/partial/cta/main';

export const dynamic = 'force-static';

const course = courseList.find((c) => c.title == courseList[4].title);

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();

  return {
    title: course?.title,
    description: course?.linkDesc,
    metadataBase: new URL(baseUrl.WEB),
    openGraph: {
      title: course?.title,
      description: course?.linkDesc,
      url: `${baseUrl.WEB}/drone-training/${course?.title}`,
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

export default async function Course() {
  if (!course) throw new Error('Course not foud');

  const lsjEquipmentUrl =
    'https://shopcdnalpha.grainajz.com/category/53385/1277/917d4ab5da7c3856ce7c9af39a16ddb3/%E9%9B%B7%E8%BE%BE3.jpg';

  const lsjCapabilities = [
    'Hybrid Detection: Combines Ultra-Wideband (UWB) radar wall-penetration with multi-channel micro-seismic sensors.',
    'Deep Penetration: Detects vital signs and subtle vibrations through dense collapse debris, concrete, and soil.',
    'Real-Time Filtering: Distinguishes human respiration, heartbeat, and micro-movements from ambient structural noise.',
    'Wireless Sensor Array: Deployable seismic nodes communicate wirelessly with a ruggedized host terminal.',
    'Thermal & Diagnostic Synergy: Complements thermal imaging workflows for structural and rescue assessments.',
  ];

  const aditionalCapabilities = [
    'Detects human presence and subtle body movements through dense barriers.',
    'Identifies vital signs, including breathing and heartbeat activity.',
    'Detects trapped or buried survivors in disaster-affected areas.',
    'Filters environmental and structural noise for improved detection accuracy.',
    'Supports search-and-rescue operations and post-disaster structural assessment.',
    'Enables subsurface anomaly detection.',
  ];

  return (
    <LayoutPage>
      <LayoutIntroPage
        props={{
          path: 'Training Courses',
          title: course.title || '',
          bg: images.web.hero.light,
          desc: course?.linkDesc,
        }}
      />

      <LayoutSection id={linkify(course.title)} padded>
        <Grid gap={'xl'}>
          <GridCol span={{ base: 12, md: 6, lg: 6.5 }} order={{ base: 2, md: 1 }}>
            <LayoutIntroSection
              props={{
                subTitle: 'Who Is This For?',
                title: course.titleFull || course.title,
              }}
              options={{ alignment: 'start' }}
            />

            <Text mt={'lg'}>
              The Level I Thermography Certification course is designed for professionals who want
              to develop practical skills in using thermography for inspections and diagnostics.
              This course is suitable for individuals working in industries such as electrical,
              mechanical, and building inspections, as well as professionals involved in research
              and development. The certification is offered in collaboration with the Infrared
              Training Centre (ITC) and is globally recognized.
            </Text>

            {thermographyModules.map((item, index) => (
              <Group key={index} gap={'xs'} wrap="nowrap" align="start" mt={'md'}>
                <ThemeIcon size={ICON_WRAPPER_SIZE / 1.5} mt={2} color="sec.3" c={'pri.9'}>
                  <IconArrowRightDashed size={ICON_SIZE / 1.5} stroke={ICON_STROKE_WIDTH} />
                </ThemeIcon>

                <Text fz={'sm'}>{item}</Text>
              </Group>
            ))}

            <Text mt={'lg'}>
              By completing this course, students will learn how to use thermal imaging cameras to
              identify and diagnose faults in various systems, including electrical equipment,
              buildings, and mechanical systems. They will also gain an understanding of infrared
              theory, heat transfer concepts, and thermal imaging standards.
            </Text>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 5.5 }} order={{ base: 1, md: 2 }}>
            <ImageDefault
              src={images.training.thermography}
              alt={'Thermography'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
            />
          </GridCol>
        </Grid>

        <Text
          fz={'xs'}
          c={'dimmed'}
          ta={'center'}
          mt={SECTION_SPACING / 2}
          px={{ md: SECTION_SPACING }}
        >
          Upon completion, students will receive an internationally recognized Level I Thermography
          Certification, which can enhance their career prospects and credibility in the industry.
        </Text>

        <Group justify="center" gap="md" mt="xl">
          <ModalContactTraining
            props={{
              initialValues: {
                subject: `Thermography Course Inquiry`,
                message: `I'm interested in enrolling in your Thermography drone training program.`,
              },
            }}
          >
            <Button
              variant="gradient"
              leftSection={<IconSchool size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
            >
              Enroll For Thermography
            </Button>
          </ModalContactTraining>

          <Button component="a" href="#thermography-equipment" variant="outline">
            Thermography Equipment
          </Button>
        </Group>
      </LayoutSection>

      <LayoutSection id="thermography-equipment" padded bg={'var(--mantine-color-gray-0)'}>
        <Grid gap={'xl'}>
          <GridCol span={{ base: 12, md: 6, lg: 5.5 }}>
            <Box
              w={{ base: '100%', xs: '70%', md: '100%' }}
              mx={'auto'}
              pos={'sticky'}
              top={SECTION_SPACING / 2}
            >
              <ImageDefault
                src={lsjEquipmentUrl}
                alt={'Micro-Seismic Sensor / Radar Life Detector LSJ-M (9A Equipment)'}
                height={{ base: 400, xs: 480, sm: 600 }}
                mode="grid"
              />
            </Box>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 6.5 }}>
            <LayoutIntroSection
              props={{
                subTitle: 'Thermography Equipment',
                title: 'Micro-Seismic Sensor / Radar Life Detector LSJ-M (9A Equipment)',
              }}
              options={{ alignment: 'start' }}
            />

            <Text mt={'lg'}>
              The LSJ-M (9A Equipment) combines UWB radar and multi-channel micro-seismic sensing
              technology to detect subtle vibrations, breathing, and movement through dense barriers
              such as concrete, rubble, and soil. Paired with thermal and diagnostic inspection
              workflows, it supports search-and-rescue, structural assessment, and subsurface
              investigations.
            </Text>

            {lsjCapabilities.map((item, index) => {
              const contentSlipt = item.split(':');

              return (
                <Group key={index} gap={'xs'} wrap="nowrap" align="start" mt={'md'}>
                  <ThemeIcon size={ICON_WRAPPER_SIZE / 1.5} mt={2} color="sec.3" c={'pri.9'}>
                    <IconArrowRightDashed size={ICON_SIZE / 1.5} stroke={ICON_STROKE_WIDTH} />
                  </ThemeIcon>

                  <Text fz={'sm'}>
                    <strong>{contentSlipt[0]}</strong>: {contentSlipt[1]}
                  </Text>
                </Group>
              );
            })}

            <Divider
              my={'lg'}
              label={'Additional capabilities'}
              labelPosition="left"
              styles={{ label: { fontSize: 'var(--mantine-font-size-sm)' } }}
            />

            {aditionalCapabilities.map((item, index) => {
              return (
                <Group key={index} gap={'xs'} wrap="nowrap" align="start" mt={'md'}>
                  <ThemeIcon size={ICON_WRAPPER_SIZE / 1.5} mt={2} color="sec.3" c={'pri.9'}>
                    <IconArrowRightDashed size={ICON_SIZE / 1.5} stroke={ICON_STROKE_WIDTH} />
                  </ThemeIcon>

                  <Text fz={'sm'}>{item}</Text>
                </Group>
              );
            })}

            <Group mt={'lg'}>
              <Text inherit fz={'md'} c={'dimmed'}>
                *Compatible with DJI M350 & DJI FlyCart 30 Drones
              </Text>
            </Group>

            <Group mt={'lg'}>
              <ModalContactTraining
                props={{
                  initialValues: {
                    subject: 'LSJ-M (9A Equipment) Inquiry',
                    message:
                      'Hello, I would like more details and pricing information for the Micro-Seismic Sensor / Radar Life Detector LSJ-M (9A Equipment).',
                  },
                }}
              >
                <Button>Inquire About LSJ-M Equipment</Button>
              </ModalContactTraining>
            </Group>
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
          <AccordionFaq section="training" />
        </GetLayout>
      </LayoutSection>

      <CtaMain
        props={{
          title: 'See Beyond the Visible',
          desc: 'Unlock the power of thermal imaging with drones. This course teaches you how to capture and interpret thermal data for applications such as inspections, security, and energy audits. Expand your capabilities and offer high-demand specialized services.',
          options: { course },
        }}
      />
    </LayoutPage>
  );
}

const thermographyModules = [
  'Introduction to Thermography',
  'Heat & Temperature',
  'Infrared Theory Basics',
  'Measurement Techniques',
  'Basic Heat transfer theory',
  'Camera Measurement tools',
  'Camera/Software familiarization',
  'ITC Certification Test',
];
