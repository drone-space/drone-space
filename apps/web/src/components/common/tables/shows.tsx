import React from 'react';
import {
  Table,
  TableScrollContainer,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from '@mantine/core';

export default function Shows({
  data,
}: {
  data: { item: string; duration: string | null }[];
}) {
  const rows = data.map((item) => (
    <TableTr key={item.item}>
      <TableTd
        w={{ base: '80%', sm: '70%', md: '80%' }}
        fz={{ base: 'xs', lg: 'sm' }}
      >
        {item.item}
      </TableTd>
      <TableTd
        w={{ base: '80%', sm: '30%', md: '20%' }}
        fz={{ base: 'xs', lg: 'sm' }}
      >
        {item.duration ? `Week ${item.duration}` : '-'}
      </TableTd>
    </TableTr>
  ));

  return (
    <TableScrollContainer minWidth={400}>
      <Table striped withColumnBorders color="pri">
        <TableThead>
          <TableTr>
            <TableTh>Project</TableTh>
            <TableTh>Timeline</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{rows}</TableTbody>
      </Table>
    </TableScrollContainer>
  );
}
