import { Card, Flex, Group, Overlay, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import ImageDefault from '@/components/common/images/default';
import { Student } from '@prisma/client';
import { IconBlockquote } from '@tabler/icons-react';
import { ICON_SIZE } from '@/data/constants';

export default function Testimonial({ props }: { props: Student }) {
  return (
    <Card shadow="xs" bg={'white'} h={'100%'}>
      <Overlay backgroundOpacity={0} opacity={0.33} p={'md'}>
        <Group h={'100%'} align="end" justify="end">
          <IconBlockquote
            size={ICON_SIZE * 4}
            color="var(--mantine-color-sec-3)"
          />
        </Group>
      </Overlay>

      <Flex
        direction={'column'}
        gap={'xl'}
        justify={'space-between'}
        h={'100%'}
      >
        {props.quote ? (
          <Text>&quot;{props.quote}&quot;</Text>
        ) : (
          <Text>&quot;quote missing&quot;</Text>
        )}

        <Group wrap="nowrap" align="start">
          <Group
            style={{
              borderRadius: 'var(--mantine-radius-sm)',
              boxShadow: 'var(--mantine-shadow-xs)',
              overflow: 'hidden',
            }}
            miw={64}
          >
            <ImageDefault
              src={props.image}
              alt={props.name}
              height={64}
              width={64}
              mode="grid"
            />
          </Group>

          <Stack gap={0}>
            <Title order={3} fz={'md'}>
              {props.name}
            </Title>
            <Text fz={'sm'} c={'dimmed'}>
              {props.position}
            </Text>
          </Stack>
        </Group>
      </Flex>
    </Card>
  );
}
