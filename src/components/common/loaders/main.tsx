'use client';

import { Loader, Overlay, Text, Transition } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import ImageDefault from '../images/default';
import classes from './main.module.scss';
import { images } from '@/assets/images';
import appData from '@/data/app';

export default function Main() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 7000);
  }, []);

  return (
    <Overlay fixed className={classes.overlay}>
      <ImageDefault
        src={images.brand.droneSpace.logo.potrait.default}
        alt={appData.name.app}
        height={{ base: 80 }}
        width={{ base: 200 }}
        fit="contain"
        mode="grid"
      />

      <Loader color="pri" size={'sm'} />

      <Transition
        mounted={mounted}
        transition="fade"
        duration={200}
        timingFunction="ease"
      >
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
    </Overlay>
  );
}
