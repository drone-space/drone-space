'use client';
import React, { useEffect, useState } from 'react';
import {
  Affix,
  Box,
  Center,
  Group,
  Image,
  Stack,
  Text,
  Tooltip,
  Transition,
} from '@mantine/core';
import NextImage from 'next/image';
import { useHeadroom, useTimeout, useWindowScroll } from '@mantine/hooks';
import { usePathname } from 'next/navigation';
import ModalClaudeMain from '../modals/claude/main';
import { images } from '@/assets/images';
import classes from './assistant.module.scss';
import { LOCAL_STORAGE_NAME, SESSION_STORAGE_NAME } from '@/data/constants';
import { getFromLocalStorage } from '@/utilities/helpers/storage';
import { updateConversation } from '@/libraries/redux/slices/claude';
import { useAppDispatch } from '@/hooks/redux';

export default function Assistant() {
  const pathname = usePathname();

  const dispatch = useAppDispatch();

  const [menuOpened, setMenuOpened] = useState(false);
  const { start, clear } = useTimeout(() => setMenuOpened(true), 7000);

  const [scroll] = useWindowScroll();
  const pinned = useHeadroom({ fixedAt: 120 });

  const routes = ['drone-solutions', '/drone-training', '/shop'];
  const routeIncluded = routes.find((r) => pathname.includes(r));

  const getRoute = () => {
    switch (routeIncluded) {
      case routes[0]:
        return 'If you would like to know more about our services, ';
      case routes[1]:
        return 'For course details, course prices or any other training inquiries, ';
      case routes[2]:
        return 'To see available drones and drone prices or if you have drone purchase inquiries, ';
      default:
        return "If you're short for time and need to go through the website's content quickly, ";
    }
  };

  useEffect(() => {
    if (pathname == '/' || routeIncluded) {
      try {
        const count = sessionStorage.getItem(SESSION_STORAGE_NAME.CLAUDE_COUNT);

        if (!count) {
          start();
          setTimeout(() => setMenuOpened(false), 14000);

          sessionStorage.setItem(SESSION_STORAGE_NAME.CLAUDE_COUNT, '0');
        } else {
          if (Number(count) <= routes.length) {
            start();
            setTimeout(() => setMenuOpened(false), 14000);

            sessionStorage.setItem(
              SESSION_STORAGE_NAME.CLAUDE_COUNT,
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
    const storedConversation = getFromLocalStorage(LOCAL_STORAGE_NAME.CLAUDE);
    dispatch(updateConversation(storedConversation || []));
  }, []);

  return (
    <Affix
      position={{ bottom: 'calc(var(--mantine-spacing-xl) * 1.5)', right: 0 }}
    >
      <Transition
        transition="slide-left"
        mounted={scroll.y > 0 && !pinned}
        keepMounted={true}
      >
        {(transitionStyles) => (
          <div style={transitionStyles}>
            <Tooltip
              color="pri"
              withArrow
              position="bottom-end"
              multiline
              opened={menuOpened}
              events={{ hover: true, focus: true, touch: false }}
              w={220}
              label={
                <Text inherit fz={'xs'}>
                  {getRoute()} ask our AI
                </Text>
              }
            >
              <Center
                onClick={() => {
                  clear();
                  setMenuOpened(false);
                }}
              >
                <ModalClaudeMain>
                  <Group className={classes.child}>
                    <Text inherit fz={{ base: 'xs', lg: 'sm' }} fw={500}>
                      Ask Hekima
                    </Text>

                    <Box h={39} w={39}>
                      <Stack>
                        <Image
                          src={images.icons.claude}
                          alt={'Hekima AI'}
                          loading="lazy"
                          radius={'sm'}
                          component={NextImage}
                          width={31}
                          height={31}
                        />
                      </Stack>
                    </Box>
                  </Group>
                </ModalClaudeMain>
              </Center>
            </Tooltip>
          </div>
        )}
      </Transition>
    </Affix>
  );
}
