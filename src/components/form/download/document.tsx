'use client';

import React from 'react';
import { Box, Button, Center, Grid, GridCol, TextInput } from '@mantine/core';
import { useFormAddSubscriber } from '@/hooks/form/mail-handler';

export default function Document({
  params,
}: {
  params: { document: 'profile' | 'brochure' };
}) {
  const { form, submitted, handleSubmit } = useFormAddSubscriber({
    document: params.document,
  });

  return (
    <Box component="form" onSubmit={form.onSubmit(handleSubmit)} noValidate>
      <Grid gutter={'xs'}>
        <GridCol span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
          <TextInput
            required
            // label={"First Name"}
            placeholder="First Name *"
            {...form.getInputProps('fname')}
          />
        </GridCol>

        <GridCol span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
          <TextInput
            required
            // label={"Last Name"}
            placeholder="Last Name *"
            {...form.getInputProps('lname')}
          />
        </GridCol>

        <GridCol span={{ base: 12 }}>
          <TextInput
            required
            // label={"Email"}
            placeholder={`Email *`}
            {...form.getInputProps('email')}
          />
        </GridCol>

        <GridCol span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
          <TextInput
            required
            // label={"Phone"}
            placeholder="Phone *"
            {...form.getInputProps('phone')}
          />
        </GridCol>

        <GridCol span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
          <TextInput
            // label={"Company"}
            placeholder="Company"
            {...form.getInputProps('company')}
          />
        </GridCol>

        <GridCol span={12}>
          <Grid gutter={'xs'} mt={'md'}>
            <GridCol span={{ base: 12, md: 6 }} visibleFrom="md">
              <Center>
                <Button
                  fullWidth
                  type="reset"
                  variant="light"
                  onClick={() => form.reset()}
                  disabled={submitted}
                >
                  Clear
                </Button>
              </Center>
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <Center>
                <Button fullWidth type="submit" loading={submitted}>
                  {submitted ? 'Downloading' : 'Download'}
                </Button>
              </Center>
            </GridCol>
          </Grid>
        </GridCol>
      </Grid>
    </Box>
  );
}
