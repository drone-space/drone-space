import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import appData from '@/data/app';

export const metadata: Metadata = {
  title: {
    default: 'Basic Training',
    template: `%s - Basic Training - Drone Training & Drone School - ${appData.name.app}`,
  },
};

export default function Basic({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
