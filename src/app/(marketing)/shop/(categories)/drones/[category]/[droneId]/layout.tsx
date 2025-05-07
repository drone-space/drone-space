import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import { linkify } from '@/utilities/formatters/string';
import products from '@/data/products';
import { typeParams } from '../layout';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import appData from '@/data/app';

export const generateMetadata = ({ params }: typeParams): Metadata => {
  const product = products.find((p) => linkify(p.title.long) == params.droneId);

  return {
    title: product?.title.long,
    openGraph: {
      title: product?.title.long,
      // description: metaDesc,
      url: `${HOSTED_BASE_URL.DRONE_SPACE}/shop/drones/${linkify(product?.category || '')}/${linkify(product?.title.long || '')}`,
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

export default function Drone({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
