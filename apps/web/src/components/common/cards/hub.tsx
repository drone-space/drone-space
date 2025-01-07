import React from 'react';

import { Divider, List, ListItem, Stack, Text, Title } from '@mantine/core';

import classes from './hub.module.scss';

export interface typeCardHub {
  title: string;
  list: string[];
}

export default function Hub({ data }: { data: typeCardHub }) {
  return (
    <Stack h={'100%'} w={'100%'} gap={'xs'} className={classes.card}>
      <Title order={3} fz={{ md: 'md', lg: 'lg' }} className={classes.title}>
        {data.title}
      </Title>

      <Divider color="light-dark(var(--mantine-color-sec-3),var(--mantine-color-sec-3))" />

      <List spacing={'xs'} listStyleType="none">
        {data.list.map((item) => (
          <ListItem key={item}>
            <Text component="span" inherit fz={{ md: 'xs', lg: 'sm' }}>
              {item}
            </Text>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
