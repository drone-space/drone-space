import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { Divider, List, ListItem, Stack, Text, Title } from '@mantine/core';
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
        <Stack>
          <Stack gap={'xs'}>
            <Title order={1} fz={24}>
              Terms and Conditions
            </Title>

            <Text inherit c={'dimmed'} fz={'xs'} fw={500}>
              Last Updated:{' '}
              <Text component="span" inherit>
                Sep 26, 2024
              </Text>
            </Text>
          </Stack>

          <Divider />
        </Stack>
      </LayoutSection>

      {legal.terms.map((t, index) => (
        <LayoutSection
          id="page-legal-privacy-list"
          key={index}
          margined={40}
          containerized={'sm'}
        >
          <Stack gap={'xs'}>
            <Title order={2} fz={'lg'}>
              {legal.terms.indexOf(t) + 1}. {t.title}
            </Title>

            {t.prose.map((p, index) => (
              <Text key={index}>{p.content}</Text>
            ))}

            {t.list && (
              <List size="sm" withPadding spacing={4}>
                {t.list.map((i, index) => (
                  <ListItem key={index}>{i.content}</ListItem>
                ))}
              </List>
            )}
          </Stack>
        </LayoutSection>
      ))}
    </LayoutPage>
  );
}
