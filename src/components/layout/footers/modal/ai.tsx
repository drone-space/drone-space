import React from 'react';
import { Anchor, Button, Group, Stack, Text } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import { IconMessageCirclePlus } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import { useAppSelector } from '@/hooks/redux';

const anthropic = 'https://www.anthropic.com';

const links = {
  terms: `${anthropic}/legal/consumer-terms`,
  privacy: `${anthropic}/legal/privacy`,
  usage: `${anthropic}/legal/aup`,
};

export default function ModalFooter({
  resetConversation,
}: {
  resetConversation: () => void;
}) {
  const hasConversation = useAppSelector(
    (state) => state.claude.value.length > 0
  );

  return (
    <LayoutSection id="footer" containerized={false} px={'xs'} padded={'xs'}>
      <Stack gap={'xs'}>
        <Group justify="space-between" fz={'xs'}>
          <Text inherit>
            Model from{' '}
            <Anchor href={anthropic} target="_blank" inherit fw={'bold'}>
              ANTHROP\C
            </Anchor>
          </Text>

          <Group gap={'xs'}>
            <Button
              size="compact-xs"
              onClick={resetConversation}
              disabled={!hasConversation}
              leftSection={
                <IconMessageCirclePlus
                  size={ICON_SIZE / 1.5}
                  stroke={ICON_STROKE_WIDTH}
                />
              }
            >
              New Chat
            </Button>
          </Group>
        </Group>

        <Stack gap={5} c={'dimmed'} ta={'center'} fz={10}>
          <Text inherit c={'dimmed'} ta={'center'}>
            Hekima may produce incorrect information. Double-check responses.
          </Text>

          <Group justify="center" gap={'xs'}>
            <Anchor inherit href={links.terms} c={'dimmed'} underline="always">
              Terms of Service
            </Anchor>

            <Anchor
              inherit
              href={links.privacy}
              c={'dimmed'}
              underline="always"
            >
              Privacy Policy
            </Anchor>

            <Anchor inherit href={links.usage} c={'dimmed'} underline="always">
              Usage Policy
            </Anchor>
          </Group>
        </Stack>
      </Stack>
    </LayoutSection>
  );
}
