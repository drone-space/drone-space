'use client';
import React, { useEffect, useState } from 'react';
import {
  Affix,
  Box,
  Center,
  Group,
  Text,
  Tooltip,
  Transition,
} from '@mantine/core';
import {
  useTimeout,
  // useWindowScroll
} from '@mantine/hooks';
import { usePathname } from 'next/navigation';
import ModalAI from '../modals/ai';
import { images } from '@/assets/images';
import classes from './ai.module.scss';
import { LOCAL_STORAGE_NAME, SESSION_STORAGE_NAME } from '@/data/constants';
import { getFromLocalStorage } from '@/utilities/helpers/storage';
import { updateConversation } from '@/libraries/redux/slices/ai';
import { useAppDispatch } from '@/hooks/redux';
import ImageDefault from '../images/default';

export default function Ai() {
  const pathname = usePathname();

  const dispatch = useAppDispatch();

  const [menuOpened, setMenuOpened] = useState(false);
  const { start, clear } = useTimeout(() => setMenuOpened(true), 7000);

  // const [scroll] = useWindowScroll();

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
        const count = sessionStorage.getItem(SESSION_STORAGE_NAME.AI_COUNT);

        if (!count) {
          start();
          setTimeout(() => setMenuOpened(false), 14000);

          sessionStorage.setItem(SESSION_STORAGE_NAME.AI_COUNT, '0');
        } else {
          if (Number(count) <= routes.length) {
            start();
            setTimeout(() => setMenuOpened(false), 14000);

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
    dispatch(updateConversation(storedConversation || []));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Affix
      position={{ bottom: 'calc(var(--mantine-spacing-xl) * 1.5)', right: 0 }}
    >
      <Transition transition="slide-left" mounted={true}>
        {(transitionStyles) => (
          <div style={transitionStyles}>
            <Tooltip
              color="pri"
              withArrow
              position="bottom-end"
              multiline
              opened={true && menuOpened}
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
                <ModalAI>
                  <Group className={classes.child} gap={5}>
                    <Text pl={'xs'}>Ask Hekima</Text>

                    <Box h={47} w={47}>
                      <ImageDefault
                        src={images.icons.openAi}
                        alt={'Hekima AI'}
                        loading="lazy"
                        fit={'contain'}
                        width={47}
                        height={47}
                      />
                    </Box>
                  </Group>
                </ModalAI>
              </Center>
            </Tooltip>
          </div>
        )}
      </Transition>
    </Affix>
  );
}
