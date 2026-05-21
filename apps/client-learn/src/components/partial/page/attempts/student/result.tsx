'use client';

import React from 'react';
import { useQuizStats } from '@repo/hooks/quiz';
import LayoutSection from '@repo/components/layout/section';
import IntroSection from '@repo/components/layout/intros/section';
import {
  Box,
  Divider,
  Group,
  Loader,
  NumberFormatter,
  Stack,
  Text,
} from '@mantine/core';
import { SECTION_SPACING } from '@repo/constants/sizes';
import CardQuestionWithAnswer from '@repo/components/common/cards/question/with-answer';
import { capitalizeWords } from '@repo/utilities/string';

export default function Result({ props }: { props: { attemptId: string } }) {
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

  return (
    <LayoutSection id={'correct-answers'} containerized={false}>
      <Stack gap={'md'} mb={SECTION_SPACING}>
        <IntroSection
          props={{
            title: `${quiz?.title || ''} Quiz Review`.trim(),
          }}
          options={{ alignment: 'start' }}
        />

        <Text>Review the correct answers for each question.</Text>

        <Group mt={'md'}>
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

        <Group>
          <Text inherit>
            Attempted on:{' '}
            <Text component={'span'} inherit fw={500}>
              {completeStats.dateAttempted?.date},{' '}
              {(completeStats.dateAttempted?.time || '').toUpperCase()}
            </Text>
          </Text>
        </Group>
      </Stack>

      <Divider variant="dashed" />

      <Box mih={'50vh'} mt={SECTION_SPACING}>
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
          </Stack>
        )}
      </Box>
    </LayoutSection>
  );
}
