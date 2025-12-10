'use client';

import React from 'react';
import { Group, Tooltip } from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';

export default function App() {
  return (
    <LayoutSection id={'footer-shell-app'} containerized={false} h={'100%'}>
      <Group gap={'xs'} justify="space-between" h={'100%'}>
        <Group gap={'xs'}>
          <Tooltip label={`You're currently online`}>
            <Group>NI</Group>
          </Tooltip>
        </Group>
      </Group>
    </LayoutSection>
  );
}
