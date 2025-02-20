import React from 'react';
import { Avatar, Card, Group, Text, Title } from '@mantine/core';
import { typeTeam } from '@/types/static/team';
import { ICON_WRAPPER_SIZE } from '@/data/constants';

export default function Main({ data }: { data: typeTeam }) {
  return (
    <Card bg={'var(--mantine-color-pri-9)'} padding={'xl'}>
      <Group justify="center">
        <Avatar
          src={data.image}
          alt={'Drone Shop'}
          size={ICON_WRAPPER_SIZE * 4}
        />
      </Group>

      <Title
        mt={'xl'}
        order={2}
        fz={'md'}
        fw={'bold'}
        ta={'center'}
        c={'var(--mantine-color-white)'}
      >
        {data.name}
      </Title>

      <Text
        mt={6}
        fz={'sm'}
        fw={500}
        ta={'center'}
        c={'var(--mantine-color-sec-3)'}
      >
        {data.position}
      </Text>
    </Card>
  );
}
