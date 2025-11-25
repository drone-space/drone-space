import {
  BackgroundImage,
  Badge,
  Card,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';
import classes from './upcoming.module.scss';

export default function Upcoming({ data }: { data: any }) {
  return (
    <Card className={classes.card} padding={0} pos={'relative'} h={'100%'}>
      <BackgroundImage src={data.card} pos={'relative'}>
        <Overlay opacity={0.4} zIndex={0} />

        <Stack
          p={'xl'}
          pos={'relative'}
          style={{ zIndex: 1 }}
          mih={600}
          c={
            data.inverted
              ? 'var(--mantine-color-white)'
              : 'var(--mantine-color-text)'
          }
          ta={'center'}
          justify="space-between"
        >
          <div>
            <Title
              order={3}
              fz={{ lg: '2.5rem' }}
              tt={'uppercase'}
              c={
                data.inverted
                  ? 'var(--mantine-color-white)'
                  : 'var(--mantine-color-black)'
              }
            >
              {data.title.short ? data.title.short : data.title.long}
            </Title>

            <Text fw={500} fz={'sm'}>
              {data.tag}
            </Text>
          </div>

          <Stack>
            <Group justify="center">
              <Badge
                color={data.inverted ? 'white' : 'black'}
                c={data.inverted ? 'black' : undefined}
                size="xl"
                fz={'sm'}
                fw={500}
              >
                Coming Soon
              </Badge>
            </Group>

            <Text fz={'xs'}>{data.desc}</Text>
          </Stack>
        </Stack>
      </BackgroundImage>
    </Card>
  );
}
