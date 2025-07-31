'use client';

import { Alert, Center, Text, Transition } from '@mantine/core';
import React, { useState } from 'react';
import { IconInfoCircle } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import classes from './main.module.scss';

export default function Main() {
  const [mounted, setMounted] = useState(true);

  return (
    <Transition
      mounted={mounted}
      transition={'fade-down'}
      duration={250}
      timingFunction="ease"
    >
      {(styles) => (
        <div style={styles}>
          <Alert
            variant="filled"
            withCloseButton
            onClick={() => setMounted(false)}
            icon={
              <Center>
                <IconInfoCircle size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              </Center>
            }
            classNames={classes}
          >
            <Text component="span" inherit fw={'bold'}>
              GeneriCon 2023
            </Text>{' '}
            | Join us in Denver from June 7 – 9 to see what&apos;s coming next
          </Alert>
        </div>
      )}
    </Transition>
  );
}
