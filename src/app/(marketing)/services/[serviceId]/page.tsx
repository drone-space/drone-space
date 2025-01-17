import React from 'react';

import NextImage from 'next/image';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { typeParams } from './layout';
import services from '@/data/services';
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
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import CardServiceFeature from '@/components/common/cards/service/feature';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
// import CtaService from '@/components/partial/cta/service';

export default function ServiceDetails({ params }: typeParams) {
  const data = services.find((s) => linkify(s.title) == params.serviceId);

  const featureless = data?.desc.features.desc.find((f) => !f.desc);

  return (
    <LayoutPage>
      <LayoutSection
        id="page-service-intro"
        bordered={featureless ? false : true}
        shadowed={featureless ? true : false}
        padded
      >
        <Grid gutter={{ base: 32, md: 64 }}>
          <GridCol span={{ sm: 6, lg: 7 }}>
            <Stack gap={'xl'}>
              <Stack gap={'xs'}>
                {/* <Title order={2} fz={{ sm: "xl", md: 24 }} fw={"bold"}>
								{data?.title}
							</Title> */}

                <Stack gap={'xs'}>
                  {data?.desc.intro.map((item, index) => (
                    <Text key={index} fz={{ sm: 'sm', lg: 'md' }}>
                      {item}
                    </Text>
                  ))}
                </Stack>
              </Stack>

              <List
                visibleFrom="md"
                withPadding={true}
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
                {data?.desc.features.desc.map((item, index) => (
                  <ListItem key={index} fz={{ md: 'sm', lg: 'md' }}>
                    {item.title}
                  </ListItem>
                ))}
              </List>
            </Stack>
          </GridCol>
          <GridCol span={{ sm: 6, lg: 5 }}>
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
        </Grid>
      </LayoutSection>

      {!featureless && (
        <LayoutSection
          id="page-service-features"
          shadowed
          padded
          bg={
            'light-dark(var(--mantine-color-gray-1),var(--mantine-color-gray-1))'
          }
        >
          <Stack gap={'xl'} align="center">
            <Stack gap={'xs'}>
              <Title
                order={2}
                fz={{ sm: 'xl', md: 24 }}
                fw={'bold'}
                ta={'center'}
              >
                Features
              </Title>
              <Text ta={'center'}>{data?.desc.features.title}</Text>
            </Stack>

            <Grid justify="center">
              {data?.desc.features.desc.map((feature, index) => (
                <GridCol
                  key={index}
                  span={
                    data?.desc.features.desc.length < 4 ? { md: 4 } : { md: 6 }
                  }
                >
                  <CardServiceFeature data={feature} />
                </GridCol>
              ))}
            </Grid>
          </Stack>
        </LayoutSection>
      )}

      {/* <CtaService /> */}
    </LayoutPage>
  );
}
