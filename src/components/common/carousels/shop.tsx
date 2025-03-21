'use client';

import React from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import { Anchor, Stack, Text, Title } from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import LayoutSection from '@/components/layout/section';
import classes from './shop.module.scss';
import { droneCategories } from '@/data/drone-categories';

export default function Shop() {
  const autoplay = useRef(Autoplay({ delay: 8000 }));

  const slides = droneCategories.map((slide, index) => (
    <CarouselSlide
      key={index}
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.25) 20%, rgba(0, 0, 0, 0.75) 100%), url('${slide.image}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <LayoutSection id={`carousel-shop-slide-${index}`}>
        <Stack align={slide.styles.alignment} justify="center" mih={480}>
          <Title
            order={2}
            c={
              'light-dark(var(--mantine-color-white),var(--mantine-color-white))'
            }
          >
            {slide.title}
          </Title>
          <Text
            w={{ base: '100%', md: '50%' }}
            ta={droneCategories.indexOf(slide) == 0 ? 'start' : 'end'}
            fz={'sm'}
          >
            {slide.desc}
          </Text>
          <Anchor
            underline="never"
            component={Link}
            href={slide.anchor.link}
            className={classes.link}
          >
            {slide.anchor.label}
          </Anchor>
        </Stack>
      </LayoutSection>
    </CarouselSlide>
  ));

  return (
    <Carousel
      withIndicators
      withControls={false}
      loop
      classNames={{
        root: classes.root,
        slide: classes.slide,
        control: classes.control,
      }}
      plugins={[autoplay.current]}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  );
}
