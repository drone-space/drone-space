'use client';

import { Grid, GridCol, Textarea } from '@mantine/core';
import React from 'react';
import CommonForm from '../common/form';
import FinePrint from '../common/fine-print';
import { FormInquiryValues, useFormInquiry } from '@/hooks/form/inquiry';
import CommonFooter from '../common/footer';
import { ICON_STROKE_WIDTH } from '@/data/constants';

export default function Service({
  props,
}: {
  props: { initialValues: Partial<FormInquiryValues>; close?: () => void };
}) {
  const recipient = process.env.NEXT_PUBLIC_EMAIL_INFO || '';
  const { form, handleSubmit, submitted } = useFormInquiry({
    recipient,
    initialValues: props.initialValues,
    close: props.close,
  });

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
      <Grid>
        <CommonForm props={{ form }} />

        <GridCol span={12}>
          <Textarea
            required
            aria-label={'Message'}
            placeholder={'Write your message here...'}
            {...form.getInputProps('message')}
            autosize
            styles={{
              input: { height: '100%', borderWidth: ICON_STROKE_WIDTH },
            }}
            minRows={3}
            maxRows={5}
          />
        </GridCol>

        <GridCol span={12}>
          <FinePrint />
        </GridCol>

        <GridCol span={12}>
          <CommonFooter props={{ submitted }} />
        </GridCol>
      </Grid>
    </form>
  );
}
