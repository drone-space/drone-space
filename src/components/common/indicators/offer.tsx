import React from 'react';

import { Badge, Group, Indicator, Text } from '@mantine/core';

import { IconInfoCircle } from '@tabler/icons-react';

export default function Offer() {
  return (
    <Group>
      <Indicator
        withBorder
        processing
        radius={'sm'}
        size={20}
        label={
          <Text component="span" inherit fz={{ base: 8, lg: 10 }}>
            Offer
          </Text>
        }
      >
        <Badge
          size={'md'}
          radius={'sm'}
          variant="gradient"
          gradient={{ from: 'pri', to: 'sec', deg: 165 }}
          leftSection={<IconInfoCircle size={12} stroke={1.5} />}
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
