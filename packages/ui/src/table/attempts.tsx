'use client';

import React, { useState } from 'react';
import {
  ActionIcon,
  Button,
  Card,
  Group,
  Loader,
  NumberFormatter,
  Pagination,
  Select,
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
import { useAttemptActions, useStoreAttempt, useStoreProfile, useStoreQuiz } from '@repo/store';
import { getRegionalDate } from '@repo/utils';
import { ICON_SIZE, ICON_STROKE_WIDTH, ICON_WRAPPER_SIZE, SECTION_SPACING } from '@repo/constants';
import { AnchorNextLink } from '../anchor/next-link';
import { BadgeStatus } from '../badge/status';
import { sortArray } from '@repo/utils';
import { Alert, AttemptGet, Order, Status } from '@repo/types';
import { usePaginate, useQuizStats } from '@repo/hooks';
import { BadgeResult } from '../badge/result';
import { IconFilter, IconFilterX, IconTrash } from '@tabler/icons-react';
import { ModalConfirm } from '../modal/confirm';

export function TableAttempts() {
  const attempts = useStoreAttempt((s) => s.attempts);
  const { attemptDelete } = useAttemptActions();
  const quizzes = useStoreQuiz((s) => s.quizzes);

  const [profileId, setProfileId] = useState<string | null>('');
  const [quizId, setQuizId] = useState<string | null>('');

  const profiles = useStoreProfile((s) => s.profiles);
  const filteredAttempts = attempts?.filter((ai) => {
    const filterProfile = !profileId ? true : ai.profileId == profileId;
    const filterQuiz = !quizId ? true : ai.quizId == quizId;
    return filterProfile && filterQuiz;
  });

  const { items, activePage, setActivePage, totalPages, pageRange } = usePaginate(
    sortArray(filteredAttempts || [], (i) => i.createdAt, Order.DESCENDING) || [],
    10,
  );

  const rows = items.map((ai) => {
    return <AttemptRow key={ai.id} attempt={ai} onDelete={attemptDelete} />;
  });

  return (
    <Stack>
      <Card bg={'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-8))'} withBorder>
        <Group justify="space-between" wrap="nowrap">
          <Group>
            <Select
              aria-label="Filter by quiz"
              placeholder="Filter by quiz"
              data={[
                { label: '', value: '' },
                ...(quizzes || []).map((pi) => {
                  return { label: pi.title, value: pi.id };
                }),
              ]}
              value={quizId}
              onChange={setQuizId}
              leftSection={<IconFilter size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
              size="xs"
              w={240}
              clearable
              clearSectionMode="clear"
              searchable
              nothingFoundMessage="No quiz found..."
              checkIconPosition="right"
              allowDeselect={false}
              limit={10}
            />

            <Select
              aria-label="Filter by user"
              placeholder="Filter by user"
              data={[
                { label: '', value: '' },
                ...(profiles || []).map((pi) => {
                  return { label: pi.email, value: pi.id };
                }),
              ]}
              value={profileId}
              onChange={setProfileId}
              leftSection={<IconFilter size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
              size="xs"
              w={240}
              clearable
              clearSectionMode="clear"
              searchable
              nothingFoundMessage="No user found..."
              checkIconPosition="right"
              allowDeselect={false}
              limit={10}
            />
          </Group>

          <Group justify="end">
            <Tooltip
              label={'Clear all filters'}
              onClick={() => {
                setProfileId('');
                setQuizId('');
              }}
            >
              <ActionIcon color="red" variant="light">
                <IconFilterX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>
      </Card>

      <Table>
        <TableThead>
          <TableTr>
            <TableTh w={WIDTHS.TITLE}>Title</TableTh>
            <TableTh w={WIDTHS.STATUS}>Status</TableTh>
            <TableTh w={WIDTHS.RESULT}>Result</TableTh>
            <TableTh w={WIDTHS.CREATED}>Date Started</TableTh>
            <TableTh w={WIDTHS.ACTIONS} />
          </TableTr>
        </TableThead>

        <TableTbody>
          {attempts === undefined ? (
            <TableTr>
              <TableTd colSpan={10}>
                <Stack align="center" ta={'center'} my={SECTION_SPACING * 2}>
                  <Loader size={'xs'} />
                  <Text c={'dimmed'}>Fetching items</Text>
                </Stack>
              </TableTd>
            </TableTr>
          ) : !attempts?.length ? (
            <TableTr>
              <TableTd colSpan={10}>
                <Stack align="center" ta={'center'} my={SECTION_SPACING * 2}>
                  <Text c={'dimmed'}>No attempts found</Text>

                  <AnchorNextLink href="/admin/attempts/new-attempt">
                    <Button size={'xs'}>Create Attempt</Button>
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
              Showing: {pageRange?.from} to {pageRange?.to} of {filteredAttempts?.length}
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
  TITLE: '40%',
  STATUS: '15%',
  RESULT: '15%',
  CREATED: '20%',
  ACTIONS: '10%',
};

interface AttemptRowProps {
  attempt: AttemptGet;
  onDelete: (ai: any) => void;
}

function AttemptRow({ attempt: ai, onDelete }: AttemptRowProps) {
  const quizzes = useStoreQuiz((s) => s.quizzes);
  const profiles = useStoreProfile((s) => s.profiles);

  // Hook is now called at the top level of a React component
  const { completeStats, metaStats } = useQuizStats({
    attemptId: ai.id,
  });

  const quizCurrent = quizzes?.find((qi) => qi.id == ai.quizId);
  const studentCurrent = profiles?.find((pi) => pi.id == ai.profileId);

  const completionPercentage = (completeStats.questions.total / metaStats.totalQuestions) * 100;

  const created = getRegionalDate(ai.createdAt);
  const updated = getRegionalDate(ai.updatedAt);

  return (
    <TableTr key={ai.id}>
      <TableTd w={WIDTHS.TITLE}>
        <Text component="span" inherit lineClamp={1}>
          {quizCurrent?.title}
        </Text>
        <Text component="span" inherit lineClamp={1} c={'dimmed'} fz={'xs'}>
          {studentCurrent?.email}
        </Text>
      </TableTd>

      <TableTd w={WIDTHS.STATUS}>
        <BadgeStatus props={{ status: ai.status }} />
      </TableTd>

      <TableTd w={WIDTHS.RESULT}>
        {ai.status == Status.COMPLETE ? (
          <BadgeResult
            props={{
              pass: completeStats.passed,
            }}
          />
        ) : completionPercentage ? (
          <Text inherit>
            <Text component="span" inherit fw={'bold'}>
              <NumberFormatter value={Math.floor(completionPercentage)} />
            </Text>
            % complete
          </Text>
        ) : null}
      </TableTd>

      <TableTd w={WIDTHS.CREATED}>
        <Text component="span" inherit fz={'sm'}>
          {created.date}, {`${created.time}`.toUpperCase()}
        </Text>
      </TableTd>

      <TableTd w={WIDTHS.ACTIONS}>
        <Group justify="end" gap={'xs'}>
          <ModalConfirm
            props={{
              variant: Alert.DANGER,
              title: 'Delete Quiz Attempt',
              desc: 'Are you sure you want to delete this attempt? This action is irreversible.',
              onConfirm: () => {
                onDelete(ai);
              },
            }}
          >
            <Tooltip label={'Delete Attempt'}>
              <ActionIcon size={ICON_WRAPPER_SIZE} variant="light" color="red">
                <IconTrash size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              </ActionIcon>
            </Tooltip>
          </ModalConfirm>
        </Group>
      </TableTd>
    </TableTr>
  );
}
