'use client';

import React, { useEffect, useState } from 'react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import { COOKIE_NAME } from '@repo/constants/names';
import { Alert, Text, Transition } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import {
  getCookieClient,
  setCookieClient,
} from '@repo/utilities/cookie-client';

export default function RadioTelephony() {
  const [opened, setOpened] = useState(false);

  const close = () => {
    setCookieClient(COOKIE_NAME.KCAA_UPDATE, true, {
      expiryInSeconds: 60 * 60 * 24 * 7,
      path: '/',
      sameSite: 'Lax',
    });

    setOpened(false);
  };

  useEffect(() => {
    const subRejected = getCookieClient(COOKIE_NAME.KCAA_UPDATE);
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
            closeButtonLabel={'Close KCAA Updates alert'}
            aria-labelledby="KCAA Updates"
            title={'KCAA Updates'}
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
            <Text component="span" inherit fz={{ base: 'xs', md: 'sm' }}>
              Main exams are now{' '}
              <strong>issued by and conducted at KCAA</strong>.
            </Text>{' '}
            <Text component="span" inherit fz={{ base: 'xs', md: 'sm' }}>
              The Radiotelephony course is now part of the RPL course and is
              therefore <strong>no longer offered separately</strong>.
            </Text>{' '}
            <Text component="span" inherit fz={{ base: 'xs', md: 'sm' }}>
              All RPL applicants are now required to undertake an{' '}
              <strong>English Proficiency exam</strong> and an{' '}
              <strong>Oral Radiotelephony exam</strong>.
            </Text>
          </Alert>
        </div>
      )}
    </Transition>
  );
}
