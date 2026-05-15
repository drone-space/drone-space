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
import { useStoreSession } from '@repo/libraries/zustand/stores/session';

export default function Many() {
  const attempts = useStoreAttempt((s) => s.attempts);
  const session = useStoreSession((s) => s.session);
  const userAttempts = attempts?.filter((ai) => ai.profile_id == session?.id);

  return (
    <div>
      <HeaderAppContent />

      <Box mt={'md'}>
        {attempts === undefined ? (
          <Stack>
            <Loader size={'xs'} />
            <Text inherit c={'dimmed'} fz={'sm'}>
              Fetching attempts.
            </Text>
          </Stack>
        ) : !userAttempts?.length ? (
          <Stack>
            <Text inherit c={'dimmed'} fz={'sm'}>
              No attempts found. Attempts will appear here when you take
              quizzes.
            </Text>
          </Stack>
        ) : (
          <Grid gutter={'xl'}>
            {userAttempts.map((ai) => (
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
