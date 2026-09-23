import React from 'react';
import { Box, Button, Group, Title } from '@mantine/core';
import { LayoutSection } from '@repo/ui';
import { ImageDefault } from '@repo/ui';
import { images } from '@repo/constants';

export function LayoutHeaderModalAi({ onClose }: { onClose: () => void }) {
  return (
    <LayoutSection id="ai-header" containerized={false} px={'md'} padded={'md'} bordered>
      <Group justify="space-between" align="start">
        <Group gap={'xs'}>
          <Box w={32} h={32}>
            <ImageDefault
              src={images.icons.chatbot}
              alt={'Hekima AI'}
              loading="lazy"
              fit={'contain'}
              width={32}
              height={32}
            />
          </Box>

          <Title order={2} fz={'md'} fw={'normal'}>
            Ask Hekima
          </Title>
        </Group>

        <Group>
          <Button size="xs" color="gray" variant="light" onClick={onClose}>
            Hide Chat
          </Button>
        </Group>
      </Group>
    </LayoutSection>
  );
}
