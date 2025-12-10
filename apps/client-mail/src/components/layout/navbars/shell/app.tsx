'use client';

import React from 'react';
import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Group,
  Stack,
  Tooltip,
} from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import {
  IconCloudDown,
  IconDotsVertical,
  IconMailPlus,
} from '@tabler/icons-react';

export default function App() {
  return (
    <LayoutSection id={'navbar-shell-app'} containerized={false}>
      <Box
        bg={
          'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-8))'
        }
        style={{ position: 'sticky', top: 0, zIndex: 10 }}
      >
        <Group gap={'xs'} p="xs" pr={'md'} justify="space-between">
          <Group gap={'xs'}>
            <Tooltip label={'Get messages'}>
              <Group>
                <ActionIcon variant="default" size={ICON_WRAPPER_SIZE}>
                  <IconCloudDown size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                </ActionIcon>
              </Group>
            </Tooltip>

            <Tooltip label={'Compose a new message'}>
              <Button
                size="compact-sm"
                fz={'xs'}
                variant="default"
                leftSection={
                  <IconMailPlus size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                }
              >
                New Message
              </Button>
            </Tooltip>
          </Group>

          <Group justify="end">
            <Tooltip label={'Folder pane options'}>
              <Group>
                <ActionIcon variant="default" size={ICON_WRAPPER_SIZE}>
                  <IconDotsVertical
                    size={ICON_SIZE}
                    stroke={ICON_STROKE_WIDTH}
                  />
                </ActionIcon>
              </Group>
            </Tooltip>
          </Group>
        </Group>

        <Divider />
      </Box>

      <Stack mih={'150vh'} p="xs">
        <div>navlist</div>
      </Stack>
    </LayoutSection>
  );
}
