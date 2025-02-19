import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { Divider, List, ListItem, Text, Title } from '@mantine/core';
import legal from '@/data/legal';
import appData from '@/data/app';

export const metadata: Metadata = {
  title: `Terms and Conditions - ${appData.name.app} Kenya`,
  description: `Review the terms and conditions governing the use of ${appData.name.app} services, training, and products. Stay informed about our policies and commitments.`,
};

export default async function TermsConditions() {
  return (
    <LayoutPage>
      <LayoutSection
        id="page-legal-privacy-header"
        margined={64}
        containerized={'sm'}
      >
        <Title order={1} fz={24}>
          Terms and Conditions
        </Title>

        <Text inherit c={'dimmed'} fz={'xs'} fw={500} mt={'xs'}>
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
          containerized={'sm'}
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
    </LayoutPage>
  );
}
