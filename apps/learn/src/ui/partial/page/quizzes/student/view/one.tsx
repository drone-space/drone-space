'use client';

import React, { useEffect } from 'react';
import {
  Alert,
  Button,
  Card,
  CardSection,
  Divider,
  Grid,
  GridCol,
  Group,
  Loader,
  NumberFormatter,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import HeaderAppContent from '@learn/ui/layout/headers/app-content';
import { ICON_SIZE, ICON_STROKE_WIDTH, SECTION_SPACING } from '@repo/constants';
import { useRouter } from 'next/navigation';
import { useAttemptActions, useStoreAttempt, useStoreSession } from '@repo/store';
import { useStoreAppShell } from '@repo/store';
import { AttemptGet, QuestionGet, Status, Variant } from '@repo/types';
import { useNotification, useQuizStats } from '@repo/hooks';
import { IconAlertTriangle, IconInfoCircle, IconSchool } from '@tabler/icons-react';
import { getCurrentWeekRange } from '@repo/utils';

export default function One({ props }: { props: { quizId: string } }) {
  const router = useRouter();
  const attempts = useStoreAttempt((s) => s.attempts);
  const session = useStoreSession((s) => s.session);
  const { showNotification } = useNotification();

  const { metaStats, quizzes, quiz, quizQuestions, quizQuestionsQuizQuestions } = useQuizStats({
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

  const userAttempts = attempts?.filter((ai) => ai.profileId == session?.id);
  const quizAttempts = userAttempts?.filter((ai) => ai.quizId == props.quizId);
  const countedAttempts = quizAttempts?.filter((qi) => {
    const isInProgress = qi.status == Status.IN_PROGRESS;
    const isComplete = qi.status == Status.COMPLETE;
    const isCanceled = qi.status == Status.ABANDONED;
    return isInProgress || isComplete || isCanceled;
  });
  const userAttemptsInProgress = quizAttempts?.filter((qi) => qi.status == Status.IN_PROGRESS);

  const weeklyLimit = hasExceededWeeklyLimit(countedAttempts || []);

  const handleStartResume = () => {
    if (!session) return;
    if (weeklyLimit.hasExceeded) {
      showNotification({
        variant: Variant.FAILED,
        title: 'Attempt Limit Reached',
        desc: `Quizes can only be attempted a maximum number of ${MAXIMUM_ATTEMPTS} times a week.`,
      });

      return;
    }

    let resolvedAttempt: AttemptGet | null = null;

    if (userAttemptsInProgress?.length) {
      // resume existing
      resolvedAttempt = userAttemptsInProgress[0];
    } else {
      // create new
      const newAttempt = attemptCreate({ quizId: props.quizId });
      if (newAttempt) resolvedAttempt = newAttempt;
    }

    if (resolvedAttempt) {
      // close nav if open
      if (navbarChild) toggleNavbarChild();
      // route to quiz
      router.push(`/quizzes/${props.quizId}/${resolvedAttempt.id}`);
    }
  };

  return (
    <div>
      <HeaderAppContent props={{ title: quiz?.title }} />

      <Grid>
        <GridCol span={{ base: 12, md: navbarChild ? 7 : 8, lg: navbarChild ? 7.5 : 8.5 }}>
          <Stack gap={'xl'} pr={{ md: 'xl' }}>
            {quizzes === undefined ? (
              <Stack gap={5} mih={74.4}>
                <Skeleton h={16} />
                <Skeleton h={16} w={'70%'} />
                <Skeleton h={16} w={'50%'} />
              </Stack>
            ) : (
              <Group>
                <Text>{quiz?.description}</Text>
              </Group>
            )}

            <Alert
              color="yellow"
              icon={<IconAlertTriangle size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
              title="Note"
            >
              This quiz can be attempted a maximum number of{' '}
              <strong style={{ fontWeight: 500 }}>{MAXIMUM_ATTEMPTS} times a week</strong>.
            </Alert>

            <Stack gap={'md'}>
              <Title order={3} fz={'md'} fw={500}>
                Preview Questions
              </Title>

              {quizQuestions === undefined ? (
                <Loader />
              ) : !quizQuestionsQuizQuestions.length ? (
                <Text>No questions found for this quiz.</Text>
              ) : (
                quizQuestionsQuizQuestions
                  .slice(0, 4)
                  .map((qqqqi) => <CardQuestion key={qqqqi.id} props={{ question: qqqqi }} />)
              )}
            </Stack>
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, md: navbarChild ? 5 : 4, lg: navbarChild ? 4.5 : 3.5 }}>
          <Stack pos={'sticky'} top={SECTION_SPACING}>
            <Card bg={'var(--mantine-color-body)'} withBorder>
              <CardSection
                p={'md'}
                bg={'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-8))'}
              >
                <Group>
                  <Title order={2} fz={'lg'}>
                    Quiz Details
                  </Title>
                </Group>
              </CardSection>

              <CardSection>
                <Divider />
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
                      <NumberFormatter value={metaStats.totalQuestions} />
                    </Text>
                  </Group>

                  <Divider />

                  <div>
                    <Text inherit fz={'sm'}>
                      Attempts:
                    </Text>

                    <Group justify="space-between" fz={'xs'} c={'dimmed'}>
                      <Text inherit>By you:</Text>
                      <Text inherit ta={'end'} fw={500} fz={'sm'}>
                        <NumberFormatter value={metaStats.timesAttempted} />
                      </Text>
                    </Group>

                    <Group justify="space-between" fz={'xs'} c={'dimmed'}>
                      <Text inherit>Everyone:</Text>
                      <Text inherit ta={'end'} fw={500} fz={'sm'}>
                        <NumberFormatter value={metaStats.timesAttemptedAll} />
                      </Text>
                    </Group>
                  </div>

                  <Alert
                    icon={<IconInfoCircle size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
                    color="blue"
                    p={'xs'}
                  >
                    <strong>{MAXIMUM_ATTEMPTS - weeklyLimit.attemptsThisWeek}</strong> attempts
                    remaining this week.
                  </Alert>

                  <Divider />

                  <div>
                    <Text inherit fz={'sm'}>
                      Passes/Fails:
                    </Text>

                    <Group justify="space-between" align="start" fz={'xs'} c={'dimmed'}>
                      <Text inherit>Everyone:</Text>

                      <Stack gap={0} align="end" ta={'end'}>
                        <Text inherit fz={'sm'}>
                          <Text component="span" inherit fw={500} c={'green.6'}>
                            <NumberFormatter value={metaStats.timesPassedAll} />
                          </Text>{' '}
                          /{' '}
                          <Text component="span" inherit fw={500} c={'red.6'}>
                            <NumberFormatter value={metaStats.timesFailedAll} />
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
                  </div>
                </Stack>
              </CardSection>
            </Card>

            <Group grow>
              <Button
                fullWidth
                leftSection={<IconSchool size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
                onClick={handleStartResume}
              >
                {userAttemptsInProgress?.length ? 'Resume' : 'Start'} Quiz
              </Button>
            </Group>
          </Stack>
        </GridCol>
      </Grid>
    </div>
  );
}

const MAXIMUM_ATTEMPTS = 3;

function CardQuestion({ props }: { props: { question: QuestionGet } }) {
  return (
    <Card withBorder>
      <CardSection p={'xs'}>
        <Text>{props.question.content}</Text>
      </CardSection>
    </Card>
  );
}

const hasExceededWeeklyLimit = (attempts: AttemptGet[], maxAttempts = MAXIMUM_ATTEMPTS) => {
  const { monday, sunday } = getCurrentWeekRange();

  // Filter attempts for this student, this quiz, and within the current week
  const weeklyAttempts = attempts.filter((attempt) => {
    const attemptDate = new Date(attempt.createdAt);
    return attemptDate >= monday && attemptDate <= sunday;
  });

  return {
    hasExceeded: weeklyAttempts.length >= maxAttempts,
    attemptsThisWeek: weeklyAttempts.length,
  };
};
