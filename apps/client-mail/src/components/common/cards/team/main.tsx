import React from 'react';
import { Avatar, Card, Group, Text, Title } from '@mantine/core';
import { typeTeam } from '@/types/team';
import { ICON_WRAPPER_SIZE } from '@repo/constants/sizes';

export default function Main({ data }: { data: typeTeam }) {
  return (
    <Card withBorder padding={'xl'}>
      <Group justify="center">
        <Avatar
          src={data.image}
          alt={'Drone Shop'}
          size={ICON_WRAPPER_SIZE * 7}
          style={{
            border: '2.5px solid var(--mantine-color-sec-3)',
          }}
        />
      </Group>

      <Title mt={'xl'} order={2} fz={'md'} fw={'bold'} ta={'center'}>
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
