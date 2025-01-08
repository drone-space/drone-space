'use client';

import React from 'react';
import NextImage from 'next/image';
import { Modal, Image, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './gallery.module.scss';

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
        centered
        classNames={{ close: classes.close }}
        size={'xl'}
        title={
          <Text component="span" inherit fw={'bold'} c={'pri'}>
            Image Viewer
          </Text>
        }
        closeButtonProps={{ 'aria-label': 'Close modal' }}
      >
        <Stack>
          <Image
            src={img}
            alt={'Gallery Image'}
            loading="lazy"
            radius={'sm'}
            component={NextImage}
            width={1920}
            height={1080}
          />
        </Stack>
      </Modal>
      <Stack className={classes.container} onClick={open}>
        <Image
          src={img}
          alt={'Gallery Image'}
          loading="lazy"
          className={classes.image}
          component={NextImage}
          width={1920}
          height={1080}
        />
      </Stack>
    </>
  );
}
