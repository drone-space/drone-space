'use client';

import React, { useEffect, useState } from 'react';
import FormQuiz from '@repo/components/form/quiz';
import {
  ActionIcon,
  Alert,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Fieldset,
  Grid,
  GridCol,
  Group,
  List,
  ListItem,
  Loader,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Tooltip,
} from '@mantine/core';
import HeaderAppContent from '@/components/layout/headers/app-content';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import FormQuestion from '@repo/components/form/question';
import FormOption from '@repo/components/form/option';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import {
  IconAlertTriangle,
  IconEdit,
  IconTextPlus,
  IconTrash,
  IconX,
} from '@tabler/icons-react';
import { QuestionGet } from '@repo/types/models/question';
import { useStoreOption } from '@repo/libraries/zustand/stores/option';
import { OptionGet } from '@repo/types/models/option';
import { sortArray } from '@repo/utilities/array';
import { Order } from '@repo/types/enums';
import { useQuestionActions } from '@repo/hooks/actions/question';
import ModalConfirm from '@repo/components/common/modals/confirm';
import { useOptionActions } from '@repo/hooks/actions/option';
import { useRouter } from 'next/navigation';
import { useStoreQuizQuestion } from '@repo/libraries/zustand/stores/quiz-question';

type EditProps = { content: string; options: string };

export default function Edit({ props }: { props: { quizId: string } }) {
  const router = useRouter();

  const quizzes = useStoreQuiz((s) => s.quizzes);
  const quiz = quizzes?.find((qi) => qi.id == props.quizId);

  useEffect(() => {
    if (quizzes === undefined) return;
    if (quizzes === null) return;
    if (!quiz) router.replace('/not-found');
  }, [quizzes]);

  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState<EditProps>({
    content: '',
    options: '',
  });
  const questions = useStoreQuestion((s) => s.questions);
  const quizQuestions = useStoreQuizQuestion((s) => s.quizQuestions);
  const quizQuestionsQuiz = quizQuestions?.filter(
    (qqqi) => qqqi.quiz_id == props.quizId
  );

  return (
    <Box mb={SECTION_SPACING}>
      <HeaderAppContent />

      <Grid>
        <GridCol span={{ base: 12, xl: 5 }} order={{ xl: 2 }}>
          <Fieldset
            legend="Quiz Details"
            style={{ position: 'sticky', top: 'var(--mantine-spacing-xl)' }}
          >
            <FormQuiz props={{ quizId: props.quizId }} />
          </Fieldset>
        </GridCol>

        <GridCol span={{ base: 12, xl: 7 }} order={{ xl: 1 }}>
          <Stack>
            <Fieldset legend="Quiz Questions" p={'md'}>
              <Stack gap={'md'}>
                <Box mih={140}>
                  {quizQuestions === undefined ? (
                    <Stack align="center" ta={'center'} py={'xl'} fz={'sm'}>
                      <Loader />
                      <Text inherit c={'dimmed'}>
                        Fetching quiz questions
                      </Text>
                    </Stack>
                  ) : !quizQuestionsQuiz?.length ? (
                    <Stack align="center" ta={'center'} py={'xl'} fz={'sm'}>
                      <ThemeIcon size={ICON_WRAPPER_SIZE} variant="light">
                        <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                      </ThemeIcon>
                      <Text inherit c={'dimmed'}>
                        Quiz has no questions
                      </Text>
                    </Stack>
                  ) : (
                    <Stack gap={'xs'}>
                      {sortArray(
                        quizQuestionsQuiz,
                        (i) => i.created_at,
                        Order.ASCENDING
                      )?.map((qqqi, i) => {
                        const question = questions?.find(
                          (qi2) => qi2.id == qqqi.question_id
                        );

                        if (!question) return null;

                        return (
                          <div key={qqqi.id}>
                            <CardQuestion
                              props={{
                                index: i + 1,
                                edit,
                                setEdit,
                                quizId: props.quizId,
                                question: question,
                              }}
                            />
                          </div>
                        );
                      })}
                    </Stack>
                  )}
                </Box>

                <Box display={!add ? undefined : 'none'}>
                  <>
                    <Divider variant="dashed" mb={'md'} />

                    <Button
                      onClick={() => {
                        setEdit({ content: '', options: '' });
                        setAdd(true);
                      }}
                    >
                      Add Question
                    </Button>
                  </>
                </Box>

                {add && (
                  <Fieldset
                    p={'md'}
                    legend={'Add question'}
                    styles={{
                      legend: { color: 'var(--mantine-color-gray-6)' },
                    }}
                  >
                    <FormQuestion
                      props={{
                        quizId: props.quizId,
                        onSubmit: () => {
                          setEdit({ content: '', options: '' });
                          setAdd(false);
                        },
                      }}
                    />
                  </Fieldset>
                )}
              </Stack>
            </Fieldset>
          </Stack>
        </GridCol>
      </Grid>
    </Box>
  );
}

function CardQuestion({
  props,
}: {
  props: {
    index?: number;
    edit?: EditProps;
    setEdit?: (i: EditProps) => any;
    quizId?: string;
    question: QuestionGet;
  };
}) {
  const active = {
    content: props.edit?.content == props.question.id,
    options: props.edit?.options == props.question.id,
  };

  const displayProps = {
    iconEdit: active.content ? IconX : IconEdit,
    iconOptions: active.options ? IconX : IconTextPlus,
  };

  const { questionDelete } = useQuestionActions();

  return (
    <Fieldset
      p={'md'}
      legend={`Question ${props.index || ''}`}
      styles={{ legend: { color: 'var(--mantine-color-gray-6)' } }}
    >
      <Stack>
        <Stack gap={'xs'}>
          <Text>{props.question.content}</Text>

          <Group gap={5}>
            <Tooltip label={'Edit question content'}>
              <ActionIcon
                size={ICON_WRAPPER_SIZE - 4}
                variant={active.content ? 'light' : 'subtle'}
                onClick={() =>
                  props.setEdit &&
                  props.setEdit({
                    options: '',
                    content: !active.content ? props.question.id : '',
                  })
                }
              >
                <displayProps.iconEdit
                  size={ICON_SIZE - 4}
                  stroke={ICON_STROKE_WIDTH}
                />
              </ActionIcon>
            </Tooltip>

            <Tooltip label={'Add question options'}>
              <ActionIcon
                size={ICON_WRAPPER_SIZE - 4}
                variant={active.options ? 'light' : 'subtle'}
                onClick={() =>
                  props.setEdit &&
                  props.setEdit({
                    content: '',
                    options: !active.options ? props.question.id : '',
                  })
                }
              >
                <displayProps.iconOptions
                  size={ICON_SIZE - 4}
                  stroke={ICON_STROKE_WIDTH}
                />
              </ActionIcon>
            </Tooltip>

            <Tooltip label={'Delete question'}>
              <Group>
                <ModalConfirm
                  props={{
                    onConfirm: () => {
                      if (props.setEdit)
                        props.setEdit({ content: '', options: '' });

                      questionDelete(props.question);
                    },
                    title: 'Delete question',
                    desc: 'This action is irreversible. Proceed?',
                  }}
                >
                  <ActionIcon
                    color="red.6"
                    size={ICON_WRAPPER_SIZE - 4}
                    variant={'subtle'}
                    onClick={() =>
                      props.setEdit &&
                      props.setEdit({
                        content: '',
                        options: '',
                      })
                    }
                  >
                    <IconTrash
                      size={ICON_SIZE - 4}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  </ActionIcon>
                </ModalConfirm>
              </Group>
            </Tooltip>
          </Group>
        </Stack>

        {active.content && (
          <FormQuestion
            props={{
              questionId: props.question.id,
              quizId: props.quizId,
              onCancel: () =>
                props?.setEdit && props?.setEdit({ content: '', options: '' }),
              onSubmit: () =>
                props?.setEdit && props?.setEdit({ content: '', options: '' }),
            }}
          />
        )}

        <Box display={active.options ? undefined : 'none'}>
          <SectionOptions
            props={{
              question: props.question,
            }}
          />
        </Box>
      </Stack>
    </Fieldset>
  );
}

function SectionOptions({ props }: { props: { question: QuestionGet } }) {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState('');
  const options = useStoreOption((s) => s.options);
  const questionOptions = options?.filter(
    (oi) => oi.question_id == props.question.id
  );
  const maxOptions = 4;
  const optionLimitReached = (questionOptions || []).length >= maxOptions;
  const hasCorrectOption = !!questionOptions?.find((qo) => !!qo.correct);
  const allCorrect = !questionOptions?.find((qo) => !qo.correct);

  return (
    <Stack gap={'md'}>
      <Box mih={140}>
        {options == undefined ? (
          <Stack align="center" ta={'center'} py={'xl'} fz={'sm'}>
            <Loader />
            <Text inherit c={'dimmed'}>
              Fetching options
            </Text>
          </Stack>
        ) : !questionOptions?.length ? (
          <Stack align="center" ta={'center'} py={'xl'} fz={'sm'}>
            <ThemeIcon size={ICON_WRAPPER_SIZE} variant="light">
              <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            </ThemeIcon>
            <Text inherit c={'dimmed'}>
              Question has no options
            </Text>
          </Stack>
        ) : (
          <Stack gap={'xs'}>
            {sortArray(
              questionOptions,
              (i) => i.created_at,
              Order.ASCENDING
            )?.map((oi, i) => (
              <div key={oi.id}>
                <CardOption
                  props={{
                    index: i + 1,
                    option: oi,
                    edit,
                    setEdit,
                    questionId: props.question.id,
                  }}
                />
              </div>
            ))}

            <Box display={optionLimitReached ? undefined : 'none'}>
              <Stack>
                <Text inherit c={'dimmed'} fz={'xs'} ta={'center'}>
                  Max of {maxOptions} question options reached.
                </Text>

                <Box display={!hasCorrectOption ? undefined : 'none'}>
                  <Alert
                    variant="light"
                    color="yellow.6"
                    title="Warning"
                    icon={
                      <IconAlertTriangle
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    }
                  >
                    No correct option found. Mark at least 1 option as correct.
                  </Alert>
                </Box>

                <Box display={allCorrect ? undefined : 'none'}>
                  <Alert
                    variant="light"
                    color="yellow.6"
                    title="Warning"
                    icon={
                      <IconAlertTriangle
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    }
                  >
                    All options marked as correct. Mark at least 1 option as
                    incorrect.
                  </Alert>
                </Box>
              </Stack>
            </Box>
          </Stack>
        )}
      </Box>

      <Box display={!optionLimitReached ? undefined : 'none'}>
        <Box display={!add ? undefined : 'none'}>
          <>
            <Divider
              variant="dashed"
              display={!optionLimitReached ? undefined : 'none'}
              mb={'md'}
            />

            <Tooltip label={'Add question option'}>
              <Button onClick={() => setAdd(true)} size="xs">
                Add Option
              </Button>
            </Tooltip>
          </>
        </Box>

        {add && (
          <Fieldset
            p={'md'}
            legend={'Add option'}
            styles={{ legend: { color: 'var(--mantine-color-gray-6)' } }}
          >
            <FormOption
              props={{
                questionId: props.question.id,
                onSubmit: () => {
                  setAdd(false);
                  setEdit('');
                },
              }}
            />
          </Fieldset>
        )}
      </Box>
    </Stack>
  );
}

function CardOption({
  props,
}: {
  props: {
    index?: number;
    edit?: string;
    setEdit?: (i: string) => any;
    questionId?: string;
    option: OptionGet;
  };
}) {
  const { optionDelete } = useOptionActions();

  const active = {
    content: props.edit == props.option.id,
  };

  const displayProps = {
    iconEdit: active.content ? IconX : IconEdit,
  };

  return (
    <Fieldset
      p={'md'}
      legend={`Option ${props.index || ''}`}
      styles={{ legend: { color: 'var(--mantine-color-gray-6)' } }}
    >
      <Stack>
        <Stack gap={'xs'}>
          <Group justify="space-between">
            <Group>
              <Text>{props.option.content}</Text>

              {props.option.correct && (
                <Badge size="xs" variant="light" color="green.6">
                  Correct
                </Badge>
              )}
            </Group>
          </Group>

          <Group gap={5}>
            <Tooltip label={'Edit option content'}>
              <ActionIcon
                size={ICON_WRAPPER_SIZE - 4}
                variant={active.content ? 'light' : 'subtle'}
                onClick={() =>
                  props.setEdit &&
                  props.setEdit(!active.content ? props.option.id : '')
                }
              >
                <displayProps.iconEdit
                  size={ICON_SIZE - 4}
                  stroke={ICON_STROKE_WIDTH}
                />
              </ActionIcon>
            </Tooltip>

            <Tooltip label={'Delete question option'}>
              <Group>
                <ModalConfirm
                  props={{
                    onConfirm: () => {
                      if (props.setEdit) props.setEdit('');

                      optionDelete(props.option);
                    },
                    title: 'Delete question option',
                    desc: 'This action is irreversible. Proceed?',
                  }}
                >
                  <ActionIcon
                    color="red.6"
                    size={ICON_WRAPPER_SIZE - 4}
                    variant={'subtle'}
                    onClick={() => props.setEdit && props.setEdit('')}
                  >
                    <IconTrash
                      size={ICON_SIZE - 4}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  </ActionIcon>
                </ModalConfirm>
              </Group>
            </Tooltip>
          </Group>
        </Stack>

        {active.content && (
          <FormOption
            props={{
              optionId: props.option.id,
              questionId: props.questionId,
              onSubmit: () => props.setEdit && props.setEdit(''),
            }}
          />
        )}
      </Stack>
    </Fieldset>
  );
}
