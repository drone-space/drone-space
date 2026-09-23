'use client';

import React, { useEffect, useState } from 'react';
import { Modal } from '@mantine/core';
import { COOKIE_NAME } from '@repo/constants';
import { getCookieClient, setCookieClient } from '@repo/utils';
import CtaFeatured from '@web/ui/partial/cta/featured';

export default function FeatureDrone({
  options,
  children,
}: {
  options?: { auto?: boolean };
  children?: React.ReactNode;
}) {
  const [opened, setOpened] = useState(() => {
    // Respect auto option if provided
    if (options?.auto === false) return false;

    const featDroneSeen = getCookieClient(COOKIE_NAME.FEAT_DRONE_SEEN);

    // If seen (truthy), it should NOT be opened initially
    return !featDroneSeen;
  });

  const close = () => {
    setCookieClient(COOKIE_NAME.FEAT_DRONE_SEEN, true, {
      expiryInSeconds: 60 * 60 * 24 * 7,
      path: '/',
      sameSite: 'Lax',
    });

    setOpened(false);
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        padding={0}
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
