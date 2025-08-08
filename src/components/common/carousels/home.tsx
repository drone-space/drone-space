'use client';

import React from 'react';
import { useRef } from 'react';
import {
  Badge,
  Button,
  Divider,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { images } from '@/assets/images';
import LayoutSection from '@/components/layout/section';
import classes from './home.module.scss';
import { locations } from '@/data/app';
import ModalContactTraining from '../modals/contact/training';
import { getRegionalDate } from '@/utilities/formatters/date';

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const now = new Date();

  const currentMonthName = getMonthName(
    getRegionalDate(now, {
      locale: 'en-GB',
      format: 'numeric',
    }).date
  );

  const filteredIntakes = data.filter((intake) => {
    const intakeMonth = getMonthName(
      getRegionalDate(intake.dates[0], {
        locale: 'en-GB',
        format: 'numeric',
      }).date
    );

    const sameMonth = intakeMonth == currentMonthName;

    return sameMonth;
  });

  const filteredIntakeDates = filteredIntakes.filter((intake) => {
    const newer = intake.dates.filter(
      (d) =>
        getDayNumber(
          getRegionalDate(d, {
            locale: 'en-GB',
            format: 'numeric',
          }).date
        ) >
        getDayNumber(
          getRegionalDate(now, {
            locale: 'en-GB',
            format: 'numeric',
          }).date
        )
    );

    return newer && newer.length > 0;
  });

  const slides = filteredIntakeDates.map((slide, index) => {
    const cycle = ['start', 'center', 'end', 'center'];
    const alignment: any = cycle[index % cycle.length];

    return (
      <CarouselSlide key={index}>
        <LayoutSection id={`carousel-home-slide-${index}`} pt={'lg'} pb={'md'}>
          <Stack gap={'xl'} align={alignment} justify="center" mih={520}>
            <Badge color="sec.3" c={'pri.8'}>
              Intake Ongoing
            </Badge>

            <div>
              <Title order={1} ta={alignment} className={classes.title}>
                {slide.title}
              </Title>

              <Text ta={alignment} mt={'xs'}>
                {slide.intro}
              </Text>
            </div>

            <Divider w={{ base: '100%', md: '50%' }} color="sec.3" />

            <div>
              <Text ta={alignment} fz={'sm'}>
                Theory Classes:{' '}
                <Text component={'span'} inherit fw={'500'}>
                  {locations.main.location}
                </Text>
              </Text>

              <Text ta={alignment} fz={'sm'}>
                Practicals:{' '}
                <Text component={'span'} inherit fw={'500'}>
                  {locations.airfield.location}
                </Text>
              </Text>
            </div>

            <div>
              <Text ta={alignment}>
                Course Duration:{' '}
                <Text component={'span'} inherit fw={'bold'}>
                  {slide.duration}
                </Text>
              </Text>

              <Text ta={alignment}>
                Intake:{' '}
                <Text component={'span'} inherit fw={'bold'}>
                  {getMonthName(
                    getRegionalDate(slide.dates[0], {
                      locale: 'en-GB',
                      format: 'numeric',
                    }).date
                  )}{' '}
                  {slide.dates.map((d, i) => (
                    <span key={i}>
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
                </Text>
              </Text>
            </div>

            <Group>
              <ModalContactTraining
                props={{
                  initialValues: {
                    subject: `${slide.title} Training Inquiry`,
                    message: `I'm interested in enrolling in your ${slide.title} training program.`,
                  },
                }}
              >
                <Button variant={'white'}>Enroll Now</Button>
              </ModalContactTraining>
            </Group>
          </Stack>
        </LayoutSection>
      </CarouselSlide>
    );
  });

  return (
    <div
      style={{
        backgroundImage: `url('${images.web.rpl}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        position: 'relative',
      }}
    >
      <Overlay backgroundOpacity={0.5} style={{ zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1 }}></div>
      <Carousel
        withIndicators={filteredIntakeDates.length > 1}
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
    </div>
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

const data = [
  {
    badge: 'RPL',
    title: 'Remote Pilot License',
    intro: 'Join our next RPL intake and start flying professionally',
    duration: '2 weeks',
    dates: [
      new Date(2025, 7, 5), // intake date
      new Date(2025, 7, 12),
      new Date(2025, 7, 19),
      new Date(2025, 7, 26),
    ],
  },
  {
    badge: 'IR',
    title: 'Instructor Rating',
    intro: 'Join our next RPL intake and start flying professionally',
    duration: '14 - 21 days',
    dates: [
      new Date(2025, 8, 1), // intake date
    ],
  },
  {
    badge: 'RT',
    title: 'Radio Telephony',
    intro: 'Join our next RPL intake and start flying professionally',
    duration: '5 days',
    dates: [
      new Date(2025, 7, 4), // intake date
    ],
  },
  {
    badge: 'Agri',
    title: 'Agricultural Spraying',
    intro: 'Join our next RPL intake and start flying professionally',
    duration: '10 days',
    dates: [
      new Date(2025, 7, 18), // intake date
    ],
  },
  {
    badge: 'Masterclass',
    title: 'Drone Mapping & Survey',
    intro: 'Join our next RPL intake and start flying professionally',
    duration: '5 days',
    dates: [
      new Date(2025, 7, 25), // intake date
    ],
  },
  {
    badge: 'Thermal',
    title: 'Thermography (ITC Level I)',
    intro: 'Join our next RPL intake and start flying professionally',
    duration: '5 days',
    dates: [
      new Date(2025, 8, 22), // intake date
    ],
  },
];
