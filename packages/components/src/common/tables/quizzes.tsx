'use client';

import React from 'react';
import {
  ActionIcon,
  Button,
  Center,
  Group,
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
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { IconEdit } from '@tabler/icons-react';
import NextLink from '../anchor/next-link';
import BadgeStatus from '../badges/status';

export default function Quizzes() {
  const quizzes = useStoreQuiz((s) => s.quizzes);

  const rows = (quizzes || []).map((qi) => {
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
        <TableTd w={WIDTHS.TITLE}>{qi.title}</TableTd>

        <TableTd w={WIDTHS.STATUS}>
          <BadgeStatus props={{ status: qi.status }} />
        </TableTd>

        <TableTd w={WIDTHS.CREATED}>
          <Text component="span" inherit fz={'sm'}>
            {created.date}, {`${created.time}`.toUpperCase()}
          </Text>
        </TableTd>

        <TableTd w={WIDTHS.UPDATED}>
          <Text component="span" inherit fz={'sm'}>
            {updated.date}, {`${updated.time}`.toUpperCase()}
          </Text>
        </TableTd>

        <TableTd w={WIDTHS.ACTIONS}>
          <Group justify="end" gap={'xs'}>
            <NextLink href={`/admin/quizzes/${qi.id}/edit-quiz`}>
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
        ) : !quizzes?.length ? (
          <TableTr>
            <TableTd colSpan={10}>
              <Stack align="center" ta={'center'} my={SECTION_SPACING * 2}>
                <Text c={'dimmed'}>No quizzes found</Text>

                <NextLink href="/admin/quizzes/new-quiz">
                  <Button size={'xs'}>Create Quiz</Button>
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
  TITLE: '25%',
  STATUS: '20%',
  CREATED: '22.5%',
  UPDATED: '22.5%',
  ACTIONS: '10%',
};
