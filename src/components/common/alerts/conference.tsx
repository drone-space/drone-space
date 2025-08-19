'use client';

import { COOKIE_NAME, ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import { Alert, Text, Transition } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import ModalConference from '../modals/conference';
import {
  getCookieClient,
  setCookieClient,
} from '@/utilities/helpers/cookie-client';
import { appName } from '@/data/app';

export default function Conference() {
  const [opened, setOpened] = useState(false);

  const close = () => {
    setCookieClient(COOKIE_NAME.CONFERENCE, true, {
      expiryInSeconds: 60 * 60 * 24 * 7,
      path: '/',
      sameSite: 'Lax',
    });

    setOpened(false);
  };

  useEffect(() => {
    const subRejected = getCookieClient(COOKIE_NAME.CONFERENCE);
    if (subRejected && subRejected == 'true') return;

    setOpened(true);
  }, []);

  return (
    <Transition
      mounted={opened}
      transition="fade-down"
      duration={250}
      timingFunction="ease"
    >
      {(styles) => (
        <div style={styles}>
          <Alert
            radius={0}
            variant="filled"
            color="blue.6"
            withCloseButton
            onClose={close}
            closeButtonLabel={'Close AI Conference alert'}
            aria-labelledby="AI Conference"
            icon={
              <IconInfoCircle size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            }
            styles={{
              root: {
                paddingTop: 'var(--mantine-spacing-xs)',
                paddingBottom: 'var(--mantine-spacing-xs)',
              },
            }}
          >
            <Text component="span" inherit fz={'xs'}>
              {appName} hosts an AI Conference every year. Learn more about the
              annual event{' '}
              <Text component="span" inherit td={'underline'}>
                <ModalConference>here</ModalConference>
              </Text>
              .
            </Text>
          </Alert>
        </div>
      )}
    </Transition>
  );
}
