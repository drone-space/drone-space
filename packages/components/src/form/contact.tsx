'use client';

import React from 'react';
import {
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useFormEmailInquiry } from '@repo/hooks/form/inquiry';
import TooltipInputInfo from '@repo/components/common/tooltips/input/info';
import AnchorNextLink from '@repo/components/common/anchor/next-link';
import Link from 'next/link';
import { IconSend } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';

export default function Contact({
  props,
  options,
}: {
  props?: { subject?: string; message?: string };
  options?: { modal?: boolean; close?: () => void };
}) {
  const { form, submitted, handleSubmit } = useFormEmailInquiry(
    {
      subject: props?.subject,
      message: props?.message,
    },
    { close: options?.close }
  );

  return (
    <Box
      component="form"
      onSubmit={form.onSubmit(() => handleSubmit())}
      noValidate
    >
      <Grid>
        <GridCol span={{ base: 12, md: options?.modal ? 6 : undefined }}>
          <Grid>
            <GridCol
              span={{ base: 12, xs: 6, md: options?.modal ? 12 : undefined }}
            >
              <TextInput
                required
                // label={options?.modal ? undefined : 'First Name'}
                aria-label={options?.modal ? 'First Name' : undefined}
                placeholder={`Your First Name${options?.modal ? ' *' : ''}`}
                {...form.getInputProps('fname')}
              />
            </GridCol>

            <GridCol
              span={{ base: 12, xs: 6, md: options?.modal ? 12 : undefined }}
            >
              <TextInput
                required
                // label={options?.modal ? undefined : 'Last Name'}
                aria-label={options?.modal ? 'Last Name' : undefined}
                placeholder={`Your Last Name${options?.modal ? ' *' : ''}`}
                {...form.getInputProps('lname')}
              />
            </GridCol>

            <GridCol
              span={{ base: 12, xs: 6, md: options?.modal ? 12 : undefined }}
            >
              <TextInput
                // label={options?.modal ? undefined : 'Phone'}
                aria-label={options?.modal ? 'Phone' : undefined}
                placeholder="Your Phone"
                {...form.getInputProps('phone')}
                rightSection={
                  <TooltipInputInfo
                    props={{ label: 'We will not share your number' }}
                  />
                }
              />
            </GridCol>

            <GridCol
              span={{ base: 12, xs: 6, md: options?.modal ? 12 : undefined }}
            >
              <TextInput
                required
                // label={options?.modal ? undefined : 'Email'}
                aria-label={options?.modal ? 'Email' : undefined}
                placeholder={`Your Email${options?.modal ? ' *' : ''}`}
                {...form.getInputProps('email')}
                rightSection={<TooltipInputInfo />}
              />
            </GridCol>
          </Grid>
        </GridCol>

        <GridCol span={{ base: 12, md: options?.modal ? 6 : undefined }}>
          <Grid>
            <GridCol span={12}>
              <Select
                required
                // label={options?.modal ? undefined : 'Inquiry'}
                aria-label={options?.modal ? 'Inquiry' : undefined}
                placeholder={
                  options?.modal ? 'Inquiry *' : 'What are you inquiring about?'
                }
                checkIconPosition={'right'}
                allowDeselect={false}
                {...form.getInputProps('subject')}
                data={subjectOptions}
                value={
                  subjectOptions.find((o) =>
                    o.value
                      .toLowerCase()
                      .includes((props?.subject || '').toLowerCase())
                  )?.value
                }
              />
            </GridCol>

            <GridCol span={12}>
              <Textarea
                required
                // label={options?.modal ? undefined : 'Message'}
                aria-label={options?.modal ? 'Message' : undefined}
                placeholder={
                  options?.modal ? 'Message *' : 'Write your message here...'
                }
                autosize
                minRows={2}
                styles={{ input: { height: '100%' } }}
                maxRows={15}
                resize="vertical"
                {...form.getInputProps('message')}
              />
            </GridCol>

            <GridCol span={12}>
              <Text fz={'sm'} c={'dimmed'}>
                By submitting this form, I agree to the{' '}
                <AnchorNextLink href="/legal/policy" inherit fw={500}>
                  privacy policy
                </AnchorNextLink>
                .
              </Text>
            </GridCol>
          </Grid>
        </GridCol>

        <GridCol span={12}>
          <Group>
            <Button
              disabled={submitted}
              component={Link}
              href={'/faq'}
              variant="light"
            >
              See FAQ&apos;s
            </Button>

            <Button
              type="submit"
              loading={submitted}
              rightSection={
                <IconSend size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
              }
            >
              {submitted ? 'Sending' : 'Submit'}
            </Button>
          </Group>
        </GridCol>
      </Grid>
    </Box>
  );
}

const subjectOptions = [
  { label: 'What are you inquiring about?', value: '' },
  { label: 'General Inquiry', value: 'General' },
  { label: 'Drone Training Inquiry', value: 'Drone Training' },
  {
    label: 'Drone Solutions Inquiry',
    value: 'Drone Solutions',
  },
  { label: 'Drone Purchase Inquiry', value: 'Drone Purchase' },
];
