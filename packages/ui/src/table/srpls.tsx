'use client';

import React, { useState } from 'react';
import {
  ActionIcon,
  Button,
  Card,
  Group,
  Loader,
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
import { useSrplActions, useStoreProfile, useStoreSrpl } from '@repo/store';
import { getRegionalDate } from '@repo/utils';
import { ICON_SIZE, ICON_STROKE_WIDTH, ICON_WRAPPER_SIZE, SECTION_SPACING } from '@repo/constants';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { AnchorNextLink } from '../anchor/next-link';
import { BadgeStatus } from '../badge/status';
import { sortArray } from '@repo/utils';
import { Alert, Order } from '@repo/types';
import { usePaginate } from '@repo/hooks';
import { ModalConfirm } from '../modal/confirm';
import { InputSearch } from '../input/search';

export function TableSrpls() {
  const srpls = useStoreSrpl((s) => s.srpls);
  const { srplDelete } = useSrplActions();
  const profiles = useStoreProfile((s) => s.profiles);

  const [search, setSearch] = useState('');
  const searchFilter = !search
    ? srpls
    : srpls?.filter((qi) => qi.srplNumber.toLowerCase().includes(search.trim().toLowerCase()));

  const { items, activePage, setActivePage, totalPages, pageRange } = usePaginate(
    sortArray(searchFilter || [], (i) => i.createdAt, Order.DESCENDING) || [],
    10,
  );

  const rows = items.map((srpli) => {
    const studentCurrent = profiles?.find((pi) => pi.id == srpli.profileId);

    const created = getRegionalDate(srpli.createdAt, {
      // locale: 'en-GB',
      // format: 'numeric',
    });
    const updated = getRegionalDate(srpli.updatedAt, {
      // locale: 'en-GB',
      // format: 'numeric',
    });

    return (
      <TableTr key={srpli.id}>
        <TableTd w={WIDTHS.TITLE}>
          <Text component="span" inherit lineClamp={1}>
            {srpli.srplNumber}
          </Text>
          <Text component="span" inherit lineClamp={1} c={'dimmed'} fz={'xs'}>
            {studentCurrent?.email}
          </Text>
        </TableTd>

        <TableTd w={WIDTHS.STATUS}>
          <BadgeStatus props={{ status: srpli.status }} />
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
            <AnchorNextLink href={`/admin/srpls/${srpli.id}/edit-srpl`}>
              <ActionIcon size={ICON_WRAPPER_SIZE} variant="light" color="gray">
                <IconEdit size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              </ActionIcon>
            </AnchorNextLink>

            <ModalConfirm
              props={{
                variant: Alert.DANGER,
                title: 'Delete Pasport/ID Number',
                desc: 'Are you sure you want to delete this pasport/ID number? This action is irreversible.',
                onConfirm: () => {
                  srplDelete(srpli);
                },
              }}
            >
              <Tooltip label={'Delete pasport/ID number'}>
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
            <TableTh w={WIDTHS.UPDATED}>Date Updated</TableTh>
            <TableTh w={WIDTHS.ACTIONS} />
          </TableTr>
        </TableThead>

        <TableTbody>
          {srpls === undefined ? (
            <TableTr>
              <TableTd colSpan={10}>
                <Stack align="center" ta={'center'} my={SECTION_SPACING * 2}>
                  <Loader size={'xs'} />
                  <Text c={'dimmed'}>Fetching items</Text>
                </Stack>
              </TableTd>
            </TableTr>
          ) : !srpls?.length ? (
            <TableTr>
              <TableTd colSpan={10}>
                <Stack align="center" ta={'center'} my={SECTION_SPACING * 2}>
                  <Text c={'dimmed'}>No ID's/Passport Numbers found</Text>

                  <AnchorNextLink href="/admin/srpls/new-srpl">
                    <Button size={'xs'}>Create ID/Passport Number</Button>
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
              Showing: {pageRange?.from} to {pageRange?.to} of {srpls?.length}
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
  UPDATED: '22.5%',
  ACTIONS: '10%',
};
