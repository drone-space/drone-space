'use client';

import React from 'react';
import { Box, Button, Grid, GridCol, TextInput } from '@mantine/core';
import { useFormAlumni } from '@repo/hooks/form/alumni';
import TooltipInputInfo from '@repo/components/common/tooltips/input/info';

export default function Alumni(params: {
  answerOption: string;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { form, submitted, handleSubmit } = useFormAlumni(params);

  return (
    <Box
      component="form"
      onSubmit={form.onSubmit(() => {
        handleSubmit();
      })}
      noValidate
    >
      <Grid>
        <GridCol span={{ base: 12 }}>
          <TextInput
            required
            data-autofocus
            aria-label={'Valid RPL Number'}
            placeholder={`Valid RPL Number * (e.g. YK-RPL-12345)`}
            // description={'Format should be YK-RPL-NNNNN (e.g., YK-RPL-12345)'}
            {...form.getInputProps('srpl')}
            rightSection={
              <TooltipInputInfo
                props={{ label: 'We will not share your RPL number' }}
              />
            }
          />
        </GridCol>

        <GridCol span={{ base: 12, lg: 6 }}>
          <TextInput
            required
            data-autofocus
            aria-label={'First Name'}
            placeholder={`First Name *`}
            {...form.getInputProps('fname')}
          />
        </GridCol>

        <GridCol span={{ base: 12, lg: 6 }}>
          <TextInput
            required
            data-autofocus
            aria-label={'Last Name'}
            placeholder={`Last Name *`}
            {...form.getInputProps('lname')}
          />
        </GridCol>

        <GridCol span={{ base: 12, lg: 6 }}>
          <TextInput
            required
            data-autofocus
            aria-label={'Email'}
            placeholder={`Email *`}
            {...form.getInputProps('email')}
            rightSection={<TooltipInputInfo />}
          />
        </GridCol>

        <GridCol span={{ base: 12, lg: 6 }}>
          <TextInput
            required
            data-autofocus
            aria-label={'Phone'}
            placeholder={`Phone *`}
            {...form.getInputProps('phone')}
            rightSection={
              <TooltipInputInfo
                props={{ label: 'We will not share your phone' }}
              />
            }
          />
        </GridCol>

        <GridCol span={{ base: 12 }}>
          <Box mt={'md'}>
            <Button type="submit" loading={submitted}>
              {(submitted ? 'Sending' : 'Send') + ' Details'}
            </Button>
          </Box>
        </GridCol>
      </Grid>
    </Box>
  );
}
