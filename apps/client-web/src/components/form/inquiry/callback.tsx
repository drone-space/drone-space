'use client';

import React from 'react';
import { Grid, GridCol } from '@mantine/core';
import CommonForm from '../common/form';
import FinePrint from '../common/fine-print';
import { useFormEmailInquiry } from '@/hooks/form/inquiry';
import CommonFooter from '../common/footer';

export default function Callback({ props }: { props: { close?: () => void } }) {
  const { form, handleSubmit, submitted } = useFormEmailInquiry(
    {
      subject: 'Callback Request',
      message: 'Please call me back as soon as convenitently possible.',
    },
    { close: props.close }
  );

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
      <Grid>
        <CommonForm props={{ form }} />

        <GridCol span={12}>
          <FinePrint />
        </GridCol>

        <GridCol span={12}>
          <CommonFooter props={{ submitted, label: 'Request' }} />
        </GridCol>
      </Grid>
    </form>
  );
}
