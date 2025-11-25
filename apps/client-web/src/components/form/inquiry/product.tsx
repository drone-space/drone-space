'use client';

import React from 'react';
import { Grid, GridCol, Select, Textarea } from '@mantine/core';
import CommonForm from '../common/form';
import FinePrint from '../common/fine-print';
import CommonFooter from '../common/footer';
import { ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import products from '@/data/products';
import { useFormEmailInquiry } from '@/hooks/form/inquiry';
import { FormValuesInquiry } from '@repo/types/form';

export default function Product({
  props,
}: {
  props: { initialValues?: Partial<FormValuesInquiry>; close?: () => void };
}) {
  const currentProduct = products.find(
    (p) =>
      props.initialValues?.subject?.includes(p.title.long) ||
      props.initialValues?.subject?.includes(p.title.short)
  );

  const kit = {
    basic: currentProduct?.price.former,
    flyMore: currentProduct?.kit.flyMore?.price.former,
  };

  const { form, handleSubmit, submitted } = useFormEmailInquiry(
    props.initialValues,
    { withKit: !!currentProduct?.kit.flyMore, close: props.close }
  );

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
                  value: 'Basic',
                },
                {
                  label: `Fly More Kit - (Kshs. ${(kit.basic || 0) + (kit.flyMore || 0)})`,
                  value: 'Fly More',
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
