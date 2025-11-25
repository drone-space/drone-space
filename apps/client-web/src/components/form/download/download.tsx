'use client';

import React from 'react';
import { Grid, GridCol } from '@mantine/core';
import CommonFinePrint from '../common/fine-print';
import CommonForm from '../common/form';
import CommonFooter from '../common/footer';
import { useFormEmailInquiry } from '@/hooks/form/inquiry';

export default function Document({
  props,
}: {
  props: { type: 'brochure' | 'profile'; close?: () => void };
}) {
  const { form, handleSubmit, submitted } = useFormEmailInquiry(
    {},
    {
      document: props.type,
      close: props.close,
      noMessage: true,
    }
  );

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
      <Grid>
        <CommonForm props={{ form }} />

        <GridCol span={12}>
          <CommonFinePrint />
        </GridCol>

        <GridCol span={12}>
          <CommonFooter props={{ submitted, label: 'Download' }} />
        </GridCol>
      </Grid>
    </form>
  );
}
