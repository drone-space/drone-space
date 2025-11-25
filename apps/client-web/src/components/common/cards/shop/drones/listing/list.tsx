import {
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
import { typeDrone } from '@/types/product';
import { linkify } from '@repo/utilities/url';
import Link from 'next/link';
import ImageDefault from '@repo/components/common/images/default';
import { ICON_STROKE_WIDTH, SECTION_SPACING } from '@repo/constants/sizes';
import ModalContactShop from '@/components/common/modals/contact/shop';
import NextLink from '@repo/components/common/anchor/next-link';

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
        <GridCol span={{ sm: 4 }}>
          <CardSection pos={'relative'}>
            <ImageDefault
              src={
                data.images.find((i) => i.includes('skew')) ||
                data.images.find((i) => i.includes('front')) ||
                ''
              }
              alt={data.title.long}
              height={{ base: 320 }}
              fit={'contain'}
              width={'100%'}
              mode="grid"
            />

            <Overlay backgroundOpacity={0.05} p={'xs'} style={{ zIndex: 1 }}>
              <Stack justify="space-between" h={'100%'}>
                <Group>
                  {data.new && (
                    <Badge size={'md'} color={'sec.3'} c={'pri.8'}>
                      New
                    </Badge>
                  )}

                  {data.featured && (
                    <Badge size={'md'} color={'pri.8'} c={'sec.3'}>
                      Featured
                    </Badge>
                  )}
                </Group>
              </Stack>
            </Overlay>
          </CardSection>
        </GridCol>

        <GridCol span={{ sm: 8 }}>
          <Box pl={{ sm: SECTION_SPACING / 3 }}>
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

          <Box pl={{ sm: SECTION_SPACING / 3 }}>
            {data.desc && (
              <Text fz={'sm'} lineClamp={3}>
                {data.desc}
              </Text>
            )}

            <Divider color="sec.4" my={'md'} />

            <Stack gap={0} fz={'sm'} mt={'xs'} mih={21.7 * 2}>
              <Text inherit fw={'500'}>
                <Text component="span" inherit fz={'xs'} fw={'normal'}>
                  Ksh.
                </Text>{' '}
                <NumberFormatter thousandSeparator value={data.price?.former} />{' '}
                {data.kit?.flyMore && (
                  <Text component="sup" inherit fz={'xs'} fw={'normal'}>
                    (Basic Kit)
                  </Text>
                )}
              </Text>

              {data.kit?.flyMore && (
                <Text inherit fw={'500'}>
                  <Text component="span" inherit fz={'xs'} fw={'normal'}>
                    Ksh.
                  </Text>{' '}
                  <NumberFormatter
                    thousandSeparator
                    value={
                      (data.price?.former || 0) +
                      (data.kit?.flyMore?.price?.former || 0)
                    }
                  />{' '}
                  <Text component="sup" inherit fz={'xs'} fw={'normal'}>
                    (Flymore Kit)
                  </Text>
                </Text>
              )}
            </Stack>

            <Group gap={'xs'} mt={'md'}>
              <ModalContactShop
                props={{
                  initialValues: {
                    subject: `${data.title.short} Drone Purchase Inquiry`,
                    message: `I'd like to order the ${data.title.long}.`,
                  },
                }}
              >
                <Button size="xs">Order Now</Button>
              </ModalContactShop>

              <NextLink
                href={`/shop/drones/${data.category}/${linkify(data.title.long)}`}
              >
                <Button size="xs" variant="outline" color="black">
                  Learn More
                </Button>
              </NextLink>
            </Group>
          </Box>
        </GridCol>
      </Grid>
    </Card>
  );
}
