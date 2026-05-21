'use client';

import {
  Anchor,
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
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { useStoreAppShell } from '@repo/libraries/zustand/stores/shell';
import {
  IconAlignLeft,
  IconArrowLeft,
  IconListCheck,
  IconPercentage,
  IconReload,
} from '@tabler/icons-react';
import React, { useState } from 'react';
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
  const [showCorrect, setShowCorrect] = useState(false);

  const {
    completeStats,
    quizzes,
    quiz,
    quizQuestions,
    quizQuestionsQuizQuestions,
    options,
    attemptAnswers,
  } = useQuizStats({
    attemptId: props.attemptId,
  });

  const navbarChild = useStoreAppShell((s) => s.appshell?.child.navbar);
  const toggleNavbarChild = useStoreAppShell((s) => s.toggleNavbarChild);

  const actionComponent = (
    <SimpleGrid
      cols={{
        md: completeStats.passed ? (showCorrect ? 1 : 2) : showCorrect ? 2 : 3,
      }}
      maw={{ md: '80%' }}
      mx={'auto'}
    >
      <NextLink href="/dashboard">
        <Button
          fullWidth
          color="dark"
          variant="light"
          leftSection={
            <IconArrowLeft size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
          onClick={() => {
            if (!navbarChild) toggleNavbarChild();
          }}
        >
          Back to Dashboard
        </Button>
      </NextLink>

      <Anchor
        href="#correct-answers"
        display={!showCorrect ? undefined : 'none'}
      >
        <Button
          fullWidth
          leftSection={
            <IconListCheck size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
          onClick={() => {
            setShowCorrect(true);
          }}
        >
          View Correct Answers
        </Button>
      </Anchor>

      {!completeStats.passed && (
        <NextLink href={`/quizzes/${quiz?.id}`}>
          <Button
            fullWidth
            color="dark"
            variant="outline"
            leftSection={
              <IconReload size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            }
          >
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

        <LayoutSection
          id={'correct-answers'}
          padded
          display={showCorrect ? undefined : 'none'}
        >
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
            ) : !quizzes?.length || !quizQuestionsQuizQuestions?.length ? (
              <Stack>
                <Text c={'dimmed'}>No questions found for this quiz.</Text>
              </Stack>
            ) : (
              <Stack gap={SECTION_SPACING}>
                {quizQuestionsQuizQuestions.map((qqqqi, i) => {
                  // find the user's answer for this question
                  const userAnswer = attemptAnswers?.find((aa) => {
                    const option = options?.find((o) => o.id == aa.option_id);
                    return option?.question_id == qqqqi.id;
                  });

                  return (
                    <div key={qqqqi.id}>
                      {i > 0 && <Divider mb={SECTION_SPACING} />}

                      <CardQuestionWithAnswer
                        props={{
                          questionId: qqqqi.id,
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
