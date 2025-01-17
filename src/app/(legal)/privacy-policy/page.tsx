import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { Divider, List, ListItem, Stack, Text, Title } from '@mantine/core';
import legal from '@/data/legal';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default async function PrivacyPolicy() {
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
              Privacy Policy
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

      {legal.policy.map((t, index) => (
        <LayoutSection
          id="page-legal-privacy-list"
          key={index}
          margined={40}
          containerized={'sm'}
        >
          <Stack gap={'xs'}>
            <Title order={2} fz={'lg'}>
              {legal.policy.indexOf(t) + 1}. {t.title}
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

            {t.postProse &&
              t.postProse.map((p, index) => (
                <Text key={index}>{p.content}</Text>
              ))}
          </Stack>
        </LayoutSection>
      ))}
    </LayoutPage>
  );
}
