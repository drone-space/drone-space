'use client';

import React from 'react';
import {
  ActionIcon,
  Button,
  Center,
  Group,
  Loader,
  NumberFormatter,
  Stack,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
} from '@mantine/core';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import { getRegionalDate } from '@repo/utilities/date-time';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { IconEdit } from '@tabler/icons-react';
import NextLink from '../anchor/next-link';
import BadgeStatus from '../badges/status';
import { sortArray } from '@repo/utilities/array';
import { Order } from '@repo/types/enums';
import { useStoreQuizQuestion } from '@repo/libraries/zustand/stores/quiz-question';

export default function Questions() {
  const questions = useStoreQuestion((s) => s.questions);
  const quizQuestions = useStoreQuizQuestion((s) => s.quizQuestions);

  const rows = sortArray(
    questions || [],
    (i) => i.created_at,
    Order.DESCENDING
  ).map((qi) => {
    let quizIds: string[] = [];

    const quizQuestionsForQuestion = (quizQuestions || []).filter(
      (qqfq) => qqfq.question_id == qi.id
    );

    quizQuestionsForQuestion.map((qqfq) => {
      if (quizIds.includes(qqfq.quiz_id)) {
        return;
      } else {
        quizIds.push(qqfq.quiz_id);
      }
    });

    const created = getRegionalDate(qi.created_at, {
      // locale: 'en-GB',
      // format: 'numeric',
    });
    const updated = getRegionalDate(qi.updated_at, {
      // locale: 'en-GB',
      // format: 'numeric',
    });

    return (
      <TableTr key={qi.id}>
        <TableTd w={WIDTHS.TITLE}>
          <Text component="span" inherit lineClamp={1}>
            {qi.content}
          </Text>
        </TableTd>

        <TableTd w={WIDTHS.STATUS}>
          <BadgeStatus props={{ status: qi.status }} />
        </TableTd>

        <TableTd w={WIDTHS.CREATED}>
          <Text component="span" inherit fz={'sm'}>
            {created.date}, {`${created.time}`.toUpperCase()}
          </Text>
        </TableTd>

        <TableTd w={WIDTHS.QUIZZES}>
          <Text component="span" inherit fz={'sm'}>
            <NumberFormatter value={quizIds?.length} />
          </Text>
        </TableTd>

        <TableTd w={WIDTHS.ACTIONS}>
          <Group justify="end" gap={'xs'}>
            <NextLink href={`/admin/questions/${qi.id}/edit-question`}>
              <ActionIcon size={ICON_WRAPPER_SIZE} variant="subtle">
                <IconEdit size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              </ActionIcon>
            </NextLink>
          </Group>
        </TableTd>
      </TableTr>
    );
  });

  return (
    <Table>
      <TableThead>
        <TableTr>
          <TableTh w={WIDTHS.TITLE}>Title</TableTh>
          <TableTh w={WIDTHS.STATUS}>Status</TableTh>
          <TableTh w={WIDTHS.CREATED}>Date Created</TableTh>
          <TableTh w={WIDTHS.QUIZZES}>No. of Questions</TableTh>
          <TableTh w={WIDTHS.ACTIONS} />
        </TableTr>
      </TableThead>

      <TableTbody>
        {questions === undefined ? (
          <TableTr>
            <TableTd colSpan={10}>
              <Stack align="center" ta={'center'} my={SECTION_SPACING * 2}>
                <Loader size={'xs'} />
                <Text c={'dimmed'}>Fetching items</Text>
              </Stack>
            </TableTd>
          </TableTr>
        ) : !questions?.length ? (
          <TableTr>
            <TableTd colSpan={10}>
              <Stack align="center" ta={'center'} my={SECTION_SPACING * 2}>
                <Text c={'dimmed'}>No questions found</Text>

                <NextLink href="/admin/questions/new-question">
                  <Button size={'xs'}>Create Question</Button>
                </NextLink>
              </Stack>
            </TableTd>
          </TableTr>
        ) : (
          rows
        )}
      </TableTbody>
    </Table>
  );
}

const WIDTHS = {
  TITLE: '38%',
  STATUS: '15%',
  CREATED: '22%',
  QUIZZES: '15%',
  ACTIONS: '10%',
};
