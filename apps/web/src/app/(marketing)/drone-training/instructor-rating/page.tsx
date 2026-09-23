import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import { LayoutSection } from '@repo/ui';
import { Grid, GridCol, Text, Group, Card, Divider, Title, Paper, Button } from '@mantine/core';
import { ModalContactTraining } from '@repo/ui';
import { IconMessage, IconSchool } from '@tabler/icons-react';
import { getBaseUrl, ICON_SIZE, ICON_STROKE_WIDTH, SECTION_SPACING } from '@repo/constants';
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

const course = courseList.find((c) => c.title == courseList[2].title);

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
                title: course.title,
              }}
              options={{ alignment: 'start' }}
            />

            <Text mt={'md'}>
              The Instructor Rating course is designed for individuals who already hold an RPL and
              are interested in becoming certified drone instructors. This course is ideal for RPL
              holders who have a passion for teaching and want to share their knowledge and
              experience with others.
            </Text>

            <Text mt={'md'}>
              By completing this course, students will learn how to effectively instruct RPL
              students, create course materials, and design training programs.
            </Text>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 5.5 }} order={{ base: 1, md: 2 }} mih={320}>
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
          Upon completion, students will receive an instructor rating from the Kenya Civil Aviation
          Authority (KCAA), which will enable them to train and certify future RPL holders.
        </Text>

        <Grid mt={SECTION_SPACING / 2}>
          <GridCol span={4}>
            <Divider color="sec.3" size={'md'} />
          </GridCol>
          <GridCol span={8}>
            <Divider color="pri.9" size={'md'} />
          </GridCol>
        </Grid>

        <Grid mt={SECTION_SPACING / 2}>
          {instructorModules.map((module, index) => (
            <GridCol key={index} span={{ base: 12, md: 4 }}>
              <Card
                bg={'pri.9'}
                c={'white'}
                withBorder
                shadow="xs"
                p={{ base: 'md', lg: 'xl' }}
                h={'100%'}
              >
                <Paper bg={'sec.3'} c={'pri.9'} p={'xs'} w={'fit-content'}>
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
              variant="gradient"
              leftSection={<IconSchool size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
            >
              Enroll For Instructor Rating
            </Button>
          </ModalContactTraining>
        </Group>
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
          title: 'Become a Certified Drone Instructor',
          desc: 'Take your expertise to the next level by becoming a certified drone instructor. This program is designed for experienced pilots who want to train and mentor others. Share your knowledge, build your credibility, and play a key role in shaping the next generation of drone professionals.',
          options: { course },
        }}
      />
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
