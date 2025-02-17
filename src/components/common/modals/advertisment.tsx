'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Modal, Image, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './advertisment.module.scss';
import { images } from '@/assets/images';
import { IconSchool } from '@tabler/icons-react';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default function Advertisment({ active }: { active?: boolean }) {
  const [opened, { open, close }] = useDisclosure(active ? true : false);
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const [slideList, setSlideList] = useState<
    { title: string; image: string }[] | null
  >(null);

  useEffect(() => {
    const getImageUrls = async () => {
      try {
        const newList = await Promise.all(
          slideData.map(async (item) => {
            return {
              ...item,
              image: `${item.image}?fileSize=${new Date().getTime()}`,
            };
          })
        );

        setSlideList(newList);
      } catch {
        close();
      }
    };

    getImageUrls();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slides = slideList?.map((slide, index) => (
    <CarouselSlide key={index} mah={'fit-content'}>
      {slide.image && (
        <Group h={'100%'}>
          <Image
            src={slide.image}
            alt={`Poster ${index + 1}`}
            loading="lazy"
            radius={'sm'}
          />
        </Group>
      )}
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
        aria-labelledby="Course Intakes"
        closeButtonProps={{ 'aria-label': 'Close modal' }}
      >
        <Carousel
          withIndicators={false}
          withControls={!slideList ? false : slideList.length > 1}
          slidesToScroll={1}
          slideSize={'100%'}
          slideGap={0}
          loop
          classNames={{ root: classes.root, control: classes.control }}
          plugins={[autoplay.current]}
        >
          {slides && slides}
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

const slideData = [
  {
    title: 'Hiring',
    image: images.posters.ads.image2,
  },
  {
    title: 'Monthly Intake',
    image: images.posters.intakes.monthly,
  },
  {
    title: 'Radiotelephony',
    image: images.posters.intakes.radio,
  },
  {
    title: 'Masterclass',
    image: images.posters.intakes.mapping,
  },
];
