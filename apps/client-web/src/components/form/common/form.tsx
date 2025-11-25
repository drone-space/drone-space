import React from 'react';
import { Grid, GridCol, TextInput } from '@mantine/core';
import TooltipInputInfo from '@repo/components/common/tooltips/input/info';
import { FormEmailInquiry } from '@/hooks/form/inquiry';

export default function Common({
  props,
}: {
  props: { form: FormEmailInquiry };
}) {
  return (
    <GridCol span={12} pt={'xs'}>
      <Grid gutter={'xs'}>
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
            rightSection={
              <TooltipInputInfo
                props={{ label: 'We will not share your number' }}
              />
            }
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
      </Grid>
    </GridCol>
  );
}
