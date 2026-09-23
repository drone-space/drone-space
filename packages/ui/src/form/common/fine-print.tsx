import React from 'react';
import { Text } from '@mantine/core';
import { AnchorNextLink } from '@repo/ui';

export function FormCommonFinePrint() {
  return (
    <Text fz={'xs'} c={'dimmed'}>
      By submitting this form, I agree to the{' '}
      <AnchorNextLink href="/legal/policy" inherit fw={500}>
        privacy policy
      </AnchorNextLink>
      .
    </Text>
  );
}
