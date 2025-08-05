'use client';

import React from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CtaNewsletter from '@/components/partials/cta/newsletter';

export default function Newsletter({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [opened, { open, close }] = useDisclosure(true);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        padding={0}
        size={'lg'}
      >
        <CtaNewsletter close={close} />
      </Modal>

      {children && (
        <span style={{ display: 'inline' }} onClick={open}>
          {children}
        </span>
      )}
    </>
  );
}
