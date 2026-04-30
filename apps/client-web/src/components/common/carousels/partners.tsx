'use client';

import React from 'react';
import { useRef } from 'react';
import { Center, Stack } from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import classes from './partners.module.scss';
import ImageDefault from '@repo/components/common/images/default';

export default function Partners({
  data,
}: {
  data: { image: string; title: string; height: number }[];
}) {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  const slides = data.map((slide, index) => (
    <CarouselSlide key={index} py={'xl'}>
      <Center w={'100%'} bg={'var(--mantine-color-body)'} h={120}>
        <ImageDefault
          src={slide.image}
          alt={slide.title}
          loading="lazy"
          height={slide.height}
          width={'100%'}
          fit={'contain'}
        />
      </Center>
    </CarouselSlide>
  ));

  return (
    <Carousel
      withIndicators={false}
      withControls={false}
      slideSize={{
        base: '100%',
        xs: '50%',
        sm: '33.333333%',
        md: '25%',
        lg: '20%',
        xl: '16.666666%',
      }}
      emblaOptions={{ loop: true, slidesToScroll: 1 }}
      classNames={{
        root: classes.root,
        slide: classes.slide,
        controls: classes.controls,
        control: classes.control,
        indicator: classes.indicator,
      }}
      plugins={[autoplay.current]}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  );
}
