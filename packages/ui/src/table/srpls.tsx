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
import { useStoreSrpl } from '@repo/store';
import { getRegionalDate } from '@repo/utils';
import { ICON_SIZE, ICON_STROKE_WIDTH, ICON_WRAPPER_SIZE, SECTION_SPACING } from '@repo/constants';
import { IconEdit } from '@tabler/icons-react';
import { AnchorNextLink } from '../anchor/next-link';
import { BadgeStatus } from '../badge/status';
import { sortArray } from '@repo/utils';
import { Order } from '@repo/types';

export function TableSrpls() {
  const srpls = useStoreSrpl((s) => s.srpls);

  const rows = sortArray(srpls || [], (i) => i.createdAt, Order.DESCENDING).map((qi) => {
    const created = getRegionalDate(qi.createdAt, {
      // locale: 'en-GB',
      // format: 'numeric',
    });
    const updated = getRegionalDate(qi.updatedAt, {
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
            <AnchorNextLink href={`/admin/srpls/${qi.id}/edit-srpl`}>
              <ActionIcon size={ICON_WRAPPER_SIZE} variant="subtle">
                <IconEdit size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              </ActionIcon>
            </AnchorNextLink>
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

                <AnchorNextLink href="/admin/srpls/new-srpl">
                  <Button size={'xs'}>Create SRPL</Button>
                </AnchorNextLink>
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
