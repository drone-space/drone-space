'use client';

import React from 'react';
import { Affix, Transition } from '@mantine/core';
import { useHeadroom, useWindowScroll } from '@mantine/hooks';
import UnderlayGlass from '../../wrappers/underlays/glass';

export default function Navbar({ children }: { children?: React.ReactNode }) {
  const [scroll] = useWindowScroll();
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <Affix position={{ left: 0, top: 0, right: 0 }}>
      <Transition
        transition={'slide-down'}
        mounted={scroll.y > 120 && pinned}
        keepMounted={true}
      >
        {(styles) => (
          <div
            style={{
              ...styles,
              // backgroundColor: 'var(--mantine-color-body)',
            }}
          >
            <UnderlayGlass props={{ blur: 2, opacity: 0.9 }}>
              {children || 'nav component goes here'}
            </UnderlayGlass>
          </div>
        )}
      </Transition>
    </Affix>
  );
}
