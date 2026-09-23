'use client';

import React from 'react';
import { Box, Button, Group } from '@mantine/core';
import { TableSrpls } from '@repo/ui';
import { AnchorNextLink } from '@repo/ui';
import HeaderAppContent from '@learn/ui/layout/headers/app-content';

export default function View() {
  return (
    <div>
      <HeaderAppContent />

      <Group justify="space-between" align="end">
        <div></div>

        <div>
          <AnchorNextLink href={'/admin/srpls/new-srpl'}>
            <Button>New ID/Passport Number</Button>
          </AnchorNextLink>
        </div>
      </Group>

      <Box mt={'md'}>
        <TableSrpls />
      </Box>
    </div>
  );
}
