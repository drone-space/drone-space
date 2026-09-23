import React from 'react';
import { SECTION_SPACING } from '@repo/constants';
import { Button, Card, Container, Group, Text, Title } from '@mantine/core';
import { AnchorNextLink } from '@repo/ui';

export default function Faq() {
  return (
    <Card
      bg={'linear-gradient(-60deg, var(--mantine-color-pri-4) 0%, var(--mantine-color-pri-9) 100%)'}
      padding={0}
      c={'var(--mantine-color-body)'}
      pos={'relative'}
    >
      <Container size={'sm'} py={SECTION_SPACING}>
        <Title order={2} fz={40} ta={'center'}>
          Still have a question?
        </Title>

        <Text fz={'xl'} ta={'center'} mt={'md'}>
          We&apos;d be happy to help you with any questions you have! Please let us know what
          you&apos;re looking for, and we&apos;ll do our best to assist you.
        </Text>

        <Group justify="center" mt={'xl'}>
          <AnchorNextLink href={'/contact'}>
            <Button color="var(--mantine-color-body)" c={'var(--mantine-color-pri-9)'}>
              Contact Us
            </Button>
          </AnchorNextLink>
        </Group>
      </Container>
    </Card>
  );
}
