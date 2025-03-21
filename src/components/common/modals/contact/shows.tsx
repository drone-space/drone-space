'use client';

import React from 'react';
import { Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FormInquiryService from '@/components/form/inquiry/service';

export default function Shows({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        title={
          <Text component="span" inherit fw={'bold'} c={'pri'}>
            Drone Light Show Inquiry
          </Text>
        }
      >
        <FormInquiryService
          props={{
            close,
            initialValues: { subject: 'Drone Light Show Inquiry' },
          }}
        />
      </Modal>

      <span style={{ display: 'inline' }} onClick={open}>
        {children}
      </span>
    </>
  );
}
