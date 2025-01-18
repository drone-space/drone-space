import React from 'react';

import { Metadata } from 'next';

import LayoutBody from '@/components/layout/body';
import { capitalizeWords, linkify } from '@/utilities/formatters/string';
import products from '@/data/products';
import appData from '@/data/app';

export interface typeParams {
  params: { category: string; droneId: string };
}

export const generateMetadata = ({ params }: typeParams): Metadata => {
  const product = products.find((p) => linkify(p.category) == params.category);

  return {
    title: {
      default: `${capitalizeWords(product?.category || 'Category')} Drones`,
      template: `%s - ${capitalizeWords(product?.category || 'Category')} Drones - ${appData.name.company} Kenya`,
    },
  };
};

export default function Category({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
