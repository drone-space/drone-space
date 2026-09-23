'use client';

import { Box, Stack } from '@mantine/core';
import { PageProps } from '@repo/types';
import { SECTION_SPACING } from '@repo/constants';

export function LayoutPage({ children, padded, stacked, ...rest }: PageProps) {
  const py =
    typeof padded === 'boolean'
      ? SECTION_SPACING
      : typeof padded !== 'undefined'
        ? padded
        : undefined;

  // If stacked, render a Stack; otherwise, render a Box-as-article
  if (stacked) {
    const gap =
      typeof stacked === 'boolean'
        ? SECTION_SPACING
        : typeof stacked !== 'undefined'
          ? stacked
          : undefined;

    return (
      <Stack w="100%" gap={gap} py={py} {...rest}>
        {children}
      </Stack>
    );
  }

  return (
    <Box component="article" w="100%" py={py} {...rest}>
      {children}
    </Box>
  );
}
