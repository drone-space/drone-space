'use client';

import React from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FormInquiryProduct from '@/components/form/inquiry/product';
import { FormInquiryValues } from '@/hooks/form/inquiry';
import LayoutModal from '@/components/layout/modal';

export default function Shop({
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
        <LayoutModal props={{ close: close, title: 'Drone Purchase Inquiry' }}>
          <FormInquiryProduct
            props={{
              close,
              initialValues: {
                ...props?.initialValues,
                subject:
                  props?.initialValues?.subject || 'Drone Purchase Inquiry',
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
