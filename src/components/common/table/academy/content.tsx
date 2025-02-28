import React from 'react';
import {
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from '@mantine/core';
import { getRegionalDate } from '@/utilities/formatters/date';
import AvatarGroup from '../../avatars/group';

export default function Content({ props }: { props: any[] }) {
  const rows = records.map((item, index) => {
    const date = getRegionalDate(item.createdAt);

    return (
      <TableTr key={index}>
        <TableTd>{item.title}</TableTd>
        <TableTd>{item.type}</TableTd>
        <TableTd>
          <AvatarGroup props={item.enrollments} />
        </TableTd>
        <TableTd>{item.createdBy}</TableTd>
        <TableTd>{`${date.date}, ${date.time.toUpperCase()}`}</TableTd>
      </TableTr>
    );
  });

  return (
    <Table>
      <TableThead>
        <TableTr>
          <TableTh>Title</TableTh>
          <TableTh>Type</TableTh>
          <TableTh>Enrollments</TableTh>
          <TableTh>Created By</TableTh>
          <TableTh>Added</TableTh>
        </TableTr>
      </TableThead>

      <TableTbody>{rows}</TableTbody>
    </Table>
  );
}

const records = [
  {
    title: 'Item 1',
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
    createdAt: new Date(),
  },
];
