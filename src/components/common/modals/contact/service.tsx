'use client';

import React from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FormInquiryService from '@/components/form/inquiry/service';
import { FormInquiryValues } from '@/hooks/form/inquiry';
import LayoutModal from '@/components/layout/modal';

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
      <Modal opened={opened} onClose={close} centered withCloseButton={false}>
        <LayoutModal props={{ close: close, title: 'Drone Solutions Inquiry' }}>
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
        </LayoutModal>
      </Modal>

      <span style={{ display: 'inline' }} onClick={open}>
        {children}
      </span>
    </>
  );
}
