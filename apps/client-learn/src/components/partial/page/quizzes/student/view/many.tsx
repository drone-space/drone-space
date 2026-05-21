'use client';

import React from 'react';
import {
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  Loader,
  Stack,
  Text,
  ThemeIcon,
} from '@mantine/core';
import HeaderAppContent from '@/components/layout/headers/app-content';
import CardQuizStudentView from '@repo/components/common/cards/quiz/student/view';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { IconX } from '@tabler/icons-react';
import { Status } from '@repo/types/models/enums';

export default function Many() {
  const quizzes = useStoreQuiz((s) => s.quizzes);
  const quizzesActive = quizzes?.filter((qi) => qi.status == Status.ACTIVE);

  return (
    <div>
      <HeaderAppContent />

      <Box mt={'md'}>
        {quizzes === undefined ? (
          <Stack>
            <Loader size={'xs'} />
            <Text inherit c={'dimmed'} fz={'sm'}>
              Fetching quizzes.
            </Text>
          </Stack>
        ) : !quizzesActive?.length ? (
          <Stack>
            <Text inherit c={'dimmed'} fz={'sm'}>
              No quizzes found.
            </Text>
          </Stack>
        ) : (
          <Grid gutter={'xl'}>
            {quizzesActive.map((qi) => (
              <GridCol key={qi.id} span={{ base: 12, sm: 6 }}>
                <CardQuizStudentView props={{ quiz: qi }} />
              </GridCol>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
}
