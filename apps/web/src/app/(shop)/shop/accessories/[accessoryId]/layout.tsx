import React from 'react';
import { Metadata } from 'next';
import { LayoutMain } from '@repo/ui';
import { linkify } from '@repo/utils';
import { accessories, getBaseUrl } from '@repo/constants';
import { images } from '@repo/constants';
import { COMPANY_NAME } from '@repo/constants';

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
      url: `${(await getBaseUrl()).WEB}/shop/accessories/${linkify(product?.title.long || '')}`,
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

export default function Accessory({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutMain>{children}</LayoutMain>;
}
