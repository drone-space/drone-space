import React from 'react';
import { Avatar, Card, Group, Stack, Text } from '@mantine/core';
import { ICON_WRAPPER_SIZE } from '@repo/constants/sizes';

export default function Sender() {
  return (
    <Card
      padding={0}
      px={'xs'}
      py={5}
      bg={
        'light-dark(var(--mantine-color-gray-light), var(--mantine-color-dark-6))'
      }
    >
      <Group gap={'xs'} wrap="nowrap">
        <Avatar size={ICON_WRAPPER_SIZE + 8} color="initials">
          H
        </Avatar>

        <Stack gap={0} fz={'sm'}>
          <Text inherit fw={'bold'}>
            Hubspot
          </Text>
          <Text inherit>noreply@notifications.hubspot.com</Text>
        </Stack>
      </Group>
    </Card>
  );
}
