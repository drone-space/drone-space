import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@repo/components/layout/body';
import { linkify } from '@repo/utilities/url';
import accessories from '@/data/accessories';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { images } from '@/assets/images';
import { companyName } from '@repo/constants/app';

export interface typeParams {
  accessoryId: string;
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<typeParams>;
}): Promise<Metadata> => {
  const id = (await params).accessoryId;

  const product = accessories.find((a) => linkify(a.title.long) == id);

  const metaTitle = product?.title.long;

  return {
    title: metaTitle,
    openGraph: {
      title: metaTitle,
      // description: metaDesc,
      url: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/shop/accessories/${linkify(product?.title.long || '')}`,
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

export default function Accessory({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
