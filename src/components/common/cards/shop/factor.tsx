import { Card, Group, Text, ThemeIcon, Title } from '@mantine/core';
import React from 'react';
import classes from './factor.module.scss';
import { Icon } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';

export default function Factor({
  data,
}: {
  data: { title: string; desc: string; icon: Icon };
}) {
  return (
    <Card className={classes.card}>
      <Group align="end" justify="space-between">
        <Title order={3} className={classes.title}>
          {data.title}
        </Title>

        <ThemeIcon className={classes.icon} size={ICON_WRAPPER_SIZE * 1.5}>
          <data.icon size={ICON_SIZE * 1.5} stroke={ICON_STROKE_WIDTH} />
        </ThemeIcon>
      </Group>

      <Text className={classes.desc} mt={'md'}>
        {data.desc}
      </Text>
    </Card>
  );
}
