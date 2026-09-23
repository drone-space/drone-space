'use client';

import React, { useEffect } from 'react';
import { useFormSrpl } from '@repo/hooks';
import { Button, Checkbox, Grid, GridCol, Group, Select, Textarea, TextInput } from '@mantine/core';
import { useStoreSrpl } from '@repo/store';
import { capitalizeWords } from '@repo/utils';
import { Status } from '@repo/types';

export function FormSrpl({ props }: { props?: { srplId?: string } }) {
  const srpls = useStoreSrpl((s) => s.srpls);
  const srpl = srpls?.find((qi) => qi.id == props?.srplId);

  const { form, handleSubmit, submitted, stay, setStay } = useFormSrpl({
    defaultValues: srpl,
  });

  useEffect(() => {
    if (srpls === undefined) return;
    if (srpls === null) return;

    form.setValues({ ...srpl });
  }, [srpls]);

  return (
    <form noValidate onSubmit={form.onSubmit(() => handleSubmit())}>
      <Grid>
        <GridCol span={{ base: 12 }}>
          <TextInput
            label="SRPL Number"
            placeholder="SRPL Number"
            required
            key={form.key('srplNumber')}
            {...form.getInputProps('srplNumber')}
            data-autofocus
          />
        </GridCol>

        <GridCol span={{ base: 12 }}>
          <Select
            required
            label="Status"
            placeholder="Status"
            key={form.key('status')}
            {...form.getInputProps('status')}
            data={[
              {
                label: capitalizeWords(Status.ACTIVE),
                value: Status.ACTIVE,
              },
              {
                label: capitalizeWords(Status.DRAFT),
                value: Status.DRAFT,
              },
              {
                label: capitalizeWords(Status.INACTIVE),
                value: Status.INACTIVE,
              },
            ]}
          />
        </GridCol>

        <GridCol span={{ base: 12 }}>
          <Checkbox
            label={`Stay on this page after ${!!srpl?.updatedAt ? 'updating' : 'creating'} srpl.`}
            checked={stay}
            onChange={(event) => setStay(event.currentTarget.checked)}
          />
        </GridCol>

        <GridCol span={{ base: 12 }}>
          <Group mt={'xl'}>
            <Button type="submit" loading={submitted}>
              {!!srpl?.updatedAt ? 'Update' : 'Create'}
            </Button>
          </Group>
        </GridCol>
      </Grid>
    </form>
  );
}
