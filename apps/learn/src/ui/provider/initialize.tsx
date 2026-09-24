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
    options: { clientOnly: false },
  });

  // useUserRoleStore();

  useAppshellInitialize();

  useLoadAppData({
    sourceSite: 'learn',
    apiUrl: props.baseUrl,
    clientOnly: false,
    storesToLoad: STORES_TO_LOAD,
  });

  return <div>{children}</div>;
}

const STORES_TO_LOAD = {
  [STORE_NAME.QUIZZES]: true,
  [STORE_NAME.QUESTIONS]: true,
  [STORE_NAME.QUIZ_QUESTIONS]: true,
  [STORE_NAME.OPTIONS]: true,
  [STORE_NAME.ATTEMPTS]: true,
  [STORE_NAME.ANSWERS]: true,
  [STORE_NAME.SRPLS]: true,
  [STORE_NAME.PROFILES]: true,
};
