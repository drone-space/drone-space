import React from 'react';
import NextImage from 'next/image';
import { Avatar, Card, Image, Stack, Text, Title } from '@mantine/core';
import classes from './main.module.scss';
import { typeTeam } from '@/types/static/team';

export default function Main({ data }: { data: typeTeam }) {
  return (
    <Card className={classes.card} withBorder>
      <Stack align="center" gap={'xl'}>
        {data.image ? (
          <Stack h={'100%'}>
            <Image
              src={data.image}
              alt={'Drone Shop'}
              radius={999}
              loading="lazy"
              component={NextImage}
              width={1080}
              height={1080}
            />
          </Stack>
        ) : (
          <Avatar size={120} />
        )}

        <Stack gap={6}>
          <Title order={2} fz={'md'} fw={'bold'} ta={'center'}>
            {data.name}
          </Title>
          <Text fz={'sm'} fw={500} ta={'center'} c={'dimmed'}>
            {data.position}
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
}
