'use client';

import React, { useEffect } from 'react';
import { FormQuestion } from '@repo/ui';
import { Box, Fieldset, Grid, GridCol } from '@mantine/core';
import HeaderAppContent from '@learn/ui/layout/headers/app-content';
import { useStoreQuestion } from '@repo/store';
import { SECTION_SPACING } from '@repo/constants';
import { useRouter } from 'next/navigation';

export default function Edit({ props }: { props: { questionId: string } }) {
  const router = useRouter();

  const questions = useStoreQuestion((s) => s.questions);
  const question = questions?.find((qi) => qi.id == props.questionId);

  useEffect(() => {
    if (questions === undefined || questions === null) return;
    if (!question) router.replace('/not-found');
  }, [questions, question, router]);

  return (
    <Box mb={SECTION_SPACING}>
      <HeaderAppContent props={{ title: !question ? undefined : `${question.content}` }} />

      <Grid>
        <GridCol span={{ base: 12, xl: 6 }}>
          <Fieldset
            legend="Question Details"
            style={{ position: 'sticky', top: 'var(--mantine-spacing-xl)' }}
          >
            <FormQuestion props={{ questionId: props.questionId }} />
          </Fieldset>
        </GridCol>
      </Grid>
    </Box>
  );
}
