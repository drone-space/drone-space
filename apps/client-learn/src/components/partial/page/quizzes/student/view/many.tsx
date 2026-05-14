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
import CardQuizStudent from '@repo/components/common/cards/quiz/student';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { IconX } from '@tabler/icons-react';

export default function Many() {
  const quizzes = useStoreQuiz((s) => s.quizzes);

  return (
    <div>
      <HeaderAppContent />

      <Box mt={'md'}>
        {quizzes === undefined ? (
          <Stack align={'center'} ta={'center'} py={SECTION_SPACING}>
            <Loader size={'xs'} />
            <Text inherit c={'dimmed'} fz={'sm'}>
              Fetching quizzes
            </Text>
          </Stack>
        ) : !quizzes?.length ? (
          <Stack align={'center'} ta={'center'} py={SECTION_SPACING}>
            <ThemeIcon size={ICON_WRAPPER_SIZE} variant="light">
              <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            </ThemeIcon>

            <Text inherit c={'dimmed'} fz={'sm'}>
              No quizzes found.
            </Text>
          </Stack>
        ) : (
          <Grid gutter={'xl'}>
            {quizzes.map((qi) => (
              <GridCol key={qi.id} span={{ base: 12, sm: 6, md: 4 }}>
                <CardQuizStudent props={{ quiz: qi }} />
              </GridCol>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
}
