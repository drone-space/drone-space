'use client';

import React, { useState } from 'react';
import {
  ActionIcon,
  Button,
  Card,
  Center,
  Group,
  Loader,
  NumberFormatter,
  Pagination,
  Stack,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
  Tooltip,
} from '@mantine/core';
import { useQuizActions, useStoreQuiz } from '@repo/store';
import { getRegionalDate } from '@repo/utils';
import { ICON_SIZE, ICON_STROKE_WIDTH, ICON_WRAPPER_SIZE, SECTION_SPACING } from '@repo/constants';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { AnchorNextLink } from '../anchor/next-link';
import { BadgeStatus } from '../badge/status';
import { sortArray } from '@repo/utils';
import { Alert, Order } from '@repo/types';
import { useStoreQuizQuestion } from '@repo/store';
import { usePaginate } from '@repo/hooks';
import { ModalConfirm } from '../modal/confirm';
import { InputSearch } from '../input/search';

export function TableQuizzes() {
  const quizzes = useStoreQuiz((s) => s.quizzes);
  const { quizDelete } = useQuizActions();
  const quizQuestions = useStoreQuizQuestion((s) => s.quizQuestions);

  const [search, setSearch] = useState('');
  const searchFilter = !search
    ? quizzes
    : quizzes?.filter((qi) => qi.title.toLowerCase().includes(search.trim().toLowerCase()));

  const { items, activePage, setActivePage, totalPages, pageRange } = usePaginate(
    sortArray(searchFilter || [], (i) => i.createdAt, Order.DESCENDING) || [],
    10,
  );

  const rows = items.map((qi) => {
    const created = getRegionalDate(qi.createdAt, {
      // locale: 'en-GB',
      // format: 'numeric',
    });
    const updated = getRegionalDate(qi.updatedAt, {
      // locale: 'en-GB',
      // format: 'numeric',
    });

    const quizQuestionsQuiz = quizQuestions?.filter((qq) => qq.quizId == qi.id);

    return (
      <TableTr key={qi.id}>
        <TableTd w={WIDTHS.TITLE}>{qi.title}</TableTd>

        <TableTd w={WIDTHS.STATUS}>
          <BadgeStatus props={{ status: qi.status }} />
        </TableTd>

        <TableTd w={WIDTHS.CREATED}>
          <Text component="span" inherit fz={'sm'}>
            {created.date}, {`${created.time}`.toUpperCase()}
          </Text>
        </TableTd>

        <TableTd w={WIDTHS.QUESTIONS}>
          <Text component="span" inherit fz={'sm'}>
            <NumberFormatter value={quizQuestionsQuiz?.length} />
          </Text>
        </TableTd>

        <TableTd w={WIDTHS.ACTIONS}>
          <Group justify="end" gap={'xs'}>
            <AnchorNextLink href={`/admin/quizzes/${qi.id}/edit-quiz`}>
              <ActionIcon size={ICON_WRAPPER_SIZE} variant="light" color="gray">
                <IconEdit size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              </ActionIcon>
            </AnchorNextLink>

            <ModalConfirm
              props={{
                variant: Alert.DANGER,
                title: 'Delete Quiz',
                desc: 'Are you sure you want to delete this quiz? This action is irreversible.',
                onConfirm: () => {
                  quizDelete(qi);
                },
              }}
            >
              <Tooltip label={'Delete Quiz'}>
                <ActionIcon size={ICON_WRAPPER_SIZE} variant="light" color="red">
                  <IconTrash size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                </ActionIcon>
              </Tooltip>
            </ModalConfirm>
          </Group>
        </TableTd>
      </TableTr>
    );
  });

  return (
    <Stack>
      <Card bg={'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-8))'} withBorder>
        <Group>
          <InputSearch state={search} setState={setSearch} w={320} placeholder="Search by title" />
        </Group>
      </Card>

      <Table>
        <TableThead>
          <TableTr>
            <TableTh w={WIDTHS.TITLE}>Title</TableTh>
            <TableTh w={WIDTHS.STATUS}>Status</TableTh>
            <TableTh w={WIDTHS.CREATED}>Date Created</TableTh>
            <TableTh w={WIDTHS.QUESTIONS}>No. of Questions</TableTh>
            <TableTh w={WIDTHS.ACTIONS} />
          </TableTr>
        </TableThead>

        <TableTbody>
          {quizzes === undefined ? (
            <TableTr>
              <TableTd colSpan={10}>
                <Stack align="center" ta={'center'} my={SECTION_SPACING * 2}>
                  <Loader size={'xs'} />
                  <Text c={'dimmed'}>Fetching items</Text>
                </Stack>
              </TableTd>
            </TableTr>
          ) : !quizzes?.length ? (
            <TableTr>
              <TableTd colSpan={10}>
                <Stack align="center" ta={'center'} my={SECTION_SPACING * 2}>
                  <Text c={'dimmed'}>No quizzes found</Text>

                  <AnchorNextLink href="/admin/quizzes/new-quiz">
                    <Button size={'xs'}>Create Quiz</Button>
                  </AnchorNextLink>
                </Stack>
              </TableTd>
            </TableTr>
          ) : (
            rows
          )}
        </TableTbody>
      </Table>

      <Card bg={'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-8))'} withBorder>
        <Group justify="space-between" align="end">
          <Group fz={'sm'} c={'dimmed'}>
            <Text inherit>
              Showing: {pageRange?.from} to {pageRange?.to} of {quizzes?.length}
            </Text>
          </Group>

          <Group justify="end">
            <Pagination
              size={'sm'}
              value={activePage}
              onChange={setActivePage}
              total={totalPages}
            />
          </Group>
        </Group>
      </Card>
    </Stack>
  );
}

const WIDTHS = {
  TITLE: '25%',
  STATUS: '20%',
  CREATED: '22.5%',
  QUESTIONS: '22.5%',
  ACTIONS: '10%',
};
