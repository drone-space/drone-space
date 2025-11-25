import React from 'react';
import { Anchor, Button, Group, Stack, Text } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import { IconMessageCirclePlus } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import { useAppSelector } from '@/hooks/redux';

const modelUrl = 'https://openai.com';

const links = {
  terms: `${modelUrl}/policies/terms-of-use/`,
  privacy: `${modelUrl}/policies/privacy-policy/`,
  usage: `${modelUrl}/policies/`,
};

export default function ModalFooter({
  resetConversation,
}: {
  resetConversation: () => void;
}) {
  const hasConversation = useAppSelector(
    (state) => state.ai.value.length > 0
  );

  return (
    <LayoutSection id="footer" containerized={false} px={'md'} padded={'md'}>
      <Stack gap={'md'}>
        <Group justify="space-between" fz={'xs'} align="end">
          <Text inherit>
            Model from{' '}
            <Anchor href={modelUrl} target="_blank" inherit fw={'bold'}>
              OpenAI
            </Anchor>
          </Text>

          <Group gap={'xs'}>
            <Button
              size="xs"
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

        <Stack gap={5} c={'dimmed'} ta={'center'} fz={'xs'}>
          <Text inherit c={'dimmed'} ta={'center'}>
            Hekima may produce incorrect information. Double-check responses.
          </Text>

          <Group justify="center" gap={'xs'} visibleFrom="xs">
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
              Other Policies
            </Anchor>
          </Group>
        </Stack>
      </Stack>
    </LayoutSection>
  );
}
