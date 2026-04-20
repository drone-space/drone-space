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
  Stack,
  Alert,
  Box,
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

const course = courseList.find(
  (c) => linkify(c.titleShort || c.title) == 'radio-telephony'
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
                The Radiotelephony course is now part of the RPL course and is
                therefore <strong>no longer offered separately</strong>.
              </Alert>
            </Box>

            <Text mt={'md'}>
              The Radio Telephony License course, offered in partnership with
              the Nairobi Flight Academy, is designed for Remote Pilot License
              (RPL) holders seeking to operate drones in controlled airspace and
              conduct Beyond Visual Line of Sight (BVLOS) operations. This
              comprehensive training equips participants with the necessary
              skills in radio telephony procedures and communication protocols.
            </Text>

            <Text mt={'md'}>
              Upon passing the exam administered by the Kenya Civil Aviation
              Authority (KCAA), successful participants are granted a Radio
              Telephony Operator License valid for two years, renewable upon
              expiration. The course spans five days and covers essential topics
              such as radio phraseology, air traffic control communication and
              emergency procedures.
            </Text>

            <Text mt={'md'}>
              The Radio Telephony License course is an essential requirement for
              drone pilots operating in areas that require communication with
              air traffic control or for those planning BVLOS operations. With
              this license, participants gain the readiness to conduct missions
              in controlled airspace, ensuring safe and compliant drone
              operations. By partnering with the Nairobi Flight Academy, we
              deliver top-quality training that prepares RPL holders for the
              KCAA exam.
            </Text>
          </GridCol>

          <GridCol
            span={{ base: 12, md: 6, lg: 5.5 }}
            order={{ base: 1, md: 2 }}
          >
            <ImageDefault
              src={images.training.radTel}
              alt={'Radio Telephony'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
            />
          </GridCol>
        </Grid>

        <Grid mt={SECTION_SPACING / 2}>
          <GridCol span={4} order={2}>
            <Divider color="sec.3" size={'md'} />
          </GridCol>
          <GridCol span={8} order={1}>
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
              <Text>Subjects Covered</Text>

              <Divider color="sec.3" w={'33%'} mt={'md'} />

              {radioModules.map((item, index) => (
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
                An exam for each subject covered is offered at the training in
                readiness for the licensing exam.
              </Text>
            </Card>
          </GridCol>

          <GridCol span={{ base: 12, md: 6.5 }}>
            <Title order={3} fz={'md'}>
              Learning Outcomes
            </Title>

            {outcomes.radio.map((item, index) => (
              <Group
                key={index}
                gap={'xs'}
                wrap="nowrap"
                align="start"
                mt={'xl'}
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
        </Grid>

        <Stack ta={'center'} mt={'xl'}>
          <Text inherit c={'dimmed'} fz={'sm'}>
            The Radiotelephony course is now part of the RPL course and is
            therefore <strong>no longer offered separately</strong>.
          </Text>

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
                variant="gradient"
                leftSection={
                  <IconSchool size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                }
              >
                Enroll For RPL
              </Button>
            </ModalContactTraining>
          </Group>
        </Stack>
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
          title: 'Communicate with Confidence in the Skies',
          desc: 'Effective communication is critical in aviation. Our Radio Telephony training prepares you to handle real-world airspace communication with clarity and precision. Gain the essential skills needed to interact with air traffic control and operate safely in controlled environments.',
          options: { course },
        }}
      />
    </LayoutPage>
  );
}

const radioModules = [
  'General Phraseology',
  'Aerodrome Control',
  'Approach Control',
  'Flight Information Service',
  'Weather',
  'Communication Failure',
  'Distress and Urgency',
  'VHF Propagation',
  'Flight Scenario',
];
