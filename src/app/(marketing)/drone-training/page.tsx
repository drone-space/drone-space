import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import {
  Grid,
  GridCol,
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
  HOSTED_BASE_URL,
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
import IntroPage from '@/components/layout/intro/page';

const metaTitle = `Drone Training - Professional Courses at ${appData.name.app} Kenya`;
const metaDesc = `Kenya's leading KCAA certified drone training academy. Train with expert instructors in Nairobi and master drone technology. Enroll today!`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DRONE_SPACE}/drone-training`,
    type: 'website',
    images: [
      {
        url: images.brand.droneSpace.logo.potrait.meta,
        width: 1200,
        height: 1200,
        alt: appData.name.company,
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
              {appData.name.app} is an authorized provider of the following
              ratings for your Remote Pilot License (RPL) and more than one
              rating can be obtained:
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

      <LayoutSection id="course-list" padded>
        <Grid grow>
          {courseList.map((item, index) => (
            <GridCol key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <CardCourse data={item} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection
        id={linkify(courseList[0].title)}
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
                title: courseList[0].title,
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
      </LayoutSection>

      <LayoutSection id={linkify(courseList[1].title)} padded>
        <Grid gutter={'xl'}>
          <GridCol
            span={{ base: 12, md: 6, lg: 6.5 }}
            order={{ base: 2, md: 1 }}
          >
            <IntroSection
              props={{
                subTitle: 'Who Is This For?',
                title: courseList[1].title,
              }}
              options={{ alignment: 'start' }}
            />

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
              alt={'Drone Mapping and Survey'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
              radius={'sm'}
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

              <Text fz={'xs'} c={'sec.3'} mt={'md'}>
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
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection
        id={linkify(courseList[2].title)}
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
                title: courseList[2].title,
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
              radius={'sm'}
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
      </LayoutSection>

      <LayoutSection id={linkify(courseList[3].title)} padded>
        <Grid gutter={'xl'}>
          <GridCol
            span={{ base: 12, md: 6, lg: 6.5 }}
            order={{ base: 2, md: 1 }}
          >
            <IntroSection
              props={{
                subTitle: 'Who Is This For?',
                title: courseList[3].title,
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
              radius={'sm'}
            />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection
        id={linkify(courseList[4].title)}
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
                title: courseList[4].title,
              }}
              options={{ alignment: 'start' }}
            />

            <Text mt={'lg'}>
              The Levell Thermography Certification course is designed for
              professionals who want to develop practical skills in using
              thermography for inspections and diagnostics. This course is
              suitable for individuals working in industries such as electrical,
              mechanical, and building inspections, as well as professionals
              involved in research and development. The certification is offered
              in collaboration with the Infrared Training Centre (ITC) and is
              globally recognized.
            </Text>

            {thermographyModules.map((item, index) => (
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

            <Text mt={'lg'}>
              By completing this course, students will learn how to use thermal
              imaging cameras to identify and diagnose faults in various
              systems, including electrical equipment, buildings, and mechanical
              systems. They will also gain an understanding of infrared theory,
              heat transfer concepts, and thermal imaging standards.
            </Text>
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

      <LayoutSection id={linkify(courseList[5].title)} padded>
        <Grid gutter={'xl'}>
          <GridCol
            span={{ base: 12, md: 6, lg: 6.5 }}
            order={{ base: 2, md: 1 }}
          >
            <IntroSection
              props={{
                subTitle: 'Who Is This For?',
                title: courseList[5].title,
              }}
              options={{ alignment: 'start' }}
            />

            <Text mt={'md'}>
              The U-18s Holiday Camp is a drone STEM program designed for kids,
              teens, and high school students between the ages of 7 and 17. The
              program is organized during school holidays to introduce young
              people to the emerging technology of drones and inspire their
              interest in science, technology, engineering, and mathematics
              (STEM) subjects. This program is suitable for young people who are
              curious about drones and want to learn about their applications
              and operations in a fun and safe environment.
            </Text>

            <Text mt={'md'}>
              By participating in this program, students will learn the basics
              of drone operation, including flight controls, aerial maneuvers,
              and safety procedures. They will also learn about the various
              applications of drones in different industries and participate in
              drone-related challenges and competitions. This program aims to
              inspire young people&apos;s interest in STEM and encourage them to
              consider careers in technology and innovation.
            </Text>
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
  // 'Flight Planning',
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
