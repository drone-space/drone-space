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
} from '@mantine/core';
import ModalContactTraining from '@repo/components/common/modals/contact/training';
import {
  IconArrowRightDashed,
  IconMessage,
  IconSchool,
} from '@tabler/icons-react';
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
import { GetLayout } from '../../faq/page';
import AccordionFaq from '@/components/common/accordions/faq';
import CtaMain from '@/components/partial/cta/main';

const course = courseList.find(
  (c) => linkify(c.titleShort || c.title) == 'beyond-visual-line-of-sight'
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
          <GridCol span={12}>
            <Grid>
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

                <Stack gap={'xl'}>
                  <Text mt={'md'}>
                    Drone Space Kenya’s Beyond Visual Line of Sight (BVLOS)
                    Training Program is designed for certified Remote Pilots
                    seeking to safely and effectively operate drones beyond
                    visual range. The program complies with the KCAA Civil
                    Aviation (Unmanned Aircraft Systems) Regulations, 2020 and
                    prepares pilots for high-risk, complex BVLOS missions across
                    diverse sectors.
                  </Text>

                  <div>
                    <Text>Key program components:</Text>

                    {bvlosComponents.map((item, index) => (
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

                        <Text fz={'sm'}>{item.title}</Text>
                      </Group>
                    ))}
                  </div>
                </Stack>
              </GridCol>

              <GridCol
                span={{ base: 12, md: 6, lg: 5.5 }}
                order={{ base: 1, md: 2 }}
              >
                <ImageDefault
                  src={images.training.bvlos}
                  alt={'Holiday Camp'}
                  height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
                  mode="grid"
                />
              </GridCol>
            </Grid>
          </GridCol>

          <GridCol span={12}>
            <Grid my={'xl'}>
              <GridCol span={4}>
                <Divider color="sec.3" size={'md'} />
              </GridCol>
              <GridCol span={8}>
                <Divider color="pri.9" size={'md'} />
              </GridCol>
            </Grid>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 5.5 }}>
            <Stack gap={'xl'}>
              <Stack>
                <Title order={3} fz={'lg'}>
                  Benefits
                </Title>

                <div>
                  {bvlosBenefits.map((item, index) => (
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
                </div>
              </Stack>

              <Card
                bg={'var(--mantine-color-sec-0)'}
                shadow="xs"
                padding={'xl'}
              >
                <Stack>
                  <Title order={3} fz={'lg'}>
                    Drones Used
                  </Title>

                  <Stack>
                    <div>
                      <Title
                        order={4}
                        fz={'md'}
                        c={'var(--mantine-color-sec-3)'}
                      >
                        Baby Shark VTOL 260:
                      </Title>

                      {bvlosDrones.bsVtol.map((item, index) => (
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
                    </div>

                    <div>
                      <Title
                        order={4}
                        fz={'md'}
                        c={'var(--mantine-color-sec-3)'}
                      >
                        PW One:
                      </Title>

                      {bvlosDrones.pwOne.map((item, index) => (
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
                    </div>
                  </Stack>
                </Stack>
              </Card>

              <Stack>
                <Title order={3} fz={'lg'}>
                  Why BVLOS Training Matters:
                </Title>

                <Text>BVLOS is essential for advancing drone use in:</Text>

                <div>
                  {bvlosWhy.map((item, index) => (
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
                </div>
              </Stack>

              <Stack>
                <Title order={3} fz={'lg'}>
                  Proven Experience in Africa:
                </Title>

                <Text>In Malawi, Drone Space:</Text>

                <div>
                  {bvlosExperience.map((item, index) => (
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
                </div>
              </Stack>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 6.5 }}>
            <Card
              bg={'pri.9'}
              c={'white'}
              withBorder
              shadow="xs"
              padding={'xl'}
              // c={'var(--mantine-color-body)'}
            >
              <Stack gap={'xl'}>
                <Title order={3} fz={'lg'} c={'var(--mantine-color-body)'}>
                  Course Structure
                </Title>

                <Stack gap={'xs'}>
                  <Title order={4} fz={'md'} c={'var(--mantine-color-sec-3)'}>
                    Theoretical Training
                  </Title>

                  <div>
                    {bvlosComponents[0].subModules.map((item, index) => (
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
                  </div>
                </Stack>

                <Stack gap={'xs'}>
                  <Title order={4} fz={'md'} c={'var(--mantine-color-sec-3)'}>
                    Practical Flight Training
                  </Title>

                  <div>
                    {bvlosComponents[1].subModules.map((item, index) => (
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
                  </div>
                </Stack>

                <Stack gap={'xs'}>
                  <Title order={4} fz={'md'} c={'var(--mantine-color-sec-3)'}>
                    Structured Risk Assessment
                  </Title>

                  <div>
                    {bvlosComponents[2].subModules.map((item, index) => (
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
                  </div>
                </Stack>

                <Stack gap={'xs'}>
                  <Title order={4} fz={'md'} c={'var(--mantine-color-sec-3)'}>
                    Operational Planning
                  </Title>

                  <div>
                    {bvlosComponents[3].subModules.map((item, index) => (
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
                  </div>
                </Stack>
              </Stack>
            </Card>
          </GridCol>
        </Grid>

        <Group justify="center">
          <ModalContactTraining
            props={{
              initialValues: {
                subject: `${course.title} Course Inquiry`,
                message: `I'm interested in enrolling in your ${course.title} drone training program.`,
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
              Enroll For BVLOS
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
          title: 'Push the Boundaries of Drone Operations',
          desc: 'Take on advanced missions with Beyond Visual Line of Sight training. Learn the regulations, technologies, and risk management strategies required for long-distance drone operations. Position yourself for high-level opportunities in logistics, surveillance, and infrastructure.',
          options: { course },
        }}
      />
    </LayoutPage>
  );
}

const bvlosBenefits = [
  'Internationally aligned curriculum',
  'Expert instructors with real BVLOS experience',
  'UTM system integration',
  'Hands-on practice with advanced VTOL platforms',
];
const bvlosWhy = [
  'Agriculture, Disaster Response, Infrastructure Inspection',
  'Wildlife Conservation, and Logistics/Delivery',
];

const bvlosExperience = [
  'Delivered medical supplies to remote areas using VTOL drones',
  'Trained local aviation professionals in BVLOS mapping &amp; inspection',
];

const bvlosComponents = [
  {
    title: 'Theoretical Training',
    subModules: [
      'Air Law and Regulations (International BVLOS standards)',
      'Human Performance in long-range operations',
      'UAV Systems and VTOL tech',
      'Risk and Safety Management using SORA and SMS',
      'Meteorology (weather theory, METAR/TAF interpretation)',
      'Operational Risks and Emergency Procedures',
    ],
  },
  {
    title: 'Practical Flight Training',
    subModules: [
      'Mission planning and airspace coordination',
      'GPS navigation and waypoint programming',
      'Emergency response drills',
      'Hands-on flying with Baby Shark VTOL 260 and PW One drones',
    ],
  },
  {
    title: 'Structured Risk Assessment',
    subModules: [
      'Emphasizes hazard identification',
      'risk classification (ground/air) and ',
      'mitigation strategies using SMS, geofencing, and failsafes',
    ],
  },
  {
    title: 'Operational Planning',
    subModules: [
      'BVLOS flight planning',
      'ATC coordination',
      'C2 link management',
      'Ground team communication protocols',
    ],
  },
];

const bvlosDrones = {
  bsVtol: [
    'Long-endurance',
    'swappable payload drone for mapping and surveillance',
  ],
  pwOne: ['Agile, efficient VTOL', 'Extended-range'],
};
