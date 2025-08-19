'use client';

import { Grid, GridCol, Textarea, TextInput } from '@mantine/core';
import React from 'react';
import CommonForm from '../common/form';
import FinePrint from '../common/fine-print';
import { useFormInquiry } from '@/hooks/form/inquiry';
import CommonFooter from '../common/footer';

export default function General() {
  const recipient = process.env.NEXT_PUBLIC_EMAIL_INFO || '';
  const { form, handleSubmit, submitted } = useFormInquiry({ recipient });

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
      <Grid>
        <CommonForm props={{ form }} />

        <GridCol span={12}>
          <TextInput
            required
            aria-label={'Inquiry'}
            placeholder={'Inquiry'}
            {...form.getInputProps('subject')}
          />
        </GridCol>

        <GridCol span={12}>
          <Textarea
            required
            aria-label={'Message'}
            placeholder={'Write your message here...'}
            {...form.getInputProps('message')}
            autosize
            minRows={5}
            styles={{ input: { height: '100%' } }}
            maxRows={15}
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
