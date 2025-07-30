import {
  ActionIcon,
  Card,
  Flex,
  Group,
  Rating,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';
import ImageDefault from '@/components/common/images/default';
import { Student } from '@prisma/client';
import { IconQuote } from '@tabler/icons-react';
import {
  HOSTED_BASE_URL,
  ICON_SIZE,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { processUrl } from '@/utilities/formatters/string';

export default function Testimonial({ props }: { props: Student }) {
  return (
    <Card withBorder h={'100%'} padding={'xl'}>
      <Group>
        <ActionIcon size={ICON_WRAPPER_SIZE * 2} c="sec.3">
          <IconQuote size={ICON_SIZE * 2} />
        </ActionIcon>
      </Group>

      <Flex
        direction={'column'}
        gap={'xs'}
        justify={'space-between'}
        h={'100%'}
        mt={'md'}
      >
        <Text fz={'sm'}>{props.quote}</Text>

        <Group mt={'md'} wrap="nowrap" align="start">
          <Group
            style={{
              border: '2px solid var(--mantine-color-sec-3)',
              borderRadius: 'var(--mantine-radius-xl)',
              overflow: 'hidden',
            }}
            miw={64}
          >
            <ImageDefault
              src={processUrl(props.image, HOSTED_BASE_URL.DEFAULT)}
              alt={props.name}
              height={64}
              width={64}
              mode="grid"
            />
          </Group>

          <div>
            <Title order={3} fz={'md'}>
              {props.name}
            </Title>

            <Text fz={'xs'} c={'dimmed'}>
              {props.position}
            </Text>

            <Rating defaultValue={5} readOnly mt={5} />
          </div>
        </Group>
      </Flex>
    </Card>
  );
}
