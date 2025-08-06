import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { Divider, List, ListItem, Text, Title } from '@mantine/core';
import legal from '@/data/legal';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import IntroPage from '@/components/layout/intros/page';
import { appName, companyName } from '@/data/app';

export const dynamic = 'force-static';

const metaTitle = `Privacy Policy - How ${appName} Protects Your Data`;
const metaDesc = `Learn how ${appName} collects, uses, and protects your personal information. Your privacy is our priority.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DEFAULT}/legal/policy`,
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

export default async function PrivacyPolicy() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: `Discretion`,
          title: 'Privacy Policy',
          desc: `Learn how ${appName} collects, uses, and protects your personal information.`,
          bg: images.gallery.innovation.jamuhuri.yr2020.image9,
        }}
      />

      <LayoutSection id="children" padded bg={'var(--mantine-color-gray-1)'}>
        <>
          <LayoutSection id="page-legal-privacy-header" containerized={'md'}>
            <Text
              inherit
              c={'dimmed'}
              fz={'xs'}
              fw={500}
              mt={'xs'}
              ta={'center'}
            >
              Last Updated:{' '}
              <Text component="span" inherit>
                Sep 26, 2024
              </Text>
            </Text>

            <Divider mt={'md'} />
          </LayoutSection>

          {legal.policy.map((t, index) => (
            <LayoutSection
              id="page-legal-privacy-list"
              key={index}
              margined={40}
              containerized={'md'}
            >
              <Title order={2} fz={'lg'}>
                {legal.policy.indexOf(t) + 1}. {t.title}
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

              {t.postProse &&
                t.postProse.map((p, index) => (
                  <Text key={index} mt={'xs'}>
                    {p.content}
                  </Text>
                ))}
            </LayoutSection>
          ))}
        </>
      </LayoutSection>
    </LayoutPage>
  );
}
