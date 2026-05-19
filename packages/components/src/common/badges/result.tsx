'use client';

import { Badge } from '@mantine/core';
import { Status as EnumStatus } from '@repo/types/models/enums';
import { capitalizeWords } from '@repo/utilities/string';
import React from 'react';

export default function Result({
  props,
}: {
  props: { status: string; pass: boolean };
}) {
  let badgeProps = {
    color: props.pass ? 'green' : 'red',
    label: props.pass ? 'Pass' : 'Fail',
  };

  return (
    props.status == EnumStatus.COMPLETE && (
      <Badge color={`${badgeProps.color}.6`} variant="light">
        {capitalizeWords(badgeProps.label)}
      </Badge>
    )
  );
}
