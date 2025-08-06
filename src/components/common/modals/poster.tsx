'use client';

import React, { useRef } from 'react';

import NextImage from 'next/image';
import { Modal, Image, Stack, Button } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import classes from './poster.module.scss';
import { images } from '@/assets/images';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function Poster({ active }: { active?: boolean }) {
  const [opened, { open, close }] = useDisclosure(active ? true : false);

  const mobile = useMediaQuery('(max-width: 36em)');
  const tablet = useMediaQuery('(max-width: 48em)');
  const laptopmd = useMediaQuery('(max-width: 75em)');

  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const dataMobile = [
    // { title: "June Intake", image: image.popups.intakes.yr2024.jul.portrait },
    // { title: "Radiotelephony", image: image.popups.courses.yr2024.jul.radiotelephony.portrait },
    // { title: "RPL Process", image: image.popups.other.rplProcess.portrait },
    {
      title: 'Workshop',
      image: images.posters.intakes.workshop.potrait,
      height: 1920,
      width: 1080,
    },
  ];

  const data = [
    // { title: "June Intake", image: image.popups.intakes.yr2024.jul.portrait },
    // { title: "Radiotelephony", image: image.popups.courses.yr2024.jul.radiotelephony.portrait },
    // { title: "RPL Process", image: image.popups.other.rplProcess.portrait },
    {
      title: 'Workshop',
      image: images.posters.intakes.workshop.potrait,
      height: 1080,
      width: 1920,
    },
  ];

  const slides = (mobile ? dataMobile : data).map((slide, index) => (
    <CarouselSlide key={index}>
      <Stack h={'100%'}>
        <Image
          src={slide.image}
          alt={'Training Workshop'}
          loading="lazy"
          radius={'lg'}
          component={NextImage}
          width={slide.width}
          height={slide.height}
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
        size={mobile ? 'md' : tablet ? '80vw' : laptopmd ? '85vw' : '60vw'}
        classNames={{ content: classes.content, body: classes.body }}
        // title={"Training Workshop"}
        // closeButtonProps={{ "aria-label": "Close modal" }}
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

      <Button onClick={open} size="xs" color="sec.3" c={'pri.8'}>
        Training Workshop
      </Button>
    </>
  );
}
