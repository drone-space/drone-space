'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import {
  Stepper,
  Button,
  Group,
  StepperStep,
  StepperCompleted,
  Box,
  Stack,
  Title,
  Text,
  NumberFormatter,
  ThemeIcon,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { IconCheck, IconSchool } from '@tabler/icons-react';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import { useAttemptActions } from '@repo/hooks/actions/attempt';

export default function Intro({
  props,
}: {
  props: { quizId: string; setIntro: Dispatch<SetStateAction<boolean>> };
}) {
  const router = useRouter();

  const [active, setActive] = useState(0);

  const nextStep = () =>
    setActive((current) => (current < steps.length ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const quizzes = useStoreQuiz((s) => s.quizzes);
  const quiz = quizzes?.find((qi) => qi.id == props.quizId);
  const questions = useStoreQuestion((s) => s.questions);
  const quizQuestions = questions?.filter((qi) => qi.quiz_id == quiz?.id);

  const steps = [
    {
      icon: IconSchool,
      title: 'Quiz Info',
      desc: 'Confirm quiz identification',
      content: (
        <Stack maw={{ md: '70%' }}>
          <Title order={3}>You&apos;re Attempting {quiz?.title}</Title>
          <Text inherit>{quiz?.description}</Text>

          <Group justify="center">
            <Text inherit>
              Total Questions:{' '}
              <Text component="span" inherit fw={500} c={'primary'}>
                <NumberFormatter value={quizQuestions?.length} />
              </Text>
            </Text>
            |
            <Text inherit>
              Attempts (By All):{' '}
              <Text component="span" inherit fw={500} c={'primary'}>
                <NumberFormatter value={123} />
              </Text>
            </Text>
            |
            <Text inherit>
              Attempts (By You):{' '}
              <Text component="span" inherit fw={500} c={'primary'}>
                <NumberFormatter value={12} />
              </Text>
            </Text>
          </Group>

          <Text inherit fz={'sm'} c={'dimmed'} mt={'xl'}>
            Wrong quiz? You can go back.
          </Text>
        </Stack>
      ),
    },
    {
      icon: IconSchool,
      title: 'Quiz Instructions',
      desc: 'How to take the quiz',
      content: (
        <Stack maw={{ md: '80%' }}>
          <Text inherit>
            This quiz contains multiple choice questions only. Each question has
            exactly 4 options. Only one option can be selected per question.
            There is a limited amount of time to complete the quiz. Time
            alocated depends on total number of questions in the quiz, and their
            difficulty. Fullscreen mode will be automatically activated when the
            quiz begins.
          </Text>

          <Text inherit fz={'sm'} c={'dimmed'} mt={'xl'}>
            If you&apos;ve read and understand these instructions, you can
            proceed.
          </Text>
        </Stack>
      ),
    },
    {
      icon: IconSchool,
      title: 'Quiz Constraints',
      desc: 'The rules of the quiz',
      content: (
        <Stack maw={{ md: '80%' }}>
          <Text inherit>
            Once the quiz begins, do not try to: leave fullscreeen, leave ths
            tab, disconnect from the network, remain idle for more than a few
            minutes. As any of these actions will be watched for and, if
            detected, will be recorded alongside your results.
          </Text>

          <Text inherit fz={'sm'} c={'dimmed'} mt={'xl'}>
            If you&apos;ve read and understand these constraints, you can
            proceed.
          </Text>
        </Stack>
      ),
    },
  ];

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        {steps.map((si) => (
          <StepperStep
            key={si.title}
            label={si.title}
            description={si.desc}
            icon={<si.icon size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
          >
            <Stack mih={'50vh'} justify="center" align="center" ta={'center'}>
              {si.content}
            </Stack>
          </StepperStep>
        ))}

        <StepperCompleted>
          <Stack
            mih={'50vh'}
            justify="center"
            align="center"
            ta={'center'}
            gap={SECTION_SPACING}
          >
            <ThemeIcon
              size={ICON_WRAPPER_SIZE * 3}
              variant="light"
              radius={999}
            >
              <IconCheck size={ICON_SIZE * 2} stroke={ICON_STROKE_WIDTH} />
            </ThemeIcon>

            <Stack maw={{ md: '80%' }}>
              <Text inherit>
                Introduction complete. Click the start button to begin.
              </Text>
            </Stack>
          </Stack>
        </StepperCompleted>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button
          color="dark"
          variant="light"
          miw={120}
          onClick={() => {
            if (active > 0) {
              prevStep();
            } else {
              router.back();
            }
          }}
        >
          {active > 0 ? 'Previous' : 'Back'}
        </Button>

        <Button
          miw={120}
          onClick={() => {
            if (active < steps.length) {
              nextStep();
            } else {
              props.setIntro(false);
            }
          }}
        >
          {active < steps.length ? 'Next' : 'Start'}
        </Button>
      </Group>
    </>
  );
}
