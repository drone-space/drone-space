'use client';

import React from 'react';
import { useRef } from 'react';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import classes from './testimonials.module.scss';
import CardTestimonial from '@/components/common/cards/testimonial';
import { alumni } from '@/data/alumni';
import { useMediaQuery } from '@mantine/hooks';

export default function Testimonials() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const desktop = useMediaQuery('(min-width: 62em)');
  const desktopLg = useMediaQuery('(min-width: 75em)');

  const slides = alumni.map((client, index) => (
    <CarouselSlide key={index} px={'xs'}>
      <CardTestimonial props={client} />
    </CarouselSlide>
  ));

  return (
    <Carousel
      withIndicators
      loop
      withControls={true}
      slideSize={{ base: '100%', md: '50%', lg: '33.333333%' }}
      slidesToScroll={desktopLg ? 1 : desktop ? 2 : 1}
      classNames={classes}
      plugins={[autoplay.current]}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  );
}
