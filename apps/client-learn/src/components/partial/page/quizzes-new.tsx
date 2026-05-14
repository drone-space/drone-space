'use client';

import React from 'react';
import FormQuiz from '@repo/components/form/quiz';
import { Fieldset, Grid, GridCol, Group } from '@mantine/core';
import HeaderAppContent from '@/components/layout/headers/app-content';

export default function QuizzesNew() {
  return (
    <div>
      <HeaderAppContent />

      <Grid>
        <GridCol span={{ base: 12, md: 7 }}>
          <Fieldset legend="Quiz Details">
            <FormQuiz />
          </Fieldset>
        </GridCol>

        <GridCol span={{ base: 12, md: 5 }}></GridCol>
      </Grid>
    </div>
  );
}
