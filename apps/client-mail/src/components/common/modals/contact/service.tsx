'use client';

import React from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import LayoutModal from '@repo/components/layout/modal';
import FormInquiryService from '@/components/form/inquiry/service';
import { FormValuesInquiry } from '@repo/types/form';

export default function Service({
  props,
  children,
}: {
  props?: { initialValues?: Partial<FormValuesInquiry> };
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
