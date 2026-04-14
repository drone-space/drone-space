'use client';
import React, { useEffect, useState } from 'react';
import {
  ActionIcon,
  Affix,
  Box,
  Card,
  Center,
  Group,
  Paper,
  Stack,
  Text,
  Tooltip,
  Transition,
} from '@mantine/core';
import {
  useTimeout,
  // useWindowScroll
} from '@mantine/hooks';
import { usePathname } from 'next/navigation';
import { images } from '@repo/constants/images';
import classes from './ai.module.scss';
import {
  LOCAL_STORAGE_NAME,
  SESSION_STORAGE_NAME,
} from '@repo/constants/names';
import { getFromLocalStorage } from '@repo/utilities/storage';
import ImageDefault from '@repo/components/common/images/default';
import DrawerAi from '../drawers/ai';
import { useStoreConversation } from '@repo/libraries/zustand/stores/conversation';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import { IconX } from '@tabler/icons-react';
import { COMPANY_NAME } from '@repo/constants/app';

export default function Ai() {
  const pathname = usePathname();
  const { setConversation } = useStoreConversation();

  const [aiOpened, setAiOpened] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const { start, clear } = useTimeout(() => setMenuOpened(true), 1000 * 5);

  const routes = ['drone-solutions', '/drone-training', '/shop'];
  const routeIncluded = routes.find((r) => pathname.includes(r));

  const getRoute = () => {
    switch (routeIncluded) {
      case routes[0]:
        return ' about our drone solutions?';
      case routes[1]:
        return ' about drone training?';
      case routes[2]:
        return ' about our drones?';
      default:
        return '?';
    }
  };

  useEffect(() => {
    if (pathname == '/' || routeIncluded) {
      try {
        const count = sessionStorage.getItem(SESSION_STORAGE_NAME.AI_COUNT);

        if (!count) {
          start();
          setTimeout(() => setMenuOpened(false), 1000 * 60);

          sessionStorage.setItem(SESSION_STORAGE_NAME.AI_COUNT, '0');
        } else {
          if (Number(count) <= routes.length) {
            start();
            setTimeout(() => setMenuOpened(false), 1000 * 60);

            sessionStorage.setItem(
              SESSION_STORAGE_NAME.AI_COUNT,
              (Number(count) + 1).toString()
            );
          }
        }
      } catch (e) {
        console.error(
          "Couldn't fetch from session storage",
          (e as Error).message
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // initialize conversation
    const storedConversation = getFromLocalStorage(LOCAL_STORAGE_NAME.AI);
    setConversation(storedConversation || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => setAiOpened(true), 1000 * 3);
  }, []);

  return (
    <Affix
      position={{
        bottom: 'calc(var(--mantine-spacing-xl) * 1.5)',
        right: 'var(--mantine-spacing-md)',
      }}
      style={{ zIndex: 100 }}
    >
      <Stack align="end" ta={'end'} fz={{ base: 'xs' }}>
        <Transition transition="slide-left" mounted={menuOpened}>
          {(transitionStyles) => (
            <div style={transitionStyles}>
              <Stack
                align="end"
                ta={'end'}
                gap={'xs'}
                maw={{ base: 240, md: 260, lg: 320 }}
                fz={'12'}
              >
                <ActionIcon
                  size={ICON_WRAPPER_SIZE}
                  variant="white"
                  style={{
                    border: '1px solid var(--mantine-color-default-border)',
                    boxShadow: 'var(--mantine-shadow-xs)',
                  }}
                  onClick={() => {
                    clear();
                    setMenuOpened(false);
                  }}
                >
                  <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                </ActionIcon>

                <Card withBorder shadow="xs" px={'sm'} py={'xs'}>
                  <Text inherit>Hi, I&apos;m Hekima.</Text>
                </Card>

                <Card withBorder shadow="xs" px={'sm'} py={'xs'}>
                  <Text inherit>The {COMPANY_NAME} AI assistant.</Text>
                </Card>

                <Card withBorder shadow="xs" px={'sm'} py={'xs'}>
                  <Text inherit>What would you like to know{getRoute()}</Text>
                </Card>
              </Stack>
            </div>
          )}
        </Transition>

        <Transition transition="slide-left" mounted={aiOpened}>
          {(transitionStyles) => (
            <div style={transitionStyles}>
              <DrawerAi>
                <Group
                  className={classes.child}
                  gap={5}
                  p={'xs'}
                  onClick={() => {
                    clear();
                    setMenuOpened(false);
                  }}
                >
                  <Box h={aiImageSize} w={aiImageSize}>
                    <ImageDefault
                      src={images.icons.chatbot}
                      alt={'Hekima AI'}
                      loading="lazy"
                      fit={'contain'}
                      width={aiImageSize}
                      height={aiImageSize}
                    />
                  </Box>
                </Group>
              </DrawerAi>
            </div>
          )}
        </Transition>
      </Stack>
    </Affix>
  );
}

const aiImageSize = { base: 32, md: 40 };
