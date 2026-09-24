'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { StepperQuizIntro } from '@repo/ui';
import {
  Alert,
  Box,
  Button,
  Card,
  CardSection,
  Divider,
  Grid,
  GridCol,
  Group,
  List,
  ListItem,
  Loader,
  NumberFormatter,
  Pagination,
  Paper,
  Radio,
  RadioGroup,
  Skeleton,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { ICON_SIZE, ICON_STROKE_WIDTH, SECTION_SPACING } from '@repo/constants';
import { useStoreQuiz } from '@repo/store';
import { usePaginate, useScrollArea, useTimer } from '@repo/hooks';
import { TimerDirection, Variant } from '@repo/types';
import { prependZeros } from '@repo/utils';
import { useStoreQuestion } from '@repo/store';
import { QuestionGet } from '@repo/types';
import { useStoreOption } from '@repo/store';
import { useStoreAnswer } from '@repo/store';
import { OptionGet } from '@repo/types';
import { IconDoorExit, IconInfoCircle } from '@tabler/icons-react';
import { useAnswerActions } from '@repo/store';
import { useOptionActions } from '@repo/store';
import { useAttemptActions } from '@repo/store';
import { useStoreAttempt } from '@repo/store';
import { Status } from '@repo/types';
import { useNotification } from '@repo/hooks';
import { ModalConfirm } from '@repo/ui';
import { useQuizActions } from '@repo/store';
import { useRouter } from 'next/navigation';
import { LayoutIntroSection } from '@repo/ui';
import { shuffleArray } from '@repo/utils';
import { useStoreQuizQuestion } from '@repo/store';
import { useStoreAppShell } from '@repo/store';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';

export default function Attempt({ props }: { props: { quizId: string; attemptId: string } }) {
  const desktop = useMediaQuery('(min-width: 62em)');

  const { scrollToTop } = useScrollArea();

  const router = useRouter();
  const [intro, setIntro] = useState(true);

  const { showNotification } = useNotification();

  const navbarChild = useStoreAppShell((s) => s.appshell?.child.navbar);
  const toggleNavbarChild = useStoreAppShell((s) => s.toggleNavbarChild);

  const quizzes = useStoreQuiz((s) => s.quizzes);
  const quiz = quizzes?.find((qi) => qi.id == props.quizId);
  const questions = useStoreQuestion((s) => s.questions);
  const quizQuestions = useStoreQuizQuestion((s) => s.quizQuestions);

  // 1. Filter out the bridge records for this quiz
  const quizQuestionsQuiz = quizQuestions?.filter((qqqi) => qqqi.quizId == quiz?.id);

  const attempts = useStoreAttempt((s) => s.attempts);
  const attempt = attempts?.find((ai) => ai.id == props.attemptId);
  const answers = useStoreAnswer((s) => s.answers);
  const attemptAnswers = answers?.filter((ai) => ai.attemptId == props.attemptId);
  const { attemptUpdate } = useAttemptActions();

  const handleSubmit = () => {
    if (!attemptAnswers?.length || !quizQuestionsQuiz) return;

    if (attemptAnswers.length < quizQuestionsQuiz.length) {
      showNotification({
        title: 'Quiz Incomplete',
        desc: 'Please answer all questions.',
        variant: Variant.FAILED,
      });
      return;
    }

    if (!attempt) return;

    attemptUpdate({ ...attempt, status: Status.COMPLETE });
    router.replace(`/quizzes/${props.quizId}/${props.attemptId}/complete`);
  };

  const handleQuit = () => {
    if (!attempt) return;

    attemptUpdate({ ...attempt, status: Status.ABANDONED });

    if (desktop) {
      if (!navbarChild) {
        toggleNavbarChild();
      }
    }

    router.replace(`/dashboard`);
  };

  const loading = quizzes === undefined || questions === undefined || quizQuestions === undefined;

  const [shuffledQuestions, setShuffledQuestions] = useState<QuestionGet[]>([]);
  const isShuffled = useRef(false);

  useEffect(() => {
    // 1. Wait until stores have actually loaded data
    if (!questions?.length || !quizQuestionsQuiz?.length) return;

    // 2. Prevent re-shuffling if we already shuffled for this session
    if (isShuffled.current) return;

    const questionMap = new Map(questions.map((q) => [q.id, q]));

    const mappedQuestions = quizQuestionsQuiz
      .map((qqqi) => questionMap.get(qqqi.questionId))
      .filter((q): q is QuestionGet => Boolean(q));

    setShuffledQuestions(shuffleArray(mappedQuestions));
    isShuffled.current = true;
  }, [questions, quizQuestionsQuiz]);

  const { items, totalPages, activePage, setActivePage } = usePaginate(shuffledQuestions, DIVISOR);

  const handlePageChange = (page: number) => {
    setActivePage(page);
    scrollToTop({ top: 0, behavior: 'smooth' });
  };

  return attempt?.status == Status.INTRO && intro ? (
    <StepperQuizIntro props={{ quizId: props.quizId, setIntro, attemptId: props.attemptId }} />
  ) : (
    <Grid gap={'xl'}>
      <GridCol
        span={{
          base: 12,
          md: navbarChild ? 12 : 8,
          lg: navbarChild ? 7 : 8,
          xl: navbarChild ? 8 : 8.5,
        }}
        order={{ base: 2, md: 1 }}
      >
        <Stack gap={'xl'}>
          <Group justify="space-between" align="end">
            <LayoutIntroSection
              props={{
                title: `${quiz?.title || '--------'} Quiz`,
                desc: `You are currently attempting the ${quiz?.title || '--------'} quiz.`,
              }}
              options={{ alignment: 'start' }}
            />
          </Group>

          {/* <Divider variant="dashed" /> */}

          <Stack gap={0} pr={{ md: 'xl' }}>
            {loading ? (
              <Stack mih={'100vh'} mt={'xl'}>
                <Loader />

                <Text c={'dimmed'} fz={'sm'}>
                  Loading quiz questions.
                </Text>
              </Stack>
            ) : (
              items.map((qqi, i) => (
                <div key={`${qqi.id}-${i}`}>
                  {i > 0 && <Divider my={'xl'} />}
                  <CardQuestion props={{ question: qqi, attemptId: props.attemptId }} />
                </div>
              ))
            )}
          </Stack>

          <Divider />

          <Group>
            <Pagination
              size={'sm'}
              value={activePage}
              onChange={handlePageChange}
              total={totalPages}
            />
          </Group>

          <Group justify="end">
            <Tooltip
              label={!attemptAnswers?.length ? 'No questions answered yet.' : 'Submit answers.'}
            >
              <div>
                <ModalConfirm
                  props={{
                    title: 'Submit Answers',
                    desc: "Are you sure you want to proceed? It's recommended to double check your answers before confirming.",
                    onConfirm: handleSubmit,
                  }}
                >
                  <Button disabled={!attemptAnswers?.length}>Submit</Button>
                </ModalConfirm>
              </div>
            </Tooltip>
          </Group>
        </Stack>
      </GridCol>

      <GridCol
        span={{ base: 12, md: 4, lg: navbarChild ? 5 : 4, xl: navbarChild ? 4 : 3.5 }}
        order={{ base: 1, md: 2 }}
        display={{ md: navbarChild ? 'none' : undefined, lg: 'block' }}
      >
        <Box pos={!desktop ? undefined : 'sticky'} top={SECTION_SPACING}>
          <Stack>
            <Alert
              title="Rules Reminder"
              color="blue"
              variant="light"
              icon={<IconInfoCircle size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
            >
              <Stack gap={5} fz={'sm'}>
                <Text inherit>
                  Do <strong>not</strong> try to: leave ths tab, disconnect from the network, remain
                  idle for more than a few minutes.
                </Text>

                <Text inherit>
                  As any of these actions will be <strong>watched for</strong> and, if detected,
                  will be <strong>recorded alongside your results</strong>.
                </Text>
              </Stack>
            </Alert>

            <Card withBorder bg={'var(--mantine-color-body)'}>
              <Stack gap={'xs'}>
                <Group justify="space-between">
                  <Text inherit fz={'sm'}>
                    Course:
                  </Text>
                  <Text inherit ta={'end'} fw={500}>
                    RPL
                  </Text>
                </Group>

                {/* <Divider />

                <Group justify="space-between">
                  <Text inherit fz={'sm'}>
                    Elapsed Time:
                  </Text>

                  <Text inherit ta={'end'} fw={500}>
                    {prependZeros(time?.minutes || 0, 2)}:
                    {prependZeros(time?.seconds || 0, 2)}
                  </Text>
                </Group> */}

                <Divider />

                <Group justify="space-between">
                  <Text inherit fz={'sm'}>
                    % Complete:
                  </Text>

                  {loading ? (
                    <Skeleton h={24.8} w={65} />
                  ) : (
                    <Text inherit ta={'end'} fw={500}>
                      <NumberFormatter value={attemptAnswers?.length || 0} />/
                      <NumberFormatter value={quizQuestionsQuiz?.length || 0} /> (
                      <NumberFormatter
                        value={Math.floor(
                          ((attemptAnswers?.length || 0) / (quizQuestionsQuiz?.length || 0)) * 100,
                        )}
                      />
                      %)
                    </Text>
                  )}
                </Group>
              </Stack>
            </Card>

            <Group grow>
              <Tooltip label={'Abandon quiz and all your progress.'}>
                <div>
                  <ModalConfirm
                    props={{
                      title: 'Quit Quiz',
                      desc: 'Are you sure you want to abandon the quiz? This action is irreversible.',
                      onConfirm: handleQuit,
                    }}
                  >
                    <Button
                      fullWidth
                      color="red"
                      variant="light"
                      leftSection={<IconDoorExit size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
                    >
                      Quit
                    </Button>
                  </ModalConfirm>
                </div>
              </Tooltip>
            </Group>
          </Stack>
        </Box>

        <Divider hiddenFrom="md" mt={SECTION_SPACING} mb={SECTION_SPACING / 2} />
      </GridCol>
    </Grid>
  );
}

const DIVISOR = 10;

function CardQuestion({ props }: { props: { question: QuestionGet; attemptId: string } }) {
  // Extract options from store
  const options = useStoreOption((s) => s.options);
  const answers = useStoreAnswer((s) => s.answers);
  const { answerCreate, answerUpdate } = useAnswerActions();
  const attempts = useStoreAttempt((s) => s.attempts);
  const attempt = attempts?.find((ai) => ai.id == props.attemptId);
  const { attemptUpdate } = useAttemptActions();

  // Derive and shuffle options directly without state or useEffect
  const questionOptions = useMemo(() => {
    if (!options) return [];
    const filtered = options.filter((op) => op.questionId === props.question.id);
    return shuffleArray(filtered);
  }, [options, props.question.id]);

  const handleOptionSelect = (option: OptionGet) => {
    const answer = answers?.find(
      (ai) => ai.questionId == props.question.id && ai.attemptId == props.attemptId,
    );

    if (!answer) {
      answerCreate({
        attemptId: props.attemptId,
        questionId: props.question.id,
        optionId: option.id,
      });
    } else {
      answerUpdate({ ...answer, optionId: option.id });
    }

    if (attempt) {
      if (attempt.status == Status.INTRO) {
        attemptUpdate({ ...attempt, status: Status.IN_PROGRESS });
      }
    }
  };

  return (
    <Card bg="transparent" p={{ base: 0, xs: 'md', md: 'xl' }} radius={0}>
      <Stack>
        <Group>
          <Title order={2} fz={'md'} fw={'normal'} c={'var(--mantine-color-text)'}>
            {props.question.content}
          </Title>
        </Group>

        <Stack gap={'xs'} pl={'md'}>
          <RadioGroup
            name={props.question.content}
            aria-label={props.question.content}
            value={
              answers?.find(
                (ai) => ai.questionId == props.question.id && ai.attemptId == props.attemptId,
              )?.optionId
            }
          >
            <Stack mt="xs">
              {questionOptions.map((qoi) => (
                <Radio
                  key={qoi.id}
                  value={qoi.id}
                  label={qoi.content}
                  onClick={() => handleOptionSelect(qoi)}
                />
              ))}
            </Stack>
          </RadioGroup>
        </Stack>
      </Stack>
    </Card>
  );
}
