import React from 'react';
import { Group, Stack, Text, ThemeIcon, Tooltip } from '@mantine/core';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';

export default function WhatsApp({ children }: { children: React.ReactNode }) {
  return (
    <Tooltip
      color="pri"
      withArrow
      py={3}
      pl={4}
      label={
        <Group gap={'xs'}>
          <ThemeIcon size={ICON_WRAPPER_SIZE} color="green.4" c={'white'}>
            <IconBrandWhatsapp size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          </ThemeIcon>
          <Stack gap={0}>
            <Text inherit fz={'xs'} lh={1} fw={500}>
              WhatsApp
            </Text>
            <Text inherit fz={10} fw={500}>
              Help Center
            </Text>
          </Stack>
        </Group>
      }
    >
      {children}
    </Tooltip>
  );
}
