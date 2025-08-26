'use client';

import {
  Grid,
  GridCol,
  NumberFormatter,
  Select,
  Text,
  Textarea,
} from '@mantine/core';
import React from 'react';
import CommonForm from '../common/form';
import FinePrint from '../common/fine-print';
import { FormInquiryValues, useFormInquiry } from '@/hooks/form/inquiry';
import CommonFooter from '../common/footer';
import { ICON_STROKE_WIDTH } from '@/data/constants';
import products from '@/data/products';

export default function Product({
  props,
}: {
  props: { initialValues?: Partial<FormInquiryValues>; close?: () => void };
}) {
  const recipient = process.env.NEXT_PUBLIC_EMAIL_INFO || '';

  const currentProduct = products.find(
    (p) =>
      props.initialValues?.subject?.includes(p.title.long) ||
      props.initialValues?.subject?.includes(p.title.short)
  );

  const kit = {
    basic: currentProduct?.price.former,
    flyMore: currentProduct?.kit.flyMore?.price.former,
  };

  const { form, handleSubmit, submitted } = useFormInquiry({
    recipient,
    close: props.close,
    initialValues: props.initialValues,
    options: { withKit: !!currentProduct?.kit.flyMore },
  });

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
      <Grid gutter={'xs'}>
        <CommonForm props={{ form }} />

        {currentProduct?.kit.basic && currentProduct?.kit.flyMore && (
          <GridCol span={12}>
            <Select
              aria-label="Drone Kit"
              placeholder="Prefered Drone Kit"
              allowDeselect={false}
              checkIconPosition="right"
              {...form.getInputProps('kit')}
              styles={{
                input: { height: '100%', borderWidth: ICON_STROKE_WIDTH },
              }}
              data={[
                {
                  label: `Basic Kit - (Kshs. ${kit.basic})`,
                  value: 'basic',
                },
                {
                  label: `Fly More Kit - (Kshs. ${(kit.basic || 0) + (kit.flyMore || 0)})`,
                  value: 'flyMore',
                },
              ]}
            />
          </GridCol>
        )}

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
