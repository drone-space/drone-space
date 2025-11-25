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
      <Group justify="space-between">
        <Group gap={'xs'}>
          <Box
            style={{
              overflow: 'hidden',
              borderRadius: 'var(--mantine-radius-xs)',
            }}
            w={24}
            h={24}
          >
            <ImageDefault
              src={images.icons.openAi}
              alt={'Hekima AI'}
              loading="lazy"
              width={24}
              height={24}
              style={{ transform: 'scale(1.4)' }}
            />
          </Box>

          <Title order={2} fz={'md'} mt={5} fw={'normal'} lh={1}>
            Ask Hekima
          </Title>
        </Group>

        <Group>
          <Button
            size="compact-xs"
            color="gray"
            variant="light"
            fz={'xs'}
            onClick={onClose}
          >
            Hide Chat
          </Button>
        </Group>
      </Group>
    </LayoutSection>
  );
}
