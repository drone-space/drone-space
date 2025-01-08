'use client';

import React from 'react';

import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Grid,
  GridCol,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useFormEmailInquiry } from '@/hooks/form/email/inquiry';
import TooltipInputInfo from '../common/tooltips/input/info';
import Link from 'next/link';

export type Inquiry =
  | 'training'
  | 'callback'
  | 'shop'
  | 'technical'
  | 'general'
  | 'shows'
  | 'brochure';

export default function Contact({
  props,
  options,
}: {
  props?: { subject?: string; message?: string };
  options?: {
    modal?: boolean;
    close?: () => void;
    inquiry?: Inquiry;
  };
}) {
  const { form, submitted, handleSubmit } = useFormEmailInquiry(
    {
      subject: props?.subject,
      message: props?.message,
    },
    { close: options?.close, inquiry: options?.inquiry }
  );

  return (
    <Box component="form" onSubmit={form.onSubmit(handleSubmit)} noValidate>
      <Grid>
        <GridCol span={{ base: 12, md: options?.modal ? 6 : undefined }}>
          <Grid>
            <GridCol
              span={{ base: 12, xs: 6, md: options?.modal ? 12 : undefined }}
            >
              <TextInput
                required
                label={options?.modal ? undefined : 'Name'}
                aria-label={options?.modal ? 'Name' : undefined}
                placeholder={`Your Name${options?.modal ? ' *' : ''}`}
                {...form.getInputProps('from.name')}
              />
            </GridCol>

            <GridCol
              span={{ base: 12, xs: 6, md: options?.modal ? 12 : undefined }}
            >
              <TextInput
                required={options?.inquiry == 'callback'}
                label={options?.modal ? undefined : 'Phone'}
                aria-label={options?.modal ? 'Phone' : undefined}
                placeholder={`Your Phone${options?.modal && options?.inquiry == 'callback' ? ' *' : ''}`}
                {...form.getInputProps('phone')}
              />
            </GridCol>

            <GridCol span={12}>
              <TextInput
                required
                label={options?.modal ? undefined : 'Email'}
                aria-label={options?.modal ? 'Email' : undefined}
                placeholder={`Your Email${options?.modal ? ' *' : ''}`}
                {...form.getInputProps('from.email')}
                rightSection={<TooltipInputInfo />}
              />
            </GridCol>

            {/* <GridCol span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
              <TextInput
                required={options?.inquiry == 'callback'}
                // label={"Phone"}
                placeholder={`Phone${options?.inquiry == 'callback' ? ' *' : ''}`}
                {...form.getInputProps('phone')}
              />
            </GridCol> */}

            <GridCol span={{ base: 12, xs: 6, sm: 12 }}>
              <TextInput
                label={options?.modal ? undefined : 'Company'}
                aria-label={options?.modal ? 'Company' : undefined}
                placeholder="Company"
                {...form.getInputProps('company')}
              />
            </GridCol>
          </Grid>
        </GridCol>

        <GridCol span={{ base: 12, md: options?.modal ? 6 : undefined }}>
          <Grid>
            {options?.inquiry != 'callback' && (
              <GridCol span={12}>
                <TextInput
                  required
                  label={options?.modal ? undefined : 'Inquiry'}
                  aria-label={options?.modal ? 'Inquiry' : undefined}
                  placeholder={
                    options?.modal
                      ? 'Inquiry *'
                      : 'What are you inquiring about?'
                  }
                  {...form.getInputProps('subject')}
                />
              </GridCol>
            )}

            {options?.inquiry != 'callback' && (
              <GridCol span={12}>
                <Textarea
                  required
                  label={options?.modal ? undefined : 'Message'}
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
            )}

            <GridCol span={12}>
              <Checkbox
                label="Sign up for Drone Space newsletter"
                key={form.key('newsletter')}
                {...form.getInputProps('newsletter', { type: 'checkbox' })}
                size="xs"
              />
            </GridCol>

            <GridCol span={12}>
              <Text fz={'xs'} c={'dimmed'}>
                By submitting this form, I agree to the{' '}
                <Anchor
                  component={Link}
                  href="/privacy-policy"
                  inherit
                  fw={500}
                >
                  privacy policy
                </Anchor>
                .
              </Text>
            </GridCol>
          </Grid>
        </GridCol>

        <GridCol span={12}>
          <SimpleGrid cols={{ base: 1, xs: 2 }}>
            <Button
              variant="light"
              fullWidth
              type="reset"
              onClick={() => form.reset()}
              disabled={submitted}
              visibleFrom={options?.modal ? 'xs' : undefined}
            >
              Clear
            </Button>

            <Button fullWidth type="submit" loading={submitted}>
              {submitted ? 'Sending' : 'Send'}
            </Button>
          </SimpleGrid>
        </GridCol>
      </Grid>
    </Box>
  );
}
