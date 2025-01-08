import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import appData from '@/data/app';

export const metadata: Metadata = {
  title: { default: 'Pricing', template: `%s - Pricing - ${appData.name.app}` },
};

export default function Pricing({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
