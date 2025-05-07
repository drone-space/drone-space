'use client';

import React from 'react';
import { useRef } from 'react';
import NextImage from 'next/image';
import { Stack, Image as MantineImage } from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import classes from './image.module.scss';

export default function Image({ data }: { data: string[] }) {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  const slides = data.map((slide, index) => (
    <CarouselSlide key={index}>
      <Stack w={'100%'} bg={'var(--mantine-color-body)'}>
        <MantineImage
          src={slide}
          alt={'Intelligent battery'}
          loading="lazy"
          component={NextImage}
          width={1920}
          height={1080}
        />
      </Stack>
    </CarouselSlide>
  ));

  return (
    <Carousel
      withIndicators={data.length > 1 ? true : false}
      withControls={data.length > 1 ? true : false}
      loop={true}
      classNames={{
        root: classes.root,
        slide: classes.slide,
        controls: classes.controls,
        control: classes.control,
        indicator: classes.indicator,
      }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  );
}
