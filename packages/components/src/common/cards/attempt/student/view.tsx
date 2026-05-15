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

export default function View({ props }: { props: { attempt: AttemptGet } }) {
  const { completeStats, quizzes, quiz } = useQuizStats({
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
            <Group>
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
          <Group justify={'end'}>
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
