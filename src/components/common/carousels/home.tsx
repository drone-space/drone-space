'use client';

import React from 'react';
import { useRef } from 'react';
import {
  Badge,
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
import { images } from '@/assets/images';
import LayoutSection from '@/components/layout/section';
import classes from './home.module.scss';
import { locations } from '@/data/app';
import ModalContactTraining from '../modals/contact/training';
import { getRegionalDate } from '@/utilities/formatters/date';

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const now = new Date();

  const filteredData = data.filter((i) => {
    if (i.title == 'Remote Pilot License') return true;
    return i.dates.some((d) => d.getTime() > now.getTime());
  });

  const slides = filteredData.map((slide, index) => {
    const cycle = ['start', 'center', 'end', 'center'];
    const alignment: any = cycle[index % cycle.length];

    return (
      <CarouselSlide key={index}>
        <LayoutSection id={`carousel-home-slide-${index}`} pt={'lg'} pb={'md'}>
          <Stack gap={'xl'} align={alignment} justify="center" mih={520}>
            <Badge color="sec.3" c={'pri.8'}>
              Intake Ongoing
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
                {slide.dates.length > 1 ? 'Intake Dates' : 'Schedule'}:{' '}
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
        backgroundImage: `url('${images.web.rpl.light}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        position: 'relative',
      }}
    >
      <Overlay backgroundOpacity={0.4} style={{ zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1 }}></div>
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
      new Date(2025, 8, 2), // intake date
      new Date(2025, 8, 9),
      new Date(2025, 8, 16),
      new Date(2025, 8, 23),
      new Date(2025, 8, 30),
    ],
    price: {
      former: 170000,
      current: 136000,
    },
  },
  {
    badge: 'IR',
    title: 'Instructor Rating',
    intro:
      'Take your drone career to new heights—become a certified drone instructor and lead the next generation of pilots',
    duration: '14 - 21 days',
    dates: [
      new Date(2025, 8, 1), // intake date
    ],
    price: {
      former: null,
      current: 250000,
    },
  },
  {
    badge: 'Thermal',
    title: 'Thermography (ITC Level I)',
    intro:
      'Master thermal imaging with globally recognized ITC certification—ideal for inspections, search & rescue, and more',
    duration: '5 days',
    dates: [
      new Date(2025, 8, 22), // intake date
    ],
    price: {
      former: null,
      current: 200000,
    },
  },
  {
    badge: 'RT',
    title: 'Radio Telephony',
    intro:
      'Learn to communicate like a pro—ace your aviation radio skills and stay compliant in controlled airspace',
    duration: '5 days',
    dates: [
      new Date(2025, 8, 29), // intake date
    ],
    price: {
      former: null,
      current: 35000,
    },
  },
  // {
  //   badge: 'Agri',
  //   title: 'Agricultural Spraying',
  //   intro:
  //     'Revolutionize farming—learn precision drone spraying techniques to boost crop yield and cut costs',
  //   duration: '10 days',
  //   dates: [
  //     new Date(2025, 7, 18), // intake date
  //   ],
  //   price: {
  //     former: null,
  //     current: 70000,
  //   },
  // },
  // {
  //   badge: 'Masterclass',
  //   title: 'Drone Mapping & Survey (Masterclass)',
  //   intro:
  //     'Transform raw data into actionable insights—get hands-on with drone mapping, photogrammetry, and survey techniques',
  //   duration: '5 days',
  //   dates: [
  //     new Date(2025, 7, 25), // intake date
  //   ],
  //   price: {
  //     former: null,
  //     current: 110000,
  //   },
  // },
];
