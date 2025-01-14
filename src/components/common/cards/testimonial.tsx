import { Card, Flex, Group, Overlay, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import ImageDefault from '@/components/common/images/default';
import { Student } from '@prisma/client';
import { IconQuote } from '@tabler/icons-react';
import { HOSTED_BASE_URL, ICON_SIZE } from '@/data/constants';
import { processUrl } from '@/utilities/formatters/string';

export default function Testimonial({ props }: { props: Student }) {
  return (
    <Card shadow="xs" bg={'white'} h={'100%'}>
      <Overlay backgroundOpacity={0} opacity={0.33} p={'xs'}>
        <Group h={'100%'} align="start" justify="end">
          <IconQuote size={ICON_SIZE * 3} color="var(--mantine-color-pri-9)" />
        </Group>
      </Overlay>

      <Flex
        direction={'column'}
        gap={'xl'}
        justify={'space-between'}
        h={'100%'}
      >
        <Text pt={'xl'} pr={32} fz={'sm'}>
          {props.quote}
        </Text>

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
              src={processUrl(props.image, HOSTED_BASE_URL.DRONE_SPACE)}
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
            <Text fz={'xs'} c={'dimmed'}>
              {props.position}
            </Text>
          </Stack>
        </Group>
      </Flex>
    </Card>
  );
}
