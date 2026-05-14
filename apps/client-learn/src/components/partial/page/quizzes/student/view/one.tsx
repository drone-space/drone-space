'use client';

import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardSection,
  Divider,
  Grid,
  GridCol,
  Group,
  Loader,
  NumberFormatter,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import HeaderAppContent from '@/components/layout/headers/app-content';
import CardQuizStudent from '@repo/components/common/cards/quiz/student';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { IconX } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import NextLink from '@repo/components/common/anchor/next-link';

export default function One({ props }: { props: { quizId: string } }) {
  const router = useRouter();
  const quizzes = useStoreQuiz((s) => s.quizzes);
  const quiz = quizzes?.find((qi) => qi.id == props.quizId);
  const questions = useStoreQuestion((s) => s.questions);
  const quizQuestions = questions?.filter((qi) => qi.quiz_id == quiz?.id);

  useEffect(() => {
    if (quizzes === undefined) return;
    if (quizzes === null) return;
    if (!quiz) router.replace('/not-found');
  }, [quizzes]);

  const attempts = 123;
  const passes = 78;

  return (
    <div>
      <HeaderAppContent props={{ title: quiz?.title }} />

      <Grid gutter={'xl'}>
        <GridCol span={{ base: 12, md: 8 }}>
          <Stack gap={'xl'}>
            <Group maw={{ md: '80%' }}>
              <Text>{quiz?.description}</Text>
            </Group>

            <div>preview questions go here (3-5)</div>
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, md: 4 }}>
          <Stack pos={'sticky'} top={SECTION_SPACING}>
            <Card
              bg={
                'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-9))'
              }
              withBorder
            >
              <CardSection
                p={'md'}
                bg={
                  'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-8))'
                }
              >
                <Group>
                  <Title order={2} fz={'lg'}>
                    Quiz Details
                  </Title>
                </Group>
              </CardSection>

              <CardSection p={'md'}>
                <Stack gap={'xs'}>
                  <Group justify="space-between">
                    <Text inherit fz={'sm'}>
                      Course:
                    </Text>
                    <Text inherit ta={'end'} fw={500}>
                      RPL
                    </Text>
                  </Group>

                  <Divider />

                  <Group justify="space-between">
                    <Text inherit fz={'sm'}>
                      No. of Questions:
                    </Text>
                    <Text inherit ta={'end'} fw={500}>
                      <NumberFormatter value={quizQuestions?.length} />
                    </Text>
                  </Group>

                  <Divider />

                  <Group justify="space-between">
                    <Text inherit fz={'sm'}>
                      Attempts:
                    </Text>
                    <Text inherit ta={'end'} fw={500}>
                      <NumberFormatter value={attempts} />
                    </Text>
                  </Group>

                  <Divider />

                  <Group justify="space-between" align="start">
                    <Text inherit fz={'sm'}>
                      Passes/Fails:
                    </Text>

                    <Stack gap={0} align="end" ta={'end'}>
                      <Text inherit>
                        <Text component="span" inherit fw={500} c={'green.6'}>
                          <NumberFormatter value={passes} />
                        </Text>
                        /
                        <Text component="span" inherit fw={500} c={'red.6'}>
                          <NumberFormatter value={attempts - passes} />
                        </Text>
                      </Text>

                      <Text inherit fz={'sm'} c={'dimmed'}>
                        (Success rate:{' '}
                        <Text component="span" inherit fw={500}>
                          {Math.floor((passes / attempts) * 100)}%
                        </Text>
                        )
                      </Text>
                    </Stack>
                  </Group>
                </Stack>
              </CardSection>
            </Card>

            <Group grow>
              <NextLink href={`/quizzes/${props.quizId}/attempt`}>
                <Button fullWidth size="xs">
                  Start Quiz
                </Button>
              </NextLink>

              <NextLink href={`/attempts/${props.quizId}`}>
                <Button fullWidth size="xs" color="dark" variant="light">
                  View Past Results
                </Button>
              </NextLink>
            </Group>
          </Stack>
        </GridCol>
      </Grid>
    </div>
  );
}
