'use client';

import React from 'react';
import { Grid, GridCol, Select, Textarea } from '@mantine/core';
import { FormCommonForm } from '../common/form';
import { FormCommonFinePrint } from '../common/fine-print';
import { FormCommonFooter } from '../common/footer';
import { ICON_STROKE_WIDTH } from '@repo/constants';
import { products } from '@repo/constants';
import { useFormEmailInquiry } from '@repo/hooks';
import { FormValuesInquiry } from '@repo/types';

export function FormInquiryProduct({
  props,
}: {
  props: { initialValues?: Partial<FormValuesInquiry>; close?: () => void };
}) {
  const currentProduct = products.find(
    (p) =>
      props.initialValues?.subject?.includes(p.title.long) ||
      props.initialValues?.subject?.includes(p.title.short),
  );

  const kit = {
    basic: currentProduct?.price?.former,
    flyMore: currentProduct?.kit.flyMore?.price.former,
  };

  const { form, handleSubmit, submitted } = useFormEmailInquiry(props.initialValues, {
    type: 'shop',
    withKit: !!currentProduct?.kit.flyMore,
    close: props.close,
  });

  return (
    <form onSubmit={form.onSubmit(() => handleSubmit())} noValidate>
      <Grid gap={'xs'}>
        <FormCommonForm props={{ form: form as any }} />

        {currentProduct?.kit.basic && currentProduct?.kit.flyMore && (
          <GridCol span={12}>
            <Select
              aria-label="Drone Kit"
              placeholder="Prefered Drone Kit"
              {...form.getInputProps('kit')}
              styles={{
                input: { height: '100%', borderWidth: ICON_STROKE_WIDTH },
              }}
              data={[
                {
                  label: `Basic Kit - (Kes. ${kit.basic})`,
                  value: 'Basic Kit',
                },
                {
                  label: `FlyMore Kit - (Kes. ${(kit.basic || 0) + (kit.flyMore || 0)})`,
                  value: 'FlyMore Kit',
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
          <FormCommonFinePrint props={{ close: props.close }} />
        </GridCol>

        <GridCol span={12}>
          <FormCommonFooter props={{ submitted }} />
        </GridCol>
      </Grid>
    </form>
  );
}
