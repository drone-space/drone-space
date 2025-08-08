import React from 'react';
import { ThemeIcon, Text, Title, Card, Group } from '@mantine/core';
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
    <Card className={classes.card} p={{ md: 'xl' }}>
      <Group>
        <ThemeIcon
          size={ICON_WRAPPER_SIZE * 1.5}
          radius={48}
          className={classes.icon}
        >
          <data.icon size={ICON_SIZE * 1.25} stroke={ICON_STROKE_WIDTH} />
        </ThemeIcon>
      </Group>

      <Title mt={'xl'} order={2} fz={'md'}>
        {data.title}
      </Title>

      <Text mt={'md'} fz={{ base: 'sm' }}>
        {data.desc}
      </Text>
    </Card>
  );
}
