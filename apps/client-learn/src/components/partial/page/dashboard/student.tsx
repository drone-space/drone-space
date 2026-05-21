'use client';

import {
  Anchor,
  Card,
  Grid,
  GridCol,
  Group,
  Loader,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import React from 'react';
import IntroSection from '@repo/components/layout/intros/section';
import {
  Icon,
  IconArrowDown,
  IconArrowDownRight,
  IconArrowUp,
  IconArrowUpRight,
  IconCalendarEvent,
  IconCalendarWeek,
  IconClockDown,
  IconReportAnalytics,
} from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import { useStoreAttempt } from '@repo/libraries/zustand/stores/attempt';
import { useStoreSession } from '@repo/libraries/zustand/stores/session';
import CardAttemptStudentView from '@repo/components/common/cards/attempt/student/view';
import { sortArray } from '@repo/utilities/array';
import { Order } from '@repo/types/enums';
import NextLink from '@repo/components/common/anchor/next-link';
import { Status } from '@repo/types/models/enums';
import { isThisWeek, isToday } from '@repo/utilities/date-time';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import { useStoreOption } from '@repo/libraries/zustand/stores/option';
import { useStoreAnswer } from '@repo/libraries/zustand/stores/answer';
import { useStoreQuizQuestion } from '@repo/libraries/zustand/stores/quiz-question';

export default function Student() {
  const quizzes = useStoreQuiz((s) => s.quizzes);
  const attempts = useStoreAttempt((s) => s.attempts);
  const session = useStoreSession((s) => s.session);
  const quizQuestions = useStoreQuizQuestion((s) => s.quizQuestions);
  const options = useStoreOption((s) => s.options);
  const answers = useStoreAnswer((s) => s.answers);

  const userAttempts = attempts?.filter((ai) => ai.profile_id === session?.id);
  const attemptsComplete = userAttempts?.filter(
    (aci) => aci.status === Status.COMPLETE
  );

  // --- HELPER TO COMPUTE SCORE FOR A SPECIFIC ATTEMPT ---
  const getAttemptScore = (attemptId: string, quizId: string): number => {
    const attemptAnswers =
      answers?.filter((an) => an.attempt_id === attemptId) || [];
    if (attemptAnswers.length === 0) return 0;

    const correctCount = attemptAnswers.filter((aai) => {
      const answerOption = options?.find((oi) => oi.id === aai.option_id);
      return answerOption?.correct;
    }).length;

    const quizQuestionsQuiz =
      quizQuestions?.filter((qqqi) => qqqi.quiz_id === quizId) || [];
    const totalQuestions = quizQuestionsQuiz.length || 1;

    return Math.round((correctCount / totalQuestions) * 100);
  };

  // --- FILTERED ARRAYS WITH LIVE METRICS ---
  const quizzesPassed = attemptsComplete?.filter((aci) => {
    const attemptQuiz = quizzes?.find((qi) => qi.id === aci.quiz_id);
    const thresholdPass = attemptQuiz?.pass_threshold ?? 0;
    const currentScore = getAttemptScore(aci.id, aci.quiz_id);

    return currentScore >= thresholdPass;
  });

  const quizzesFailed = attemptsComplete?.filter((aci) => {
    const attemptQuiz = quizzes?.find((qi) => qi.id === aci.quiz_id);
    const thresholdPass = attemptQuiz?.pass_threshold ?? 0;
    const currentScore = getAttemptScore(aci.id, aci.quiz_id);

    return currentScore < thresholdPass;
  });

  const quizzesToday = attemptsComplete?.filter((aci) => {
    return isToday(aci.created_at);
  });

  const quizzesThisWeek = attemptsComplete?.filter((aci) => {
    return isThisWeek(aci.created_at);
  });

  const stats = {
    attempts: [
      {
        icon: IconReportAnalytics,
        stat: attemptsComplete?.length,
        title: 'Quizzes Taken',
        desc: 'Total attempts on quizzes.',
      },
      {
        icon: IconArrowUpRight,
        stat: quizzesPassed?.length,
        title: 'Quizzes Passed',
        color: 'green',
        desc: 'Passed attempts on quizzes.',
      },
      {
        icon: IconArrowDownRight,
        stat: quizzesFailed?.length,
        title: 'Quizzes Failed',
        color: 'red',
        desc: 'Failed attempts on quizzes.',
      },
    ],
    time: [
      {
        icon: IconCalendarEvent,
        stat: quizzesToday?.length,
        title: 'Quizzes Today',
        color: 'blue',
        desc: 'Attempts on quizzes today.',
      },
      {
        icon: IconCalendarWeek,
        stat: quizzesThisWeek?.length,
        title: 'Quizzes This Week',
        color: 'blue',
        desc: 'Attempts on quizzes this week.',
      },
    ],
  };

  const loading =
    quizzes === undefined || attempts === undefined || session === undefined;

  return (
    <div>
      <IntroSection
        props={{
          title: `Welcome back, ${session?.user_metadata.name || 'Learner'}`,
          desc: "Here's a quick summary of your activity.",
        }}
        options={{ alignment: 'start', spacing: true }}
      />

      <Grid gutter={'xl'}>
        <GridCol span={{ base: 12, md: 7.5 }}>
          <Card bg={'transparent'} withBorder>
            {loading ? (
              <Stack mih={500} p={'md'}>
                <Loader />
                <Text c={'dimmed'} fz={'sm'}>
                  Fetching analytics data.
                </Text>
              </Stack>
            ) : (
              <Grid gutter={'xl'}>
                {stats.attempts.map((si) => (
                  <GridCol key={si.title} span={{ base: 12, md: 6 }}>
                    <CardStat props={si} />
                  </GridCol>
                ))}
              </Grid>
            )}
          </Card>
        </GridCol>

        <GridCol span={{ base: 12, md: 4.5 }}>
          <Card bg={'transparent'} withBorder>
            {loading ? (
              <Stack mih={500} p={'md'}>
                <Loader />
                <Text c={'dimmed'} fz={'sm'}>
                  Fetching analytics data.
                </Text>
              </Stack>
            ) : (
              <Grid gutter={'xl'}>
                {stats.time.map((si) => (
                  <GridCol key={si.title} span={{ base: 12 }}>
                    <CardStat props={si} />
                  </GridCol>
                ))}
              </Grid>
            )}
          </Card>
        </GridCol>

        <GridCol span={{ base: 12, md: 6 }}>
          <Card bg={'transparent'} withBorder>
            <Stack>
              <Title order={2} fz={'xl'}>
                Recent Attemtps
              </Title>

              {loading ? (
                <Stack mih={500}>
                  <Loader />
                  <Text c={'dimmed'} fz={'sm'}>
                    Fetching analytics data.
                  </Text>
                </Stack>
              ) : !attempts?.length ? (
                <Stack mih={500}>
                  <Text c={'dimmed'} fz={'sm'}>
                    No attempts found. Attempts will appear here when you take
                    quizzes.
                  </Text>
                </Stack>
              ) : (
                <Grid>
                  {sortArray(
                    attemptsComplete || [],
                    (i) => i.created_at,
                    Order.DESCENDING
                  )?.map(
                    (ai, i) =>
                      i < 3 && (
                        <GridCol key={ai.id} span={12}>
                          <CardAttemptStudentView props={{ attempt: ai }} />
                        </GridCol>
                      )
                  )}
                </Grid>
              )}
            </Stack>
          </Card>
        </GridCol>
      </Grid>
    </div>
  );
}

function CardStat({
  props,
}: {
  props: {
    icon: Icon;
    stat?: number;
    title: string;
    color?: string;
    desc: string;
  };
}) {
  return (
    <Card
      withBorder
      p={{ base: 'md', md: 'lg' }}
      bg={
        'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-9))'
      }
    >
      <Stack>
        <Stack gap={0}>
          <Group justify="end">
            <ThemeIcon
              size={ICON_WRAPPER_SIZE * 2}
              radius={999}
              color={`${props.color}.6`}
              variant="light"
            >
              <props.icon size={ICON_SIZE * 1.5} stroke={ICON_STROKE_WIDTH} />
            </ThemeIcon>
          </Group>

          <Text
            component="span"
            fz={{ base: '1.5rem', md: '2rem' }}
            fw={'bold'}
            c={`${props.color}.6`}
          >
            {props.stat || 0}
          </Text>
        </Stack>

        <Stack gap={'xs'}>
          <Title order={2} fz={'md'} fw={500}>
            {props.title}
          </Title>

          <Group c={'dimmed'} fz={'sm'}>
            <Text inherit>{props.desc}</Text>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
}
