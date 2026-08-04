'use client';

import React, { useEffect, useState } from 'react';
import { Modal } from '@mantine/core';
import { COOKIE_NAME } from '@repo/constants/names';
import {
  getCookieClient,
  setCookieClient,
} from '@repo/utilities/cookie-client';
import CtaFeatured from '@/components/partial/cta/featured';

export default function FeatureDrone({
  options,
  children,
}: {
  options?: { auto?: boolean };
  children?: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);

  const close = () => {
    setCookieClient(COOKIE_NAME.FEAT_DRONE_SEEN, true, {
      expiryInSeconds: 60 * 60 * 24 * 7,
      path: '/',
      sameSite: 'Lax',
    });

    setOpened(false);
  };

  useEffect(() => {
    if (options?.auto == false) return;

    const featDroneSeen = getCookieClient(COOKIE_NAME.FEAT_DRONE_SEEN);

    // Check if it's truthy (handles both boolean true or legacy string 'true')
    if (featDroneSeen) return;

    setOpened(true);
  }, []);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        styles={{
          content: {
            padding: 0,
          },
        }}
        size={'xl'}
      >
        <CtaFeatured close={close} />
      </Modal>

      {children && (
        <span
          style={{ display: 'inline' }}
          onClick={() => {
            setOpened(true);
          }}
        >
          {children}
        </span>
      )}
    </>
  );
}
