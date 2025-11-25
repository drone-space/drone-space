import React from 'react';
import { Badge, Group, Indicator, Text } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';

export default function Offer() {
  return (
    <Group>
      <Indicator
        withBorder
        processing
        size={20}
        label={
          <Text component="span" inherit fz={{ base: 8, lg: 10 }}>
            Offer
          </Text>
        }
      >
        <Badge
          size={'md'}
          variant="gradient"
          gradient={{ from: 'pri', to: 'sec', deg: 165 }}
          leftSection={
            <IconInfoCircle size={ICON_SIZE / 1.5} stroke={ICON_STROKE_WIDTH} />
          }
          fz={{ base: 8, lg: 10 }}
        >
          RPL Course Discount (
          <Text component="span" inherit td={'line-through'}>
            170,000/-
          </Text>{' '}
          136,000/-)
        </Badge>
      </Indicator>
    </Group>
  );
}
