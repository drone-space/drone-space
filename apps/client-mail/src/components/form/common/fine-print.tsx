import React from 'react';
import { Text } from '@mantine/core';
import NextLink from '@repo/components/common/anchor/next-link';

export default function FinePrint() {
  return (
    <Text fz={'xs'} c={'dimmed'}>
      By submitting this form, I agree to the{' '}
      <NextLink href="/legal/policy" inherit fw={500}>
        privacy policy
      </NextLink>
      .
    </Text>
  );
}
