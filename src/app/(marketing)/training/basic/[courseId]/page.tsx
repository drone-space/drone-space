import React from 'react';

import NextImage from 'next/image';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { typeParams } from './layout';
import { linkify } from '@/utilities/formatters/string';
import {
  Grid,
  GridCol,
  Stack,
  Title,
  Text,
  ThemeIcon,
  List,
  ListItem,
  Image,
  Anchor,
  Divider,
} from '@mantine/core';
import {
  IconCheck,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconSchool,
} from '@tabler/icons-react';
import courses from '@/data/courses';
// import CtaTraining from '@/components/partial/cta/training';
import ModalContactTraining from '@/components/common/modals/contact/training';
import AccordionFaq from '@/components/common/accordions/faq';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';

export default function BasicCourseDetails({ params }: typeParams) {
  const data = courses.basic.units.find(
    (u) => linkify(u.title.full) == params.courseId
  );

  const icons = [
    {
      icon: IconNumber1,
      alt: 'IconNumber1',
    },
    {
      icon: IconNumber2,
      alt: 'IconNumber2',
    },
    {
      icon: IconNumber3,
      alt: 'IconNumber3',
    },
  ];

  return (
    <LayoutPage>
      <LayoutSection
        id="training-basic-intro"
        padded
        bordered={data?.features ? false : true}
        shadowed={data?.features ? true : false}
      >
        <Grid gutter={{ base: 32, md: 64 }}>
          <GridCol span={{ md: 6, lg: 7 }}>
            <Stack>
              <Title order={2} fz={{ sm: 'xl', md: 24 }} fw={'bold'}>
                {data?.title.full}
              </Title>

              <Grid gutter={{ base: 32, md: 'md' }}>
                <GridCol span={{ base: 12, sm: 6, md: 12 }}>
                  <Text fz={{ sm: 'sm', lg: 'md' }}>{data?.desc}</Text>
                </GridCol>
                <GridCol span={{ base: 12, sm: 6, md: 12 }}>
                  <Stack>
                    <Text fz={{ sm: 'sm', lg: 'md' }}>
                      The course contains various modules:
                    </Text>
                    <List
                      spacing={'xs'}
                      fz={{ sm: 'sm' }}
                      icon={
                        <ThemeIcon
                          size={ICON_WRAPPER_SIZE / 1.5}
                          color="green.6"
                          c={'white'}
                          radius={'xl'}
                        >
                          <IconCheck
                            size={ICON_SIZE / 1.5}
                            stroke={ICON_STROKE_WIDTH}
                          />
                        </ThemeIcon>
                      }
                    >
                      {data?.modules?.map((item, index) => (
                        <ListItem key={index} fz={{ md: 'sm', lg: 'md' }}>
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                </GridCol>
              </Grid>
            </Stack>
          </GridCol>
          <GridCol span={{ md: 6, lg: 5 }}>
            <Grid gutter={{ base: 32, md: 'md' }}>
              <GridCol span={{ base: 12, sm: 6, md: 12 }}>
                <Stack>
                  <Image
                    src={data?.image}
                    alt={'Gallery Image'}
                    loading="lazy"
                    radius={'sm'}
                    component={NextImage}
                    width={1920}
                    height={1080}
                  />
                </Stack>
              </GridCol>
              <GridCol span={{ base: 12, sm: 6, md: 12 }}>
                <Stack>
                  <Text fz={{ sm: 'sm', lg: 'md' }}>
                    Upon completion of the course, students will gain the
                    following qualifications:
                  </Text>
                  <List
                    withPadding={true}
                    spacing={'xs'}
                    fz={{ sm: 'sm' }}
                    icon={
                      <ThemeIcon
                        size={ICON_WRAPPER_SIZE}
                        color="pri"
                        variant="light"
                        c={'pri'}
                        radius={'xl'}
                      >
                        <IconSchool
                          size={ICON_SIZE}
                          stroke={ICON_STROKE_WIDTH}
                        />
                      </ThemeIcon>
                    }
                  >
                    {data?.qualifications?.map((item, index) => (
                      <ListItem key={index} fz={{ md: 'sm', lg: 'md' }}>
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </GridCol>
            </Grid>
          </GridCol>
        </Grid>
      </LayoutSection>

      {data?.features && (
        <LayoutSection
          id="training-basic-features"
          padded
          bordered
          bg={
            'light-dark(var(--mantine-color-pri-light), var(--mantine-color-pri-light))'
          }
        >
          <Grid gutter={{ base: 32, lg: 64 }}>
            {data.features.map((feature, index) => {
              const selectedIcon = icons[data.features.indexOf(feature)];

              return (
                <GridCol key={index} span={{ md: 'auto' }}>
                  <Stack align="center">
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE}
                      variant="light"
                      c={'pri'}
                    >
                      <selectedIcon.icon
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>

                    <Title ta={'center'} order={3} fz={{ md: 'sm', lg: 'xl' }}>
                      {feature.title}
                    </Title>
                    <Text ta={'center'} fz={{ md: 'xs' }}>
                      {feature.desc}
                    </Text>
                  </Stack>
                </GridCol>
              );
            })}
          </Grid>
        </LayoutSection>
      )}

      <LayoutSection
        id="training-basic-faq"
        shadowed
        padded
        containerized={'responsive'}
        bg={
          'light-dark(var(--mantine-color-gray-1), var(--mantine-color-gray-1))'
        }
      >
        <Stack gap={'xl'}>
          <Title ta={'center'} order={2} fw={'bold'}>
            Frequently Asked Questions
          </Title>

          <Text w={{ md: '75%' }} mx={'auto'} ta={'center'} fz={'sm'}>
            For further information, please visit our training section, and for
            any other training inquiries, please send us a{' '}
            <ModalContactTraining>
              <Anchor inherit fw={500}>
                training inquiry
              </Anchor>
            </ModalContactTraining>
            .
          </Text>

          <Grid gutter={{ base: 32, md: 'md' }}>
            <GridCol span={{ base: 12, md: 6 }}>
              <AccordionFaq section="training" />
            </GridCol>
            <GridCol span={{ base: 12 }} hiddenFrom="md">
              <Divider />
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <AccordionFaq />
            </GridCol>
          </Grid>
        </Stack>
      </LayoutSection>

      {/* <CtaTraining data={{ type: 'basic' }} /> */}
    </LayoutPage>
  );
}
