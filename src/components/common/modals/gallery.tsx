'use client';

import React from 'react';
import { Modal, Group, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './gallery.module.scss';
import ImageDefault from '../images/default';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { IconX } from '@tabler/icons-react';

export interface typeModalGallery {
  img: string;
}

export default function Gallery({ img }: typeModalGallery) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size={'110vh'}
        centered
        withCloseButton={false}
        styles={{
          content: {
            padding: 0,
            borderRadius: 'var(--mantine-radius-lg)',
            overflow: 'hidden',
          },
        }}
      >
        <div style={{ position: 'relative' }}>
          <ImageDefault
            src={img}
            alt={'gallery image'}
            height={{ base: 180, xs: 320, md: 380 }}
            width={{ base: '100%' }}
          />

          <Group
            justify="end"
            pos={'absolute'}
            right={'var(--mantine-spacing-xs)'}
            top={'var(--mantine-spacing-xs)'}
          >
            <ActionIcon
              size={ICON_WRAPPER_SIZE}
              color="var(--mantine-color-white)"
              variant="subtle"
              onClick={close}
            >
              <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            </ActionIcon>
          </Group>
        </div>
      </Modal>

      <div onClick={open} className={classes.imageContainer}>
        <ImageDefault
          src={img}
          alt={'gallery image'}
          height={{ base: 200 }}
          className={classes.imageOuter}
        />
      </div>
    </>
  );
}
