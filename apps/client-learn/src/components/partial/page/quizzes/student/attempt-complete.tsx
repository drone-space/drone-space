'use client';

import {
  Badge,
  Box,
  Button,
  Divider,
  Group,
  Loader,
  NumberFormatter,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import NextLink from '@repo/components/common/anchor/next-link';
import {
  ICON_SIZE,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { useStoreAppShell } from '@repo/libraries/zustand/stores/shell';
import { IconPercentage } from '@tabler/icons-react';
import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import CardQuestionWithAnswer from '@repo/components/common/cards/question/with-answer';
import IntroSection from '@repo/components/layout/intros/section';
import { APPSHELL } from '@/components/layout/appshell/student';
import { useQuizStats } from '@repo/hooks/quiz';

export default function AttemptComplete({
  props,
}: {
  props: { attemptId: string };
}) {
  const {
    completeStats,
    quizzes,
    quiz,
    quizQuestions,
    options,
    attemptAnswers,
  } = useQuizStats({
    attemptId: props.attemptId,
  });

  const navbarChild = useStoreAppShell((s) => s.appshell?.child.navbar);
  const toggleNavbarChild = useStoreAppShell((s) => s.toggleNavbarChild);

  const actionComponent = (
    <SimpleGrid
      cols={{ md: completeStats.passed ? 2 : 3 }}
      maw={{ md: '80%' }}
      mx={'auto'}
    >
      <NextLink href="/dashboard">
        <Button
          fullWidth
          color="dark"
          variant="light"
          onClick={() => {
            if (!navbarChild) toggleNavbarChild();
          }}
        >
          Back to Dashboard
        </Button>
      </NextLink>

      <a href="#correct-answers">
        <Button fullWidth>View Correct Answers</Button>
      </a>

      {!completeStats.passed && (
        <NextLink href={`/quizzes/${quiz?.id}`}>
          <Button fullWidth color="dark" variant="outline">
            Re-Take Quiz
          </Button>
        </NextLink>
      )}
    </SimpleGrid>
  );

  return (
    <>
      <Stack>
        <Stack
          gap={SECTION_SPACING / 1.5}
          mih={`calc(100vh - ${APPSHELL.FOOTER.HEIGHT + SECTION_SPACING * 2}px)`}
          justify="center"
        >
          <Stack align="center" ta={'center'}>
            <Badge variant="light" color="dark">
              {quiz?.title}
            </Badge>

            <Title order={1}>Quiz Complete</Title>

            {/* <Text inherit>
            Time Spent:{' '}
            <Text component="span" inherit fw={'bold'}>
              {'12'}:{'34'}
            </Text>
          </Text> */}
          </Stack>

          <Stack align="center" ta={'center'}>
            <Badge
              color={`${completeStats.passed ? 'green' : 'red'}.6`}
            >{`Quiz ${completeStats.passed ? 'Passed' : 'Failed'}`}</Badge>

            <Group justify="center" fz={'lg'}>
              <Text inherit>
                Answered:{' '}
                <Text component="span" inherit fw={'bold'}>
                  <NumberFormatter value={completeStats.questions.total} />
                </Text>
              </Text>

              <Text inherit>
                Correct:{' '}
                <Text component="span" inherit c={'green.6'} fw={'bold'}>
                  <NumberFormatter value={completeStats.questions.correct} />
                </Text>
              </Text>

              <Text inherit>
                Wrong:{' '}
                <Text component="span" inherit c={'red.6'} fw={'bold'}>
                  <NumberFormatter value={completeStats.questions.wrong} />
                </Text>
              </Text>
            </Group>
          </Stack>

          <Stack align="center" ta={'center'}>
            <ThemeIcon
              size={ICON_WRAPPER_SIZE * 3}
              variant="light"
              color={'dark'}
              radius={999}
            >
              <IconPercentage size={ICON_SIZE * 2} stroke={1} />
            </ThemeIcon>

            <Text inherit fz={'xl'}>
              Score:{' '}
              <Text
                component="span"
                inherit
                c={`${completeStats.passed ? 'green' : 'red'}.6`}
                fw={'bold'}
              >
                <NumberFormatter value={completeStats.score} />%
              </Text>
            </Text>
          </Stack>

          {actionComponent}
        </Stack>

        <LayoutSection id={'correct-answers'} padded>
          <IntroSection
            props={{
              title: 'Correct Answers',
              desc: 'Review the correct answers for each question.',
            }}
            options={{ spacing: true, alignment: 'start' }}
          />

          <Box mih={'50vh'}>
            {quizzes === undefined || quizQuestions === undefined ? (
              <Stack>
                <Loader />
              </Stack>
            ) : !quizzes?.length || !quizQuestions?.length ? (
              <Stack>
                <Text c={'dimmed'}>No questions found for this quiz.</Text>
              </Stack>
            ) : (
              <Stack gap={SECTION_SPACING}>
                {quizQuestions.map((qq, i) => {
                  // find the user's answer for this question
                  const userAnswer = attemptAnswers?.find((aa) => {
                    const option = options?.find((o) => o.id == aa.option_id);
                    return option?.question_id == qq.id;
                  });

                  return (
                    <div key={qq.id}>
                      {i > 0 && <Divider mb={SECTION_SPACING} />}

                      <CardQuestionWithAnswer
                        props={{
                          questionId: qq.id,
                          answerId: userAnswer?.id || '',
                        }}
                      />
                    </div>
                  );
                })}

                {actionComponent}
              </Stack>
            )}
          </Box>
        </LayoutSection>
      </Stack>
    </>
  );
}
