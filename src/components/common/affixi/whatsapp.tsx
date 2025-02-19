'use client';

import React from 'react';

import NextImage from 'next/image';

import { ActionIcon, Affix, Image, Stack, Transition } from '@mantine/core';
import { useHeadroom, useWindowScroll } from '@mantine/hooks';

import appData from '@/data/app';
import { images } from '@/assets/images';

export default function Whatsapp() {
  const [scroll] = useWindowScroll();
  const pinned = useHeadroom({ fixedAt: 120 });

  const whatsapp = appData.socials.whatsapp;

  return (
    <Affix
      position={{ bottom: 'calc(var(--mantine-spacing-xl) * 2.75)', right: 0 }}
    >
      <Transition
        transition="slide-left"
        mounted={scroll.y > 0 && !pinned}
        keepMounted={true}
      >
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
              <Stack>
                <Image
                  src={images.icons.social.whatsapp}
                  alt={whatsapp.platform}
                  title={whatsapp.platform}
                  component={NextImage}
                  height={20}
                  width={20}
                  priority
                />
              </Stack>
            </ActionIcon>
          </div>
        )}
      </Transition>
    </Affix>
  );
}
