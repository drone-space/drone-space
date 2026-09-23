'use client';

import React from 'react';
import { useAppshellInitialize, useLoadAppData, useSessionStore } from '@repo/store';
import { UserObject } from '@repo/types';
import { AppShellValue } from '@repo/store';
import { STORE_NAME } from '@repo/constants';

export function ProviderInitialize({
  props,
  children,
}: {
  props: {
    baseUrl: string;
    sessionUser: UserObject | null;
    cookie?: AppShellValue;
  };
  children: React.ReactNode;
}) {
  // initialize stores

  useSessionStore({
    sessionUser: props?.sessionUser || null,
    options: { clientOnly: true },
  });

  // useUserRoleStore();

  useLoadAppData({
    sourceSite: 'web',
    apiUrl: props.baseUrl,
    clientOnly: false,
    storesToLoad: STORES_TO_LOAD,
  });

  return <div>{children}</div>;
}

const STORES_TO_LOAD = {
  [STORE_NAME.CATEGORIES]: true,
  [STORE_NAME.POSTS]: true,
  [STORE_NAME.ALUMNI_CHALLENGERS]: true,
};
