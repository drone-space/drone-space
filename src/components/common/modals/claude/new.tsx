'use client';

import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

export default function New({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        thread
      </Modal>

      <div onClick={open} style={{ cursor: 'pointer' }}>
        {children}
      </div>
    </>
  );
}
