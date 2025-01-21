import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import {
  Grid,
  GridCol,
  Stack,
  Text,
  ThemeIcon,
  Group,
  Card,
  Divider,
  Title,
  Paper,
} from '@mantine/core';

import { IconArrowRightDashed } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
import IntroSection from '@/components/layout/intro/section';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import appData from '@/data/app';
import CardCourse from '@/components/common/cards/training/course';
import { linkify } from '@/utilities/formatters/string';
import { courseList } from '@/data/courses';

export const metadata: Metadata = {
  title: `Drone Training - Professional Courses at ${appData.name.app} Kenya`,
  description: `Join ${appData.name.app} for certified drone training programs in Kenya. Learn to fly, operate, and excel in drone technology with expert instructors.`,
};

export default async function DroneTraining() {
  return (
    <LayoutPage>
      <LayoutSection id="our-story" padded>
        <Grid gutter={'xl'}>
          <GridCol
            span={{ base: 12, md: 6, lg: 6.5 }}
            order={{ base: 2, md: 1 }}
          >
            <Stack gap={'xl'}>
              <IntroSection
                props={{
                  title: 'Drone Training School',
                }}
                options={{ alignment: 'start' }}
              />

              <Stack gap={'xs'}>
                <Text pr={{ md: 'md' }}>
                  {appData.name.app} is an authorized provider of the following
                  ratings for your Remote Pilot License (RPL) and more than one
                  rating can be obtained:
                </Text>

                <Stack gap={4}>
                  {ratings.map((item, index) => (
                    <Group
                      key={index}
                      gap={'xs'}
                      wrap="nowrap"
                      align="start"
                      pl={{ md: 'md' }}
                    >
                      <ThemeIcon
                        size={ICON_WRAPPER_SIZE / 1.25}
                        mt={2}
                        color="sec.4"
                        c={'pri.9'}
                        radius={'xl'}
                      >
                        <IconArrowRightDashed
                          size={ICON_SIZE / 1.25}
                          stroke={ICON_STROKE_WIDTH}
                        />
                      </ThemeIcon>

                      <Text fz={'sm'}>{item}</Text>
                    </Group>
                  ))}
                </Stack>
              </Stack>

              <Stack gap={'xs'}>
                <Text>
                  Besides these ratings, we offer specialized training in:
                </Text>

                <Stack gap={4}>
                  {training.map((item, index) => (
                    <Group
                      key={index}
                      gap={'xs'}
                      wrap="nowrap"
                      align="start"
                      pl={{ md: 'md' }}
                    >
                      <ThemeIcon
                        size={ICON_WRAPPER_SIZE / 1.25}
                        mt={2}
                        color="sec.4"
                        c={'pri.9'}
                        radius={'xl'}
                      >
                        <IconArrowRightDashed
                          size={ICON_SIZE / 1.25}
                          stroke={ICON_STROKE_WIDTH}
                        />
                      </ThemeIcon>

                      <Text fz={'sm'}>{item}</Text>
                    </Group>
                  ))}
                </Stack>
              </Stack>
            </Stack>
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
              radius={'sm'}
            />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="course-list" padded bg={'var(--mantine-color-gray-1)'}>
        <Grid grow>
          {courseList.map((item, index) => (
            <GridCol key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <CardCourse data={item} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection id={linkify(courseList[0].title)} padded>
        <Stack gap={SECTION_SPACING / 2}>
          <Grid gutter={'xl'}>
            <GridCol
              span={{ base: 12, md: 6, lg: 6.5 }}
              order={{ base: 2, md: 1 }}
            >
              <Stack>
                <IntroSection
                  props={{
                    subTitle: 'Who Is This For?',
                    title: courseList[0].title,
                  }}
                  options={{ alignment: 'start' }}
                />

                <Text>
                  The RPL course is designed for individuals who are interested
                  in starting a career as a drone pilot or for unlicensed drone
                  pilots who want to fly legally. This course is also suitable
                  for individuals who are looking to add drone operation skills
                  to their CVs.
                </Text>

                <Text>
                  By obtaining an RPL, you will be able to legally operate
                  drones in Kenya and potentially pursue a career in various
                  industries, including cinematography, agriculture, and
                  construction, survey and mapping among others.
                </Text>

                <Stack
                  gap={'xs'}
                  pl={{ md: 'md' }}
                  w={{ md: '80%', lg: '70%' }}
                >
                  {outcomes.rpl.map((item, index) => (
                    <Group key={index} gap={'xs'} wrap="nowrap" align="start">
                      <ThemeIcon
                        size={ICON_WRAPPER_SIZE / 1.5}
                        mt={2}
                        color="sec.4"
                        c={'pri.9'}
                        radius={'xl'}
                      >
                        <IconArrowRightDashed
                          size={ICON_SIZE / 1.5}
                          stroke={ICON_STROKE_WIDTH}
                        />
                      </ThemeIcon>

                      <Text fz={'sm'}>{item}</Text>
                    </Group>
                  ))}
                </Stack>
              </Stack>
            </GridCol>

            <GridCol
              span={{ base: 12, md: 6, lg: 5.5 }}
              order={{ base: 1, md: 2 }}
            >
              <ImageDefault
                src={images.training.rpl}
                alt={'Drone Mapping and Survey'}
                height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
                mode="grid"
                radius={'sm'}
              />
            </GridCol>
          </Grid>

          <Grid>
            <GridCol span={4}>
              <Divider color="sec.3" size={'md'} />
            </GridCol>
            <GridCol span={8}>
              <Divider color="pri.9" size={'md'} />
            </GridCol>
          </Grid>

          <Grid align="center" gutter={'xl'}>
            <GridCol span={{ base: 12, md: 5.5 }}>
              <Card
                bg={'pri.9'}
                c={'white'}
                withBorder
                shadow="xs"
                padding={'xl'}
              >
                <Stack>
                  <Text>Part I: Theory</Text>

                  <Divider color="sec.3" w={'33%'} />

                  <Stack gap={4}>
                    {rplModules.map((item, index) => (
                      <Group key={index} gap={'xs'} wrap="nowrap" align="start">
                        <ThemeIcon
                          size={ICON_WRAPPER_SIZE / 1.5}
                          mt={2}
                          color="sec.4"
                          c={'pri.9'}
                          radius={'xl'}
                        >
                          <IconArrowRightDashed
                            size={ICON_SIZE / 1.5}
                            stroke={ICON_STROKE_WIDTH}
                          />
                        </ThemeIcon>

                        <Text fz={'sm'}>{item}</Text>
                      </Group>
                    ))}
                  </Stack>

                  <Text fz={'xs'} c={'sec.3'} mt={'md'}>
                    Mock exams are given at the end of each subject.
                  </Text>
                </Stack>
              </Card>
            </GridCol>

            <GridCol span={{ base: 12, md: 6.5 }}>
              <Stack pl={{ md: 'xl' }} gap={'xl'}>
                <div>
                  <Title order={3} fz={'md'}>
                    Part II: Practical
                  </Title>

                  <Text>
                    One on One instruction with professional flight instructors
                    with a recommendation of 5 hours of flight time.
                  </Text>
                </div>

                <div>
                  <Title order={3} fz={'md'}>
                    Part III: Checkout
                  </Title>

                  <Text>
                    Students undergo a checkout flight by a qualified designated
                    flight examiner (DFE) where their knowledge of the rules of
                    the air, regulations, airmanship & flight ability will be
                    tested and evaluated in accordance with the KCAA&apos;s
                    Manual of Implementing Standards.
                  </Text>
                </div>

                <div>
                  <Title order={3} fz={'md'}>
                    Part IV: RPL Certification
                  </Title>

                  <Text>
                    Passing this test will qualify our students to complete an
                    application for a Remote Pilot. License (RPL) at KCAA.
                  </Text>
                </div>
              </Stack>
            </GridCol>
          </Grid>
        </Stack>
      </LayoutSection>

      <LayoutSection
        id={linkify(courseList[1].title)}
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <Stack gap={SECTION_SPACING / 2}>
          <Grid gutter={'xl'}>
            <GridCol
              span={{ base: 12, md: 6, lg: 6.5 }}
              order={{ base: 2, md: 1 }}
            >
              <Stack>
                <IntroSection
                  props={{
                    subTitle: 'Who Is This For?',
                    title: courseList[1].title,
                  }}
                  options={{ alignment: 'start' }}
                />

                <Text>
                  The Radio Telephony License course, offered in partnership
                  with the Nairobi Flight Academy, is designed for Remote Pilot
                  License (RPL) holders seeking to operate drones in controlled
                  airspace and conduct Beyond Visual Line of Sight (BVLOS)
                  operations. This comprehensive training equips participants
                  with the necessary skills in radio telephony procedures and
                  communication protocols.
                </Text>

                <Text>
                  Upon passing the exam administered by the Kenya Civil Aviation
                  Authority (KCAA), successful participants are granted a Radio
                  Telephony Operator License valid for two years, renewable upon
                  expiration. The course spans five days and covers essential
                  topics such as radio phraseology, air traffic control
                  communication and emergency procedures.
                </Text>

                <Text>
                  The Radio Telephony License course is an essential requirement
                  for drone pilots operating in areas that require communication
                  with air traffic control or for those planning BVLOS
                  operations. With this license, participants gain the readiness
                  to conduct missions in controlled airspace, ensuring safe and
                  compliant drone operations. By partnering with the Nairobi
                  Flight Academy, we deliver top-quality training that prepares
                  RPL holders for the KCAA exam.
                </Text>
              </Stack>
            </GridCol>

            <GridCol
              span={{ base: 12, md: 6, lg: 5.5 }}
              order={{ base: 1, md: 2 }}
            >
              <ImageDefault
                src={images.training.radTel}
                alt={'Drone Mapping and Survey'}
                height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
                mode="grid"
                radius={'sm'}
              />
            </GridCol>
          </Grid>

          <Grid>
            <GridCol span={4} order={2}>
              <Divider color="sec.3" size={'md'} />
            </GridCol>
            <GridCol span={8} order={1}>
              <Divider color="pri.9" size={'md'} />
            </GridCol>
          </Grid>

          <Grid align="center" gutter={'xl'}>
            <GridCol span={{ base: 12, md: 5.5 }}>
              <Card
                bg={'pri.9'}
                c={'white'}
                withBorder
                shadow="xs"
                padding={'xl'}
              >
                <Stack>
                  <Text>Subjects Covered</Text>

                  <Divider color="sec.3" w={'33%'} />

                  <Stack gap={4}>
                    {radioModules.map((item, index) => (
                      <Group key={index} gap={'xs'} wrap="nowrap" align="start">
                        <ThemeIcon
                          size={ICON_WRAPPER_SIZE / 1.5}
                          mt={2}
                          color="sec.4"
                          c={'pri.9'}
                          radius={'xl'}
                        >
                          <IconArrowRightDashed
                            size={ICON_SIZE / 1.5}
                            stroke={ICON_STROKE_WIDTH}
                          />
                        </ThemeIcon>

                        <Text fz={'sm'}>{item}</Text>
                      </Group>
                    ))}
                  </Stack>

                  <Text fz={'xs'} c={'sec.3'} mt={'md'}>
                    An exam for each subject covered is offered at the training
                    in readiness for the licensing exam.
                  </Text>
                </Stack>
              </Card>
            </GridCol>

            <GridCol span={{ base: 12, md: 6.5 }}>
              <Stack pl={{ md: 'xl' }} gap={'xl'}>
                <Title order={3} fz={'md'}>
                  Learning Outcomes
                </Title>

                <Stack gap={'xs'}>
                  {outcomes.radio.map((item, index) => (
                    <Group key={index} gap={'xs'} wrap="nowrap" align="start">
                      <ThemeIcon
                        size={ICON_WRAPPER_SIZE / 1.5}
                        mt={2}
                        color="sec.4"
                        c={'pri.9'}
                        radius={'xl'}
                      >
                        <IconArrowRightDashed
                          size={ICON_SIZE / 1.5}
                          stroke={ICON_STROKE_WIDTH}
                        />
                      </ThemeIcon>

                      <Text fz={'sm'}>{item}</Text>
                    </Group>
                  ))}
                </Stack>
              </Stack>
            </GridCol>
          </Grid>
        </Stack>
      </LayoutSection>

      <LayoutSection id={linkify(courseList[2].title)} padded>
        <Stack gap={SECTION_SPACING / 2}>
          <Grid gutter={'xl'}>
            <GridCol
              span={{ base: 12, md: 6, lg: 6.5 }}
              order={{ base: 2, md: 1 }}
            >
              <Stack>
                <IntroSection
                  props={{
                    subTitle: 'Who Is This For?',
                    title: courseList[2].title,
                  }}
                  options={{ alignment: 'start' }}
                />

                <Text>
                  The Instructor Rating course is designed for individuals who
                  already hold an RPL and are interested in becoming certified
                  drone instructors. This course is ideal for RPL holders who
                  have a passion for teaching and want to share their knowledge
                  and experience with others.
                </Text>

                <Text>
                  By completing this course, students will learn how to
                  effectively instruct RPL students, create course materials,
                  and design training programs.
                </Text>
              </Stack>
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
                radius={'sm'}
              />
            </GridCol>
          </Grid>

          <Text
            fz={'xs'}
            c={'dimmed'}
            ta={'center'}
            px={{ md: SECTION_SPACING }}
          >
            Upon completion, students will receive an instructor rating from the
            Kenya Civil Aviation Authority (KCAA), which will enable them to
            train and certify future RPL holders.
          </Text>

          <Grid>
            <GridCol span={4}>
              <Divider color="sec.3" size={'md'} />
            </GridCol>
            <GridCol span={8}>
              <Divider color="pri.9" size={'md'} />
            </GridCol>
          </Grid>

          <Grid>
            {instructorModules.map((module, index) => (
              <GridCol key={index} span={{ base: 12, md: 4 }}>
                <Card
                  bg={'pri.9'}
                  c={'white'}
                  withBorder
                  shadow="xs"
                  padding={'xl'}
                  h={'100%'}
                >
                  <Stack h={'100%'} justify="space-between">
                    <Stack gap={'xl'}>
                      <Title order={3} fz={'md'} c={'white'}>
                        {module.title}
                      </Title>

                      <Divider color="sec.3" w={'33%'} />

                      <Text fz={'sm'}>{module.desc}</Text>
                    </Stack>

                    <Group justify="end">
                      <Paper bg={'sec.3'} c={'pri.9'} p={'xs'}>
                        <Text inherit fz={'xs'} fw={'bold'}>
                          {module.duration}
                        </Text>
                      </Paper>
                    </Group>
                  </Stack>
                </Card>
              </GridCol>
            ))}
          </Grid>
        </Stack>
      </LayoutSection>

      <LayoutSection
        id={linkify(courseList[3].title)}
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid gutter={'xl'}>
          <GridCol
            span={{ base: 12, md: 6, lg: 6.5 }}
            order={{ base: 2, md: 1 }}
          >
            <Stack>
              <IntroSection
                props={{
                  subTitle: 'Who Is This For?',
                  title: courseList[3].title,
                }}
                options={{ alignment: 'start' }}
              />

              <Text>
                The Drone Mapping and Survey course is a 5-day course designed
                for RPL holders who want to learn how to use drones for mapping
                and surveying purposes. This course is suitable for engineers,
                surveyors, environmental scientists, among others. It is also
                ideal for individuals interested in starting a drone mapping and
                surveying business.
              </Text>

              <Stack gap={4} pl={{ md: 'md' }}>
                {mappingModules.map((item, index) => (
                  <Group key={index} gap={'xs'} wrap="nowrap" align="start">
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE / 1.5}
                      mt={2}
                      color="sec.4"
                      c={'pri.9'}
                      radius={'xl'}
                    >
                      <IconArrowRightDashed
                        size={ICON_SIZE / 1.5}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>

                    <Text fz={'sm'}>{item}</Text>
                  </Group>
                ))}
              </Stack>

              <Text>
                By completing this course, students will acquire practical
                skills in drone operation, surveying techniques, and data
                analysis. They will also learn how to process and interpret data
                obtained from drone surveys to generate accurate maps and 3D
                models.
              </Text>
            </Stack>
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
              radius={'sm'}
            />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id={linkify(courseList[4].title)} padded>
        <Grid gutter={'xl'}>
          <GridCol
            span={{ base: 12, md: 6, lg: 6.5 }}
            order={{ base: 2, md: 1 }}
          >
            <Stack gap={'lg'}>
              <IntroSection
                props={{
                  subTitle: 'Who Is This For?',
                  title: courseList[4].title,
                }}
                options={{ alignment: 'start' }}
              />

              <Text>
                The Levell Thermography Certification course is designed for
                professionals who want to develop practical skills in using
                thermography for inspections and diagnostics. This course is
                suitable for individuals working in industries such as
                electrical, mechanical, and building inspections, as well as
                professionals involved in research and development. The
                certification is offered in collaboration with the Infrared
                Training Centre (ITC) and is globally recognized.
              </Text>

              <Stack gap={4} pl={{ md: 'md' }}>
                {thermographyModules.map((item, index) => (
                  <Group key={index} gap={'xs'} wrap="nowrap" align="start">
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE / 1.5}
                      mt={2}
                      color="sec.4"
                      c={'pri.9'}
                      radius={'xl'}
                    >
                      <IconArrowRightDashed
                        size={ICON_SIZE / 1.5}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>

                    <Text fz={'sm'}>{item}</Text>
                  </Group>
                ))}
              </Stack>

              <Text>
                By completing this course, students will learn how to use
                thermal imaging cameras to identify and diagnose faults in
                various systems, including electrical equipment, buildings, and
                mechanical systems. They will also gain an understanding of
                infrared theory, heat transfer concepts, and thermal imaging
                standards.
              </Text>
            </Stack>
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
              radius={'sm'}
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
      </LayoutSection>

      <LayoutSection
        id={linkify(courseList[5].title)}
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid gutter={'xl'}>
          <GridCol
            span={{ base: 12, md: 6, lg: 6.5 }}
            order={{ base: 2, md: 1 }}
          >
            <Stack>
              <IntroSection
                props={{
                  subTitle: 'Who Is This For?',
                  title: courseList[5].title,
                }}
                options={{ alignment: 'start' }}
              />

              <Text>
                The U-18s Holiday Camp is a drone STEM program designed for
                kids, teens, and high school students between the ages of 7 and
                17. The program is organized during school holidays to introduce
                young people to the emerging technology of drones and inspire
                their interest in science, technology, engineering, and
                mathematics (STEM) subjects. This program is suitable for young
                people who are curious about drones and want to learn about
                their applications and operations in a fun and safe environment.
              </Text>

              <Text>
                By participating in this program, students will learn the basics
                of drone operation, including flight controls, aerial maneuvers,
                and safety procedures. They will also learn about the various
                applications of drones in different industries and participate
                in drone-related challenges and competitions. This program aims
                to inspire young people&apos;s interest in STEM and encourage
                them to consider careers in technology and innovation.
              </Text>
            </Stack>
          </GridCol>

          <GridCol
            span={{ base: 12, md: 6, lg: 5.5 }}
            order={{ base: 1, md: 2 }}
          >
            <ImageDefault
              src={images.training.holCam}
              alt={'Holiday Camp'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
              radius={'sm'}
            />
          </GridCol>
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}

const ratings = [
  'Multi-Rotor',
  'Instructor-Rating',
  // 'Fixed-Wing',
];

const training = [
  'Drone Mapping and Survey',
  'Thermography',
  'Drone Cinematography',
  'Radio Telephony License',
];

const rplModules = [
  'Air Law/ CAA (unmanned Aircraft systems) Regulations 2020',
  'Operating Procedures and Specifications',
  'UAS General Knowledge',
  'UAS Theory of Flight',
  'Meteorology',
  'Navigation',
  'Human Factors',
  'Flight Planning',
  'Radio Telephony (Offered Separately - See below)',
];

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

const outcomes = {
  rpl: [
    'Develop an understanding of drone regulations, safety procedures and drone technology.',
    'Acquire skills in drone operation, including pre-flight checks, in-flight maneuvers, and emergency procedures.',
    'Learn how to plan and execute drone missions.',
  ],
  radio: [
    'Develop proficiency in radio telephony procedures for drone operations in controlled airspace and BVLOS missions.',
    'Acquire comprehensive knowledge of radio phraseology, air traffic control communication, emergency procedures, and airspace regulations',
    'Successfully pass the KCAA exam and obtain a two-year Radio Telephony Operator License, enabling compliant operations in controlled airspace.',
  ],
};
