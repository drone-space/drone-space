'use client';

import React from 'react';
import { Affix, Transition } from '@mantine/core';
import { useHeadroom, useWindowScroll } from '@mantine/hooks';
import NavbarMain from '@/components/layout/navbars/main';
import UnderlayGlass from '../underlays/glass';

export default function Navbar(
  { children }: { children?: React.ReactNode } = { children: <NavbarMain /> }
) {
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
          <div style={styles}>
            <UnderlayGlass>{children}</UnderlayGlass>
          </div>
        )}
      </Transition>
    </Affix>
  );
}
