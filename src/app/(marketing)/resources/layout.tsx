import React from 'react';

import { Metadata } from 'next';

import LayoutBody from '@/components/layout/body';

import appData from '@/data/app';

export const metadata: Metadata = {
  title: {
    default: 'Resources',
    template: `%s - Resources - ${appData.name.app}`,
  },
};

export default function LayoutResources({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
