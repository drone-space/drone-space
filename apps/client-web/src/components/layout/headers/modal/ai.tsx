import React from 'react';
import { Box, Button, Group, Title } from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';
import ImageDefault from '@repo/components/common/images/default';
import { images } from '@/assets/images';

export default function AI({ onClose }: { onClose: () => void }) {
  return (
    <LayoutSection
      id="ai-header"
      containerized={false}
      px={'md'}
      padded={'md'}
      bordered
    >
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
          <Button size="xs" color="dark" variant="light" onClick={onClose}>
            Hide Chat
          </Button>
        </Group>
      </Group>
    </LayoutSection>
  );
}
