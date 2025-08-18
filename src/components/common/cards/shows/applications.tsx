import React from 'react';
import classes from './applications.module.scss';
import { Card, Text, ThemeIcon, Title } from '@mantine/core';
import { Icon } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';

export default function Applications({
  data,
}: {
  data: { label: string; item: string; icon: Icon };
}) {
  return (
    <Card className={classes.card} withBorder>
      <ThemeIcon
        size={ICON_WRAPPER_SIZE * 2}
        color="sec.3"
        c={'pri.8'}
        className={classes.icon}
      >
        <data.icon size={ICON_SIZE * 2} stroke={ICON_STROKE_WIDTH} />
      </ThemeIcon>

      <Title mt={'md'} order={2} fz={'md'} className={classes.title}>
        {data.label}
      </Title>

      <Text fz={'sm'} mt={'xs'}>
        {data.item}
      </Text>
    </Card>
  );
}
