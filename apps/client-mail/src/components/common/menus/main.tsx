'use client';

import React from 'react';
import {
  Menu,
  MenuTarget,
  MenuDropdown,
  MenuItem,
  MenuDivider,
} from '@mantine/core';
import {
  IconHelpCircle,
  IconMailPlus,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserPlus,
} from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';

export default function Main({ children }: { children: React.ReactNode }) {
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
            <IconUserPlus size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
        >
          New Email Account
        </MenuItem>

        <MenuItem
          leftSection={
            <IconMailPlus size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
        >
          New Email Message
        </MenuItem>

        <MenuDivider />

        <MenuItem
          leftSection={
            <IconSettings size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
        >
          Settings
        </MenuItem>

        <MenuItem
          leftSection={
            <IconUserCog size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
        >
          Account Settings
        </MenuItem>

        <MenuDivider />

        <MenuItem
          leftSection={<IconTool size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
        >
          Tools
        </MenuItem>

        <MenuItem
          leftSection={
            <IconHelpCircle size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
        >
          FAQ&apos;s
        </MenuItem>
      </MenuDropdown>
    </Menu>
  );
}
