'use client';

import React from 'react';
import { Grid, GridCol, Textarea } from '@mantine/core';
import { FormCommonForm } from '../common/form';
import { FormCommonFinePrint } from '../common/fine-print';
import { FormCommonFooter } from '../common/footer';
import { useFormEmailInquiry } from '@repo/hooks';
import { ICON_STROKE_WIDTH } from '@repo/constants';
import { FormValuesInquiry } from '@repo/types';

export function FormInquiryService({
  props,
}: {
  props: { initialValues: Partial<FormValuesInquiry>; close?: () => void };
}) {
  const { form, handleSubmit, submitted } = useFormEmailInquiry(props.initialValues, {
    type: 'service',
    close: props.close,
  });

  return (
    <form onSubmit={form.onSubmit(() => handleSubmit())} noValidate>
      <Grid>
        <FormCommonForm props={{ form: form as any }} />

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
          <FormCommonFinePrint props={{ close: props.close }} />
        </GridCol>

        <GridCol span={12}>
          <FormCommonFooter props={{ submitted }} />
        </GridCol>
      </Grid>
    </form>
  );
}
