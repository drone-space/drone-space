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
  Loader,
  Overlay,
  Radio,
  RadioGroup,
  Skeleton,
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
import { useStoreAlumniChallenger } from '@repo/libraries/zustand/stores/alumni-challenger';
import {
  IconCheck,
  IconForms,
  IconQuestionMark,
  IconX,
} from '@tabler/icons-react';
import FormAlumni from '@repo/components/form/alumni';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@mantine/hooks';

const targetDateWithTime = new Date('2026-08-29T17:00:00');
// const targetDateWithTime = new Date('2026-08-25T14:00:00');
const challengeStartDate = new Date('2026-08-27T14:00:00');
// const challengeStartDate = new Date('2026-08-25T14:00:00');
const eventEndDate = new Date('2026-08-29T22:00:00');
// const eventEndDate = new Date('2026-08-25T14:00:00');

export default function LightShowChallenge() {
  const mobile = useMediaQuery('(max-width: 36em)');

  const alumniChallengers = useStoreAlumniChallenger(
    (s) => s.alumniChallengers
  );

  const challengersWon = alumniChallengers?.filter(
    (ac) => Number(ac.answer_option) == correctOption
  );

  const availableTickets = totalTickets - (challengersWon?.length || 0);
  const soldOut = availableTickets < 1;

  const [selectedOption, setSelectedOption] = useState<null | string>(null);
  const [option, setOption] = useState('');

  const router = useRouter();

  const { time, complete } = useTimer(targetDateWithTime, TimerDirection.DOWN, {
    active: true,
  });

  const { time: timeChallenge, complete: completeChalenge } = useTimer(
    challengeStartDate,
    TimerDirection.DOWN,
    {
      active: true,
    }
  );

  const { complete: completeEventEnd } = useTimer(
    eventEndDate,
    TimerDirection.DOWN,
    {
      active: true,
    }
  );

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
                  250 drones - {totalTickets} Alumni tickets
                </Badge>
              </Group>

              <Title order={1} c={'sec.3'}>
                250+ Drone Light Show
              </Title>

              <Text inherit fz={'xl'}>
                Join us for our first ever light show event featuring 250+
                drones in the sky.
              </Text>

              <Text inherit fz={'xl'} fw={'bold'}>
                Carnival Gardens | 29th August, 2026
              </Text>

              <Group justify="center">
                <Button
                  size="lg"
                  color="white"
                  variant="outline"
                  radius={999}
                  component="a"
                  href="#challenge"
                  disabled={completeEventEnd || soldOut}
                >
                  Alumni Challenge
                </Button>
              </Group>

              <Box mih={106.4}>
                {completeEventEnd ? (
                  <Text
                    ta={'center'}
                    fw={'bold'}
                    fz={{ base: '2rem', lg: '3rem' }}
                  >
                    EVENT CLOSED
                  </Text>
                ) : complete ? (
                  <Text
                    ta={'center'}
                    fw={'bold'}
                    fz={{ base: '2rem', lg: '3rem' }}
                  >
                    EVENT LIVE
                  </Text>
                ) : (
                  <Countdown time={time} />
                )}
              </Box>
            </Stack>
          </Box>
        </BackgroundImage>
      </LayoutSection>

      <LayoutSection
        id="challenge"
        bg={'var(--mantine-color-gray-1)'}
        // containerized={'md'}
        padded={SECTION_SPACING}
        display={completeEventEnd ? 'none' : undefined}
      >
        <Grid gutter={'xl'}>
          <GridCol
            span={{ base: 12, md: 6 }}
            display={selectedOption && mobile ? 'none' : undefined}
          >
            <Stack gap={'xl'} ta={'start'} mt={{ base: 'xl', md: 0 }}>
              <Box maw={{ md: '100%', lg: '90%', xl: '100%' }}>
                <IntroSection
                  props={{
                    subTitle: 'Think you know drones? Prove it.',
                    title: `Answer correctly and be among the first ${totalTickets} to win an alumni ticket.`,
                    desc: `We're giving ${totalTickets} Drone Space alumni a chance to attend this Saturday's drone light show for free.`,
                  }}
                  options={{ alignment: 'start', spacing: false }}
                />
              </Box>

              <Stack display={!completeChalenge && mobile ? 'none' : undefined}>
                <Title order={2} fz={'xl'}>
                  Question:
                </Title>

                {!completeChalenge ? (
                  <>
                    <Text>
                      The question will be displayed when the challenge begins.
                    </Text>

                    <Stack gap={'xs'}>
                      <Skeleton animate={false} h={12} w={'100%'} />
                      <Skeleton animate={false} h={12} w={'90%'} />
                      <Skeleton animate={false} h={12} w={'70%'} />
                    </Stack>

                    <Stack gap={'xs'}>
                      <Group wrap="nowrap" gap={'xs'}>
                        <Skeleton animate={false} h={20} w={20} />
                        <Skeleton animate={false} h={12} w={'50%'} />
                      </Group>
                      <Group wrap="nowrap" gap={'xs'}>
                        <Skeleton animate={false} h={20} w={20} />
                        <Skeleton animate={false} h={12} w={'50%'} />
                      </Group>
                      <Group wrap="nowrap" gap={'xs'}>
                        <Skeleton animate={false} h={20} w={20} />
                        <Skeleton animate={false} h={12} w={'50%'} />
                      </Group>
                      <Group wrap="nowrap" gap={'xs'}>
                        <Skeleton animate={false} h={20} w={20} />
                        <Skeleton animate={false} h={12} w={'50%'} />
                      </Group>
                    </Stack>
                  </>
                ) : (
                  <>
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
                            disabled={!!selectedOption || soldOut}
                          />
                        ))}
                      </Stack>
                    </RadioGroup>

                    <Group>
                      <Button
                        disabled={!!selectedOption || !option || soldOut}
                        onClick={() => {
                          setSelectedOption(option);
                          router.push('#challenge');
                        }}
                      >
                        Submit Answer
                      </Button>
                    </Group>
                  </>
                )}
              </Stack>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }}>
            <SelectionDisplay
              value={selectedOption}
              time={timeChallenge}
              complete={completeChalenge}
              availableTickets={availableTickets}
              soldOut={soldOut}
            />
          </GridCol>
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}

function Countdown({ time }: { time: any }) {
  return (
    <Group justify="center" fz={'1.5rem'} fw={'bold'} py={'md'}>
      <Stack
        gap={0}
        w={{ base: 'inherit', xs: 100 }}
        display={time?.days ? undefined : 'none'}
      >
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
  );
}

function SelectionDisplay({
  value,
  time,
  complete,
  availableTickets,
  soldOut,
}: {
  value: string | null;
  complete: boolean;
  time: any;
  availableTickets: number;
  soldOut: boolean;
}) {
  const alumniChallengers = useStoreAlumniChallenger(
    (s) => s.alumniChallengers
  );

  const [showForm, setShowForm] = useState(!!value);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = value == questionOptions[correctOption];

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
        ? soldOut
          ? 'Sold Out'
          : 'Select an option'
        : 'Fill in your details'
      : isCorrect
        ? "YOU'RE IN."
        : 'NOT THIS TIME.',
    desc: !submitted
      ? soldOut
        ? `All ${totalTickets} tickets have already been sold out.`
        : 'ONE QUESTION. ONE CHANCE.'
      : isCorrect
        ? `You've answered correctly. If you're among the first ${totalTickets} eligible alumni, we will contact you with your event ticket. You will be expected to provide your original and valid RPL to confirm that the RPL number you entered here is actually yours.`
        : 'Sorry, better luck next time. Thanks for taking the challenge. Follow us on social media for the show.',
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
        {complete && (
          <>
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

            <Group
              justify="center"
              display={!soldOut && (!value || !submitted) ? undefined : 'none'}
            >
              <Badge size="xl">
                {alumniChallengers === undefined || alumniChallengers === null
                  ? '-- '
                  : `${availableTickets} `}
                Tickets remaining
              </Badge>
            </Group>

            <Text
              inherit
              ta={'center'}
              display={!soldOut && (!value || !submitted) ? undefined : 'none'}
            >
              A Valid RPL is required!
            </Text>
          </>
        )}

        {!complete && (
          <Stack>
            <Text inert ta={'center'}>
              Challenge starts in:
            </Text>

            <Countdown time={time} />

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
                  {totalTickets} winners
                </Text>
              </Text>
            </Group>

            <Text inherit ta={'center'}>
              A Valid RPL is required!
            </Text>
          </Stack>
        )}

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

const correctOption = 1;

const totalTickets = 10;
