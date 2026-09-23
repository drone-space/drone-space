'use client';

import React from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { LayoutModal } from '../../layout/modal';
import { FormInquiryTraining } from '../../form/inquiry/training';
import { FormValuesInquiry } from '@repo/types';
import { APP_NAME } from '@repo/constants';

export function ModalContactTraining({
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
        <LayoutModal props={{ close: close, title: 'Drone Training Inquiry' }}>
          <FormInquiryTraining
            props={{
              close,
              initialValues: {
                ...props?.initialValues,
                subject: props?.initialValues?.subject || 'Drone Training Inquiry',
                appName: APP_NAME.WEB,
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
