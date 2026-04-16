/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import React from 'react';
import LayoutBody from '@repo/components/layout/body';
// import AffixNavbar from '@repo/components/common/affixi/navbar';
// import AffixAi from '@repo/components/common/affixi/ai';
import HeaderMain from '@/components/layout/headers/main';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import { Metadata } from 'next';
import { APP_NAME } from '@repo/constants/app';
import IntroPage from '@repo/components/layout/intros/page';
import { images } from '@repo/constants/images';
import CtaHome from '@/components/partial/cta/main';
import AsideBlogMain from '@/components/layout/asides/blog/main';

export type typeParams = Promise<{
  'postTitle-postId': string;
}>;

export const metadata: Metadata = {
  title: { default: 'Blog', template: `%s - Blog - ${APP_NAME.WEB}` },
};

export default async function LayoutBlog({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody
      header={<HeaderMain />}
      nav={<NavbarMain options={{ border: true }} />}
      hero={
        <IntroPage
          props={{
            path: 'News',
            title: 'Insights on Drone Training & Technology',
            desc: `Stay informed with the latest tips, news, and insights about drone training, services, and industry innovations.`,
            bg: images.web.hero.light,
          }}
        />
      }
      aside={{
        gap: 48,
        right: { width: { md: 30, lg: 30 }, component: <AsideBlogMain /> },
      }}
      footer={
        <>
          <CtaHome
            props={{
              title: 'Get the latest updates',
              desc: 'Subscribe to get the most-popular content on drone products, drone training, drone services, and top drone industry news to help keep you up to speed.',
            }}
          />

          <FooterMain />
        </>
      }
    >
      <main>{children}</main>

      {/* <AffixNavbar>
        <NavbarMain />
      </AffixNavbar> */}

      {/* <AffixAi /> */}
    </LayoutBody>
  );
}
