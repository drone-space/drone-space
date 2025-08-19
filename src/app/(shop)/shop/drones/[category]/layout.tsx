import React from 'react';

import { Metadata } from 'next';

import LayoutBody from '@/components/layout/body';
import { capitalizeWords, linkify } from '@/utilities/formatters/string';
import products from '@/data/products';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import { companyName } from '@/data/app';

export interface typeParams {
  category: string;
  droneId: string;
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<typeParams>;
}): Promise<Metadata> => {
  const id = (await params).category;
  const product = products.find((p) => linkify(p.category) == id);

  const metaTitle = `${capitalizeWords(product?.category || 'Category')} Drones`;

  return {
    title: {
      default: metaTitle,
      template: `%s - ${metaTitle} - ${companyName} Kenya`,
    },
    openGraph: {
      title: metaTitle,
      // description: metaDesc,
      url: `${HOSTED_BASE_URL.DEFAULT}/shop/drones/${linkify(product?.category || '')}`,
      type: 'website',
      images: [
        {
          url: images.brand.droneSpace.logo.potrait.meta,
          width: 1200,
          height: 1200,
          alt: companyName,
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
