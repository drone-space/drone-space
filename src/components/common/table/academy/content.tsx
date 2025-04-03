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
import {
  IconArrowDown,
  IconArrowUp,
  IconCheckbox,
  IconNotebook,
  IconPencil,
  IconSchool,
} from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SCROLLBAR_SIZE,
} from '@/data/constants';
import { useSortArray } from '@/hooks/sort/array';
import { Order } from '@/enums/sort';
import { capitalizeWord } from '@/utilities/formatters/string';
import { useAppSelector } from '@/hooks/redux';

export default function Content() {
  const projects = useAppSelector((state) => state.projects.value);
  const courses = useAppSelector((state) => state.courses.value);
  const modules = useAppSelector((state) => state.modules.value);
  const quizzes = useAppSelector((state) => state.quizzes.value);
  const assignments = useAppSelector((state) => state.assignments.value);

  const listItems = [
    ...(!courses
      ? []
      : courses.map((c) => {
          return { ...c, type: 'course' };
        })),
    ...(!modules
      ? []
      : modules.map((m) => {
          return { ...m, type: 'module' };
        })),
    ...(!quizzes
      ? []
      : quizzes.map((q) => {
          return { ...q, type: 'quiz' };
        })),
    ...(!assignments
      ? []
      : assignments.map((a) => {
          return { ...a, type: 'assignment' };
        })),
  ];

  const [list, setList] = useState(listItems);

  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const { sortBy, orderMap } = useSortArray(setList);

  const rows = list.map((item, index) => {
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
            {getTypeIcon({ props: { type: item.type } })}

            {item.title}
          </Group>
        </TableTd>

        <TableTd w={widths.type}>{capitalizeWord(item.type)}</TableTd>

        <TableTd w={widths.project}>
          {(item as any).projectId
            ? projects?.find((p) => p.id == (item as any).projectId)?.title
            : 'No Project'}
        </TableTd>

        <TableTd w={widths.enrollments}>
          {(item as any).profiles?.length ? (
            <AvatarGroup props={(item as any).profiles} />
          ) : (
            'No Enrollments'
          )}
        </TableTd>

        <TableTd w={widths.createdAt}>
          {
            getRegionalDate(item.createdAt, { locale: 'en-GB', format: 'full' })
              .date
          }
        </TableTd>
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

            <TableTh w={widths.project}>Project</TableTh>

            <TableTh w={widths.enrollments}>Enrollments</TableTh>

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
  type: '10%',
  project: '20%',
  enrollments: '20%',
  createdAt: '20%',
};

const getTypeIcon = ({ props }: { props: { type: string } }) => {
  switch (props.type) {
    case 'course':
      return (
        <ThemeIcon
          size={ICON_WRAPPER_SIZE * 1.25}
          variant="light"
          color="blue"
          c="blue"
        >
          <IconSchool size={ICON_SIZE * 1.1} stroke={ICON_STROKE_WIDTH} />
        </ThemeIcon>
      );
    case 'module':
      return (
        <ThemeIcon
          size={ICON_WRAPPER_SIZE * 1.25}
          variant="light"
          color="red"
          c="red"
        >
          <IconNotebook size={ICON_SIZE * 1.1} stroke={ICON_STROKE_WIDTH} />
        </ThemeIcon>
      );
    case 'quiz':
      return (
        <ThemeIcon
          size={ICON_WRAPPER_SIZE * 1.25}
          variant="light"
          color="green"
          c="green"
        >
          <IconCheckbox size={ICON_SIZE * 1.1} stroke={ICON_STROKE_WIDTH} />
        </ThemeIcon>
      );
    case 'assignment':
      return (
        <ThemeIcon
          size={ICON_WRAPPER_SIZE * 1.25}
          variant="light"
          color="yellow"
          c={'yellow'}
        >
          <IconPencil size={ICON_SIZE * 1.1} stroke={ICON_STROKE_WIDTH} />
        </ThemeIcon>
      );
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
