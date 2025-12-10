'use client';

import React from 'react';
import {
  Menu,
  MenuTarget,
  MenuDropdown,
  MenuItem,
  MenuDivider,
  Text,
  Box,
} from '@mantine/core';
import { IconCopy, IconMailPlus } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';

export default function Sender({ children }: { children: React.ReactNode }) {
  return (
    <Menu
      shadow="md"
      position="bottom-end"
      styles={{
        item: {
          padding: '5px var(--mantine-spacing-xs)',
        },
      }}
    >
      <MenuTarget>
        <span style={{ cursor: 'pointer' }}>{children}</span>
      </MenuTarget>

      <MenuDropdown>
        <Box px={'xs'} py={5} fz={'sm'}>
          <Text inherit c={'dimmed'}>
            noreply@notifications.hubspot.com
          </Text>
        </Box>

        <MenuDivider />

        <MenuItem
          leftSection={
            <IconMailPlus size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
        >
          Compose Message To
        </MenuItem>
        <MenuItem
          leftSection={<IconCopy size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
        >
          Copy Email Address
        </MenuItem>
        <MenuItem
          leftSection={<IconCopy size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
        >
          Copy Name and Email Address
        </MenuItem>
      </MenuDropdown>
    </Menu>
  );
}
