'use client';

import React from 'react';
import {
  Box,
  Grid,
  GridCol,
  Loader,
  Stack,
  Text,
  ThemeIcon,
} from '@mantine/core';
import HeaderAppContent from '@/components/layout/headers/app-content';
import CardAttemptStudentView from '@repo/components/common/cards/attempt/student/view';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { IconX } from '@tabler/icons-react';
import { useStoreAttempt } from '@repo/libraries/zustand/stores/attempt';

export default function Many() {
  const attempts = useStoreAttempt((s) => s.attempts);

  return (
    <div>
      <HeaderAppContent />

      <Box mt={'md'}>
        {attempts === undefined ? (
          <Stack align={'center'} ta={'center'} py={SECTION_SPACING}>
            <Loader size={'xs'} />
            <Text inherit c={'dimmed'} fz={'sm'}>
              Fetching attempts
            </Text>
          </Stack>
        ) : !attempts?.length ? (
          <Stack align={'center'} ta={'center'} py={SECTION_SPACING}>
            <ThemeIcon size={ICON_WRAPPER_SIZE} variant="light">
              <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            </ThemeIcon>

            <Text inherit c={'dimmed'} fz={'sm'}>
              No attempts found.
            </Text>
          </Stack>
        ) : (
          <Grid gutter={'xl'}>
            {attempts.map((ai) => (
              <GridCol key={ai.id} span={{ base: 12 }}>
                <CardAttemptStudentView props={{ attempt: ai }} />
              </GridCol>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
}
