import { Anchor, Text } from '@mantine/core';
import NextLink from '@repo/components/common/anchor/next-link';
import Link from 'next/link';
import React from 'react';

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
