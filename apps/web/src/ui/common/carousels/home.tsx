'use client';

import React, { useMemo } from 'react';
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
import { images } from '@repo/constants';
import { LayoutSection } from '@repo/ui';
import classes from './home.module.css';
import { LOCATIONS } from '@repo/constants';
import { getRegionalDate } from '@repo/utils';
import { ModalContactTraining } from '@repo/ui';
import { sortArray } from '@repo/utils';
import { Order, TimerDirection } from '@repo/types';
import ModalRequirements from '../modals/requirements';
import { WrapperUnderlayBlur } from '@repo/ui';
import { SECTION_SPACING } from '@repo/constants';
import { AnchorNextLink } from '@repo/ui';
import { useTimer } from '@repo/hooks';
import { alumniChallenge } from '@repo/constants';

export default function Home() {
  const { complete } = useTimer(alumniChallenge.eventStartDate, TimerDirection.DOWN, {
    active: true,
  });

  const autoplay = useMemo(() => Autoplay({ delay: 5000 }), []);

  const now = new Date();

  // 1. Create a copy of 'now' and set it to midnight today
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);

  const sortedData = sortArray(data, (i) => i.dates[0], Order.ASCENDING);

  const filteredData = [
    ...filterItems({
      list: [
        {
          image: images.carousel.home.image7,
          badge: 'AI',
          title: 'Introduction to AI and its Real-World Applications',
          intro:
            'A practical 3-day intensive course designed for professionals, enterpreneurs, students, managers, educators, marketers, business owners, and anyone who wants to understand and leverage the power of AI.',
          duration: (
            <Box mb={'md'}>
              <Text inherit>
                Duration:{' '}
                <Text component={'span'} inherit fw={'bold'}>
                  3 days
                </Text>
              </Text>

              <Text inherit>
                Time:{' '}
                <Text component={'span'} inherit fw={'bold'}>
                  9:00 AM - 4:00 PM
                </Text>
              </Text>

              <Text inherit>
                Venue:{' '}
                <Text component={'span'} inherit fw={'bold'}>
                  Drone Space (Inc. Lunch & Refreshments)
                </Text>
              </Text>
            </Box>
          ),
          dates: [
            // intake date (s)
            new Date(2026, 5, 22),
          ],
          price: {
            former: null,
            current: 22000,
          },
        },
      ],
    }),
    {
      image: images.carousel.home.image1,
      badge: 'RPL',
      title: 'Remote Pilot License',
      intro: 'Join our next RPL intake and start flying professionally.',
      duration: (
        <Box mb={'md'}>
          <Text inherit>
            Theory Classes: <Text component="br" hiddenFrom="xs" />
            <Text component={'span'} inherit fw={'bold'}>
              1 week
            </Text>
          </Text>

          <Text inherit>
            KCAA Exam Dates: <Text component="br" hiddenFrom="xs" />
            <Text component={'span'} inherit fw={'bold'}>
              {formatRplExamDates(rplExamDates)}
            </Text>
          </Text>

          <Text inherit>
            Practcal: <Text component="br" hiddenFrom="xs" />
            <Text component={'span'} inherit fw={'bold'}>
              1 week
            </Text>
          </Text>
        </Box>
      ),
      dates: getRelevantMondays(),
      price: {
        former: 160000,
        current: 136000,
      },
    },
    ...filterItems({ list: sortedData }),
  ];

  const slides = filteredData.map((slide, index) => {
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
          <Overlay backgroundOpacity={0.5} style={{ zIndex: 0 }} />

          <WrapperUnderlayBlur props={{ blur: 0, saturate: 100 }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <LayoutSection id={`carousel-home-slide-${index}`}>
                <Stack
                  gap={'xl'}
                  align={alignment}
                  justify="center"
                  mih={{
                    base: 562.7 + SECTION_SPACING * 2,
                    xs: 444.4 + SECTION_SPACING * 1.5 * 2,
                  }}
                  py={{ base: SECTION_SPACING, xs: SECTION_SPACING * 1.5 }}
                >
                  <Badge color="sec.3" c={'pri.8'} size="lg">
                    {now.toLocaleString('en-GB', { month: 'long' })} {now.getFullYear()} Intake
                    Ongoing
                  </Badge>

                  <Stack gap={0} align={alignment} maw={{ md: '50%', lg: '50%', xl: '50%' }}>
                    <Title
                      order={1}
                      ta={alignment}
                      className={classes.title}
                      fz={{
                        base: 'var(--mantine-h3-font-size)',
                        xs: 'var(--mantine-h1-font-size)',
                      }}
                    >
                      {slide.title}
                    </Title>

                    <Text mt={'xs'} ta={alignment}>
                      {slide.intro}
                    </Text>
                  </Stack>

                  <Divider w={{ base: '100%', md: '50%' }} color="sec.3" visibleFrom="xs" />

                  {index > 0 && (
                    <div>
                      <Text ta={alignment} fz={'sm'}>
                        Theory Classes: <Text component="br" hiddenFrom="xs" />
                        <Text component={'span'} inherit fw={'500'}>
                          {LOCATIONS.MAIN.LOCATION}
                        </Text>
                      </Text>

                      <Text ta={alignment} fz={'sm'}>
                        Practicals: <Text component="br" hiddenFrom="xs" />
                        <Text component={'span'} inherit fw={'500'}>
                          {LOCATIONS.AIRFIELD.LOCATION}
                        </Text>
                      </Text>
                    </div>
                  )}

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
                      {index == 0 && <Text component="br" hiddenFrom="xs" />}
                      <Text component={'span'} inherit fw={'bold'}>
                        {formatRplExamDates(slide.dates)}
                      </Text>
                    </Text>

                    <Text ta={alignment}>
                      Course Fee:{index > 0 ? ' ' : <Text component="br" hiddenFrom="xs" />}
                      <Text component={'span'} inherit fw={'bold'}>
                        <NumberFormatter
                          value={slide.price?.current || 0}
                          thousandSeparator
                          prefix="Ksh. "
                        />
                      </Text>{' '}
                      {slide.badge == 'RPL' ? '(excl. medical & exam fees).' : undefined}
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

                    {index > 0 && (
                      <ModalRequirements>
                        <Button color="white" variant="outline">
                          Requirements & Details
                        </Button>
                      </ModalRequirements>
                    )}

                    {!complete && (
                      <AnchorNextLink href="/drone-solutions/light-shows/drone-light-show-challenge">
                        <Button color="white" variant="outline">
                          Alumni Light Show Challenge
                        </Button>
                      </AnchorNextLink>
                    )}
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
      withIndicators={slides.length > 1}
      emblaOptions={{ loop: true }}
      withControls={false}
      classNames={{
        slide: classes.slide,
        control: classes.control,
        indicator: classes.indicator,
      }}
      plugins={[autoplay]}
      // onMouseEnter={autoplay.stop}
      // onMouseLeave={autoplay.reset}
    >
      {slides}
    </Carousel>
  );
}

const data = [
  {
    image: images.carousel.home.image3,
    badge: 'IR',
    title: 'Instructor Rating',
    intro:
      'Take your drone career to new heights—become a certified drone instructor and lead the next generation of pilots.',
    duration: '14 - 21 days',
    dates: [
      // intake date (s)
      new Date(2026, 5, 15),
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
      'Master thermal imaging with globally recognized ITC certification—ideal for inspections, search & rescue, and more.',
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
      'Revolutionize farming—learn precision drone spraying techniques to boost crop yield and cut costs.',
    duration: '10 days',
    dates: [
      // intake date (s)
      new Date(2026, 5, 2),
    ],
    price: {
      former: null,
      current: 70000,
    },
  },

  {
    image: images.carousel.home.image2,
    badge: 'Masterclass',
    title: 'Drone Mapping & Survey',
    intro:
      'Transform raw data into actionable insights—get hands-on with drone mapping, photogrammetry, and survey techniques.',
    duration: '5 days',
    dates: [
      // intake date (s)
      new Date(2026, 5, 22),
    ],
    price: {
      former: null,
      current: 110000,
    },
  },
];

const rplExamDates = [
  new Date(2026, 9, 12),
  new Date(2026, 10, 9),
  new Date(2026, 10, 23),
  new Date(2026, 11, 7),
];

function filterItems(params: { list: any[] }) {
  const now = new Date();

  // 1. Create a copy of 'now' and set it to midnight today
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);

  return params.list.filter((i) => {
    return i.dates.some((d: any) => {
      // 2. Create a copy of the item's date and set it to midnight
      const itemDateStart = new Date(d);
      itemDateStart.setHours(0, 0, 0, 0);

      // 3. Compare the dates (inclusive of today)
      return itemDateStart.getTime() >= todayStart.getTime();
    });
  });
}

// Parses a date in the format DD/MM/YYYY
function getMonthName(dateStr: string, short: boolean = false): string {
  const [day, month, year] = dateStr.split('/').map(Number);
  const date = new Date(year, month - 1, day); // month - 1 because Date months are 0-indexed
  return date.toLocaleString('en-US', { month: short ? 'short' : 'long' });
}

function getDayNumber(dateStr: string): number {
  const [day] = dateStr.split('/').map(Number);
  return day;
}

const formatRplExamDates = (
  rplExamDates: Date[],
  year = new Date().getFullYear(),
): React.ReactNode => {
  if (!rplExamDates.length) return null;

  // 1. Exclude dates that are today or older
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const futureDates = rplExamDates.filter((d) => {
    const target = new Date(d);
    target.setHours(0, 0, 0, 0);
    return target > today;
  });

  if (!futureDates.length) return null;

  // 2. Group dates by month/year to handle multiple months correctly
  const groupedByMonth: Record<string, Date[]> = {};
  futureDates.forEach((d) => {
    const monthKey = `${d.getFullYear()}-${d.getMonth()}`;
    if (!groupedByMonth[monthKey]) {
      groupedByMonth[monthKey] = [];
    }
    groupedByMonth[monthKey].push(d);
  });

  const monthEntries = Object.entries(groupedByMonth);

  return (
    <>
      {monthEntries.map(([monthKey, dates], monthIndex) => {
        const sampleDate = dates[0];
        const monthName = getMonthName(
          getRegionalDate(sampleDate, {
            locale: 'en-GB',
            format: 'numeric',
          }).date,
          true,
        );

        // Determine spacing/conjunction between multiple month groups if necessary
        const isLastMonthGroup = monthIndex === monthEntries.length - 1;

        return (
          <span key={monthKey}>
            {monthName}{' '}
            {dates.map((d, i) => {
              const dayNum = getDayNumber(
                getRegionalDate(d, {
                  locale: 'en-GB',
                  format: 'numeric',
                }).date,
              );

              // Correct separator logic for days within the month
              const separator =
                i === dates.length - 2 ? ' and ' : i === dates.length - 1 ? '' : ', ';

              return (
                <span key={d.toISOString()}>
                  {dayNum}
                  {separator}
                </span>
              );
            })}
            {!isLastMonthGroup && ', '}
            {dates.length === 1 &&
              sampleDate.getFullYear() !== year &&
              ` ${sampleDate.getFullYear()}`}
          </span>
        );
      })}
    </>
  );
};

function getRelevantMondays(referenceDate = new Date()) {
  // Helper function to get all Mondays for a specific year and month
  const getMondaysForMonth = (year: any, month: any) => {
    const mondays = [];
    // Start at the 1st of the month
    const date = new Date(year, month, 1);

    // Find the first Monday of the month (getDay(): 0 = Sun, 1 = Mon, etc.)
    const dayOfWeek = date.getDay();
    const diff = (1 - dayOfWeek + 7) % 7;
    date.setDate(date.getDate() + diff);

    // Add 7 days at a time while staying in the same month
    while (date.getMonth() === month) {
      mondays.push(new Date(date)); // push a new clone of the date
      date.setDate(date.getDate() + 7);
    }

    return mondays;
  };

  const year = referenceDate.getFullYear();
  const month = referenceDate.getMonth();

  // Get Mondays for the current month
  const currentMonthMondays = getMondaysForMonth(year, month);
  const lastMonday = currentMonthMondays[currentMonthMondays.length - 1];

  // Compare dates (ignoring time of day by using setHours(0,0,0,0) for clean comparison)
  const todayNormalized = new Date(referenceDate).setHours(0, 0, 0, 0);
  const lastMondayNormalized = new Date(lastMonday).setHours(0, 0, 0, 0);

  // If today is past the last Monday of the current month, return next month's Mondays
  if (todayNormalized > lastMondayNormalized) {
    const nextMonthDate = new Date(year, month + 1, 1);
    return getMondaysForMonth(nextMonthDate.getFullYear(), nextMonthDate.getMonth());
  }

  return currentMonthMondays;
}
