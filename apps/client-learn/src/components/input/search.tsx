'use client';

import { Loader, TextInput } from '@mantine/core';
import { useDebouncedCallback, useDebouncedState } from '@mantine/hooks';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import { IconSearch } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

export default function Search({
  state,
  setState,
}: {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [loading, setLoading] = useState(false);
  const [localState, setLocalState] = useState(state);

  const handleSearch = useDebouncedCallback(() => {
    setState(localState);
    setLoading(false);
  }, 500);

  useEffect(() => {
    setLoading(true);
    handleSearch();
  }, [localState]);

  return (
    <>
      <TextInput
        aria-label="Search items"
        placeholder="Search items"
        leftSectionPointerEvents="none"
        leftSection={<IconSearch size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
        rightSection={
          <Loader
            size={'xs'}
            type="oval"
            display={loading ? undefined : 'none'}
          />
        }
        value={localState}
        onChange={(event) => setLocalState(event.currentTarget.value)}
        size="sm"
        w={'100%'}
      />
    </>
  );
}
