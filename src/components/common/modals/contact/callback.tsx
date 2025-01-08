'use client';

import React from 'react';
import { Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FormContact from '@/components/form/contact';

export default function Callback({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        title={
          <Text component="span" inherit fw={'bold'} c={'pri'}>
            Callback Request
          </Text>
        }
      >
        <FormContact
          props={{
            subject: 'Callback Request',
            message: 'Please call me back as soon as conveniently possible.',
          }}
          options={{ inquiry: 'callback' }}
        />
      </Modal>

      <span style={{ display: 'inline' }} onClick={open}>
        {children}
      </span>
    </>
  );
}
