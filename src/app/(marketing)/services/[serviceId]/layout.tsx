import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';

import services from '@/data/services';
import { linkify } from '@/utilities/formatters/string';

export interface typeParams {
  params: { serviceId: string };
}

export const generateMetadata = ({ params }: typeParams): Metadata => {
  return {
    title: services.find((p) => linkify(p.title) == params.serviceId)?.title,
  };
};

export default function Service({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
