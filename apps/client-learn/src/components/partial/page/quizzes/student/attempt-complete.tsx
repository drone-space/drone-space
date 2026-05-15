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
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { useStoreAnswer } from '@repo/libraries/zustand/stores/answer';
import { useStoreAttempt } from '@repo/libraries/zustand/stores/attempt';
import { useStoreOption } from '@repo/libraries/zustand/stores/option';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import { useStoreAppShell } from '@repo/libraries/zustand/stores/shell';
import { IconPercentage } from '@tabler/icons-react';
import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import CardQuestionWithAnswer from '@repo/components/common/cards/question/with-answer';
import IntroSection from '@repo/components/layout/intros/section';
import { APPSHELL } from '@/components/layout/appshell/student';

export default function AttemptComplete({
  props,
}: {
  props: { attemptId: string };
}) {
  const attempts = useStoreAttempt((s) => s.attempts);
  const attempt = attempts?.find((ai) => ai.id == props.attemptId);
  const quizzes = useStoreQuiz((s) => s.quizzes);
  const quiz = quizzes?.find((qi) => qi.id == attempt?.quiz_id);
  const questions = useStoreQuestion((s) => s.questions);
  const quizQuestions = questions?.filter((qi) => qi.quiz_id == quiz?.id);

  const passed = (attempt?.score || 0) > (quiz?.pass_threshold || 0);

  const options = useStoreOption((s) => s.options);
  const answers = useStoreAnswer((s) => s.answers);
  const attemptAnswers = answers?.filter(
    (ai) => ai.attempt_id == props.attemptId
  );
  const correctAnswers = attemptAnswers?.filter((aai) => {
    const answerOption = options?.find((oi) => oi.id == aai.option_id);
    return answerOption?.correct;
  });

  const navbarChild = useStoreAppShell((s) => s.appshell?.child.navbar);
  const toggleNavbarChild = useStoreAppShell((s) => s.toggleNavbarChild);

  const actionComponent = (
    <SimpleGrid cols={{ md: passed ? 2 : 3 }} maw={{ md: '80%' }} mx={'auto'}>
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

      {!passed && (
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
              color={`${passed ? 'green' : 'red'}.6`}
            >{`Quiz ${passed ? 'Passed' : 'Failed'}`}</Badge>

            <Group justify="center" fz={'lg'}>
              <Text inherit>
                Answered:{' '}
                <Text component="span" inherit fw={'bold'}>
                  <NumberFormatter value={attemptAnswers?.length || 0} />
                </Text>
              </Text>

              <Text inherit>
                Correct:{' '}
                <Text component="span" inherit c={'green.6'} fw={'bold'}>
                  <NumberFormatter value={correctAnswers?.length || 0} />
                </Text>
              </Text>

              <Text inherit>
                Wrong:{' '}
                <Text component="span" inherit c={'red.6'} fw={'bold'}>
                  <NumberFormatter
                    value={
                      (attemptAnswers?.length || 0) -
                      (correctAnswers?.length || 0)
                    }
                  />
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
                c={`${passed ? 'green' : 'red'}.6`}
                fw={'bold'}
              >
                <NumberFormatter value={attempt?.score || 0} />%
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
