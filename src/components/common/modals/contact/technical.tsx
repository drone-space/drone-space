'use client';

import React from 'react';
import { Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FormContact from '@/components/form/contact';

export default function Technical({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size={'xl'}
        centered
        title={
          <Text component="span" inherit fw={'bold'} c={'pri'}>
            Technical Inquiry
          </Text>
        }
      >
        <FormContact
          props={{ subject: 'Technical Inquiry' }}
          options={{ modal: true, inquiry: 'technical' }}
        />
      </Modal>

      <span style={{ display: 'inline' }} onClick={open}>
        {children}
      </span>
    </>
  );
}
