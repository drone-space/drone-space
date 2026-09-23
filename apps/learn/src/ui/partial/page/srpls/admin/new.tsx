'use client';

import React from 'react';
import { FormSrpl } from '@repo/ui';
import { Fieldset, Grid, GridCol } from '@mantine/core';
import HeaderAppContent from '@learn/ui/layout/headers/app-content';

export default function New() {
  return (
    <div>
      <HeaderAppContent />

      <Grid>
        <GridCol span={{ base: 12, md: 7 }}>
          <Fieldset legend="ID/Passport Number Details">
            <FormSrpl />
          </Fieldset>
        </GridCol>

        <GridCol span={{ base: 12, md: 5 }}></GridCol>
      </Grid>
    </div>
  );
}
