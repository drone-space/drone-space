import React from 'react';
import { LayoutMain } from '@repo/ui';
// import AffixNavbar from '@repo/ui';
// import AffixAi from '@repo/ui';
import HeaderMain from '@web/ui/layout/headers/main';
import NavbarMain from '@web/ui/layout/navbars/main';
import FooterMain from '@web/ui/layout/footers/main';
import { Metadata } from 'next';
import { APP_NAME, getApiUrl } from '@repo/constants';
import { LayoutIntroPage } from '@repo/ui';
import { images } from '@repo/constants';
import CtaHome from '@web/ui/partial/cta/main';
import AsideBlogMain from '@web/ui/layout/asides/blog/main';
import { PostGet } from '@repo/types';
import { postsGet } from '@repo/handlers';

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
  const { items }: { items: PostGet[] } = await postsGet({ apiUrl: await getApiUrl() });

  return (
    <LayoutMain
      header={<HeaderMain />}
      nav={<NavbarMain options={{ border: true }} />}
      hero={
        <LayoutIntroPage
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
        right: { width: { md: 30, lg: 30 }, component: <AsideBlogMain posts={items} /> },
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
    </LayoutMain>
  );
}
