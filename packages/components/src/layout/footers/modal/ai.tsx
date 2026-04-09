import React from 'react';
import { Anchor, Button, Divider, Group, Stack, Text } from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';
import { IconMessageCirclePlus } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import { useStoreConversation } from '@repo/libraries/zustand/stores/conversation';

const modelUrl = 'https://anthropic.com';

const links = {
  terms: `${modelUrl}/legal/commercial-terms`,
  privacy: `${modelUrl}/legal/privacy`,
  usage: `${modelUrl}/legal/aup`,
};

export default function ModalFooter({
  resetConversation,
}: {
  resetConversation: () => void;
}) {
  const { conversation } = useStoreConversation();
  const hasConversation = conversation.length > 0;

  return (
    <LayoutSection id="footer" containerized={false} px={'md'} padded={'md'}>
      <Stack gap={'xs'} fz={'sm'}>
        <Group justify="space-between" align="end">
          <Text inherit>
            Model from{' '}
            <Anchor href={modelUrl} target="_blank" inherit fw={'bold'}>
              Anthropic
            </Anchor>
          </Text>

          <Group gap={'xs'}>
            <Button
              size="xs"
              onClick={resetConversation}
              disabled={!hasConversation}
            >
              New Chat
            </Button>
          </Group>
        </Group>

        <Divider />

        <Group c={'dimmed'} justify="center">
          <Text inherit ta={'center'}>
            Hekima may produce incorrect information.
          </Text>
        </Group>

        <Group justify="center" gap={'xs'} visibleFrom="xs" fz={'xs'}>
          <Anchor inherit href={links.terms} underline="hover" c={'dimmed'}>
            Terms of Service
          </Anchor>

          <Anchor inherit href={links.privacy} underline="hover" c={'dimmed'}>
            Privacy Policy
          </Anchor>

          <Anchor inherit href={links.usage} underline="hover" c={'dimmed'}>
            Usage Policy
          </Anchor>
        </Group>
      </Stack>
    </LayoutSection>
  );
}
