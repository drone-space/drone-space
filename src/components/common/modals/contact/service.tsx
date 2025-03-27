'use client';

import React from 'react';
import { Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FormInquiryService from '@/components/form/inquiry/service';
import { FormInquiryValues } from '@/hooks/form/inquiry';

export default function Service({
  props,
  children,
}: {
  props?: { initialValues?: Partial<FormInquiryValues> };
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
            Drone Solutions Inquiry
          </Text>
        }
      >
        <FormInquiryService
          props={{
            close,
            initialValues: {
              ...props?.initialValues,
              subject:
                props?.initialValues?.subject || 'Drone Solution Inquiry',
            },
          }}
        />
      </Modal>

      <span style={{ display: 'inline' }} onClick={open}>
        {children}
      </span>
    </>
  );
}
