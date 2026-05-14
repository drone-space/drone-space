'use client';

import { Badge } from '@mantine/core';
import { Status as EnumStatus } from '@repo/types/models/enums';
import { capitalizeWords } from '@repo/utilities/string';
import React from 'react';

export default function Status({ props }: { props: { status: string } }) {
  let badgeProps = { color: '', label: props.status };

  switch (props.status) {
    case EnumStatus.ACTIVE:
      badgeProps = { ...badgeProps, color: 'green' };
      break;
    case EnumStatus.INACTIVE:
      badgeProps = { ...badgeProps, color: 'yellow' };
      break;
    case EnumStatus.DRAFT:
      badgeProps = { ...badgeProps, color: 'blue' };
      break;

    default:
      break;
  }

  return (
    <Badge color={badgeProps.color} variant="light">
      {capitalizeWords(badgeProps.label)}
    </Badge>
  );
}
