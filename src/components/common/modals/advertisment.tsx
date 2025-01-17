'use client';

import React, { useRef } from 'react';
import { Modal, Image, Button, Group } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import classes from './advertisment.module.scss';
import { images } from '@/assets/images';
import { IconSchool } from '@tabler/icons-react';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default function Advertisment({ active }: { active?: boolean }) {
  const [opened, { open, close }] = useDisclosure(active ? true : false);

  const mobile = useMediaQuery('(max-width: 36em)');

  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const dataMobile = [
    {
      title: 'Monthly Intake',
      image: images.posters.intakes.monthly,
    },
  ];

  const data = [
    {
      title: 'Monthly Intake',
      image: images.posters.intakes.monthly,
    },
  ];

  const slideData = mobile ? dataMobile : data;

  const slides = slideData.map((slide, index) => (
    <CarouselSlide key={slide.title} mah={'fit-content'}>
      <Group h={'100%'}>
        <Image
          src={slide.image}
          alt={`Poster ${index + 1}`}
          loading="lazy"
          radius={'sm'}
        />
      </Group>
    </CarouselSlide>
  ));

  return (
    <>
      <Modal
        opened={opened}
        size={384}
        onClose={close}
        centered
        classNames={classes}
        withCloseButton={false}
      >
        <Carousel
          withIndicators={false}
          withControls={data.length > 1}
          slidesToScroll={1}
          slideSize={'100%'}
          slideGap={0}
          loop
          classNames={{ root: classes.root, control: classes.control }}
          plugins={[autoplay.current]}
        >
          {slides}
        </Carousel>
      </Modal>

      <Button
        onClick={open}
        size="xs"
        variant="default"
        leftSection={<IconSchool size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
        c={'pri'}
      >
        Courses & Intakes
      </Button>
    </>
  );
}
