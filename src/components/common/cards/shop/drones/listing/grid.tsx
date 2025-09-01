import {
  Badge,
  Button,
  Card,
  CardSection,
  Divider,
  Group,
  NumberFormatter,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';
import classes from './grid.module.scss';
import { typeDrone } from '@/types/static/product';
import { linkify } from '@/utilities/formatters/string';
import Link from 'next/link';
import ModalContactShop from '@/components/common/modals/contact/shop';
import ImageDefault from '@/components/common/images/default';
import { ICON_STROKE_WIDTH } from '@/data/constants';

export default function Grid({ data }: { data: typeDrone }) {
  return (
    <Card
      className={`${classes.card} ${!data.new ? '' : classes.pulse}`}
      withBorder
      style={{ borderWidth: ICON_STROKE_WIDTH }}
      shadow={'xs'}
      h={'100%'}
    >
      <Stack justify="space-between" h={'100%'}>
        <div>
          <CardSection pos={'relative'}>
            <ImageDefault
              src={
                data.images.find((i) => i.includes('skew')) ||
                data.images.find((i) => i.includes('front')) ||
                ''
              }
              alt={data.title.long}
              height={{ base: 280 }}
              width={'100%'}
              mode="grid"
              pt={48}
            />

            <Overlay backgroundOpacity={0.05} p={'xs'} style={{ zIndex: 1 }}>
              <Stack justify="space-between" h={'100%'}>
                {data.tag && (
                  <Card bg={'var(--mantine-color-body)'} padding={'xs'}>
                    <Text fw={500} fz={'xs'} mih={37.2}>
                      {data.tag}
                    </Text>
                  </Card>
                )}

                <Group gap={'xs'}>
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

          <Title
            order={3}
            fz={'sm'}
            tt={'uppercase'}
            c={'var(--mantine-color-text)'}
            mt={'md'}
          >
            {data.title.short ? data.title.short : data.title.long}
          </Title>

          <CardSection my={'md'}>
            <Divider />
          </CardSection>

          {data.desc && (
            <Text fz={'sm'} mt={'xs'} lineClamp={6}>
              {data.desc}
            </Text>
          )}
        </div>

        <Stack gap={'xs'} mt={'md'}>
          <Divider color="sec.4" />

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

            <Button
              size="xs"
              variant="outline"
              color="black"
              component={Link}
              href={`/shop/drones/${data.category}/${linkify(data.title.long)}`}
            >
              Learn More
            </Button>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
}
