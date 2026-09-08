'use client';

import React from 'react';
import {
  ActionIcon,
  Button,
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
import { useStoreSrpl } from '@repo/libraries/zustand/stores/srpl';
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

export default function Srpls() {
  const srpls = useStoreSrpl((s) => s.srpls);

  const rows = sortArray(
    srpls || [],
    (i) => i.created_at,
    Order.DESCENDING
  ).map((qi) => {
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
        <TableTd w={WIDTHS.TITLE}>{qi.srplNumber}</TableTd>

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
            <NextLink href={`/admin/srpls/${qi.id}/edit-srpl`}>
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
                <Text c={'dimmed'}>No SRPLs found</Text>

                <NextLink href="/admin/srpls/new-srpl">
                  <Button size={'xs'}>Create SRPL</Button>
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
