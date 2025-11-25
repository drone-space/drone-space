'use client';

import React, { useEffect, useState } from 'react';
import { Modal } from '@mantine/core';
import { COOKIE_NAME } from '@repo/constants/names';
import {
  getCookieClient,
  setCookieClient,
} from '@repo/utilities/cookie-client';
import CtaFeatured from '@/components/partial/cta/featured';
import { useStoreModal } from '@/libraries/zustand/stores/modals';

export default function FeatureDrone({
  options,
  children,
}: {
  options?: { auto?: boolean };
  children?: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);

  const { modal, setModal } = useStoreModal();

  const close = () => {
    setCookieClient(COOKIE_NAME.FEAT_DRONE_SEEN, true, {
      expiryInSeconds: 60 * 60 * 24 * 7,
      path: '/',
      sameSite: 'Lax',
    });

    setModal({ newsletter: modal?.newsletter ?? false, featuredDrone: false });
    setOpened(false);
  };

  useEffect(() => {
    if (modal?.featuredDrone == null) return;
    if (modal?.featuredDrone == true) return;
    if (options?.auto == false) return;

    const featDroneSeen = getCookieClient(COOKIE_NAME.FEAT_DRONE_SEEN);
    if (featDroneSeen && featDroneSeen == 'true') return;

    setModal({ newsletter: modal?.newsletter ?? false, featuredDrone: true });
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
            if (modal?.featuredDrone == true) return;

            setModal({
              newsletter: modal?.newsletter ?? false,
              featuredDrone: true,
            });
            setOpened(true);
          }}
        >
          {children}
        </span>
      )}
    </>
  );
}
