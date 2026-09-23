import React from 'react';
import { Metadata } from 'next';
import { LayoutMain } from '@repo/ui';
import { linkify } from '@repo/utils';
import { getBaseUrl, products } from '@repo/constants';
import { typeParams } from '../layout';
import { images } from '@repo/constants';
import { COMPANY_NAME } from '@repo/constants';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<typeParams>;
}): Promise<Metadata> => {
  const id = (await params).productId;
  const product = products.find((p) => linkify(p.title.long) == id);

  return {
    title: product?.title.long,
    openGraph: {
      title: product?.title.long,
      // description: metaDesc,
      url: `${(await getBaseUrl()).WEB}/shop/drones/${linkify(product?.category || '')}/${linkify(product?.title.long || '')}`,
      type: 'website',
      images: [
        {
          url: images.brand.droneSpace.logo.potrait.meta,
          width: 1200,
          height: 1200,
          alt: COMPANY_NAME,
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
  return <LayoutMain>{children}</LayoutMain>;
}
