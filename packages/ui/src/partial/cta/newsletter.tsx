'use client';

import { ICON_SIZE, ICON_STROKE_WIDTH, SECTION_SPACING } from '@repo/constants';
import { ActionIcon, Button, Group, Overlay, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import { FormNewsletter } from '@repo/ui';
import { LayoutSection } from '@repo/ui';
import classes from './newsletter.module.css';
import { images } from '@repo/constants';
import { IconFileDownload, IconX } from '@tabler/icons-react';
import { ModalDownloadDocument } from '@repo/ui';
import { useCloseAllModals } from '@repo/hooks';

export function PartialCtaNewsletter({ close }: { close?: () => void }) {
  const handleClose = () => {
    if (close) close();
  };

  useCloseAllModals(handleClose);

  return (
    <LayoutSection
      id={'partial-cta-newsletter'}
      c={'var(--mantine-color-body)'}
      className={classes.section}
      style={{
        backgroundImage: `url('${images.web.newsletter}')`,
      }}
    >
      <Overlay backgroundOpacity={0.3} style={{ zIndex: 0 }} />

      <Group justify="end" pt={'xl'}>
        <ActionIcon color="var(--mantine-color-white)" variant={'subtle'} onClick={handleClose}>
          <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
        </ActionIcon>
      </Group>

      <Stack pb={SECTION_SPACING / 2} pos={'relative'} gap={'xl'} style={{ zIndex: 1 }}>
        <Stack gap={'xl'}>
          <Stack ta={{ base: 'center' }}>
            <Title order={2} c={'white'}>
              Join Our Community!
            </Title>

            <Text inherit>
              Subscribe to our monthly newsletter to receive the latest drone industry news, helpful
              tips, and exclusive offers from us
            </Text>
          </Stack>

          <FormNewsletter />
        </Stack>

        <Group justify="center">
          <ModalDownloadDocument props={{ type: 'brochure' }}>
            <Button
              leftSection={<IconFileDownload size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
              variant="white"
            >
              Download Brochure
            </Button>
          </ModalDownloadDocument>
        </Group>
      </Stack>
    </LayoutSection>
  );
}
