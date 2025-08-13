import {
  Badge,
  Button,
  Card,
  CardSection,
  Divider,
  Group,
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
      </Stack>
    </Card>
  );
}
