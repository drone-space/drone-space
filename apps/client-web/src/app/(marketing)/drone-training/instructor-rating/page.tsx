import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import LayoutSection from '@repo/components/layout/section';
import {
  Grid,
  GridCol,
  Text,
  Group,
  Card,
  Divider,
  Title,
  Paper,
  Button,
} from '@mantine/core';
import ModalContactTraining from '@repo/components/common/modals/contact/training';
import { IconMessage } from '@tabler/icons-react';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import IntroSection from '@repo/components/layout/intros/section';
import ImageDefault from '@repo/components/common/images/default';
import { images } from '@repo/constants/images';
import { linkify } from '@repo/utilities/url';
import { courseList } from '@repo/constants/courses';
import IntroPage from '@repo/components/layout/intros/page';
import { COMPANY_NAME } from '@repo/constants/app';

const course = courseList.find((c) => c.slug == 'instructor-rating');

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

            <Text mt={'md'}>
              The Instructor Rating course is designed for individuals who
              already hold an RPL and are interested in becoming certified drone
              instructors. This course is ideal for RPL holders who have a
              passion for teaching and want to share their knowledge and
              experience with others.
            </Text>

            <Text mt={'md'}>
              By completing this course, students will learn how to effectively
              instruct RPL students, create course materials, and design
              training programs.
            </Text>
          </GridCol>

          <GridCol
            span={{ base: 12, md: 6, lg: 5.5 }}
            order={{ base: 1, md: 2 }}
            mih={320}
          >
            <ImageDefault
              src={images.training.insRat}
              alt={'Instructor Rating'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
            />
          </GridCol>
        </Grid>

        <Text
          fz={'xs'}
          c={'dimmed'}
          ta={'center'}
          px={{ md: SECTION_SPACING }}
          mt={SECTION_SPACING / 2}
        >
          Upon completion, students will receive an instructor rating from the
          Kenya Civil Aviation Authority (KCAA), which will enable them to train
          and certify future RPL holders.
        </Text>

        <Grid mt={SECTION_SPACING / 2}>
          <GridCol span={4}>
            <Divider color="sec.3" size={'md'} />
          </GridCol>
          <GridCol span={8}>
            <Divider color="pri.8" size={'md'} />
          </GridCol>
        </Grid>

        <Grid mt={SECTION_SPACING / 2}>
          {instructorModules.map((module, index) => (
            <GridCol key={index} span={{ base: 12, md: 4 }}>
              <Card
                bg={'pri.8'}
                c={'white'}
                withBorder
                shadow="xs"
                p={{ base: 'md', lg: 'xl' }}
                h={'100%'}
              >
                <Paper bg={'sec.3'} c={'pri.8'} p={'xs'} w={'fit-content'}>
                  <Text inherit fz={'xs'} fw={'bold'}>
                    {module.duration}
                  </Text>
                </Paper>

                <Title order={3} fz={'md'} c={'white'} mt={'xl'}>
                  {module.title}
                </Title>

                <Divider color="sec.3" w={'33%'} mt={'xl'} />

                <Text fz={'sm'} mt={'xl'}>
                  {module.desc}
                </Text>
              </Card>
            </GridCol>
          ))}
        </Grid>

        <Group justify="center">
          <ModalContactTraining
            props={{
              initialValues: {
                subject: `Instructor Rating Course Inquiry`,
                message: `I'm interested in enrolling in your Instructor Rating drone training program.`,
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
              Enroll For Instructor Rating
            </Button>
          </ModalContactTraining>
        </Group>
      </LayoutSection>
    </LayoutPage>
  );
}

const instructorModules = [
  {
    duration: '1 day',
    title: 'Train The Trainer',
    desc: 'Train the trainer is a program used by trainers to train potential instructors or less experienced instructors about the best ways to deliver training materials to others. RPL Instructor Ground School - (2 days) The first part of your RPL Instructor license is theoretical based on the CAA (UAS regulations) 2020 and addition practical presentation practices are incorporated.',
  },
  {
    duration: '2 days',
    title: 'RPL Instructor Ground School',
    desc: 'The first part of your RPL Instructor license is theoretical based on the FAA Aviation Instruction Handbook and addition practical presentation practices are incorporated.',
  },
  {
    duration: '7 days',
    title: 'Practical Briefing & Patter Training',
    desc: 'The RPL instructor practical briefing is a one-on-one which consists of preparing briefings and conducting 5hrs of briefing with an instructor. Briefing also consist of giving ground school theory subjects the supervision of an instructor. ',
  },
];
