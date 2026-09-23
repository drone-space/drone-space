'use client';

import React from 'react';
import { Grid, GridCol } from '@mantine/core';
import { FormCommonForm } from '../common/form';
import { FormCommonFinePrint } from '../common/fine-print';
import { FormCommonFooter } from '../common/footer';
import { useFormEmailInquiry } from '@repo/hooks';

export function FormInquiryCallback({ props }: { props: { close?: () => void } }) {
  const { form, handleSubmit, submitted } = useFormEmailInquiry(
    {
      subject: 'Callback Request',
      message: 'Please call me back as soon as convenitently possible.',
    },
    { type: 'general', close: props.close, noMessage: true },
  );

  return (
    <form onSubmit={form.onSubmit(() => handleSubmit())} noValidate>
      <Grid>
        <FormCommonForm props={{ form: form as any }} />

        <GridCol span={12}>
          <FormCommonFinePrint />
        </GridCol>

        <GridCol span={12}>
          <FormCommonFooter props={{ submitted, label: 'Request' }} />
        </GridCol>
      </Grid>
    </form>
  );
}
