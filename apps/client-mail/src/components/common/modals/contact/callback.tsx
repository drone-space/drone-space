'use client';

import React from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import LayoutModal from '@repo/components/layout/modal';
import FormInquiryCallback from '@/components/form/inquiry/callback';

export default function Callback({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} centered withCloseButton={false}>
        <LayoutModal props={{ close: close, title: 'Callback Request' }}>
          <FormInquiryCallback props={{ close }} />
        </LayoutModal>
      </Modal>

      <span style={{ display: 'inline' }} onClick={open}>
        {children}
      </span>
    </>
  );
}
