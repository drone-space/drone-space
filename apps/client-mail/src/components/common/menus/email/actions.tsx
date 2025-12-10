'use client';

import React from 'react';
import { Menu, MenuTarget, MenuDropdown, MenuItem } from '@mantine/core';
import {
  IconArchive,
  IconNotification,
  IconPrinter,
} from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';

export default function Actions({ children }: { children: React.ReactNode }) {
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
        <MenuItem
          leftSection={
            <IconArchive size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
        >
          Archive
        </MenuItem>

        <MenuItem
          leftSection={
            <IconNotification size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
        >
          Mark as Unread
        </MenuItem>

        <MenuItem
          leftSection={
            <IconPrinter size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
        >
          Print
        </MenuItem>
      </MenuDropdown>
    </Menu>
  );
}
