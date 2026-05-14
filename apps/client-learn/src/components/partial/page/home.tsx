'use client';

import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import {
  Anchor,
  Button,
  Card,
  Center,
  Grid,
  GridCol,
  Group,
  Paper,
  Skeleton,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { COMPANY_NAME } from '@repo/constants/app';
import ImageDefault from '@repo/components/common/images/default';
import NextLink from '@repo/components/common/anchor/next-link';
import { images } from '@repo/constants/images';
import { IconArrowRight, IconPlus } from '@tabler/icons-react';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import CardQuizHome from '@repo/components/common/cards/quiz/home';

export default function Home() {
  const quizzes = useStoreQuiz((s) => s.quizzes);

  return (
    <LayoutSection id={'section-home'} containerized={'md'}>
      <Stack
        gap={SECTION_SPACING}
        mih={'100vh'}
        py={SECTION_SPACING}
        justify="center"
      >
        <Group justify="center" ta={'center'}>
          <NextLink href={'/admin'}>
            <ImageDefault
              src={images.brand.droneSpace.logo.landscape.default}
              alt={COMPANY_NAME}
              height={48}
              width={320}
              fit="contain"
              radius={0}
            />
          </NextLink>
        </Group>

        <Stack align="center" ta={'center'}>
          <Text c={'dimmed'} fz={'lg'}>
            Welcome to {COMPANY_NAME} online learning.
          </Text>

          <Title order={1}>The #1 UTO Learning Platform</Title>

          {/* <Text c={'dimmed'} fz={'lg'}>
            Browse our content and test yourself.
          </Text> */}
        </Stack>

        <Grid gutter={'xl'} justify="center">
          {quizzes === undefined ? (
            <GridCol span={12}>
              <Grid gutter={'xl'}>
                <GridCol span={{ md: 4 }}>
                  <Skeleton h={198} w={'100%'} />
                </GridCol>
                <GridCol span={{ md: 4 }}>
                  <Skeleton h={198} w={'100%'} />
                </GridCol>
                <GridCol span={{ md: 4 }}>
                  <Skeleton h={198} w={'100%'} />
                </GridCol>
              </Grid>
            </GridCol>
          ) : !quizzes?.length ? (
            <GridCol span={{ md: 4 }}>
              <Paper
                bg={
                  'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-9))'
                }
                p={'md'}
              >
                <Group justify="center" ta={'center'} fz={'sm'} c={'dimmed'}>
                  <Text inherit>No quizzes found</Text>
                </Group>
              </Paper>
            </GridCol>
          ) : (
            quizzes.map(
              (qi, i) =>
                i < 2 && (
                  <GridCol key={qi.id} span={{ md: 4 }}>
                    <CardQuizHome props={{ quiz: qi }} />
                  </GridCol>
                )
            )
          )}

          <GridCol
            span={{ md: 4 }}
            display={quizzes?.length ? undefined : 'none'}
          >
            <NextLink href="/quizzes">
              <Card
                bg={
                  'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-9))'
                }
                withBorder
                p={{ base: 'md', md: 'lg' }}
                h={'100%'}
                mih={198}
              >
                <Stack
                  align="center"
                  ta={'center'}
                  fz={'sm'}
                  justify="center"
                  h={'100%'}
                >
                  <ThemeIcon size={ICON_WRAPPER_SIZE + 4} color="sec.3">
                    <IconPlus size={ICON_SIZE + 4} stroke={ICON_STROKE_WIDTH} />
                  </ThemeIcon>

                  <Text inherit>Browse more</Text>
                </Stack>
              </Card>
            </NextLink>
          </GridCol>
        </Grid>

        {/* <Group gap={'xs'} justify="center">
          <NextLink href="/quizzes">
            <Button
              rightSection={
                <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              }
            >
              See Quizzes
            </Button>
          </NextLink>
        </Group> */}

        <Group justify="center" ta={'center'}>
          <Text inherit c={'dimmed'}>
            Back to main site:{' '}
            <Anchor
              inherit
              href="https://dronespace.co.ke"
              target="_blank"
              underline="hover"
            >
              dronespace.co.ke
            </Anchor>
          </Text>
        </Group>
      </Stack>
    </LayoutSection>
  );
}
