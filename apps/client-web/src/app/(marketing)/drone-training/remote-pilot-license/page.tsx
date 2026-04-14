import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import LayoutSection from '@repo/components/layout/section';
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
} from '@mantine/core';
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
import { courseList, outcomes } from '@repo/constants/courses';
import IntroPage from '@repo/components/layout/intros/page';
import { COMPANY_NAME } from '@repo/constants/app';
import { GetLayout } from '../../faq/page';
import AccordionFaq from '@/components/common/accordions/faq';
import CtaMain from '@/components/partial/cta/main';

const course = courseList.find(
  (c) => linkify(c.titleShort || c.title) == 'remote-pilot-license'
);

export const metadata: Metadata = {
  title: course?.title,
  description: course?.linkDesc,
  openGraph: {
    title: course?.title,
    description: course?.linkDesc,
    url: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/drone-training/${course?.titleShort || course?.title}`,
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
              The RPL course is designed for individuals who are interested in
              starting a career as a drone pilot or for unlicensed drone pilots
              who want to fly legally. This course is also suitable for
              individuals who are looking to add drone operation skills to their
              CVs.
            </Text>

            <Text mt={'md'}>
              By obtaining an RPL, you will be able to legally operate drones in
              Kenya and potentially pursue a career in various industries,
              including cinematography, agriculture, and construction, survey
              and mapping among others.
            </Text>

            {outcomes.rpl.map((item, index) => (
              <Group
                key={index}
                gap={'xs'}
                wrap="nowrap"
                align="start"
                mt={'xs'}
                pl={{ md: 'md' }}
                w={{ md: '80%', lg: '70%' }}
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
              src={images.training.rpl}
              alt={'RPL Training'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
            />
          </GridCol>
        </Grid>

        <Grid mt={SECTION_SPACING / 2}>
          <GridCol span={4}>
            <Divider color="sec.3" size={'md'} />
          </GridCol>
          <GridCol span={8}>
            <Divider color="pri.9" size={'md'} />
          </GridCol>
        </Grid>

        <Grid align="center" gutter={'xl'} mt={SECTION_SPACING / 2}>
          <GridCol span={{ base: 12, md: 5.5 }}>
            <Card
              bg={'pri.9'}
              c={'white'}
              withBorder
              shadow="xs"
              padding={'xl'}
            >
              <Text>Part I: Theory</Text>

              <Divider color="sec.3" w={'33%'} mt={'md'} />

              {rplModules.map((item, index) => (
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

              <Text fz={'xs'} c={'sec.3'} mt={'md'}>
                Mock exams are given at the end of each subject.
              </Text>
            </Card>
          </GridCol>

          <GridCol span={{ base: 12, md: 6.5 }}>
            <Title order={3} fz={'md'}>
              Part II: Practical
            </Title>

            <Text>
              One on One instruction with professional flight instructors with a
              recommendation of 5 hours of flight time.
            </Text>

            <Title order={3} fz={'md'} mt={'xl'}>
              Part III: Checkout
            </Title>

            <Text>
              Students undergo a checkout flight by a qualified designated
              flight examiner (DFE) where their knowledge of the rules of the
              air, regulations, airmanship & flight ability will be tested and
              evaluated in accordance with the KCAA&apos;s Manual of
              Implementing Standards.
            </Text>

            <Title order={3} fz={'md'} mt={'xl'}>
              Part IV: RPL Certification
            </Title>

            <Text>
              Passing this test will qualify our students to complete an
              application for a Remote Pilot. License (RPL) at KCAA.
            </Text>
          </GridCol>
        </Grid>

        <Group justify="center">
          <ModalContactTraining
            props={{
              initialValues: {
                subject: `RPL Course Inquiry`,
                message: `I'm interested in enrolling in your RPL drone training program.`,
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
              Enroll For RPL
            </Button>
          </ModalContactTraining>
        </Group>
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
          <AccordionFaq section="training" />
        </GetLayout>
      </LayoutSection>

      <CtaMain
        props={{
          title: 'Launch Your Career as a Licensed Drone Pilot',
          desc: 'Build a strong foundation in professional drone operations with our Remote Pilot License (RPL) training. Gain hands-on flying experience, understand aviation regulations, and develop the skills needed to operate drones safely and confidently in commercial environments.',
          options: { course },
        }}
      />
    </LayoutPage>
  );
}

const rplModules = [
  'Air Law/ CAA (unmanned Aircraft systems) Regulations 2020',
  'Operating Procedures and Specifications',
  'UAS General Knowledge',
  'UAS Theory of Flight',
  'Meteorology',
  'Navigation',
  'Human Factors',
  // 'Flight Planning',
  'Radio Telephony (Offered Separately - See below)',
];
