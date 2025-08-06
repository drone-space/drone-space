'use client';

import React from 'react';
import { Affix, Transition } from '@mantine/core';
import { useHeadroom, useWindowScroll } from '@mantine/hooks';
import NavbarMain from '@/components/layout/navbars/main';
// import UnderlayGlass from '../underlays/glass';

export default function Navbar({ children }: { children?: React.ReactNode }) {
  const [scroll] = useWindowScroll();
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <Affix position={{ left: 0, top: 0, right: 0 }} style={{ zIndex: 100 }}>
      {/* <UnderlayGlass> */}
      <Transition
        transition={'slide-down'}
        mounted={scroll.y > 120 && pinned}
        keepMounted={true}
        duration={100}
      >
        {(styles) => <div style={styles}>{children || <NavbarMain />}</div>}
      </Transition>
      {/* </UnderlayGlass> */}
    </Affix>
  );
}
