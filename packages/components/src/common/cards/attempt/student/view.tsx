'use client';

import {
  Anchor,
  Button,
  Card,
  Grid,
  GridCol,
  Group,
  NumberFormatter,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import { AttemptGet } from '@repo/types/models/attempt';
import { getRegionalDate } from '@repo/utilities/date-time';
import { capitalizeWords } from '@repo/utilities/string';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';
import { useQuizStats } from '@repo/hooks/quiz';
import BadgeStatus from '../../../badges/status';
import BadgeResult from '../../../badges/result';
import { Status } from '@repo/types/models/enums';

export default function View({ props }: { props: { attempt: AttemptGet } }) {
  const { completeStats, quizzes, metaStats, quiz } = useQuizStats({
    attemptId: props.attempt.id,
  });

  return (
    <Card
      bg={
        'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-9))'
      }
      withBorder
      p={{ base: 'md', md: 'lg' }}
    >
      <Grid>
        <GridCol span={10}>
          <Stack>
            <Group mb={'md'}>
              <Tooltip
                label={quiz?.title}
                position="top-start"
                arrowOffset={16}
              >
                <Title order={2} fz={'lg'} lineClamp={1}>
                  {quiz?.title}
                </Title>
              </Tooltip>
            </Group>

            <Group>
              <Group gap={5}>
                <Text component="span" inherit>
                  Status:
                </Text>

                <BadgeStatus props={{ status: props.attempt.status }} />
              </Group>

              {props.attempt.status == Status.COMPLETE && (
                <Group gap={5}>
                  <Text component="span" inherit>
                    Result:
                  </Text>
                  <BadgeResult
                    props={{
                      pass: completeStats.passed,
                    }}
                  />
                </Group>
              )}
            </Group>

            <Group>
              <Text
                inherit
                display={
                  props.attempt.status != Status.COMPLETE ? undefined : 'none'
                }
              >
                <Text component="span" inherit fw={'bold'}>
                  <NumberFormatter
                    value={Math.floor(
                      (completeStats.questions.total /
                        metaStats.totalQuestions) *
                        100
                    )}
                  />
                </Text>
                % complete
              </Text>

              <Text
                inherit
                display={
                  props.attempt.status == Status.COMPLETE ? undefined : 'none'
                }
              >
                Score:{' '}
                <Text
                  component="span"
                  inherit
                  c={`${completeStats.passed ? 'green' : 'red'}.6`}
                  fw={'bold'}
                >
                  <NumberFormatter value={completeStats.score} />%
                </Text>{' '}
                (
                <Text
                  component="span"
                  fz={'sm'}
                  inherit
                  display={
                    props.attempt.status == Status.COMPLETE ? undefined : 'none'
                  }
                >
                  Correct:{' '}
                  <Text component="span" inherit c={'green.6'} fw={'bold'}>
                    <NumberFormatter value={completeStats.questions.correct} />
                  </Text>
                </Text>
                ,{' '}
                <Text
                  component="span"
                  fz={'sm'}
                  inherit
                  display={
                    props.attempt.status == Status.COMPLETE ? undefined : 'none'
                  }
                >
                  Wrong:{' '}
                  <Text component="span" inherit c={'red.6'} fw={'bold'}>
                    <NumberFormatter value={completeStats.questions.wrong} />
                  </Text>
                </Text>
                )
              </Text>
            </Group>

            <Group fz={'sm'} c={'dimmed'}>
              <Text inherit>
                Attempted on:{' '}
                <Text component={'span'} inherit fw={500}>
                  {completeStats.dateAttempted?.date},{' '}
                  {(completeStats.dateAttempted?.time || '').toUpperCase()}
                </Text>
              </Text>
            </Group>
          </Stack>
        </GridCol>

        <GridCol span={2}>
          <Group
            justify={'end'}
            display={
              props.attempt.status == Status.COMPLETE ? undefined : 'none'
            }
          >
            <Anchor
              component={Link}
              href={`/attempts/${props.attempt.id}`}
              underline="hover"
              c={
                'light-dark(var(--mantine-color-text), var(--mantine-color-dark-0))'
              }
            >
              <Button
                size="xs"
                rightSection={
                  <IconArrowRight
                    size={ICON_SIZE - 4}
                    stroke={ICON_STROKE_WIDTH}
                  />
                }
              >
                Review
              </Button>
            </Anchor>
          </Group>
        </GridCol>
      </Grid>
    </Card>
  );
}
