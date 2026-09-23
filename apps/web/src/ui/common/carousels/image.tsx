'use client';

import React, { useMemo } from 'react';
import { useRef } from 'react';
import { Stack } from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import classes from './image.module.css';
import { ImageDefault } from '@repo/ui';

export default function Image({ data }: { data: string[] }) {
  const autoplay = useMemo(() => Autoplay({ delay: 4000 }), []);

  const slides = data.map((slide, index) => (
    <CarouselSlide key={index}>
      <Stack w={'100%'} bg={'var(--mantine-color-body)'}>
        <ImageDefault
          src={slide}
          alt={'Intelligent battery'}
          loading="lazy"
          height={{ base: 320, md: 400, lg: 480 }}
          width={'100%'}
          fit={'contain'}
        />
      </Stack>
    </CarouselSlide>
  ));

  return (
    <Carousel
      withIndicators={data.length > 1 ? true : false}
      withControls={data.length > 1 ? true : false}
      emblaOptions={{ loop: true }}
      classNames={{
        root: classes.root,
        slide: classes.slide,
        controls: classes.controls,
        control: classes.control,
        indicator: classes.indicator,
      }}
      plugins={[autoplay]}
      // onMouseEnter={autoplay.stop}
      // onMouseLeave={autoplay.reset}
    >
      {slides}
    </Carousel>
  );
}
