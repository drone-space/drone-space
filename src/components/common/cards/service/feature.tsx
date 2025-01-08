import React from 'react';
import { Card, Stack, Text, Title } from '@mantine/core';
import classes from './feature.module.scss';

export default function Feature({
  data,
}: {
  data: { title: string; desc: string | null };
}) {
  return (
    <Card h={'100%'} className={classes.card}>
      <Stack gap={'xs'} align="start" p={'md'}>
        <Title
          order={3}
          fz={{ md: 'lg' }}
          w={{ md: '90%' }}
          className={classes.title}
        >
          {data.title}
        </Title>
        <Text fz={{ md: 'sm', lg: 'md' }}>{data.desc}</Text>
      </Stack>
    </Card>
  );
}
