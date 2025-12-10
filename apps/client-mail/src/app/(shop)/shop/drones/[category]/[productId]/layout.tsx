import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@repo/components/layout/body';
import { linkify } from '@repo/utilities/url';
import products from '@/data/products';
import { typeParams } from '../layout';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { images } from '@/assets/images';
import { companyName } from '@repo/constants/app';

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
      url: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/shop/drones/${linkify(product?.category || '')}/${linkify(product?.title.long || '')}`,
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

export default function Drone({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
