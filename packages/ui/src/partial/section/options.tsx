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
  Stack,
  Text,
  ThemeIcon,
  Tooltip,
} from '@mantine/core';
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
import { useStoreOption } from '@repo/store';
import { OptionGet } from '@repo/types';
import { sortArray } from '@repo/utils';
import { Order } from '@repo/types';
import { useQuestionActions } from '@repo/store';
import { ModalConfirm } from '@repo/ui';
import { useOptionActions } from '@repo/store';
import { useRouter } from 'next/navigation';
import { useStoreQuizQuestion } from '@repo/store';
import { QuizQuestionGet } from '@repo/types';
import { Status, SyncStatus } from '@repo/types';
import { generateUUID } from '@repo/utils';
import { useQuizQuestionActions } from '@repo/store';

export function PartialSectionOptions({
  props,
}: {
  props: { questionId: string; questionOptions: OptionGet[] };
}) {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState('');

  const maxOptions = 4;
  const optionLimitReached = (props.questionOptions || []).length >= maxOptions;
  const hasCorrectOption = !!props.questionOptions?.find((qo) => !!qo.correct);
  const allCorrect = !props.questionOptions?.find((qo) => !qo.correct);

  return (
    <Stack gap={'md'}>
      <Box mih={140}>
        {!props.questionOptions?.length ? (
          <Stack align="center" ta={'center'} py={'xl'} fz={'sm'}>
            <ThemeIcon size={ICON_WRAPPER_SIZE} variant="outline">
              <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            </ThemeIcon>
            <Text inherit c={'dimmed'}>
              Question has no options
            </Text>
          </Stack>
        ) : (
          <Stack gap={'xs'}>
            {sortArray(props.questionOptions, (i) => i.createdAt, Order.ASCENDING)?.map((oi, i) => (
              <div key={oi.id}>
                <CardOption
                  props={{
                    index: i + 1,
                    option: oi,
                    edit,
                    setEdit,
                    questionId: props.questionId,
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
                    color="yellow"
                    title="Warning"
                    icon={<IconAlertTriangle size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
                  >
                    No correct option found. Mark at least 1 option as correct.
                  </Alert>
                </Box>

                <Box display={allCorrect ? undefined : 'none'}>
                  <Alert
                    variant="light"
                    color="yellow"
                    title="Warning"
                    icon={<IconAlertTriangle size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
                  >
                    All options marked as correct. Mark at least 1 option as incorrect.
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
                questionId: props.questionId,
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

const CardOption = memo(function CardOption({
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
          <div>
            <Text>{props.option.content}</Text>
          </div>

          <Group justify="space-between">
            <Group gap={5}>
              <Tooltip label={'Edit option content.'}>
                <ActionIcon
                  size={ICON_WRAPPER_SIZE - 4}
                  variant={active.content ? 'light' : 'subtle'}
                  onClick={() =>
                    props.setEdit && props.setEdit(!active.content ? props.option.id : '')
                  }
                >
                  <displayProps.iconEdit size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
                </ActionIcon>
              </Tooltip>

              <Tooltip label={'Delete question option.'}>
                <div>
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
                    <Group>
                      <ActionIcon
                        color="red.6"
                        size={ICON_WRAPPER_SIZE - 4}
                        variant={'subtle'}
                        onClick={() => props.setEdit && props.setEdit('')}
                      >
                        <IconTrash size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
                      </ActionIcon>
                    </Group>
                  </ModalConfirm>
                </div>
              </Tooltip>
            </Group>

            <Group>
              {props.option.correct && (
                <Badge size="xs" variant="light" color="green.6">
                  Correct
                </Badge>
              )}
            </Group>
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
});
