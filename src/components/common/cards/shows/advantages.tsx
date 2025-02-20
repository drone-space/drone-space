import React from 'react';
import classes from './advantages.module.scss';
import { Card, Group, Text, ThemeIcon, Title } from '@mantine/core';
import { Icon } from '@tabler/icons-react';

export default function Advantages({
  data,
}: {
  data: { label: string; item: string; icon: { icon: Icon } };
}) {
  return (
    <Card className={classes.card} padding={0} bg={'transparent'}>
      <Group>
        <ThemeIcon size={20} color="sec.3" c={'pri.9'}>
          <data.icon.icon size={12} stroke={3} />
        </ThemeIcon>

        <Title order={2} fz={'md'}>
          {data.label}
        </Title>
      </Group>

      <Text mt={'xs'} fz={'sm'}>
        {data.item}
      </Text>
    </Card>
  );
}
