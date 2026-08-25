'use client';

import React, { useState } from 'react';
import LayoutPage from '@repo/components/layout/page';
import LayoutSection from '@repo/components/layout/section';
import { useTimer } from '@repo/hooks/timer';
import { TimerDirection } from '@repo/types/enums';
import {
  BackgroundImage,
  Badge,
  Box,
  Button,
  Card,
  Grid,
  GridCol,
  Group,
  Overlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { prependZeros } from '@repo/utilities/number';
import IntroSection from '@repo/components/layout/intros/section';
import {
  IconCheck,
  IconForms,
  IconQuestionMark,
  IconX,
} from '@tabler/icons-react';
import FormAlumni from '@repo/components/form/alumni';
import { useRouter } from 'next/navigation';

const targetDateWithTime = new Date('2026-08-29T17:00:00');

export default function LightShowChallenge() {
  const [selectedOption, setSelectedOption] = useState<null | string>(null);
  const [option, setOption] = useState('');

  const router = useRouter();

  const { time } = useTimer(targetDateWithTime, TimerDirection.DOWN, {
    active: true,
  });

  const bgImg =
    'https://iflydrones.com/wp-content/uploads/2025/11/Synchronized-drone-light-show.jpg';

  return (
    <LayoutPage>
      <LayoutSection id="intro" containerized={false}>
        <BackgroundImage src={bgImg} pos={'relative'}>
          <Overlay backgroundOpacity={0.3} style={{ zIndex: 0 }} />

          <Box py={SECTION_SPACING * 2}>
            <Stack
              mih={'50vh'}
              justify="center"
              ta={'center'}
              c={'white'}
              style={{ position: 'relative', zIndex: 1 }}
              gap={'xl'}
            >
              <Group justify="center">
                <Badge
                  color="sec.3"
                  variant="light"
                  size="lg"
                  styles={{
                    root: { color: 'var(--mantine-color-white)' },
                  }}
                >
                  250 drones. One light show. 10 tickets.
                </Badge>
              </Group>

              <Title order={1} c={'sec.3'}>
                Alumni Drone Light Show Challenge
              </Title>

              <Text inherit fz={'xl'}>
                Think you know drones? Prove it.
              </Text>

              <Group justify="center">
                <Button
                  size="lg"
                  color="white"
                  variant="outline"
                  radius={999}
                  component="a"
                  href="#challenge"
                >
                  Take the Challenge
                </Button>
              </Group>

              <Group justify="center" fz={'2rem'} fw={'bold'} py={'md'}>
                <Stack gap={0} w={{ base: 'inherit', xs: 100 }}>
                  <Text inherit>{prependZeros(time?.days || 0, 2)}</Text>

                  <Text inherit component="span" fz={'md'}>
                    Days
                  </Text>
                </Stack>

                <Stack gap={0} w={{ base: 'inherit', xs: 100 }}>
                  <Text inherit>{prependZeros(time?.hours || 0, 2)}</Text>

                  <Text inherit component="span" fz={'md'}>
                    Hours
                  </Text>
                </Stack>

                <Stack gap={0} w={{ base: 'inherit', xs: 100 }}>
                  <Text inherit>{prependZeros(time?.minutes || 0, 2)}</Text>

                  <Text inherit component="span" fz={'md'}>
                    Minutes
                  </Text>
                </Stack>

                <Stack gap={0} w={{ base: 'inherit', xs: 100 }}>
                  <Text inherit>{prependZeros(time?.seconds || 0, 2)}</Text>

                  <Text inherit component="span" fz={'md'}>
                    Seconds
                  </Text>
                </Stack>
              </Group>

              <Group justify="center">
                <Text inherit>
                  <Text inherit component="span">
                    Alumni exclusive
                  </Text>{' '}
                  •{' '}
                  <Text inherit component="span">
                    1 question
                  </Text>{' '}
                  •{' '}
                  <Text inherit component="span">
                    10 winners
                  </Text>
                </Text>
              </Group>
            </Stack>
          </Box>
        </BackgroundImage>
      </LayoutSection>

      <LayoutSection
        id="challenge"
        bg={'var(--mantine-color-gray-1)'}
        // containerized={'md'}
        padded={SECTION_SPACING}
      >
        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
            <Stack gap={'xl'} ta={'start'} mt={{ base: 'xl', md: 0 }}>
              <Box maw={{ md: '100%', lg: '90%', xl: '100%' }}>
                <IntroSection
                  props={{
                    subTitle: 'ONE QUESTION. ONE CHANCE.',
                    title: 'Answer correctly and be among the first 10.',
                    desc: "We're giving 10 Drone Space alumni a chance to attend this Saturday's drone light show.",
                  }}
                  options={{ alignment: 'start', spacing: true }}
                />
              </Box>

              <Stack>
                <Title order={2} fz={'xl'}>
                  Question:
                </Title>

                <Text>{question}</Text>

                <RadioGroup
                  name={question}
                  aria-label={question}
                  value={option}
                  onChange={setOption}
                >
                  <Stack>
                    {questionOptions.map((qo) => (
                      <Radio
                        key={qo}
                        value={qo}
                        label={qo}
                        disabled={!!selectedOption}
                      />
                    ))}
                  </Stack>
                </RadioGroup>
              </Stack>

              <Group>
                <Button
                  disabled={!!selectedOption || !option}
                  onClick={() => {
                    setSelectedOption(option);
                    router.push('#challenge');
                  }}
                >
                  Submit Answer
                </Button>
              </Group>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
            <SelectionDisplay value={selectedOption} />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="page-lightshow-video" padded={SECTION_SPACING}>
        <IntroSection
          props={{
            subTitle: '250 DRONES. ONE SKY.',
            title: 'On the Eve of This Saturday',
            desc: 'Join us for our first ever light show event featuring 250+ drones in the sky.',
          }}
          options={{
            // alignment: 'start',
            spacing: true,
          }}
        />

        <Stack ta={'center'}>
          <Text inherit>[ EVENT DETAILS / DATE / LOCATION ]</Text>
        </Stack>
      </LayoutSection>
    </LayoutPage>
  );
}

function SelectionDisplay({ value }: { value: string | null }) {
  const [showForm, setShowForm] = useState(!!value);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = value == questionOptions[corerctOption];

  const displayProps = {
    cardBg: `var(--mantine-color-${!submitted ? 'gray-2' : isCorrect ? 'green-light' : 'red-light'})`,
    icon: !submitted
      ? !value
        ? IconQuestionMark
        : IconForms
      : isCorrect
        ? IconCheck
        : IconX,
    iconColor: !submitted ? 'pri' : isCorrect ? 'green.6' : 'red.6',
    iconC: !submitted ? 'sec.3' : 'white',
    title: !submitted
      ? !value
        ? 'Select an option'
        : 'Fill in your details'
      : isCorrect
        ? "YOU'RE IN."
        : 'NOT THIS TIME.',
    desc: !submitted
      ? 'You only get one shot. Make it count.'
      : isCorrect
        ? "You've answered correctly. If you're among the first 10 eligible alumni, we will contact you with your event ticket. You will be expected to provide your original and valid RPL to confirm that the RPL number you entered here is actually yours."
        : 'Thanks for taking the challenge. Follow us for the show.',
  };

  return (
    <Card
      bg={displayProps.cardBg}
      px={{ base: 'sm', xs: 'xl' }}
      py={{ base: 'xl' }}
    >
      <Stack
        justify="center"
        ta={'center'}
        gap={'xl'}
        mih={{ lg: 600, xl: 500 }}
      >
        <Group justify="center">
          <ThemeIcon
            size={ICON_WRAPPER_SIZE * 3}
            color={displayProps.iconColor}
            c={displayProps.iconC}
            radius={99}
          >
            <displayProps.icon
              size={ICON_SIZE * 3}
              stroke={ICON_STROKE_WIDTH}
            />
          </ThemeIcon>
        </Group>

        <Title order={2} c={displayProps.iconColor}>
          {showForm ? 'Enter Your Details' : displayProps.title}
        </Title>

        <Text display={!value || submitted ? undefined : 'none'}>
          {displayProps.desc}
        </Text>

        <Box display={!value || submitted ? 'none' : undefined}>
          <FormAlumni
            answerOption={questionOptions.indexOf(value || '').toString()}
            setShowForm={setShowForm}
            setSubmitted={setSubmitted}
          />
        </Box>
      </Stack>
    </Card>
  );
}

const question =
  'A drone light show uses hundreds of drones flying simultaneously. What allows them to perform their individual flight paths with precise coordination?';

const questionOptions = [
  'Manual control by individual pilots',
  'GPS synchronization and programmed flight paths',
  'One controller connected to every drone',
  'The drones follow a lead drone',
];

const corerctOption = 1;
