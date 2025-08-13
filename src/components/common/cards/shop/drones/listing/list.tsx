import {
  BackgroundImage,
  Badge,
  Box,
  Button,
  Card,
  CardSection,
  Divider,
  Grid,
  GridCol,
  Group,
  NumberFormatter,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';
import classes from './list.module.scss';
import { typeDrone } from '@/types/static/product';
import { linkify } from '@/utilities/formatters/string';
import Link from 'next/link';
import ModalContactShop from '@/components/common/modals/contact/shop';
import ImageDefault from '@/components/common/images/default';
import { ICON_STROKE_WIDTH, SECTION_SPACING } from '@/data/constants';

export default function List({ data }: { data: typeDrone }) {
  return (
    <Card
      className={`${classes.card} ${!data.new ? '' : classes.pulse}`}
      withBorder
      style={{ borderWidth: ICON_STROKE_WIDTH }}
      shadow={'xs'}
      h={'100%'}
    >
      <Grid gutter={0}>
        <GridCol span={{ md: 4 }}>
          <CardSection pos={'relative'}>
            <ImageDefault
              src={
                data.images.find((i) => i.includes('skew')) ||
                data.images.find((i) => i.includes('front')) ||
                ''
              }
              alt={data.title.long}
              height={{ md: 240 }}
              fit={'contain'}
              width={'100%'}
              mode="grid"
            />

            <Overlay backgroundOpacity={0.05} p={'xs'} style={{ zIndex: 1 }}>
              <Stack justify="space-between" h={'100%'}>
                <div>
                  {data.new && (
                    <Badge size={'md'} color={'sec.3'} c={'pri.8'}>
                      New Arrival
                    </Badge>
                  )}
                </div>
              </Stack>
            </Overlay>
          </CardSection>
        </GridCol>

        <GridCol span={{ md: 8 }}>
          <Box pl={{ md: SECTION_SPACING / 3 }}>
            <Title
              order={3}
              fz={'sm'}
              tt={'uppercase'}
              c={'var(--mantine-color-text)'}
              mt={'md'}
            >
              {data.title.short ? data.title.short : data.title.long}
            </Title>

            {data.tag && (
              <Text fw={500} fz={'xs'} mih={37.2}>
                {data.tag}
              </Text>
            )}
          </Box>

          <CardSection mb={'md'}>
            <Divider />
          </CardSection>

          <Box pl={{ md: SECTION_SPACING / 3 }}>
            {data.desc && (
              <Text fz={'sm'} lineClamp={3}>
                {data.desc}
              </Text>
            )}

            <Group gap={'xs'} mt={'md'}>
              <ModalContactShop
                props={{
                  initialValues: {
                    subject: `${data.title.short} Drone Purchase Inquiry`,
                  },
                }}
              >
                <Button size="xs" radius={'xl'}>
                  Order
                </Button>
              </ModalContactShop>

              <Button
                size="xs"
                radius={'xl'}
                variant="outline"
                color="black"
                component={Link}
                href={`/shop/drones/${data.category}/${linkify(data.title.long)}`}
              >
                Learn More
              </Button>
            </Group>
          </Box>
        </GridCol>
      </Grid>
    </Card>
  );
}
