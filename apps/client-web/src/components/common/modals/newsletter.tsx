'use client';

import React, { useEffect, useState } from 'react';
import { Modal } from '@mantine/core';
import { getFromLocalStorage } from '@repo/utilities/storage';
import { COOKIE_NAME, LOCAL_STORAGE_NAME } from '@repo/constants/names';
import {
  getCookieClient,
  setCookieClient,
} from '@repo/utilities/cookie-client';
import CtaNewsletter from '@/components/partial/cta/newsletter';
import { useStoreModal } from '@/libraries/zustand/stores/modals';

export default function Newsletter({
  options,
  children,
}: {
  options?: { auto?: boolean };
  children?: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);

  const { modal, setModal } = useStoreModal();

  const close = () => {
    const subStatus = getFromLocalStorage(LOCAL_STORAGE_NAME.NEWSLETTER);

    setCookieClient(COOKIE_NAME.SUB_REJECTED, !subStatus, {
      expiryInSeconds: 60 * 60 * 24,
      path: '/',
      sameSite: 'Lax',
    });

    setModal({
      featuredDrone: modal?.featuredDrone ?? false,
      newsletter: false,
    });
    setOpened(false);
  };

  useEffect(() => {
    if (modal?.newsletter == null) return;
    if (modal?.newsletter == true) return;
    if (options?.auto == false) return;

    const subStatus = getFromLocalStorage(LOCAL_STORAGE_NAME.NEWSLETTER);
    if (subStatus && subStatus == true) return;

    const subRejected = getCookieClient(COOKIE_NAME.SUB_REJECTED);
    if (subRejected && subRejected == 'true') return;

    setModal({
      featuredDrone: modal?.featuredDrone ?? false,
      newsletter: true,
    });
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
        size={'lg'}
      >
        <CtaNewsletter close={close} />
      </Modal>

      {children && (
        <span
          style={{ display: 'inline' }}
          onClick={() => {
            if (modal?.newsletter == true) return;

            setModal({
              featuredDrone: modal?.featuredDrone ?? false,
              newsletter: true,
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
