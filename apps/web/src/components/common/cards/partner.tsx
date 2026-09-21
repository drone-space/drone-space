import React from 'react';
import { Card, Stack } from '@mantine/core';
import classes from './partner.module.css';
import ImageDefault from '@repo/ui/common/images/default';

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
          height={data.height}
          className={classes.image}
        />
      </Stack>
    </Card>
  );
}
