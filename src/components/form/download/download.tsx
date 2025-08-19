'use client';

import React from 'react';
import { Grid, GridCol } from '@mantine/core';
import CommonFinePrint from '../common/fine-print';
import CommonForm from '../common/form';
import { useFormInquiry } from '@/hooks/form/inquiry';
import CommonFooter from '../common/footer';

export default function Document({
  props,
}: {
  props: { type: 'brochure' | 'profile'; close?: () => void };
}) {
  const recipient = process.env.NEXT_PUBLIC_EMAIL_INFO || '';
  const { form, handleSubmit, submitted } = useFormInquiry({
    recipient,
    document: props.type,
    close: props.close,
  });

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
      <Grid>
        <CommonForm props={{ form }} />

        <GridCol span={12}>
          <CommonFinePrint />
        </GridCol>

        <GridCol span={12}>
          <CommonFooter props={{ submitted }} />
        </GridCol>
      </Grid>
    </form>
  );
}
