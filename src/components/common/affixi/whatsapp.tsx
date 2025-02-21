'use client';

import React from 'react';
import { ActionIcon, Affix, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import ImageDefault from '../images/default';
import appData from '@/data/app';
import { images } from '@/assets/images';

export default function Whatsapp() {
  const [scroll] = useWindowScroll();
  const whatsapp = appData.socials.whatsapp;

  return (
    <Affix
      position={{ bottom: 'calc(var(--mantine-spacing-xl) * 2.75)', right: 0 }}
    >
      <Transition transition="slide-left" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <div style={transitionStyles}>
            <ActionIcon
              size={28}
              color="sec.3"
              style={{
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
              }}
              component="a"
              href={whatsapp.link}
              target="_blank"
            >
              <ImageDefault
                src={images.icons.social.whatsapp}
                alt={whatsapp.platform}
                title={whatsapp.platform}
                fit={'contain'}
                height={20}
                width={20}
              />
            </ActionIcon>
          </div>
        )}
      </Transition>
    </Affix>
  );
}
