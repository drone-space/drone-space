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
  (c) => linkify(c.titleShort || c.title) == 'agricultural-spraying'
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
                    Drone Space Kenya offers a comprehensive 8-day Agricultural
                    Spraying Course combining 3 days of theory and 5 days of
                    practical training. The course equips participants with the
                    skills to operate agricultural drones safely and effectively
                    for precision spraying.
                  </Text>

                  <div>
                    <Text>Ideal for:</Text>

                    {agricultureAudience.map((item, index) => (
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
              </GridCol>

              <GridCol
                span={{ base: 12, md: 6, lg: 5.5 }}
                order={{ base: 1, md: 2 }}
              >
                <ImageDefault
                  src={images.training.agriSpray}
                  alt={'Holiday Camp'}
                  height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
                  mode="grid"
                />
              </GridCol>
            </Grid>
          </GridCol>

          <GridCol span={12}>
            <Grid my={'xl'}>
              <GridCol span={8}>
                <Divider color="sec.3" size={'md'} />
              </GridCol>
              <GridCol span={4}>
                <Divider color="pri.9" size={'md'} />
              </GridCol>
            </Grid>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 5.5 }}>
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
                    Theory (Days 1–3):
                  </Title>

                  <div>
                    {agricultureModules.theory.map((item, index) => (
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
                    Practicals (Days 4–8):
                  </Title>

                  <div>
                    {agricultureModules.practical.map((item, index) => (
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

          <GridCol span={{ base: 12, md: 6, lg: 6.5 }}>
            <Stack gap={'xl'}>
              <Card
                bg={'var(--mantine-color-gray-1)'}
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
                        DJI Agras T50:
                      </Title>

                      {agricultureDrones.t50.map((item, index) => (
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
                        Huida HD 580:
                      </Title>

                      {agricultureDrones.huidaHd580.map((item, index) => (
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
                  Outcome
                </Title>

                <Text>
                  Graduates receive a Certificate of Competency in Agricultural
                  Spraying, gaining hands-on expertise in drone spraying
                  operations and compliance with Kenyan aviation regulations.
                </Text>
              </Stack>
            </Stack>
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
              Enroll For Agricultural Spraying
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
          title: 'Revolutionize Modern Farming',
          desc: 'Discover how drones are transforming agriculture. Our agricultural spraying training focuses on precision farming techniques, efficient chemical application, and safe operations. Help farmers increase yields while reducing costs and environmental impact.',
          options: { course },
        }}
      />
    </LayoutPage>
  );
}

const agricultureModules = {
  theory: [
    'Introduction to agricultural drones',
    'Basics of agronomy and agrochemical application',
    'Aerial spraying science (droplet size, drift control)',
    'Drone systems, regulations (KCAA), and mission planning',
  ],
  practical: [
    'Drone setup, calibration, and live spraying simulations',
    'Battery, chemical handling, and drone maintenance',
    'Field troubleshooting and data collection',
  ],
};

const agricultureDrones = {
  t50: [
    '40L spray tank, 50kg spreader',
    'Dual atomized spraying, obstacle avoidance, up to 10m spray width',
  ],
  huidaHd580: [
    'Up to 70L capacity',
    'Dual-pump system, RTK precision, rugged design for tough terrain',
  ],
};

const agricultureAudience = [
  'Licensed drone pilots',
  'Agribusinesses',
  "NGO's",
  'Service providers',
];
