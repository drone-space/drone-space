'use client';

import { Stack, Text, Transition } from '@mantine/core';
import { useEffect, useState } from 'react';
import { SpinnerApp } from '../spinner/app';
import { ImageDefault } from '../image/default';
import { APP_NAME, images } from '@repo/constants';

export function LoaderMain() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 5000);
  }, []);

  return (
    <Stack align="center">
      <ImageDefault
        src={images.brand.droneSpace.logo.potrait.default}
        alt={APP_NAME.WEB}
        height={{ base: 100 }}
        width={{ base: 210 }}
        fit="contain"
        mode="grid"
      />

      <SpinnerApp />

      <Transition mounted={mounted}>
        {(styles) => (
          <div style={styles}>
            <Text inherit fz={'xs'} ta={'center'}>
              This is taking longer than expected
              <br />
              you might be on a slow network
            </Text>
          </div>
        )}
      </Transition>
    </Stack>
  );
}
