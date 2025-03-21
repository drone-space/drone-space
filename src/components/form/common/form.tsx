import React from 'react';
import { GridCol, TextInput } from '@mantine/core';
import TooltipInputInfo from '@/components/common/tooltips/input/info';
import { FormInquiry } from '@/hooks/form/inquiry';

export default function Common({ props }: { props: { form: FormInquiry } }) {
  return (
    <>
      <GridCol span={{ base: 12, md: 6 }}>
        <TextInput
          required
          aria-label={'First Name'}
          placeholder={`Your First Name *`}
          {...props.form.getInputProps('fname')}
        />
      </GridCol>

      <GridCol span={{ base: 12, md: 6 }}>
        <TextInput
          required
          aria-label={'Last Name'}
          placeholder={`Your Last Name *`}
          {...props.form.getInputProps('lname')}
        />
      </GridCol>

      <GridCol span={12}>
        <TextInput
          required
          aria-label={'Email'}
          placeholder={`Your Email *`}
          {...props.form.getInputProps('email')}
          rightSection={<TooltipInputInfo />}
        />
      </GridCol>

      <GridCol span={{ base: 12, md: 6 }}>
        <TextInput
          required
          aria-label={'Phone'}
          placeholder={`Your Phone *`}
          {...props.form.getInputProps('phone')}
        />
      </GridCol>

      <GridCol span={{ base: 12, md: 6 }}>
        <TextInput
          required
          aria-label={'Company'}
          placeholder={`Your Company`}
          {...props.form.getInputProps('company')}
        />
      </GridCol>
    </>
  );
}
