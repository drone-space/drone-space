'use client';

import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { FormQuiz } from '@repo/ui';
import {
  ActionIcon,
  Alert,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Fieldset,
  Grid,
  GridCol,
  Group,
  List,
  ListItem,
  Loader,
  Paper,
  ScrollArea,
  ScrollAreaAutosize,
  Skeleton,
  Stack,
  Text,
  ThemeIcon,
  Tooltip,
} from '@mantine/core';
import HeaderAppContent from '@learn/ui/layout/headers/app-content';
import { useStoreQuiz } from '@repo/store';
import { FormQuestion } from '@repo/ui';
import { FormOption } from '@repo/ui';
import { useStoreQuestion } from '@repo/store';
import { ICON_SIZE, ICON_STROKE_WIDTH, ICON_WRAPPER_SIZE, SECTION_SPACING } from '@repo/constants';
import {
  IconAlertTriangle,
  IconCircleMinus,
  IconCopyX,
  IconEdit,
  IconList,
  IconTextPlus,
  IconTrash,
  IconX,
} from '@tabler/icons-react';
import { QuestionGet } from '@repo/types';
import { OptionsValue, useStoreOption } from '@repo/store';
import { OptionGet } from '@repo/types';
import { sortArray } from '@repo/utils';
import { Order } from '@repo/types';
import { useQuestionActions } from '@repo/store';
import { ModalConfirm } from '@repo/ui';
import { PartialSectionOptions } from '@repo/ui';
import { useOptionActions } from '@repo/store';
import { useRouter } from 'next/navigation';
import { useStoreQuizQuestion } from '@repo/store';
import { QuizQuestionGet } from '@repo/types';
import { Status, SyncStatus } from '@repo/types';
import { generateUUID } from '@repo/utils';
import { useQuizQuestionActions } from '@repo/store';
import InputSearch from '@learn/ui/input/search';

type EditProps = { content: string; options: string };

export default function Edit({ props }: { props: { quizId: string } }) {
  const router = useRouter();

  const quizzes = useStoreQuiz((s) => s.quizzes);
  const quiz = quizzes?.find((qi) => qi.id == props.quizId);

  useEffect(() => {
    if (quizzes === undefined || quizzes === null) return;
    if (!quiz) router.replace('/not-found');
  }, [quizzes, quiz, router]);

  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState<EditProps>({
    content: '',
    options: '',
  });

  const questions = useStoreQuestion((s) => s.questions);
  const quizQuestions = useStoreQuizQuestion((s) => s.quizQuestions);
  const setQuizQuestions = useStoreQuizQuestion((s) => s.setQuizQuestions);

  const [questionIds, setQuestionIds] = useState<string[]>([]);

  // 1. Filter bridge items for this quiz
  const quizQuestionsQuiz = useMemo(() => {
    return sortArray(
      quizQuestions?.filter((qqqi) => qqqi.quizId === props.quizId) || [],
      (i) => i.createdAt,
      Order.DESCENDING,
    );
  }, [quizQuestions, props.quizId]);

  // 🔥 PERFORMANCE FIX: Build a hash-map lookup for questions
  const questionsMap = useMemo(() => {
    return new Map(questions?.map((q) => [q.id, q]) || []);
  }, [questions]);

  // 2. Extract question IDs currently assigned to this quiz
  const activeQuizQuestionIds = useMemo(() => {
    return new Set(quizQuestionsQuiz.map((qq) => qq.questionId));
  }, [quizQuestionsQuiz]);

  const [search, setSearch] = useState('');

  // 🔥 THE FIX: Filter the GLOBAL questions store for items NOT in the active quiz set
  const questionsAvailableToAdd = useMemo(() => {
    const availableQuestions = questions?.filter((q) => !activeQuizQuestionIds.has(q.id)) || [];

    const availableQuestionsSearch = availableQuestions.filter((aqs) =>
      aqs.content.trim().toLowerCase().includes(search.trim().toLocaleLowerCase()),
    );

    return availableQuestionsSearch;
  }, [questions, activeQuizQuestionIds, search]);

  const handleAddExistingQuestion = () => {
    const now = new Date();

    const newQuizQuestions: QuizQuestionGet[] = questionIds.map((qi) => ({
      id: generateUUID(),
      questionId: qi,
      quizId: props.quizId,
      status: Status.ACTIVE,
      syncStatus: SyncStatus.PENDING,
      updatedAt: now.toISOString() as any,
      createdAt: now.toISOString() as any,
    }));

    setQuizQuestions([...(quizQuestions || []), ...newQuizQuestions]);
    setQuestionIds([]); // Clear the selections checkbox pool
    setAdd(false); // Close the selection area safely
  };

  const [addFromExisting, setAddFromExisting] = useState(false);

  const options = useStoreOption((s) => s.options);

  const optionsMap = useMemo(() => {
    const map = new Map<string, OptionGet[]>();

    for (const option of options ?? []) {
      const list = map.get(option.questionId);

      if (list) {
        list.push(option);
      } else {
        map.set(option.questionId, [option]);
      }
    }

    return map;
  }, [options]);

  const handleToggleQuestion = useCallback((id: string) => {
    setQuestionIds((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id],
    );
  }, []);

  return (
    <Box mb={SECTION_SPACING}>
      <HeaderAppContent props={{ title: !quiz ? undefined : `Edit ${quiz.title}` }} />

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
                <Box display={!add ? undefined : 'none'}>
                  <Button
                    fullWidth
                    onClick={() => {
                      setEdit({ content: '', options: '' });
                      setAdd(true);
                    }}
                  >
                    Add Question
                  </Button>

                  <Divider variant="dashed" mt={'md'} />
                </Box>

                <Fieldset
                  p={'md'}
                  legend={'Add question'}
                  styles={{
                    legend: { color: 'var(--mantine-color-gray-6)' },
                  }}
                  display={add ? undefined : 'none'}
                >
                  <Stack>
                    <Box display={!addFromExisting ? undefined : 'none'}>
                      <Button fullWidth onClick={() => setAddFromExisting(true)}>
                        Add from existing questions
                      </Button>
                    </Box>

                    <Fieldset
                      p={'md'}
                      pr={0}
                      legend={'Add from existing questions'}
                      styles={{
                        legend: { color: 'var(--mantine-color-gray-6)' },
                      }}
                      display={addFromExisting ? undefined : 'none'}
                    >
                      <Stack gap={0}>
                        <ScrollAreaAutosize mah={240} pos={'relative'}>
                          <Box
                            pos={'sticky'}
                            top={0}
                            bg={'var(--mantine-color-body)'}
                            pr={'md'}
                            pb={'md'}
                            style={{ zIndex: 10 }}
                          >
                            <InputSearch state={search} setState={setSearch} />
                          </Box>

                          <Stack pr={'md'} pb={'md'} gap={5}>
                            {/* Changed conditional check to look at available items */}
                            {!questionsAvailableToAdd.length ? (
                              <Stack align="center" ta={'center'} py={'xl'} fz={'sm'}>
                                <ThemeIcon size={ICON_WRAPPER_SIZE} variant="light">
                                  <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                                </ThemeIcon>
                                <Text inherit c={'dimmed'}>
                                  No questions found
                                </Text>
                              </Stack>
                            ) : (
                              questionsAvailableToAdd.map((question) => (
                                <div key={question.id}>
                                  <CardQuestion
                                    question={question}
                                    questionOptions={optionsMap.get(question.id)}
                                    options={{ select: true }}
                                    edit={edit}
                                    setEdit={setEdit}
                                    checked={questionIds.includes(question.id)}
                                    onToggle={handleToggleQuestion}
                                  />
                                </div>
                              ))
                            )}
                          </Stack>
                        </ScrollAreaAutosize>

                        <Box pr={'md'}>
                          <Divider />
                        </Box>

                        <Group justify="end" pr={'md'} mt={'md'}>
                          <Tooltip
                            label={
                              !questionIds.length
                                ? 'Select at least 1 question to add'
                                : 'Add questions'
                            }
                          >
                            <Button
                              size="xs"
                              disabled={!questionIds.length}
                              onClick={handleAddExistingQuestion}
                            >
                              Add
                            </Button>
                          </Tooltip>
                        </Group>
                      </Stack>
                    </Fieldset>

                    <Fieldset
                      p={'md'}
                      legend={'Create new question'}
                      styles={{
                        legend: { color: 'var(--mantine-color-gray-6)' },
                      }}
                    >
                      <FormQuestion
                        options={{ inline: true }}
                        props={{
                          quizId: props.quizId,
                          onSubmit: () => {
                            setEdit({ content: '', options: '' });
                            setAdd(false);
                          },
                          setAddFromExisting,
                        }}
                      />
                    </Fieldset>
                  </Stack>
                </Fieldset>

                <Box mih={140}>
                  {quizQuestions === undefined ? (
                    <Stack align="center" ta={'center'} py={'xl'} fz={'sm'}>
                      <Loader />
                      <Text inherit c={'dimmed'}>
                        Fetching quiz questions
                      </Text>
                    </Stack>
                  ) : !quizQuestionsQuiz.length ? (
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
                      {quizQuestionsQuiz.map((qqqi, i) => {
                        // O(1) Instant map lookup replaces old .find() loop
                        const question = questionsMap.get(qqqi.questionId);

                        if (!question) return null;

                        return (
                          <div key={qqqi.id}>
                            <CardQuestion
                              index={i + 1}
                              edit={edit}
                              setEdit={setEdit}
                              quizId={props.quizId}
                              question={question}
                              questionOptions={optionsMap.get(question.id)}
                            />
                          </div>
                        );
                      })}
                    </Stack>
                  )}
                </Box>
              </Stack>
            </Fieldset>
          </Stack>
        </GridCol>
      </Grid>
    </Box>
  );
}

type CardQuestionProps = {
  index?: number;
  edit?: EditProps;
  setEdit?: (i: EditProps) => any;
  checked?: boolean;
  onToggle?: (i: any) => void;
  quizId?: string;
  question: QuestionGet;
  questionOptions: OptionsValue;
  options?: { select?: boolean };
};

const CardQuestion = memo(function CardQuestion({
  index,
  edit,
  setEdit,
  checked,
  onToggle,
  quizId,
  question,
  questionOptions,
  options,
}: CardQuestionProps) {
  const active = {
    content: edit?.content == question.id,
    options: edit?.options == question.id,
  };

  const displayProps = {
    iconEdit: active.content ? IconX : IconEdit,
    iconOptions: active.options ? IconX : IconList,
  };

  const { questionDelete } = useQuestionActions();
  const quizQuestions = useStoreQuizQuestion((s) => s.quizQuestions);
  const { quizQuestionDelete } = useQuizQuestionActions();

  const handleRemoveQuestionFromQuiz = () => {
    const quizQuestion = quizQuestions?.find(
      (qqi) => qqi.questionId == question.id && qqi.quizId == quizId,
    );

    if (quizQuestion) quizQuestionDelete(quizQuestion);
  };

  return (
    <Fieldset
      p={'md'}
      legend={options?.select ? '' : `Question ${index || ''}`}
      styles={{ legend: { color: 'var(--mantine-color-gray-6)' } }}
    >
      <Stack>
        <Stack gap={'xs'}>
          <Group justify="space-between" wrap="nowrap">
            <div>
              <Text inherit mih={49.6}>
                {question.content}
              </Text>
            </div>

            <Group justify="end" display={options?.select ? undefined : 'none'}>
              <Checkbox
                checked={checked}
                onChange={() => {
                  if (onToggle) onToggle(question.id);
                }}
              />
            </Group>
          </Group>

          <Group display={options?.select ? 'none' : undefined} justify="space-between">
            <Group gap={5}>
              <Tooltip label={'Edit question content.'}>
                <ActionIcon
                  size={ICON_WRAPPER_SIZE - 4}
                  variant={active.content ? 'light' : 'subtle'}
                  onClick={() =>
                    setEdit &&
                    setEdit({
                      options: '',
                      content: !active.content ? question.id : '',
                    })
                  }
                >
                  <displayProps.iconEdit size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
                </ActionIcon>
              </Tooltip>

              <Tooltip label={'Add/edit question options.'}>
                <ActionIcon
                  size={ICON_WRAPPER_SIZE - 4}
                  variant={active.options ? 'light' : 'subtle'}
                  onClick={() =>
                    setEdit &&
                    setEdit({
                      content: '',
                      options: !active.options ? question.id : '',
                    })
                  }
                >
                  <displayProps.iconOptions size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
                </ActionIcon>
              </Tooltip>

              <Tooltip label={'Remove question from quiz.'}>
                <Group>
                  <ActionIcon
                    color="red.6"
                    size={ICON_WRAPPER_SIZE - 4}
                    variant={'subtle'}
                    onClick={() => {
                      handleRemoveQuestionFromQuiz();

                      if (setEdit) {
                        setEdit({
                          content: '',
                          options: '',
                        });
                      }
                    }}
                  >
                    <IconCircleMinus size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
                  </ActionIcon>
                </Group>
              </Tooltip>

              {(questionOptions || []).length < 4 && !question.explanation && (
                <Divider orientation="vertical" mx={'xs'} />
              )}

              {questionOptions === undefined ? (
                <Skeleton h={ICON_WRAPPER_SIZE - 4} w={ICON_WRAPPER_SIZE - 4} />
              ) : (
                (questionOptions || []).length < 4 && (
                  <Tooltip label={'4 question options are required.'}>
                    <Group>
                      <ThemeIcon color="yellow.6" size={ICON_WRAPPER_SIZE - 4} variant={'subtle'}>
                        <IconAlertTriangle size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
                      </ThemeIcon>
                    </Group>
                  </Tooltip>
                )
              )}

              {!question.explanation && (
                <Tooltip label={'Missing answer explanation.'}>
                  <Group>
                    <ThemeIcon color="yellow.6" size={ICON_WRAPPER_SIZE - 4} variant={'subtle'}>
                      <IconAlertTriangle size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
                    </ThemeIcon>
                  </Group>
                </Tooltip>
              )}
            </Group>

            <Group gap={5}>
              <Tooltip label={'Delete question.'}>
                <div>
                  <ModalConfirm
                    props={{
                      onConfirm: () => {
                        if (setEdit) setEdit({ content: '', options: '' });

                        questionDelete(question);
                      },
                      title: 'Delete question',
                      desc: 'Deleting a question will also delete it in all other quizzes. This action is irreversible. Proceed?',
                    }}
                  >
                    <Group>
                      <ActionIcon
                        color="red.6"
                        size={ICON_WRAPPER_SIZE - 4}
                        variant={'subtle'}
                        onClick={() =>
                          setEdit &&
                          setEdit({
                            content: '',
                            options: '',
                          })
                        }
                      >
                        <IconTrash size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
                      </ActionIcon>
                    </Group>
                  </ModalConfirm>
                </div>
              </Tooltip>
            </Group>
          </Group>
        </Stack>

        {active.content && (
          <FormQuestion
            options={{ inline: true }}
            props={{
              question: question,
              quizId: quizId,
              onCancel: () => setEdit && setEdit({ content: '', options: '' }),
              onSubmit: () => setEdit && setEdit({ content: '', options: '' }),
            }}
          />
        )}

        <Box display={active.options ? undefined : 'none'}>
          <PartialSectionOptions
            props={{
              questionId: question.id,
              questionOptions: questionOptions || [],
            }}
          />
        </Box>
      </Stack>
    </Fieldset>
  );
});
