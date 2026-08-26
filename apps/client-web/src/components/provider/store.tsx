'use client';

/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import React from 'react';
import {
  useSessionStore,
  useAppshellStore,
  useLoadAppData,
} from '@repo/hooks/store';
import { User } from '@supabase/supabase-js';
import { STORE_NAME } from '@repo/constants/names';
import { AppShellValue } from '@repo/libraries/zustand/stores/shell';

export default function Store({
  props,
  children,
}: {
  props: { apiUrl: string; sessionUser?: User | null; cookie?: AppShellValue };
  children: React.ReactNode;
}) {
  // initialize stores

  useSessionStore({
    sessionUser: props?.sessionUser || null,
    options: { clientOnly: true },
  });
  // useUserRoleStore();
  // useThemeStore()
  // useAppshellStore();
  useLoadAppData({
    apiUrl: props.apiUrl,
    clientOnly: false,
    storesToLoad: STORES_TO_LOAD,
  });

  return <div>{children}</div>;
}

const STORES_TO_LOAD = {
  [STORE_NAME.CATEGORIES]: true,
  [STORE_NAME.POSTS]: true,
};
