'use client';

import React, { useEffect, useState } from 'react';
import { Modal } from '@mantine/core';
import CtaNewsletter from '@/components/partials/cta/newsletter';
import { getFromLocalStorage } from '@/utilities/helpers/storage';
import { COOKIE_NAME, LOCAL_STORAGE_NAME } from '@/data/constants';
import {
  getCookieClient,
  setCookieClient,
} from '@/utilities/helpers/cookie-client';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { updateModalNewsletter } from '@/libraries/redux/slices/modals';

export default function Newsletter({
  options,
  children,
}: {
  options?: { auto?: boolean };
  children?: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);

  const openedGlobal = useAppSelector((state) => state.modals.newsletter);
  const dispatch = useAppDispatch();

  const close = () => {
    const subStatus = getFromLocalStorage(LOCAL_STORAGE_NAME.NEWSLETTER);

    setCookieClient(COOKIE_NAME.SUB_REJECTED, !subStatus, {
      expiryInSeconds: 60 * 60 * 24,
      path: '/',
      sameSite: 'Lax',
    });

    dispatch(updateModalNewsletter(false));
    setOpened(false);
  };

  useEffect(() => {
    if (openedGlobal == null) return;
    if (openedGlobal == true) return;
    if (options?.auto == false) return;

    const subStatus = getFromLocalStorage(LOCAL_STORAGE_NAME.NEWSLETTER);
    if (subStatus && subStatus == true) return;

    const subRejected = getCookieClient(COOKIE_NAME.SUB_REJECTED);
    if (subRejected && subRejected == 'true') return;

    dispatch(updateModalNewsletter(true));
    setOpened(true);
  }, []);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        styles={{
          content: {
            padding: 0,
          },
        }}
        size={'lg'}
      >
        <CtaNewsletter close={close} />
      </Modal>

      {children && (
        <span
          style={{ display: 'inline' }}
          onClick={() => {
            if (openedGlobal == true) return;

            dispatch(updateModalNewsletter(true));
            setOpened(true);
          }}
        >
          {children}
        </span>
      )}
    </>
  );
}
