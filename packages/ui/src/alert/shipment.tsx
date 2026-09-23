'use client';

import React, { useEffect, useState } from 'react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants';
import { COOKIE_NAME } from '@repo/constants';
import { Alert, Text, Transition } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';
import { getCookieClient, setCookieClient } from '@repo/utils';
import { APP_NAME } from '@repo/constants';

export function AlertShipment() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const shipment = getCookieClient(COOKIE_NAME.SHIPMENT);
    if (shipment) return;

    // Defer setting state to the next browser animation frame to avoid
    // triggering "setState synchronously within an effect" while staying hydration-safe.
    const handle = requestAnimationFrame(() => {
      setOpened(true);
    });

    return () => cancelAnimationFrame(handle);
  }, []);

  const close = () => {
    setCookieClient(COOKIE_NAME.SHIPMENT, true, {
      expiryInSeconds: 60 * 60 * 24 * 7,
      path: '/',
      sameSite: 'Lax',
    });

    setOpened(false);
  };

  return (
    <Transition mounted={opened} transition="fade-down" duration={250} timingFunction="ease">
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
            icon={<IconAlertTriangle size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
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
            <Text component="span" inherit fz={'xs'} c={'var(--mantine-color-text)'}>
              {APP_NAME.WEB} currently does{' '}
              <Text component="span" inherit fw={500}>
                NOT
              </Text>{' '}
              keep stock. Any drone you wish to purchase will be imported when you place an order
              with us.
            </Text>
          </Alert>
        </div>
      )}
    </Transition>
  );
}
