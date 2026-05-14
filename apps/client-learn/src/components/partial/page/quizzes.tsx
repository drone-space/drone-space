'use client';

import React from 'react';
import { Box, Button, Group } from '@mantine/core';
import TablesQuizzes from '@repo/components/common/tables/quizzes';
import NextLink from '@repo/components/common/anchor/next-link';
import HeaderAppContent from '@/components/layout/headers/app-content';

export default function Quizzes() {
  return (
    <div>
      <HeaderAppContent />

      <Group justify="space-between" align="end">
        <div></div>

        <div>
          <NextLink href={'/admin/quizzes/new-quiz'}>
            <Button>New Quiz</Button>
          </NextLink>
        </div>
      </Group>

      <Box mt={'md'}>
        <TablesQuizzes />
      </Box>
    </div>
  );
}
