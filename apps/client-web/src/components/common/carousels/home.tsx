'use client';

import React from 'react';
import { useRef } from 'react';
import {
  Badge,
  Box,
  Button,
  Divider,
  Group,
  NumberFormatter,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { images } from '@repo/constants/images';
import LayoutSection from '@repo/components/layout/section';
import classes from './home.module.scss';
import { LOCATIONS } from '@repo/constants/app';
import { getRegionalDate } from '@repo/utilities/date-time';
import ModalContactTraining from '@repo/components/common/modals/contact/training';
import { sortArray } from '@repo/utilities/array';
import { Order } from '@repo/types/enums';
import ModalRequirements from '../modals/requirements';
import WrapperUnderlayBlur from '@repo/components/wrappers/underlays/blur';

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const now = new Date();

  const filteredData = data.filter((i) => {
    return i.dates.some((d) => d.getTime() > now.getTime());
  });

  const slides = [
    {
      image: images.carousel.home.image1,
      badge: 'RPL',
      title: 'Remote Pilot License',
      intro: 'Join our next RPL intake and start flying professionally',
      duration: (
        <Box mb={'md'}>
          <Text inherit>
            Theory Classes:{' '}
            <Text component={'span'} inherit fw={'bold'}>
              1 week
            </Text>
          </Text>

          <Text inherit>
            KCAA Exam:{' '}
            <Text component={'span'} inherit fw={'bold'}>
              waiting times are subject to KCAA scheduling
            </Text>
          </Text>

          <Text inherit>
            Practcal:{' '}
            <Text component={'span'} inherit fw={'bold'}>
              1 week
            </Text>
          </Text>
        </Box>
      ),
      dates: [
        // intake date (s)
        new Date(2026, 4, 4),
        new Date(2026, 4, 11),
        new Date(2026, 4, 18),
        new Date(2026, 4, 25),
      ],
      price: {
        former: 170000,
        current: 136000,
      },
    },
    ...filteredData,
  ].map((slide, index) => {
    // const cycle = ['start', 'center', 'end', 'center'];
    // const alignment: any = cycle[index % cycle.length];
    const alignment: any = 'start';

    return (
      <CarouselSlide key={index}>
        <div
          style={{
            backgroundImage: `url('${slide.image || images.web.rpl.light}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            position: 'relative',
          }}
        >
          <Overlay backgroundOpacity={0.6} style={{ zIndex: 0 }} />

          <WrapperUnderlayBlur props={{ blur: 8, saturate: 150 }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <LayoutSection
                id={`carousel-home-slide-${index}`}
                pt={'lg'}
                pb={'md'}
              >
                <Stack
                  gap={'xl'}
                  align={alignment}
                  justify="center"
                  mih={{ base: 720, sm: 640 }}
                >
                  <Badge color="sec.3" c={'pri.8'} size="lg">
                    {now.toLocaleString('en-GB', { month: 'long' })}{' '}
                    {now.getFullYear()} Intake Ongoing
                  </Badge>

                  <Stack gap={0} align={alignment}>
                    <Title order={1} ta={alignment} className={classes.title}>
                      {slide.title}
                    </Title>

                    <Text ta={alignment} mt={'xs'} w={{ md: '75%', lg: '80%' }}>
                      {slide.intro}
                    </Text>
                  </Stack>

                  <Divider w={{ base: '100%', md: '50%' }} color="sec.3" />

                  <div>
                    <Text ta={alignment} fz={'sm'}>
                      Theory Classes:{' '}
                      <Text component={'span'} inherit fw={'500'}>
                        {LOCATIONS.MAIN.LOCATION}
                      </Text>
                    </Text>

                    <Text ta={alignment} fz={'sm'}>
                      Practicals:{' '}
                      <Text component={'span'} inherit fw={'500'}>
                        {LOCATIONS.AIRFIELD.LOCATION}
                      </Text>
                    </Text>
                  </div>

                  <div>
                    {typeof slide.duration == 'string' ? (
                      <>
                        <Text ta={alignment}>
                          Course Duration:{' '}
                          <Text component={'span'} inherit fw={'bold'}>
                            {slide.duration}
                          </Text>
                        </Text>
                      </>
                    ) : (
                      slide.duration
                    )}

                    <Text ta={alignment}>
                      {slide.dates.length > 1 ? 'Intake Dates' : 'Schedule'}:{' '}
                      <Text component={'span'} inherit fw={'bold'}>
                        {getMonthName(
                          getRegionalDate(slide.dates[0], {
                            locale: 'en-GB',
                            format: 'numeric',
                          }).date
                        )}{' '}
                        {slide.dates.map((d, i) => (
                          <span key={d.toISOString()}>
                            {getDayNumber(
                              getRegionalDate(d, {
                                locale: 'en-GB',
                                format: 'numeric',
                              }).date
                            )}
                            {i === slide.dates.length - 2
                              ? ' and '
                              : i === slide.dates.length - 1
                                ? ''
                                : ', '}
                          </span>
                        ))}
                        {slide.dates.length > 1 ? '' : `, ${now.getFullYear()}`}
                      </Text>
                    </Text>

                    <Text ta={alignment}>
                      Course Fee:{' '}
                      <Text component={'span'} inherit fw={'bold'}>
                        <NumberFormatter
                          value={slide.price?.current || 0}
                          thousandSeparator
                          prefix="Ksh. "
                        />
                      </Text>
                    </Text>
                  </div>

                  <Group>
                    <ModalContactTraining
                      props={{
                        initialValues: {
                          subject: `${slide.title} Course Inquiry`,
                          message: `I'm interested in enrolling in your ${slide.title} training program.`,
                        },
                      }}
                    >
                      <Button variant={'gradient'}>Enroll Now</Button>
                    </ModalContactTraining>

                    <ModalRequirements>
                      <Button color="white" variant="outline">
                        Requirements & Details
                      </Button>
                    </ModalRequirements>
                  </Group>
                </Stack>
              </LayoutSection>
            </div>
          </WrapperUnderlayBlur>
        </div>
      </CarouselSlide>
    );
  });

  return (
    <Carousel
      withIndicators={data.length > 1}
      emblaOptions={{ loop: true }}
      withControls={false}
      classNames={{
        slide: classes.slide,
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

// Parses a date in the format DD/MM/YYYY
function getMonthName(dateStr: string): string {
  const [day, month, year] = dateStr.split('/').map(Number);
  const date = new Date(year, month - 1, day); // month - 1 because Date months are 0-indexed
  return date.toLocaleString('en-US', { month: 'long' });
}

function getDayNumber(dateStr: string): number {
  const [day] = dateStr.split('/').map(Number);
  return day;
}

const data = sortArray(
  [
    {
      image: images.carousel.home.image3,
      badge: 'IR',
      title: 'Instructor Rating',
      intro:
        'Take your drone career to new heights—become a certified drone instructor and lead the next generation of pilots',
      duration: '14 - 21 days',
      dates: [
        // intake date (s)
        new Date(2026, 4, 11),
      ],
      price: {
        former: null,
        current: 250000,
      },
    },

    {
      image: images.carousel.home.image6,
      badge: 'Thermal',
      title: 'Thermography (ITC Level I)',
      intro:
        'Master thermal imaging with globally recognized ITC certification—ideal for inspections, search & rescue, and more',
      duration: '5 days',
      dates: [
        // intake date (s)
        new Date(2026, 4, 4),
      ],
      price: {
        former: null,
        current: 200000,
      },
    },

    {
      image: images.carousel.home.image5,
      badge: 'Agriculture',
      title: 'Agricultural Spraying',
      intro:
        'Revolutionize farming—learn precision drone spraying techniques to boost crop yield and cut costs',
      duration: '10 days',
      dates: [
        // intake date (s)
        new Date(2026, 4, 18),
      ],
      price: {
        former: null,
        current: 70000,
      },
    },

    {
      image: images.carousel.home.image2,
      badge: 'Masterclass',
      title: 'Drone Mapping & Survey (Masterclass)',
      intro:
        'Transform raw data into actionable insights—get hands-on with drone mapping, photogrammetry, and survey techniques',
      duration: '5 days',
      dates: [
        // intake date (s)
        new Date(2026, 4, 25),
      ],
      price: {
        former: null,
        current: 110000,
      },
    },
  ],
  (i) => i.dates[0],
  Order.ASCENDING
);
