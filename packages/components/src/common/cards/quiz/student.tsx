'use client';

import {
  Anchor,
  Card,
  Group,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import { QuizGet } from '@repo/types/models/quiz';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

export default function Student({ props }: { props: { quiz: QuizGet } }) {
  return (
    <Card
      bg={
        'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-9))'
      }
      withBorder
      p={{ base: 'md', md: 'lg' }}
    >
      <Stack>
        <Group>
          <Tooltip
            label={props.quiz.title}
            position="top-start"
            arrowOffset={16}
          >
            <Title order={2} fz={'md'} lineClamp={1}>
              {props.quiz.title}
            </Title>
          </Tooltip>
        </Group>

        <Group fz={'sm'} c={'dimmed'}>
          <Text inherit lineClamp={3}>
            {props.quiz.description}
          </Text>
        </Group>

        <Group mt={'md'}>
          <Anchor
            component={Link}
            href={`/quizzes/${props.quiz.id}`}
            underline="hover"
            c={
              'light-dark(var(--mantine-color-text), var(--mantine-color-dark-0))'
            }
          >
            <Group gap={5}>
              <Text inherit fz={'sm'} lineClamp={3}>
                Learn more
              </Text>

              <IconArrowRight size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
            </Group>
          </Anchor>
        </Group>
      </Stack>
    </Card>
  );
}
