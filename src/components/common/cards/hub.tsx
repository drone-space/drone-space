import React from 'react';

import { Divider, List, ListItem, Text, Title } from '@mantine/core';

import classes from './hub.module.scss';

export interface typeCardHub {
  title: string;
  list: string[];
}

export default function Hub({ data }: { data: typeCardHub }) {
  return (
    <div className={classes.card}>
      <Title order={3} fz={{ md: 'md', lg: 'lg' }} className={classes.title}>
        {data.title}
      </Title>

      <Divider
        mt={'xs'}
        color="light-dark(var(--mantine-color-sec-3),var(--mantine-color-sec-3))"
      />

      <List mt={'xs'} spacing={'xs'} listStyleType="none">
        {data.list.map((item, index) => (
          <ListItem key={index}>
            <Text component="span" inherit fz={{ md: 'xs', lg: 'sm' }}>
              {item}
            </Text>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
