'use client';

import React from 'react';
import { Grid, GridCol, Textarea } from '@mantine/core';
import CommonForm from '../common/form';
import FinePrint from '../common/fine-print';
import { useFormEmailInquiry } from '@/hooks/form/inquiry';
import CommonFooter from '../common/footer';
import { ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import { FormValuesInquiry } from '@repo/types/form';

export default function Training({
  props,
}: {
  props: { initialValues: Partial<FormValuesInquiry>; close?: () => void };
}) {
  const { form, handleSubmit, submitted } = useFormEmailInquiry(
    props.initialValues,
    {
      close: props.close,
    }
  );

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
