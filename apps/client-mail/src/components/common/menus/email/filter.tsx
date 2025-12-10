'use client';

import React from 'react';
import { Menu, MenuTarget, MenuDropdown, MenuItem } from '@mantine/core';
import { IconNotification, IconPaperclip, IconStar } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';

export default function Filter({ children }: { children: React.ReactNode }) {
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
            <IconNotification size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
        >
          Unread
        </MenuItem>

        <MenuItem
          leftSection={<IconStar size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
        >
          Starred
        </MenuItem>

        <MenuItem
          leftSection={
            <IconPaperclip size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
        >
          Attachment
        </MenuItem>
      </MenuDropdown>
    </Menu>
  );
}
