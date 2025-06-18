import React from 'react';
import classes from './understand.module.scss';
import { Card, Group, Text, Title } from '@mantine/core';

export default function Understand({
  data,
}: {
  data: { label: string; item: string };
}) {
  return (
    <Card className={classes.card} padding={'md'}>
      <Group>
        {/* <ThemeIcon size={20} color="sec.3" c={"pri.7"}>
						<data.icon.icon size={12} stroke={3} />
					</ThemeIcon> */}

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
