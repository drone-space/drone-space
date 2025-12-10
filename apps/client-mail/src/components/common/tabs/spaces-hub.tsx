'use client';

import React from 'react';
import {
  Divider,
  Grid,
  GridCol,
  Group,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
  ThemeIcon,
} from '@mantine/core';
import classes from './spaces-hub.module.scss';
import { IconArrowRightDashed, IconChevronRight } from '@tabler/icons-react';
import { linkify } from '@repo/utilities/url';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import ImageDefault from '@repo/components/common/images/default';
import { useMediaQuery } from '@mantine/hooks';

export default function SpacesHub() {
  const desktop = useMediaQuery('(min-width: 62em)');

  return (
    <Tabs
      variant="pills"
      orientation={!desktop ? undefined : 'vertical'}
      defaultValue={linkify(data[0].title)}
      classNames={classes}
    >
      <TabsList pr={{ md: 'md', lg: 'xl' }} grow={!desktop}>
        {data.map((tab, index) => (
          <TabsTab
            key={index}
            value={linkify(tab.title)}
            rightSection={
              <Group visibleFrom="md">
                <IconChevronRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              </Group>
            }
          >
            {tab.title}
          </TabsTab>
        ))}
      </TabsList>

      <Divider
        orientation={!desktop ? undefined : 'vertical'}
        my={!desktop ? 'xl' : undefined}
      />

      {data.map((panel, index) => (
        <TabsPanel key={index} value={linkify(panel.title)}>
          <Grid gutter={'xl'} pl={{ md: 'md', lg: 'xl' }}>
            <GridCol span={{ base: 12, md: 5 }}>
              <ImageDefault
                src={panel.image}
                alt={'Mission'}
                height={{ base: 240, xs: 320, sm: 480, md: 280 }}
                mode="grid"
              />
            </GridCol>

            <GridCol span={{ base: 12, md: 6 }}>
              <Stack>
                {panel.list.map((item, index) => (
                  <Group key={index} wrap="nowrap" align="start">
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE / 1.25}
                      color="sec.3"
                      c={'pri.8'}
                    >
                      <IconArrowRightDashed
                        size={ICON_SIZE / 1.25}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>

                    <Text component="span" inherit>
                      {item}
                    </Text>
                  </Group>
                ))}
              </Stack>
            </GridCol>
          </Grid>
        </TabsPanel>
      ))}
    </Tabs>
  );
}

const data = [
  {
    title: 'Territorial Ambition',
    image:
      'https://cdn.pixabay.com/photo/2015/12/07/14/18/drone-1080844_1280.jpg',
    list: [
      'To generate activities and jobs',
      'To effectively address the issue of Safety and risks',
      'To bring together industry players in the emerging “Kenya Drone” sector (manufacturers, engineering, fuel incl. hydrogen, maintenance, start-ups, associations, universities, ROCs, UTOs etc.)',
    ],
  },
  {
    title: 'National Ambition',
    image:
      'https://cdn.pixabay.com/photo/2018/03/04/15/33/drone-3198324_1280.jpg',
    list: [
      'To support the development and integration of all technologies required for the growth of the drone industry',
      'To position Drone Spaces & Hub as enablers in the development of drone technologies and innovation for all',
      'To promote local techies in drone technological know-how and innovation during the Kenya Drone Expo and other innovation events',
    ],
  },
  {
    title: 'Pan-Africanism',
    image:
      'https://cdn.pixabay.com/photo/2017/09/07/08/57/drone-2724257_1280.jpg',
    list: [
      'To define and harmonize procedures and regulations in Africa',
      'To implement drone standards, traffic management systems and communication and surveillance solutions that facilitate market access for the various players in Africa',
    ],
  },
];
