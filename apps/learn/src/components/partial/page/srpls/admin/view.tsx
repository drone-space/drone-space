'use client';

import React from 'react';
import { Box, Button, Group } from '@mantine/core';
import TablesSrpls from '@repo/ui/common/tables/srpls';
import NextLink from '@repo/ui/common/anchor/next-link';
import HeaderAppContent from '@/components/layout/headers/app-content';

export default function View() {
  return (
    <div>
      <HeaderAppContent />

      <Group justify="space-between" align="end">
        <div></div>

        <div>
          <NextLink href={'/admin/srpls/new-quiz'}>
            <Button>New SRPL</Button>
          </NextLink>
        </div>
      </Group>

      <Box mt={'md'}>
        <TablesSrpls />
      </Box>
    </div>
  );
}
