import React from 'react';
import { ThemeIcon, Text, Title, Card, Stack } from '@mantine/core';
import { Icon } from '@tabler/icons-react';
import classes from './why.module.scss';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';

interface typeCardFeatureWhy {
  icon: Icon;
  title: string;
  desc: string;
}

export default function Why({ data }: { data: typeCardFeatureWhy }) {
  return (
    <Card className={classes.card}>
      <Stack align="center">
        <ThemeIcon
          size={ICON_WRAPPER_SIZE * 2}
          radius={48}
          className={classes.icon}
        >
          <data.icon size={ICON_SIZE * 2} stroke={ICON_STROKE_WIDTH} />
        </ThemeIcon>

        <Stack gap={'xs'} align="center">
          <Title ta={'center'} order={2} fz={'xl'} className={classes.title}>
            {data.title}
          </Title>
          <Text ta={'center'} fz={{ base: 'sm', lg: 'md' }}>
            {data.desc}
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
}
