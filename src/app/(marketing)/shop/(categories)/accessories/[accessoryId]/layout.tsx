import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import { linkify } from '@/utilities/formatters/string';
import accessories from '@/data/accessories';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import appData from '@/data/app';

export interface typeParams {
  params: { accessoryId: string };
}

export const generateMetadata = ({ params }: typeParams): Metadata => {
  const product = accessories.find(
    (a) => linkify(a.title.long) == params.accessoryId
  );

  const metaTitle = product?.title.long;

  return {
    title: metaTitle,
    openGraph: {
      title: metaTitle,
      // description: metaDesc,
      url: `${HOSTED_BASE_URL.DRONE_SPACE}/shop/accessories/${linkify(product?.title.long || '')}`,
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

export default function Accessory({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
