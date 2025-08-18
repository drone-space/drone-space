'use client';

import { COOKIE_NAME, ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import { Alert, Text, Transition } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import {
  getCookieClient,
  setCookieClient,
} from '@/utilities/helpers/cookie-client';
import { appName } from '@/data/app';

export default function Shipment() {
  const [opened, setOpened] = useState(false);

  const close = () => {
    setCookieClient(COOKIE_NAME.SHIPMENT, true, {
      expiryInSeconds: 60 * 60 * 24 * 7,
      path: '/',
      sameSite: 'Lax',
    });

    setOpened(false);
  };

  useEffect(() => {
    const subRejected = getCookieClient(COOKIE_NAME.SHIPMENT);
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
            color="yellow.6"
            c={'var(--mantine-color-text)'}
            withCloseButton
            onClose={close}
            closeButtonLabel={'Close Drone Aquisition alert'}
            aria-labelledby="Drone Aquisition"
            icon={
              <IconAlertTriangle size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            }
            styles={{
              root: {
                paddingTop: 'var(--mantine-spacing-xs)',
                paddingBottom: 'var(--mantine-spacing-xs)',
              },
              closeButton: {
                color: 'var(--mantine-color-text)',
              },
            }}
          >
            <Text
              component="span"
              inherit
              fz={'xs'}
              c={'var(--mantine-color-text)'}
            >
              {appName} currently does{' '}
              <Text component="span" inherit fw={500}>
                NOT
              </Text>{' '}
              keep stock. Any drone you wish to purchase will be imported when
              you place an order with us.
            </Text>
          </Alert>
        </div>
      )}
    </Transition>
  );
}
