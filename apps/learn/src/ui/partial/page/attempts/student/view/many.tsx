'use client';

import React from 'react';
import { Box, Grid, GridCol, Loader, Stack, Text } from '@mantine/core';
import HeaderAppContent from '@learn/ui/layout/headers/app-content';
import { CardAttemptStudentView } from '@repo/ui';
import { useStoreAppShell, useStoreAttempt } from '@repo/store';
import { useStoreSession } from '@repo/store';
import { sortArray } from '@repo/utils';
import { Order } from '@repo/types';

export default function Many() {
  const attempts = useStoreAttempt((s) => s.attempts);
  const session = useStoreSession((s) => s.session);
  const activeAttempts = attempts?.filter((ai) => ai.status != 'INTRO');
  const userAttempts = activeAttempts?.filter((ai) => ai.profileId == session?.id);
  const navbarActive = useStoreAppShell((s) => s.appshell?.child.navbar);

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
              Attempts will appear here when you take quizzes.
            </Text>
          </Stack>
        ) : (
          <Grid gap={'xl'}>
            {sortArray(userAttempts, (i) => i.createdAt, Order.DESCENDING).map((ai) => (
              <GridCol key={ai.id} span={{ base: 12, sm: 6, lg: navbarActive ? 6 : 4 }}>
                <CardAttemptStudentView props={{ attempt: ai }} />
              </GridCol>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
}
