'use client';

import React from 'react';
import { ActionIcon, Group, Tooltip } from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';
import InputSearch from '@/components/common/inputs/search';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import {
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconMenu2,
} from '@tabler/icons-react';
import { useFullscreen } from '@mantine/hooks';
import MenuMain from '@/components/common/menus/main';

export default function App() {
  const { toggle, fullscreen } = useFullscreen();

  const fullscreenProps = {
    icon: fullscreen ? IconArrowsMinimize : IconArrowsMaximize,
    label: fullscreen ? 'Exit' : 'Enter',
  };

  return (
    <LayoutSection id={'header-shell-app'} h={'100%'} containerized={false}>
      <Group h={'100%'} justify="space-between" wrap="nowrap">
        <Group w={'30%'}></Group>

        <Group w={'40%'} justify="center">
          <InputSearch />
        </Group>

        <Group w={'30%'} justify="end">
          <MenuMain>
            <Tooltip label={'Show the main menu'}>
              <Group>
                <ActionIcon variant="subtle" size={ICON_WRAPPER_SIZE}>
                  <IconMenu2 size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                </ActionIcon>
              </Group>
            </Tooltip>
          </MenuMain>

          <Tooltip label={`${fullscreenProps.label} fullscreen mode`}>
            <Group>
              <ActionIcon
                variant="subtle"
                size={ICON_WRAPPER_SIZE}
                onClick={toggle}
              >
                <fullscreenProps.icon
                  size={ICON_SIZE}
                  stroke={ICON_STROKE_WIDTH}
                />
              </ActionIcon>
            </Group>
          </Tooltip>
        </Group>
      </Group>
    </LayoutSection>
  );
}
