import React from 'react';

import { Badge, Group, Indicator, Text } from '@mantine/core';

import { IconInfoCircle } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default function Course() {
  return (
    <Group>
      <Indicator
        withBorder
        processing
        radius={'sm'}
        size={16}
        label={
          <Text component="span" inherit fz={8}>
            New
          </Text>
        }
      >
        <Badge
          size="sm"
          radius={'sm'}
          variant="gradient"
          gradient={{ from: 'pri', to: 'sec', deg: 165 }}
          leftSection={
            <IconInfoCircle size={ICON_SIZE / 1.5} stroke={ICON_STROKE_WIDTH} />
          }
          fz={8}
        >
          Radio Telephony Course
        </Badge>
      </Indicator>
    </Group>
  );
}
