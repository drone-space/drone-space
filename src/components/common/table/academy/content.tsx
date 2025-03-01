'use client';

import React, { useState } from 'react';
import {
  Center,
  Checkbox,
  Group,
  ScrollArea,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { getRegionalDate } from '@/utilities/formatters/date';
import AvatarGroup from '../../avatars/group';
import { IconArrowDown, IconArrowUp, IconFile } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SCROLLBAR_SIZE,
} from '@/data/constants';
import { generateUUID } from '@/utilities/generators/id';
import { useSortArray } from '@/hooks/sort/array';
import { Order } from '@/enums/sort';
import { capitalizeWord, capitalizeWords } from '@/utilities/formatters/string';

export default function Content({ props }: { props: any[] }) {
  const [list, setList] = useState(props?.length ? props : records);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const { sortBy, orderMap } = useSortArray(setList);

  const rows = list.map((item, index) => {
    const date = getRegionalDate(item.createdAt);

    return (
      <TableTr
        key={index}
        bg={
          selectedRows.includes(item.id)
            ? 'var(--mantine-color-blue-light)'
            : undefined
        }
      >
        <TableTd w={widths.checkbox}>
          <Center>
            <Checkbox
              size="xs"
              aria-label="Select row"
              checked={selectedRows.includes(item.id)}
              onChange={(event) =>
                setSelectedRows(
                  event.currentTarget.checked
                    ? [...selectedRows, item.id]
                    : selectedRows.filter((position) => position !== item.id)
                )
              }
            />
          </Center>
        </TableTd>

        <TableTd w={widths.title}>
          <Group gap={'xs'}>
            <ThemeIcon size={ICON_WRAPPER_SIZE} variant="light">
              {getTypeIcon({ props: { type: item.type } })}
            </ThemeIcon>

            {item.title}
          </Group>
        </TableTd>

        <TableTd w={widths.type}>{capitalizeWord(item.type)}</TableTd>

        <TableTd w={widths.enrollments}>
          <AvatarGroup props={item.enrollments} />
        </TableTd>

        <TableTd w={widths.createdBy}>
          {capitalizeWords(item.createdBy)}
        </TableTd>

        <TableTd
          w={widths.createdAt}
        >{`${date.date}, ${date.time.toUpperCase()}`}</TableTd>
      </TableTr>
    );
  });

  return (
    <ScrollArea
      w={'100%'}
      scrollbars={'x'}
      offsetScrollbars
      scrollbarSize={SCROLLBAR_SIZE}
      type="auto"
    >
      <Table miw={1080} highlightOnHover>
        <TableThead>
          <TableTr>
            <TableTh w={widths.checkbox}>
              <Center>
                <Checkbox
                  size="xs"
                  aria-label="Select row"
                  checked={
                    selectedRows.length > 0 &&
                    selectedRows.length == list.length
                  }
                  indeterminate={
                    selectedRows.length > 0 && selectedRows.length < list.length
                  }
                  onChange={(event) => {
                    if (event.currentTarget.checked) {
                      setSelectedRows(list.map((r) => r.id));
                    } else {
                      setSelectedRows([]);
                    }
                  }}
                />
              </Center>
            </TableTh>

            <TableTh w={widths.title}>
              <ColumnTitle
                props={{
                  sortFunction: () => sortBy('title'),
                  order: orderMap.title,
                }}
              >
                Title
              </ColumnTitle>
            </TableTh>

            <TableTh w={widths.type}>
              <ColumnTitle
                props={{
                  sortFunction: () => sortBy('type'),
                  order: orderMap.type,
                }}
              >
                Type
              </ColumnTitle>
            </TableTh>

            <TableTh w={widths.enrollments}>Enrollments</TableTh>

            <TableTh w={widths.createdBy}>
              <ColumnTitle
                props={{
                  sortFunction: () => sortBy('createdBy'),
                  order: orderMap.createdBy,
                }}
              >
                Created By
              </ColumnTitle>
            </TableTh>

            <TableTh w={widths.createdAt}>
              <ColumnTitle
                props={{
                  sortFunction: () => sortBy('createdAt'),
                  order: orderMap.createdAt,
                }}
              >
                Added
              </ColumnTitle>
            </TableTh>
          </TableTr>
        </TableThead>

        <TableTbody>{rows}</TableTbody>
      </Table>
    </ScrollArea>
  );
}

const widths = {
  checkbox: '3%',
  title: '27%',
  type: '15%',
  enrollments: '20%',
  createdBy: '15%',
  createdAt: '15%',
};

const records = [
  {
    id: generateUUID(),
    title: 'How to Organize a Meeting',
    type: 'page',
    enrollments: [
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
        name: 'Harriette Spoonlicker',
        email: 'jane@example.com',
      },
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
        name: 'Michael Bay',
        email: 'mike@example.com',
      },
      {
        avatar: null,
        name: 'John Doe',
        email: 'mike@example.com',
      },
    ],
    createdBy: 'jane',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
  },
  {
    id: generateUUID(),
    title: 'My Course 1',
    type: 'page',
    enrollments: [
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png',
        name: 'Harriette Spoonlicker',
        email: 'jane@example.com',
      },
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
        name: 'Michael Bay',
        email: 'mike@example.com',
      },
      {
        avatar: null,
        name: 'John Doe',
        email: 'mike@example.com',
      },
    ],
    createdBy: 'jane',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
  },
  {
    id: generateUUID(),
    title: 'New Assignment',
    type: 'page',
    enrollments: [
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png',
        name: 'Harriette Spoonlicker',
        email: 'jane@example.com',
      },
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
        name: 'Michael Bay',
        email: 'mike@example.com',
      },
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
        name: 'Michael Bay',
        email: 'mike@example.com',
      },
    ],
    createdBy: 'jane',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
  },
  {
    id: generateUUID(),
    title: 'Random File',
    type: 'page',
    enrollments: [
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
        name: 'Michael Bay',
        email: 'mike@example.com',
      },
      {
        avatar: null,
        name: 'John Doe',
        email: 'mike@example.com',
      },
    ],
    createdBy: 'jane',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1),
  },
];

const getTypeIcon = ({ props }: { props: { type: string } }) => {
  switch (props.type) {
    case 'page':
      return <IconFile size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />;

    default:
      return;
  }
};

const ColumnTitle = ({
  children,
  props,
}: {
  children: string;
  props: { sortFunction: () => void; order: Order };
}) => {
  return (
    <Group
      gap={'xs'}
      style={{ cursor: 'pointer' }}
      onClick={props.sortFunction}
    >
      <Text component="span" inherit>
        {children}
      </Text>

      {props.order == Order.ASCENDING ? (
        <IconArrowUp size={ICON_SIZE / 1.2} stroke={ICON_STROKE_WIDTH * 2} />
      ) : props.order == Order.DESCENDING ? (
        <IconArrowDown size={ICON_SIZE / 1.2} stroke={ICON_STROKE_WIDTH * 2} />
      ) : (
        <></>
      )}
    </Group>
  );
};
