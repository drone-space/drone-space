'use client';

import React, { useState } from 'react';
import { Modal } from '@mantine/core';
import { COOKIE_NAME } from '@repo/constants/names';
import { setCookieClient } from '@repo/utilities/cookie-client';
import CtaConference from '@/components/partial/cta/conference';

export default function Conference({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);

  const close = () => {
    setCookieClient(COOKIE_NAME.CONFERENCE, true, {
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
        styles={{
          content: {
            padding: 0,
          },
        }}
        size={'xl'}
      >
        <CtaConference close={close} />
      </Modal>

      {children && (
        <span
          style={{ display: 'inline', cursor: 'pointer' }}
          onClick={() => setOpened(true)}
        >
          {children}
        </span>
      )}
    </>
  );
}
