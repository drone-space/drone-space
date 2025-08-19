'use client';

import React, { useState } from 'react';
import { Modal } from '@mantine/core';
import CtaConference from '@/components/partials/cta/conference';
import { setCookieClient } from '@/utilities/helpers/cookie-client';
import { COOKIE_NAME } from '@/data/constants';

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
