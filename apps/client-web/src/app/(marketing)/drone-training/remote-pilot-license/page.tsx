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
  Alert,
  Box,
  Stack,
  List,
  ListItem,
  Anchor,
} from '@mantine/core';
import ModalContactTraining from '@repo/components/common/modals/contact/training';
import {
  IconArrowRightDashed,
  IconInfoCircle,
  IconMessage,
  IconSchool,
} from '@tabler/icons-react';
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
import NextLink from '@repo/components/common/anchor/next-link';

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

            <Box my={SECTION_SPACING / 2}>
              <Alert
                variant="light"
                color="blue"
                title="KCAA Updates"
                icon={
                  <IconInfoCircle size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                }
              >
                <Stack gap={'xs'}>
                  <Text inherit component="span">
                    Main exams are now{' '}
                    <strong>issued by and conducted at KCAA</strong>.
                  </Text>

                  <Text inherit component="span">
                    The Radiotelephony course is now part of the RPL course and
                    is therefore <strong>no longer offered separately</strong>.
                  </Text>

                  <div>
                    <Text inherit component="span">
                      RPL applicants are now required to undertake:
                    </Text>
                    <List size={'sm'}>
                      <ListItem>
                        an <strong>English Proficiency exam</strong> and
                      </ListItem>
                      <ListItem>
                        an <strong>Oral Radiotelephony exam</strong>
                      </ListItem>
                    </List>
                  </div>

                  <Text inherit component="span">
                    The RPL price is{' '}
                    <strong>exclusive of medical and exam fees</strong>.
                  </Text>

                  <NextLink
                    inherit
                    href={'/drone-training/pricing'}
                    underline="always"
                    mt={'md'}
                  >
                    <Text inherit component="span">
                      See the updated RPL price structure
                    </Text>
                  </NextLink>
                </Stack>
              </Alert>
            </Box>

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

              <Text c={'sec.3'} mt={'md'}>
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
              variant="gradient"
              leftSection={
                <IconSchool size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
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
  'Air Law',
  'Oprtational Procedures',
  'Meteorology',
  'RPAS General Knowledge',
  'Principles of Flight',
  'Human Performance',
  'Navigation',
  'Flight Performance',
  'Planning & Loading',
  'Radiotelephony',
];
