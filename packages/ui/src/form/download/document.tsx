'use client';

import React from 'react';
import { Grid, GridCol } from '@mantine/core';
import { FormCommonForm } from '../common/form';
import { FormCommonFinePrint } from '../common/fine-print';
import { FormCommonFooter } from '../common/footer';
import { useFormEmailInquiry } from '@repo/hooks';

export function FormDownloadDocument({
  props,
}: {
  props: { type: 'brochure' | 'profile'; close?: () => void };
}) {
  const { form, handleSubmit, submitted } = useFormEmailInquiry(
    {},
    {
      noMessage: true,
      close: props.close,
      document: props.type,
    },
  );

  return (
    <form onSubmit={form.onSubmit(() => handleSubmit())} noValidate>
      <Grid>
        <FormCommonForm props={{ form: form as any }} />

        <GridCol span={12}>
          <FormCommonFinePrint props={{ close: props.close }} />
        </GridCol>

        <GridCol span={12}>
          <FormCommonFooter props={{ submitted, label: 'Download' }} />
        </GridCol>
      </Grid>
    </form>
  );
}
