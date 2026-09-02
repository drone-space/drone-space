'use client';

import React from 'react';
import FormQuestion from '@repo/components/form/question';
import { Fieldset, Grid, GridCol } from '@mantine/core';
import HeaderAppContent from '@/components/layout/headers/app-content';

export default function New() {
  return (
    <div>
      <HeaderAppContent />

      <Grid>
        <GridCol span={{ base: 12, md: 7 }}>
          <Fieldset legend="Question Details">
            <FormQuestion />
          </Fieldset>
        </GridCol>

        <GridCol span={{ base: 12, md: 5 }}></GridCol>
      </Grid>
    </div>
  );
}
