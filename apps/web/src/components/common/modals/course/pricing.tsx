'use client';

import React from 'react';

import NextImage from 'next/image';
import {
  Modal,
  Grid,
  GridCol,
  Stack,
  Image,
  Text,
  Group,
  NumberFormatter,
  Button,
  Title,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconSchool } from '@tabler/icons-react';
import ModalContactTraining from '../contact/training';
import { typeUnit } from '@/types/static/course';

export default function Pricing({
  children,
  data,
}: {
  children: React.ReactNode;
  data: typeUnit;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const desktoplg = useMediaQuery('(min-width: 75em)');

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size={desktoplg ? 960 : 'xl'}
        centered
        title={
          <Text component="span" inherit fw={'bold'} c={'pri'}>
            {data.title.full} Pricing Details
          </Text>
        }
      >
        <Grid>
          <GridCol span={{ base: 12, sm: 6 }}>
            <Stack h={'100%'}>
              <Image
                src={data.image}
                alt={data.title.full}
                loading="lazy"
                radius={'sm'}
                mih={'100%'}
                component={NextImage}
                width={1920}
                height={1080}
              />
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, sm: 6 }}>
            <Stack gap={'md'} justify="space-between" h={'100%'}>
              <Stack gap={'md'}>
                <Stack gap={'xs'}>
                  <Title order={2} fz={'md'} fw={'bold'}>
                    {data.title.full}
                  </Title>
                  <Text fz={{ base: 'xs', lg: 'sm' }}>{data.desc}</Text>
                </Stack>

                {data.priceFeatures && (
                  <Stack gap={0} fz="xs">
                    {data.priceFeatures.map((feature) => (
                      <Grid
                        key={feature.item}
                        gutter={0}
                        bg={
                          data.priceFeatures
                            ? data.priceFeatures?.indexOf(feature) % 2 == 0
                              ? 'light-dark(var(--mantine-color-pri-light),var(--mantine-color-pri-light))'
                              : undefined
                            : undefined
                        }
                        p={4}
                      >
                        <GridCol span={{ base: 8, xs: 6 }}>
                          <Text component="span" inherit>
                            {feature.item}
                          </Text>
                        </GridCol>
                        <GridCol span={2} visibleFrom="xs">
                          {feature.duration && (
                            <Group justify="center">
                              <Text component="span" inherit ta={'center'}>
                                {feature.duration}
                              </Text>
                            </Group>
                          )}
                        </GridCol>
                        <GridCol span={4}>
                          {feature.price && (
                            <Group justify="end">
                              <Text component="span" inherit>
                                Kshs.{' '}
                                <Text component="span" inherit fw={500}>
                                  <NumberFormatter
                                    value={feature.price}
                                    thousandSeparator
                                  />
                                </Text>
                                /-
                              </Text>
                            </Group>
                          )}
                        </GridCol>
                      </Grid>
                    ))}
                  </Stack>
                )}
              </Stack>

              <Group align="end" justify="end">
                <ModalContactTraining>
                  <Button
                    size="xs"
                    leftSection={
                      <IconSchool
                        size={16}
                        stroke={1.5}
                        style={{ marginTop: 2 }}
                      />
                    }
                  >
                    Enroll for {data.title.full}
                  </Button>
                </ModalContactTraining>
              </Group>
            </Stack>
          </GridCol>
        </Grid>
      </Modal>

      <span style={{ display: 'inline' }} onClick={open}>
        {children}
      </span>
    </>
  );
}
