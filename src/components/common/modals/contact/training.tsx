'use client';

import React from 'react';
import { Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FormInquiryTraining from '@/components/form/inquiry/training';
import { FormInquiryValues } from '@/hooks/form/inquiry';
import LayoutModal from '@/components/layout/modal';

export default function Training({
  props,
  children,
}: {
  props?: { initialValues?: Partial<FormInquiryValues> };
  children: React.ReactNode;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} centered withCloseButton={false}>
        <LayoutModal props={{ close: close, title: 'Drone Training Inquiry' }}>
          <FormInquiryTraining
            props={{
              close,
              initialValues: {
                ...props?.initialValues,
                subject:
                  props?.initialValues?.subject || 'Drone Training Inquiry',
              },
            }}
          />
        </LayoutModal>
      </Modal>

      <span style={{ display: 'inline' }} onClick={open}>
        {children}
      </span>
    </>
  );
}
