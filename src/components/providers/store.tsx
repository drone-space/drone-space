'use client';

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/libraries/redux/store';
import { updateSession } from '@/libraries/redux/slices/session';
import { generateUUID } from '@/utilities/generators/id';
import { updateColorScheme } from '@/libraries/redux/slices/color-scheme';
import {
  updateModalNewsletter,
  updateModalFeaturedDrone,
} from '@/libraries/redux/slices/modals';

export default function Store({
  colorScheme,
  session = { id: generateUUID() },
  children,
}: {
  colorScheme?: string;
  session?: { id: string };
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) storeRef.current = makeStore();

  // Always update store with the latest props
  const store = storeRef.current;

  // initialize store
  if (colorScheme) store.dispatch(updateColorScheme(colorScheme));
  if (session) store.dispatch(updateSession(session));
  store.dispatch(updateModalNewsletter(false));
  store.dispatch(updateModalFeaturedDrone(false));

  return <Provider store={store}>{children}</Provider>;
}
