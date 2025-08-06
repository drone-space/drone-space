'use client';

import React, { useEffect, useState } from 'react';
import { Modal } from '@mantine/core';
import CtaNewsletter from '@/components/partials/cta/newsletter';
import { getFromLocalStorage } from '@/utilities/helpers/storage';
import { COOKIE_NAME, LOCAL_STORAGE_NAME } from '@/data/constants';
import {
  getCookieClient,
  setCookieClient,
} from '@/utilities/helpers/cookie-client';

export default function Newsletter({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);

  const close = () => {
    const subStatus = getFromLocalStorage(LOCAL_STORAGE_NAME.NEWSLETTER);

    setCookieClient(COOKIE_NAME.SUB_REJECTED, !subStatus, {
      expiryInSeconds: 60 * 60 * 24,
      path: '/',
      sameSite: 'Lax',
    });

    setOpened(false);
  };

  useEffect(() => {
    const subStatus = getFromLocalStorage(LOCAL_STORAGE_NAME.NEWSLETTER);
    if (subStatus && subStatus == true) return;

    const subRejected = getCookieClient(COOKIE_NAME.SUB_REJECTED);
    if (subRejected && subRejected == 'true') return;

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
        <span style={{ display: 'inline' }} onClick={() => setOpened(true)}>
          {children}
        </span>
      )}
    </>
  );
}
