'use client';

import React, { useRef } from 'react';

import NextImage from 'next/image';

import { Modal, Image, Stack, Button } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import classes from './camp.module.scss';
import { images } from '@/assets/images';
import { IconCertificate } from '@tabler/icons-react';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default function Camp({ active }: { active?: boolean }) {
  const [opened, { open, close }] = useDisclosure(active ? true : false);

  const mobile = useMediaQuery('(max-width: 36em)');
  const tablet = useMediaQuery('(max-width: 48em)');
  const laptopmd = useMediaQuery('(max-width: 75em)');

  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const dataMobile = [
    {
      title: 'Holiday Camp',
      image: images.posters.intakes.camp,
    },
  ];

  const data = [
    {
      title: 'Holiday Camp',
      image: images.posters.intakes.camp,
    },
  ];

  const slides = (mobile ? dataMobile : data).map((slide, index) => (
    <CarouselSlide key={index}>
      <Stack h={'100%'}>
        <Image
          src={slide.image}
          alt={'Training Workshop'}
          loading="lazy"
          component={NextImage}
          width={1080}
          height={1920}
          w={'100%'}
        />
      </Stack>
    </CarouselSlide>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        size={mobile ? 'md' : tablet ? 'sm' : laptopmd ? 'sm' : 'lg'}
        classNames={{ content: classes.content, body: classes.body }}
        withCloseButton={false}
      >
        <Carousel
          withIndicators={data.length > 1}
          withControls={data.length > 1}
          emblaOptions={{ loop: true, slidesToScroll: 1 }}
          slideSize={'100%'}
          slideGap={0}
          classNames={{ root: classes.root, control: classes.control }}
          plugins={[autoplay.current]}
        >
          {slides}
        </Carousel>
      </Modal>

      <Button
        onClick={open}
        size="xs"
        variant="outline"
        color="white"
        leftSection={
          <IconCertificate size={ICON_SIZE / 1.5} stroke={ICON_STROKE_WIDTH} />
        }
      >
        Holiday Camp
      </Button>
    </>
  );
}
