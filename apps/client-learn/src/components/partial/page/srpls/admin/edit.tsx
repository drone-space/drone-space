'use client';

import React, { useEffect } from 'react';
import FormSrpl from '@repo/components/form/srpl';
import { Box, Fieldset, Grid, GridCol } from '@mantine/core';
import HeaderAppContent from '@/components/layout/headers/app-content';
import { useStoreSrpl } from '@repo/libraries/zustand/stores/srpl';
import { SECTION_SPACING } from '@repo/constants/sizes';
import { useRouter } from 'next/navigation';

export default function Edit({ props }: { props: { srplId: string } }) {
  const router = useRouter();

  const srpls = useStoreSrpl((s) => s.srpls);
  const srpl = srpls?.find((qi) => qi.id == props.srplId);

  useEffect(() => {
    if (srpls === undefined || srpls === null) return;
    if (!srpl) router.replace('/not-found');
  }, [srpls, srpl, router]);

  return (
    <Box mb={SECTION_SPACING}>
      <HeaderAppContent
        props={{ title: !srpl ? undefined : `Edit ${srpl.srplNumber}` }}
      />

      <Grid>
        <GridCol span={{ base: 12, xl: 5 }}>
          <Fieldset
            legend="Srpl Details"
            style={{ position: 'sticky', top: 'var(--mantine-spacing-xl)' }}
          >
            <FormSrpl props={{ srplId: props.srplId }} />
          </Fieldset>
        </GridCol>
      </Grid>
    </Box>
  );
}
