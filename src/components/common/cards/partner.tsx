import React from 'react';
import { Card, Stack } from '@mantine/core';
import classes from './partner.module.scss';
import ImageDefault from '../images/default';

export default function Partner({
  data,
}: {
  data: { image: string; title: string; height: number };
}) {
  return (
    <Card className={classes.card} h={'100%'}>
      <Stack justify="center" h={'100%'}>
        <ImageDefault
          src={data.image}
          alt={data.title}
          loading="lazy"
          fit="contain"
          radius={'sm'}
          height={data.height}
          className={classes.image}
        />
      </Stack>
    </Card>
  );
}
