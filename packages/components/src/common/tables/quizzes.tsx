'use client';

import React from 'react';
import {
  Button,
  Center,
  Loader,
  Stack,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
} from '@mantine/core';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import { getRegionalDate } from '@repo/utilities/date-time';
import { SECTION_SPACING } from '@repo/constants/sizes';

export default function Quizzes() {
  const quizzes = useStoreQuiz((s) => s.quizzes);

  const rows = (quizzes || []).map((qi) => {
    const updated = getRegionalDate(qi.updated_at);

    return (
      <TableTr key={qi.id}>
        <TableTd w={WIDTHS.TITLE}>{qi.title}</TableTd>

        <TableTd w={WIDTHS.STATUS}>{qi.status}</TableTd>

        <TableTd w={WIDTHS.CREATED}>
          {getRegionalDate(qi.created_at).date}
        </TableTd>

        <TableTd w={WIDTHS.UPDATED}>
          {updated.date}, {updated.time}
        </TableTd>

        <TableTd w={WIDTHS.ACTIONS}>
          {updated.date}, {updated.time}
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
          <TableTh w={WIDTHS.UPDATED}>Last Update</TableTh>
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
        ) : !quizzes ? (
          <TableTr>
            <TableTd colSpan={10}>
              <Stack align="center" ta={'center'} my={SECTION_SPACING * 2}>
                <Text c={'dimmed'}>No quizzes found</Text>
                <Button size={'xs'}>Create Quiz</Button>
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
  TITLE: '30%',
  STATUS: '20%',
  CREATED: '20%',
  UPDATED: '20%',
  ACTIONS: '10%',
};
