import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import LayoutSection from '@repo/components/layout/section';
import { Grid, GridCol, Text, ThemeIcon, Group, Button } from '@mantine/core';
import ModalContactTraining from '@repo/components/common/modals/contact/training';
import { IconArrowRightDashed, IconMessage } from '@tabler/icons-react';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import IntroSection from '@repo/components/layout/intros/section';
import ImageDefault from '@repo/components/common/images/default';
import { images } from '@repo/constants/images';
import { linkify } from '@repo/utilities/url';
import { courseList } from '@repo/constants/courses';
import IntroPage from '@repo/components/layout/intros/page';
import { COMPANY_NAME } from '@repo/constants/app';

const course = courseList.find((c) => c.slug == 'thermography');

export const metadata: Metadata = {
  title: course?.title,
  description: course?.linkDesc,
  openGraph: {
    title: course?.title,
    description: course?.linkDesc,
    url: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/drone-training/${course?.slug}`,
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

export default async function Course() {
  if (!course) throw new Error('Course not foud');

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Training Courses',
          title: course.title || '',
          bg: images.web.hero.light,
          desc: course?.linkDesc,
        }}
      />

      <LayoutSection
        id={linkify(course.title)}
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid gutter={'xl'}>
          <GridCol
            span={{ base: 12, md: 6, lg: 6.5 }}
            order={{ base: 2, md: 1 }}
          >
            <IntroSection
              props={{
                subTitle: 'Who Is This For?',
                title: course.title,
              }}
              options={{ alignment: 'start' }}
            />

            <Text mt={'lg'}>
              The Level I Thermography Certification course is designed for
              professionals who want to develop practical skills in using
              thermography for inspections and diagnostics. This course is
              suitable for individuals working in industries such as electrical,
              mechanical, and building inspections, as well as professionals
              involved in research and development. The certification is offered
              in collaboration with the Infrared Training Centre (ITC) and is
              globally recognized.
            </Text>

            {thermographyModules.map((item, index) => (
              <Group
                key={index}
                gap={'xs'}
                wrap="nowrap"
                align="start"
                mt={'md'}
              >
                <ThemeIcon
                  size={ICON_WRAPPER_SIZE / 1.5}
                  mt={2}
                  color="sec.3"
                  c={'pri.8'}
                >
                  <IconArrowRightDashed
                    size={ICON_SIZE / 1.5}
                    stroke={ICON_STROKE_WIDTH}
                  />
                </ThemeIcon>

                <Text fz={'sm'}>{item}</Text>
              </Group>
            ))}

            <Text mt={'lg'}>
              By completing this course, students will learn how to use thermal
              imaging cameras to identify and diagnose faults in various
              systems, including electrical equipment, buildings, and mechanical
              systems. They will also gain an understanding of infrared theory,
              heat transfer concepts, and thermal imaging standards.
            </Text>
          </GridCol>

          <GridCol
            span={{ base: 12, md: 6, lg: 5.5 }}
            order={{ base: 1, md: 2 }}
          >
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
          Upon completion, students will receive an internationally recognized
          Levell Thermography Certification, which can enhance their career
          prospects and credibility in the industry.
        </Text>

        <Group justify="center">
          <ModalContactTraining
            props={{
              initialValues: {
                subject: `Thermography Course Inquiry`,
                message: `I'm interested in enrolling in your Thermography drone training program.`,
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
              Enroll For Thermography
            </Button>
          </ModalContactTraining>
        </Group>
      </LayoutSection>
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
