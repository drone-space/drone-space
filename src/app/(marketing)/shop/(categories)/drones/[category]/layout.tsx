import React from 'react';

import { Metadata } from 'next';

import LayoutBody from '@/components/layout/body';
import { capitalizeWords, linkify } from '@/utilities/formatters/string';
import products from '@/data/products';
import appData from '@/data/app';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';

export interface typeParams {
  params: { category: string; droneId: string };
}

export const generateMetadata = ({ params }: typeParams): Metadata => {
  const product = products.find((p) => linkify(p.category) == params.category);

  const metaTitle = `${capitalizeWords(product?.category || 'Category')} Drones`;

  return {
    title: {
      default: metaTitle,
      template: `%s - ${metaTitle} - ${appData.name.company} Kenya`,
    },
    openGraph: {
      title: metaTitle,
      // description: metaDesc,
      url: `${HOSTED_BASE_URL.DRONE_SPACE}/shop/drones/${linkify(product?.category || '')}`,
      type: 'website',
      images: [
        {
          url: images.brand.droneSpace.logo.potrait.meta,
          width: 1200,
          height: 1200,
          alt: appData.name.company,
        },
      ],
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
