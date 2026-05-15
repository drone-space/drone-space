'use client';

import React, { useEffect } from 'react';
import {
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
  Title,
} from '@mantine/core';
import HeaderAppContent from '@/components/layout/headers/app-content';
import { SECTION_SPACING } from '@repo/constants/sizes';
import { useRouter } from 'next/navigation';
import NextLink from '@repo/components/common/anchor/next-link';
import { useAttemptActions } from '@repo/hooks/actions/attempt';
import { useStoreAppShell } from '@repo/libraries/zustand/stores/shell';
import { QuestionGet } from '@repo/types/models/question';
import { useQuizStats } from '@repo/hooks/quiz';

export default function One({ props }: { props: { quizId: string } }) {
  const router = useRouter();

  const { metaStats, quizzes, quiz, quizQuestions } = useQuizStats({
    quizId: props.quizId,
  });

  const { attemptCreate } = useAttemptActions();
  const navbarChild = useStoreAppShell((s) => s.appshell?.child.navbar);
  const toggleNavbarChild = useStoreAppShell((s) => s.toggleNavbarChild);

  useEffect(() => {
    if (quizzes === undefined) return;
    if (quizzes === null) return;
    if (!quiz) router.replace('/not-found');
  }, [quizzes]);

  return (
    <div>
      <HeaderAppContent props={{ title: quiz?.title }} />

      <Grid gutter={'xl'}>
        <GridCol span={{ base: 12, md: 8 }}>
          <Stack gap={'xl'} pr={{ md: 'xl' }}>
            <Group maw={{ md: '80%' }}>
              <Text>{quiz?.description}</Text>
            </Group>

            <Stack gap={'md'}>
              <Title order={3} fz={'md'} fw={500}>
                Quiz Preview
              </Title>

              {quizQuestions === undefined ? (
                <Loader />
              ) : !quizQuestions.length ? (
                <Text>No questions found for this quiz.</Text>
              ) : (
                quizQuestions
                  .slice(0, 5)
                  .map((qi) => (
                    <CardQuestion key={qi.id} props={{ question: qi }} />
                  ))
              )}
            </Stack>
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
                      <NumberFormatter value={metaStats.totalQuesions} />
                    </Text>
                  </Group>

                  <Divider />

                  <Group justify="space-between">
                    <Text inherit fz={'sm'}>
                      Attempts:
                    </Text>
                    <Text inherit ta={'end'} fw={500}>
                      <NumberFormatter value={metaStats.timesAttempted} />
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
                          <NumberFormatter value={metaStats.timesPassed} />
                        </Text>{' '}
                        /{' '}
                        <Text component="span" inherit fw={500} c={'red.6'}>
                          <NumberFormatter value={metaStats.timesFailed} />
                        </Text>
                      </Text>

                      {!metaStats.successRate ? null : (
                        <Text inherit fz={'sm'} c={'dimmed'}>
                          (Success rate:{' '}
                          <Text component="span" inherit fw={500}>
                            {metaStats.successRate}%
                          </Text>
                          )
                        </Text>
                      )}
                    </Stack>
                  </Group>
                </Stack>
              </CardSection>
            </Card>

            <Group grow>
              <Button
                fullWidth
                size="xs"
                onClick={() => {
                  const newAttempt = attemptCreate({ quiz_id: props.quizId });

                  if (newAttempt) {
                    if (navbarChild) toggleNavbarChild();
                    router.push(`/quizzes/${props.quizId}/${newAttempt.id}`);
                  }
                }}
              >
                Start Quiz
              </Button>
            </Group>
          </Stack>
        </GridCol>
      </Grid>
    </div>
  );
}

function CardQuestion({ props }: { props: { question: QuestionGet } }) {
  return (
    <Card withBorder>
      <CardSection p={'xs'}>
        <Text>{props.question.content}</Text>
      </CardSection>
    </Card>
  );
}
