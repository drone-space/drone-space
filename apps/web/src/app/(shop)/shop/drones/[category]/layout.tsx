import React from 'react';
import { Metadata } from 'next';
import { LayoutMain } from '@repo/ui';
import { linkify } from '@repo/utils';
import { capitalizeWords } from '@repo/utils';
import { getBaseUrl, products } from '@repo/constants';
import { images } from '@repo/constants';
import { COMPANY_NAME } from '@repo/constants';

export interface typeParams {
  category: string;
  productId: string;
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<typeParams>;
}): Promise<Metadata> => {
  const id = (await params).category;
  const product = products.find((p) => linkify(p.category) == id);

  const metaTitle = `${capitalizeWords(product?.category || 'Category')} Drones`;

  const baseUrl = await getBaseUrl();

  return {
    title: {
      default: metaTitle,
      template: `%s - ${metaTitle} - ${COMPANY_NAME} Kenya`,
    },
    metadataBase: new URL(baseUrl.WEB),
    openGraph: {
      title: metaTitle,
      // description: metaDesc,
      url: `${baseUrl.WEB}/shop/drones/${linkify(product?.category || '')}`,
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

export default function Category({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutMain>{children}</LayoutMain>;
}
