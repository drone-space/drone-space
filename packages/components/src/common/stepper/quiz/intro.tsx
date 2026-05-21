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
  Loader,
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
import { useStoreQuizQuestion } from '@repo/libraries/zustand/stores/quiz-question';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import { useAttemptActions } from '@repo/hooks/actions/attempt';
import { useStoreAttempt } from '@repo/libraries/zustand/stores/attempt';
import { Status } from '@repo/types/models/enums';
import { useStoreSession } from '@repo/libraries/zustand/stores/session';

export default function Intro({
  props,
}: {
  props: {
    attemptId: string;
    quizId: string;
    setIntro: Dispatch<SetStateAction<boolean>>;
  };
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
  const quizQuestions = useStoreQuizQuestion((s) => s.quizQuestions);
  const quizQuestionsQuiz = quizQuestions?.filter(
    (qqqi) => qqqi.quiz_id == quiz?.id
  );
  const attempts = useStoreAttempt((s) => s.attempts);
  const session = useStoreSession((s) => s.session);
  const userAttempts = attempts?.filter(
    (ai) => ai.profile_id == session?.id && ai.status == Status.COMPLETE
  );
  const attempt = userAttempts?.find((ai) => ai.id == props.attemptId);
  const attemptsQuiz = attempts?.filter(
    (aqi) =>
      aqi.profile_id == session?.id &&
      aqi.status == Status.COMPLETE &&
      aqi.quiz_id == quiz?.id
  );

  const { attemptUpdate } = useAttemptActions();

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
                <NumberFormatter value={quizQuestionsQuiz?.length} />
              </Text>
            </Text>
            |
            <Text inherit>
              Times attempted (By You):{' '}
              <Text component="span" inherit fw={500} c={'primary'}>
                <NumberFormatter value={attemptsQuiz?.length} />
              </Text>
            </Text>
          </Group>

          <Text inherit fz={'sm'} c={'dimmed'} mt={'xl'}>
            Click next to see quiz instructions.
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
            difficulty.
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
            Once the quiz begins, do not try to: leave ths tab, disconnect from
            the network, remain idle for more than a few minutes. As any of
            these actions will be watched for and, if detected, will be recorded
            alongside your results.
          </Text>

          <Text inherit fz={'sm'} c={'dimmed'} mt={'xl'}>
            If you&apos;ve read and understand these constraints, you can
            proceed.
          </Text>
        </Stack>
      ),
    },
  ];

  const loading = quizzes === undefined || questions === undefined;

  return loading ? (
    <Stack align="center" justify="center" mih={'50vh'}>
      <Loader />

      <Text c={'dimmed'} fz={'sm'}>
        Loading quiz introduction.
      </Text>
    </Stack>
  ) : (
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
              <Title order={3}>Introduction Complete</Title>

              <Text inherit>
                Click the start button to begin whenever you&apos;re ready.
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
              if (attempt)
                attemptUpdate({ ...attempt, status: Status.IN_PROGRESS });
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
