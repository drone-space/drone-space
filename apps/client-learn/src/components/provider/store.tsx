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

export default function Store({
  props,
  children,
}: {
  props?: { sessionUser: User | null };
  children: React.ReactNode;
}) {
  // initialize stores

  useSessionStore({
    sessionUser: props?.sessionUser || null,
    options: { clientOnly: false },
  });
  // useUserRoleStore();
  useAppshellStore();
  useLoadAppData({
    clientOnly: false,
    storesToLoad: {
      [STORE_NAME.QUIZZES]: true,
      [STORE_NAME.QUESTIONS]: true,
      [STORE_NAME.QUIZ_QUESTIONS]: true,
      [STORE_NAME.OPTIONS]: true,
      [STORE_NAME.ATTEMPTS]: true,
      [STORE_NAME.ANSWERS]: true,
    },
  });

  return <div>{children}</div>;
}
