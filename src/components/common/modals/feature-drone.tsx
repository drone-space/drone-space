'use client';

import React, { useEffect, useState } from 'react';
import { Modal } from '@mantine/core';
import CtaFeatured from '@/components/partials/cta/featured';
import { COOKIE_NAME } from '@/data/constants';
import {
  getCookieClient,
  setCookieClient,
} from '@/utilities/helpers/cookie-client';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { updateModalFeaturedDrone } from '@/libraries/redux/slices/modals';

export default function FeatureDrone({
  options,
  children,
}: {
  options?: { auto?: boolean };
  children?: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);

  const openedGlobal = useAppSelector((state) => state.modals.featuredDrone);

  const dispatch = useAppDispatch();

  const close = () => {
    setCookieClient(COOKIE_NAME.FEAT_DRONE_SEEN, true, {
      expiryInSeconds: 60 * 60 * 24 * 7,
      path: '/',
      sameSite: 'Lax',
    });

    dispatch(updateModalFeaturedDrone(false));
    setOpened(false);
  };

  useEffect(() => {
    if (openedGlobal == null) return;
    if (openedGlobal == true) return;
    if (options?.auto == false) return;

    const featDroneSeen = getCookieClient(COOKIE_NAME.FEAT_DRONE_SEEN);
    if (featDroneSeen && featDroneSeen == 'true') return;

    dispatch(updateModalFeaturedDrone(true));
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
        size={'xl'}
      >
        <CtaFeatured close={close} />
      </Modal>

      {children && (
        <span
          style={{ display: 'inline' }}
          onClick={() => {
            if (openedGlobal == true) return;

            dispatch(updateModalFeaturedDrone(true));
            setOpened(true);
          }}
        >
          {children}
        </span>
      )}
    </>
  );
}
