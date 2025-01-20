import {
  ActionIcon,
  Card,
  Flex,
  Group,
  Rating,
  Stack,
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
    <Card shadow="xs" bg={'white'} h={'100%'} padding={'xl'}>
      <Stack h={'100%'}>
        <Group>
          <ActionIcon size={ICON_WRAPPER_SIZE * 2} c="sec.3">
            <IconQuote size={ICON_SIZE * 2} />
          </ActionIcon>
        </Group>

        <Flex
          direction={'column'}
          gap={'xl'}
          justify={'space-between'}
          h={'100%'}
        >
          <Text fz={'sm'}>{props.quote}</Text>

          <Stack>
            <Rating defaultValue={5} />

            <Group wrap="nowrap" align="start">
              <Group
                style={{
                  borderRadius: 'var(--mantine-radius-xl)',
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
          </Stack>
        </Flex>
      </Stack>
    </Card>
  );
}
