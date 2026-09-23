'use client';

import React from 'react';
import { FormQuestion } from '@repo/ui';
import { Box, Fieldset, Grid, GridCol } from '@mantine/core';
import HeaderAppContent from '@learn/ui/layout/headers/app-content';

export default function New() {
  return (
    <div>
      <HeaderAppContent />

      <Grid>
        <GridCol span={{ base: 12, md: 7 }}>
          <Box pb={'30vh'}>
            <Fieldset legend="Question Details">
              <FormQuestion />
            </Fieldset>
          </Box>
        </GridCol>

        <GridCol span={{ base: 12, md: 5 }}></GridCol>
      </Grid>
    </div>
  );
}
