import React from 'react';
import { TextInput, TextInputProps } from '@mantine/core';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import { IconSearch } from '@tabler/icons-react';

export default function Search({ ...restProps }: {} & TextInputProps) {
  return (
    <TextInput
      aria-label="Search"
      placeholder="Search..."
      leftSection={<IconSearch size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
      w={'100%'}
      size="sm"
      styles={{
        input: {
          backgroundColor: 'var(--mantine-color-body)',
          border: '2px solid var(--mantine-color-default-border)',
        },
      }}
      {...restProps}
    />
  );
}
