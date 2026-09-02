'use client';

import React from 'react';
import { Box, Button, Group } from '@mantine/core';
import TablesQuestions from '@repo/components/common/tables/questions';
import NextLink from '@repo/components/common/anchor/next-link';
import HeaderAppContent from '@/components/layout/headers/app-content';

export default function View() {
  return (
    <div>
      <HeaderAppContent />

      <Group justify="space-between" align="end">
        <div></div>

        <div>
          <NextLink href={'/admin/questions/new-question'}>
            <Button>New Question</Button>
          </NextLink>
        </div>
      </Group>

      <Box mt={'md'}>
        <TablesQuestions />
      </Box>
    </div>
  );
}
