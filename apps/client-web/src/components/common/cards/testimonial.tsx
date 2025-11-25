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
import ImageDefault from '@repo/components/common/images/default';
import { StudentGet } from '@repo/types/models/student';
import { IconQuote } from '@tabler/icons-react';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { ICON_SIZE, ICON_WRAPPER_SIZE } from '@repo/constants/sizes';
import { processUrl } from '@repo/utilities/url';

export default function Testimonial({ props }: { props: StudentGet }) {
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
              borderRadius: 999,
              overflow: 'hidden',
            }}
            miw={64}
          >
            <ImageDefault
              src={processUrl(
                props.image,
                PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT
              )}
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
