'use client';

import React from 'react';
import { Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FormDownloadDocument from '@/components/form/download/download';

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
      <Modal
        opened={opened}
        onClose={close}
        centered
        title={
          <Text component="span" inherit fw={'bold'} c={'pri'}>
            Brochure Download
          </Text>
        }
      >
        <FormDownloadDocument props={{ type: props.type, close }} />
      </Modal>

      <span style={{ display: 'inline' }} onClick={open}>
        {children}
      </span>
    </>
  );
}
