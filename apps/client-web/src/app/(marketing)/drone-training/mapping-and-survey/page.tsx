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
} from '@repo/constants/sizes';
import IntroSection from '@repo/components/layout/intros/section';
import ImageDefault from '@repo/components/common/images/default';
import { images } from '@repo/constants/images';
import { linkify } from '@repo/utilities/url';
import { courseList } from '@repo/constants/courses';
import IntroPage from '@repo/components/layout/intros/page';
import { COMPANY_NAME } from '@repo/constants/app';

const course = courseList.find((c) => c.slug == 'mapping-and-survey');

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

      <LayoutSection id={linkify(course.title)} padded>
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

            <Text mt={'md'}>
              The Drone Mapping and Survey course is a 5-day course designed for
              RPL holders who want to learn how to use drones for mapping and
              surveying purposes. This course is suitable for engineers,
              surveyors, environmental scientists, among others. It is also
              ideal for individuals interested in starting a drone mapping and
              surveying business.
            </Text>

            {mappingModules.map((item, index) => (
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

            <Text mt={'md'}>
              By completing this course, students will acquire practical skills
              in drone operation, surveying techniques, and data analysis. They
              will also learn how to process and interpret data obtained from
              drone surveys to generate accurate maps and 3D models.
            </Text>
          </GridCol>

          <GridCol
            span={{ base: 12, md: 6, lg: 5.5 }}
            order={{ base: 1, md: 2 }}
          >
            <ImageDefault
              src={images.training.mapSur}
              alt={'Drone Mapping and Survey'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
            />
          </GridCol>
        </Grid>

        <Group justify="center">
          <ModalContactTraining
            props={{
              initialValues: {
                subject: `Drone Mapping and Survey Course Inquiry`,
                message: `I'm interested in enrolling in your Drone Mapping and Survey training program.`,
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
              Enroll For Mapping and Survey
            </Button>
          </ModalContactTraining>
        </Group>
      </LayoutSection>
    </LayoutPage>
  );
}

const mappingModules = [
  'Introduction - Mapping drones and payloads',
  'Missions, Mission planning software & Flight planning',
  'GCPs Pre-marking & GNSS Survey',
  'Aerial LiDAR Mapping',
  'Mission Planning with DJI Pilot & Drone Deploy',
  'Data collection using Zenmuse Ll',
  'Data Processing & Analysis using DJI TERRA, Pix 4D Mapper & Global Mapper',
  'Workflow Review and Project Accuracy Verification Procedures',
  'Practical session using a DJI Matrice 300',
];
