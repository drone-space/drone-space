import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import { LayoutSection } from '@repo/ui';
import { Divider, List, ListItem, Text, Title } from '@mantine/core';
import legal from '@web/data/legal';
import { getBaseUrl } from '@repo/constants';
import { images } from '@repo/constants';
import { LayoutIntroPage } from '@repo/ui';
import { APP_NAME, COMPANY_NAME } from '@repo/constants';

export const dynamic = 'force-static';

const metaTitle = `Terms and Conditions - ${APP_NAME.WEB} Kenya`;
const metaDesc = `Review the terms and conditions governing the use of ${APP_NAME.WEB} services, training, and products. Stay informed about our policies and commitments.`;

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();

  return {
    title: metaTitle,
    description: metaDesc,
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: `${baseUrl.WEB}/legal/terms`,
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
}

export default async function TermsConditions() {
  return (
    <LayoutPage>
      <LayoutIntroPage
        props={{
          path: `T & C`,
          title: 'Terms and Conditions',
          desc: `Review the terms and conditions governing the use of ${APP_NAME.WEB} services, training, and products.`,
          bg: images.web.hero.light,
        }}
      />

      <LayoutSection id="children" padded bg={'var(--mantine-color-gray-1)'}>
        <>
          <LayoutSection id="page-legal-privacy-header" containerized={'md'}>
            <Text inherit c={'dimmed'} fz={'xs'} fw={500} mt={'xs'} ta={'center'}>
              Last Updated:{' '}
              <Text component="span" inherit>
                Sep 26, 2024
              </Text>
            </Text>

            <Divider mt={'md'} />
          </LayoutSection>

          {legal.terms.map((t, index) => (
            <LayoutSection
              key={index}
              id="page-legal-privacy-list"
              margined={40}
              containerized={'md'}
            >
              <Title order={2} fz={'lg'}>
                {legal.terms.indexOf(t) + 1}. {t.title}
              </Title>

              {t.prose.map((p, index) => (
                <Text key={index} mt={'xs'}>
                  {p.content}
                </Text>
              ))}

              {t.list && (
                <List size="sm" withPadding spacing={4} mt={'xs'}>
                  {t.list.map((i, index) => (
                    <ListItem key={index}>{i.content}</ListItem>
                  ))}
                </List>
              )}
            </LayoutSection>
          ))}
        </>
      </LayoutSection>
    </LayoutPage>
  );
}
