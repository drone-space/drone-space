'use client';

import React from 'react';
import { Box, Group } from '@mantine/core';
import { TableAttempts } from '@repo/ui';
import HeaderAppContent from '@learn/ui/layout/headers/app-content';

export default function View() {
  return (
    <div>
      <HeaderAppContent />

      <Group justify="space-between" align="end">
        <div></div>

        <div></div>
      </Group>

      <Box mt={'md'}>
        <TableAttempts />
      </Box>
    </div>
  );
}
