'use client';

import React from 'react';
import { Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FormDownloadDocument from '@/components/form/download/download';
import LayoutModal from '@/components/layout/modal';

export default function Document({
  props,
  children,
}: {
  props: { type: 'profile' | 'brochure' };
  children: React.ReactNode;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} centered withCloseButton={false}>
        <LayoutModal
          props={{
            close: close,
            title: `${props.type == 'brochure' ? 'Brochure' : 'Company Profile'} Download`,
          }}
        >
          <FormDownloadDocument props={{ type: props.type, close }} />
        </LayoutModal>
      </Modal>

      <span style={{ display: 'inline' }} onClick={open}>
        {children}
      </span>
    </>
  );
}
