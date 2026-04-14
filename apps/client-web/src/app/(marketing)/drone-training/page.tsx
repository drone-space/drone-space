import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import LayoutSection from '@repo/components/layout/section';
import { Grid, GridCol, Text, ThemeIcon, Group } from '@mantine/core';
import { IconArrowRightDashed } from '@tabler/icons-react';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import IntroSection from '@repo/components/layout/intros/section';
import ImageDefault from '@repo/components/common/images/default';
import { images } from '@repo/constants/images';
import CardCourse from '@/components/common/cards/training/course';
import { courseList } from '@repo/constants/courses';
import IntroPage from '@repo/components/layout/intros/page';
import { APP_NAME, COMPANY_NAME } from '@repo/constants/app';
import CtaMain from '@/components/partial/cta/main';

export const dynamic = 'force-static';

const metaTitle = `Drone Training In Kenya - Professional Courses at ${APP_NAME.WEB} Kenya`;
const metaDesc = `Kenya's leading KCAA certified drone training academy. Train with expert instructors in Nairobi and master drone technology. Enroll today!`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/drone-training`,
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

export default async function DroneTraining() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Drone School',
          title: 'Drone Training',
          desc: `Train with expert instructors and master drone technology.`,
          bg: images.web.hero.light,
        }}
      />

      <LayoutSection id="our-story" padded bg={'var(--mantine-color-gray-1)'}>
        <Grid gutter={'xl'}>
          <GridCol
            span={{ base: 12, md: 6, lg: 6.5 }}
            order={{ base: 2, md: 1 }}
          >
            <IntroSection
              props={{
                title: 'Drone Training School',
              }}
              options={{ alignment: 'start' }}
            />

            <Text pr={{ md: 'md' }} mt={'xl'}>
              {COMPANY_NAME} is an authorized provider of the following ratings
              for your Remote Pilot License (RPL) and more than one rating can
              be obtained:
            </Text>

            {ratings.map((item, index) => (
              <Group
                key={index}
                gap={'xs'}
                wrap="nowrap"
                align="start"
                pl={{ md: 'md' }}
                mt={'md'}
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

                <Text fz={'sm'}>{item}</Text>
              </Group>
            ))}

            <Text mt={'xl'}>
              Besides these ratings, we offer specialized training in:
            </Text>

            {training.map((item, index) => (
              <Group
                key={index}
                gap={'xs'}
                wrap="nowrap"
                align="start"
                pl={{ md: 'md' }}
                mt={'md'}
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

                <Text fz={'sm'}>{item}</Text>
              </Group>
            ))}
          </GridCol>

          <GridCol
            span={{ base: 12, md: 6, lg: 5.5 }}
            order={{ base: 1, md: 2 }}
          >
            <ImageDefault
              src={
                'https://cdn.pixabay.com/photo/2022/07/07/17/37/dji-7307627_1280.jpg'
              }
              alt={'Aerial Cinematography'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
            />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="course-list" padded>
        <IntroSection
          props={{
            subTitle: 'Learning Paths',
            title: 'Our Drone Training Courses',
          }}
          options={{ spacing: true }}
        />

        <Grid justify="center">
          {courseList.map((item, index) => (
            <GridCol key={index} span={{ base: 12, md: 6 }}>
              <CardCourse data={item} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <CtaMain
        props={{
          title: 'Master the Future of Aviation',
          desc: 'Step into the fast-growing drone industry with our comprehensive training programs. From beginner to advanced levels, we equip you with the skills, knowledge, and confidence to operate drones safely and professionally. Start your journey toward becoming a certified drone expert today.',
        }}
      />
    </LayoutPage>
  );
}

const ratings = ['Multi-Rotor', 'Instructor-Rating', 'Fixed-Wing'];

const training = [
  'Drone Mapping and Survey',
  'Thermography',
  'Drone Cinematography',
  'Radio Telephony License',
  'Agricultural Spraying',
  'Beyond Visual Line of Sight',
];
