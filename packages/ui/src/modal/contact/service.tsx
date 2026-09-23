'use client';

import React from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { LayoutModal } from '../../layout/modal';
import { FormInquiryService } from '../../form/inquiry/service';
import { FormValuesInquiry } from '@repo/types';
import { APP_NAME } from '@repo/constants';

export function ModalContactService({
  props,
  children,
}: {
  props?: { initialValues?: Partial<FormValuesInquiry> };
  children: React.ReactNode;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} centered withCloseButton={false} padding={0}>
        <LayoutModal props={{ close: close, title: 'Drone Solutions Inquiry' }}>
          <FormInquiryService
            props={{
              close,
              initialValues: {
                ...props?.initialValues,
                subject: props?.initialValues?.subject || 'Drone Services Inquiry',
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
