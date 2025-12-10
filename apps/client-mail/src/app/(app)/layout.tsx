/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import React from 'react';
import { Metadata } from 'next';
import { appName } from '@repo/constants/app';
import ShellApp from '@/components/layout/shells/app';

export const metadata: Metadata = {
  title: { default: `${appName} Mail`, template: `%s - ${appName} Mail` },
};

export default async function LayoutApp({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <ShellApp>{children}</ShellApp>;
}
