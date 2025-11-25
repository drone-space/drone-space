import React from 'react';
import { SECTION_SPACING } from '@repo/constants/sizes';
import { Button, Card, Container, Group, Text, Title } from '@mantine/core';
import Link from 'next/link';
import NextLink from '@repo/components/common/anchor/next-link';

export default function Faq() {
  return (
    <Card
      bg={
        'linear-gradient(-60deg, var(--mantine-color-pri-4) 0%, var(--mantine-color-pri-8) 100%)'
      }
      padding={0}
      c={'var(--mantine-color-body)'}
      pos={'relative'}
    >
      <Container size={'sm'} py={SECTION_SPACING}>
        <Title order={2} fz={40} ta={'center'}>
          Still have a question?
        </Title>

        <Text fz={'xl'} ta={'center'} mt={'md'}>
          We&apos;d be happy to help you with any questions you have! Please let
          us know what you&apos;re looking for, and we&apos;ll do our best to
          assist you.
        </Text>

        <Group justify="center" mt={'xl'}>
          <NextLink href={'/contact'}>
            <Button
              color="var(--mantine-color-body)"
              c={'var(--mantine-color-pri-8)'}
            >
              Contact Us
            </Button>
          </NextLink>
        </Group>
      </Container>
    </Card>
  );
}
