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
  Button,
  Stack,
} from '@mantine/core';
import ModalContactTraining from '@/components/common/modals/contact/training';
import { IconArrowRightDashed, IconMessage } from '@tabler/icons-react';
import {
  HOSTED_BASE_URL,
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
import IntroSection from '@/components/layout/intros/section';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import CardCourse from '@/components/common/cards/training/course';
import { linkify } from '@/utilities/formatters/string';
import { courseList } from '@/data/courses';
import IntroPage from '@/components/layout/intros/page';
import { appName, companyName } from '@/data/app';

export const dynamic = 'force-static';

const metaTitle = `Drone Training In Kenya - Professional Courses at ${appName} Kenya`;
const metaDesc = `Kenya's leading KCAA certified drone training academy. Train with expert instructors in Nairobi and master drone technology. Enroll today!`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DEFAULT}/drone-training`,
    type: 'website',
    images: [
      {
        url: images.brand.droneSpace.logo.potrait.meta,
        width: 1200,
        height: 1200,
        alt: companyName,
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
          bg: images.web.hero,
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
              {companyName} is an authorized provider of the following ratings
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
                  c={'pri.7'}
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
                  color="sec.3"
                  c={'pri.7'}
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
              radius={'lg'}
            />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="course-list" padded>
        <Grid justify="center">
          {courseList.map((item, index) => (
            <GridCol key={index} span={{ base: 12, sm: 6, xl: 4 }}>
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
                  color="sec.3"
                  c={'pri.7'}
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
              alt={'RPL Training'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
              radius={'lg'}
            />
          </GridCol>
        </Grid>

        <Grid mt={SECTION_SPACING / 2}>
          <GridCol span={4}>
            <Divider color="sec.3" size={'md'} />
          </GridCol>
          <GridCol span={8}>
            <Divider color="pri.7" size={'md'} />
          </GridCol>
        </Grid>

        <Grid align="center" gutter={'xl'} mt={SECTION_SPACING / 2}>
          <GridCol span={{ base: 12, md: 5.5 }}>
            <Card
              bg={'pri.7'}
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
                    c={'pri.7'}
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

        <Group justify="center">
          <ModalContactTraining
            props={{
              initialValues: {
                subject: `RPL Training Inquiry`,
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
              Enroll For RPL Training
            </Button>
          </ModalContactTraining>
        </Group>
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
              alt={'Radio Telephony'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
              radius={'lg'}
            />
          </GridCol>
        </Grid>

        <Grid mt={SECTION_SPACING / 2}>
          <GridCol span={4} order={2}>
            <Divider color="sec.3" size={'md'} />
          </GridCol>
          <GridCol span={8} order={1}>
            <Divider color="pri.7" size={'md'} />
          </GridCol>
        </Grid>

        <Grid align="center" gutter={'xl'} mt={SECTION_SPACING / 2}>
          <GridCol span={{ base: 12, md: 5.5 }}>
            <Card
              bg={'pri.7'}
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
                    c={'pri.7'}
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
                  color="sec.3"
                  c={'pri.7'}
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

        <Group justify="center">
          <ModalContactTraining
            props={{
              initialValues: {
                subject: `Radio Telephony Training Inquiry`,
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
              Enroll For Radio Telephony Training
            </Button>
          </ModalContactTraining>
        </Group>
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
              radius={'lg'}
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
            <Divider color="pri.7" size={'md'} />
          </GridCol>
        </Grid>

        <Grid mt={SECTION_SPACING / 2}>
          {instructorModules.map((module, index) => (
            <GridCol key={index} span={{ base: 12, md: 4 }}>
              <Card
                bg={'pri.7'}
                c={'white'}
                withBorder
                shadow="xs"
                p={{ base: 'md', lg: 'xl' }}
                h={'100%'}
              >
                <Paper bg={'sec.3'} c={'pri.7'} p={'xs'} w={'fit-content'}>
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
                subject: `Instructor Rating Training Inquiry`,
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
              Enroll For Instructor Rating Training
            </Button>
          </ModalContactTraining>
        </Group>
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
                  color="sec.3"
                  c={'pri.7'}
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
              radius={'lg'}
            />
          </GridCol>
        </Grid>

        <Group justify="center">
          <ModalContactTraining
            props={{
              initialValues: {
                subject: `Drone Mapping and Survey Training Inquiry`,
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
              Enroll For Drone Mapping and Survey Training
            </Button>
          </ModalContactTraining>
        </Group>
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
              The Level I Thermography Certification course is designed for
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
                  color="sec.3"
                  c={'pri.7'}
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
              radius={'lg'}
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

        <Group justify="center">
          <ModalContactTraining
            props={{
              initialValues: {
                subject: `Thermography Training Inquiry`,
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
              Enroll For Thermography Training
            </Button>
          </ModalContactTraining>
        </Group>
      </LayoutSection>

      <LayoutSection id={linkify(courseList[5].title)} padded>
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
                    title: courseList[5].title,
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
                          c={'pri.7'}
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
                  radius={'lg'}
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
                <Divider color="pri.7" size={'md'} />
              </GridCol>
            </Grid>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 5.5 }}>
            <Card
              bg={'pri.7'}
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
                          c={'pri.7'}
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
                          c={'pri.7'}
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
                            c={'pri.7'}
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
                            c={'pri.7'}
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
                subject: `${courseList[5].title} Training Inquiry`,
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
              Enroll For {courseList[5].title} Training
            </Button>
          </ModalContactTraining>
        </Group>
      </LayoutSection>

      <LayoutSection
        id={linkify(courseList[6].title)}
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
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
                    title: courseList[6].title,
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
                          c={'pri.7'}
                          radius={'xl'}
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
                  radius={'lg'}
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
                <Divider color="pri.7" size={'md'} />
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
                        c={'pri.7'}
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
                            c={'pri.7'}
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
                            c={'pri.7'}
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
                        c={'pri.7'}
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
                        c={'pri.7'}
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
                </div>
              </Stack>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 6.5 }}>
            <Card
              bg={'pri.7'}
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
                          c={'pri.7'}
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
                          c={'pri.7'}
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
                          c={'pri.7'}
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
                          c={'pri.7'}
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
                subject: `${courseList[6].title} Training Inquiry`,
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
              Enroll For {courseList[6].title} Training
            </Button>
          </ModalContactTraining>
        </Group>
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
  'Agricultural Spraying',
  'Beyond Visual Line of Sight',
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
