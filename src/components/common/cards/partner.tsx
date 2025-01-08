import React from 'react';
import { Card, Image, Stack } from '@mantine/core';
import NextImage from 'next/image';
import classes from './partner.module.scss';

export default function Partner({
  data,
}: {
  data: { image: string; title: string; width: string };
}) {
  return (
    <Card className={classes.card}>
      <Stack justify="center" mih={80} className={classes.imageContainer}>
        <Image
          src={data.image}
          alt={data.title}
          loading="lazy"
          radius={'sm'}
          component={NextImage}
          width={1920}
          height={1080}
          className={classes.image}
          w={data.width}
        />
      </Stack>
    </Card>
  );
}
