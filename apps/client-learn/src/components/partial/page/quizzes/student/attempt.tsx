'use client';

import React, { useEffect, useMemo, useState } from 'react';
import StepperQuizIntro from '@repo/components/common/stepper/quiz/intro';
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
  Paper,
  Radio,
  RadioGroup,
  Skeleton,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import { useTimer } from '@repo/hooks/timer';
import { TimerDirection, Variant } from '@repo/types/enums';
import { prependZeros } from '@repo/utilities/number';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import { QuestionGet } from '@repo/types/models/question';
import { useStoreOption } from '@repo/libraries/zustand/stores/option';
import { useStoreAnswer } from '@repo/libraries/zustand/stores/answer';
import { OptionGet } from '@repo/types/models/option';
import { IconDoorExit, IconInfoCircle } from '@tabler/icons-react';
import { useAnswerActions } from '@repo/hooks/actions/answer';
import { useOptionActions } from '@repo/hooks/actions/option';
import { useAttemptActions } from '@repo/hooks/actions/attempt';
import { useStoreAttempt } from '@repo/libraries/zustand/stores/attempt';
import { Status } from '@repo/types/models/enums';
import { useNotification } from '@repo/hooks/notification';
import ModalConfirm from '@repo/components/common/modals/confirm';
import { useQuizActions } from '@repo/hooks/actions/quiz';
import { useRouter } from 'next/navigation';
import IntroSection from '@repo/components/layout/intros/section';
import { shuffleArray } from '@repo/utilities/array';
import { useStoreQuizQuestion } from '@repo/libraries/zustand/stores/quiz-question';
import { useStoreAppShell } from '@repo/libraries/zustand/stores/shell';

export default function Attempt({
  props,
}: {
  props: { quizId: string; attemptId: string };
}) {
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
  const quizQuestionsQuiz = quizQuestions?.filter(
    (qqqi) => qqqi.quiz_id == quiz?.id
  );

  const attempts = useStoreAttempt((s) => s.attempts);
  const attempt = attempts?.find((ai) => ai.id == props.attemptId);
  const answers = useStoreAnswer((s) => s.answers);
  const attemptAnswers = answers?.filter(
    (ai) => ai.attempt_id == props.attemptId
  );
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

    if (!navbarChild) {
      toggleNavbarChild();
    }

    router.replace(`/dashboard`);
  };

  const loading =
    quizzes === undefined ||
    questions === undefined ||
    quizQuestions === undefined;

  const [shuffledQuestions, setShuffledQuestions] = useState<QuestionGet[]>([]);

  useEffect(() => {
    if (quizzes === undefined || questions === undefined || !quizQuestionsQuiz)
      return;

    if (!shuffledQuestions.length) {
      // 🔥 PERFORMANCE FIX: Create a lightning-fast key-value lookup map
      // O(M) operation to build the map once
      const questionMap = new Map(questions?.map((q) => [q.id, q]));

      // O(N) operation to map the questions directly by key
      const mappedQuestions = quizQuestionsQuiz
        .map((qqqi) => questionMap.get(qqqi.question_id))
        .filter((q): q is QuestionGet => !!q);

      setShuffledQuestions(shuffleArray(mappedQuestions));
    }
  }, [quizzes, questions, quizQuestionsQuiz]); // Added proper dependencies

  return attempt?.status == Status.INTRO && intro ? (
    <StepperQuizIntro
      props={{ quizId: props.quizId, setIntro, attemptId: props.attemptId }}
    />
  ) : (
    <Grid gutter={'xl'}>
      <GridCol span={{ base: 12, md: 8 }}>
        <Stack gap={'xl'}>
          <Group justify="space-between" align="end">
            <IntroSection
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
              shuffledQuestions.map((qqi, i) => (
                <div key={`${qqi.id}-${i}`}>
                  {i > 0 && <Divider my={'xl'} />}
                  <CardQuestion
                    props={{ question: qqi, attemptId: props.attemptId }}
                  />
                </div>
              ))
            )}
          </Stack>

          <Divider />

          <Group>
            <Tooltip
              label={
                !attemptAnswers?.length
                  ? 'No questions answered yet.'
                  : 'Submit answers.'
              }
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

      <GridCol span={{ base: 12, md: 4 }}>
        <Box pos={'sticky'} top={SECTION_SPACING}>
          <Stack>
            <Alert
              title="Rules Reminder"
              color="blue.6"
              variant="light"
              icon={
                <IconInfoCircle size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              }
            >
              <Stack gap={5} fz={'sm'}>
                <Text inherit>
                  Do <strong>not</strong> try to: leave ths tab, disconnect from
                  the network, remain idle for more than a few minutes.
                </Text>

                <Text inherit>
                  As any of these actions will be <strong>watched for</strong>{' '}
                  and, if detected, will be{' '}
                  <strong>recorded alongside your results</strong>.
                </Text>
              </Stack>
            </Alert>

            <Card
              withBorder
              bg={
                'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-9))'
              }
            >
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
                      <NumberFormatter
                        value={quizQuestionsQuiz?.length || 0}
                      />{' '}
                      (
                      <NumberFormatter
                        value={Math.floor(
                          ((attemptAnswers?.length || 0) /
                            (quizQuestionsQuiz?.length || 0)) *
                            100
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
                      color="red.6"
                      variant="light"
                      leftSection={
                        <IconDoorExit
                          size={ICON_SIZE}
                          stroke={ICON_STROKE_WIDTH}
                        />
                      }
                    >
                      Quit
                    </Button>
                  </ModalConfirm>
                </div>
              </Tooltip>
            </Group>
          </Stack>
        </Box>
      </GridCol>
    </Grid>
  );
}

function CardQuestion({
  props,
}: {
  props: { question: QuestionGet; attemptId: string };
}) {
  const options = useStoreOption((s) => s.options);
  const questionOptions = options?.filter(
    (op) => op.question_id == props.question.id
  );
  const answers = useStoreAnswer((s) => s.answers);
  const { answerCreate, answerUpdate } = useAnswerActions();
  const attempts = useStoreAttempt((s) => s.attempts);
  const attempt = attempts?.find((ai) => ai.id == props.attemptId);
  const { attemptUpdate } = useAttemptActions();

  const [shuffledOptions, setShuffledOptions] = useState<OptionGet[]>([]);

  useEffect(() => {
    if (options === undefined) return;
    if (answers === undefined) return;
    if (attempts === undefined) return;

    if (questionOptions && !shuffledOptions?.length) {
      setShuffledOptions(shuffleArray(questionOptions || []));
    }
  }, [options, answers, attempts]);

  const handleOptionSelect = (option: OptionGet) => {
    const answer = answers?.find(
      (ai) =>
        ai.question_id == props.question.id && ai.attempt_id == props.attemptId
    );

    if (!answer) {
      answerCreate({
        attempt_id: props.attemptId,
        question_id: props.question.id,
        option_id: option.id,
      });
    } else {
      answerUpdate({ ...answer, option_id: option.id });
    }

    if (attempt) {
      if (attempt.status == Status.INTRO) {
        attemptUpdate({ ...attempt, status: Status.IN_PROGRESS });
      }
    }
  };

  return (
    <Card bg="transparent" p={{ base: 'md', md: 'xl' }}>
      <Stack>
        <Group>
          <Title
            order={2}
            fz={'md'}
            fw={'normal'}
            c={'var(--mantine-color-text)'}
          >
            {props.question.content}
          </Title>
        </Group>

        <Stack gap={'xs'} pl={'md'}>
          <RadioGroup
            name={props.question.content}
            aria-label={props.question.content}
            value={
              answers?.find(
                (ai) =>
                  ai.question_id == props.question.id &&
                  ai.attempt_id == props.attemptId
              )?.option_id
            }
          >
            <Stack mt="xs">
              {shuffledOptions.map((qoi) => (
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
