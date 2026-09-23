import React from 'react';
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
import classes from './grid.module.css';
import { typeDrone } from '@web/types/product';
import { linkify } from '@repo/utils';
import { ImageDefault } from '@repo/ui';
import { ICON_STROKE_WIDTH } from '@repo/constants';
import { ModalContactShop } from '@repo/ui';
import { AnchorNextLink } from '@repo/ui';

export default function Grid({ data }: { data: typeDrone }) {
  return (
    <Card
      className={`${classes.card} ${!data.new ? '' : classes.pulse}`}
      withBorder
      style={{ borderWidth: ICON_STROKE_WIDTH }}
      shadow={'xs'}
      h={'100%'}
      pt={0}
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
                  <Card bg={'var(--mantine-color-body)'} padding={'xs'} w={'fit-content'}>
                    <Text fw={500} fz={'xs'}>
                      {data.tag}
                    </Text>
                  </Card>
                )}

                <Group gap={'xs'}>
                  {data.new && (
                    <Badge size={'md'} color={'sec.3'} c={'pri.9'}>
                      New
                    </Badge>
                  )}

                  {data.featured && (
                    <Badge size={'md'} color={'pri.9'} c={'sec.3'}>
                      Featured
                    </Badge>
                  )}

                  {data.available == false && (
                    <Badge size={'md'} color={'yellow'}>
                      Currently Unavailable
                    </Badge>
                  )}

                  {data.kit?.flyMore?.price?.latter && (
                    <Badge size={'md'} color={'red'}>
                      On Sale
                    </Badge>
                  )}
                </Group>
              </Stack>
            </Overlay>
          </CardSection>

          <Title order={3} fz={'sm'} tt={'uppercase'} c={'var(--mantine-color-text)'} mt={'md'}>
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
          <Divider color="sec.3" />

          <Stack gap={0} fz={'sm'} mt={'xs'} mih={21.7 * 2}>
            <Text fz={'sm'} mih={58}>
              {!data.price ? (
                <Text component="span" inherit>
                  Price Undisclosed
                </Text>
              ) : (
                <>
                  <Text component="span" inherit display={'block'}>
                    Kes.{' '}
                    <Text component="span" inherit fz={'md'} fw={'bold'} c={'pri'}>
                      <NumberFormatter thousandSeparator value={data.price.former} />
                    </Text>
                    {data.kit?.flyMore && (
                      <Text component="sup" inherit>
                        {' '}
                        (Basic Kit)
                      </Text>
                    )}
                  </Text>

                  {data.kit?.flyMore && (
                    <Text fz={'sm'} component="span">
                      <Text component="span" inherit>
                        Kes.
                      </Text>{' '}
                      <Text component="span" inherit fz={'md'} fw={'bold'} c={'pri'}>
                        <NumberFormatter
                          thousandSeparator
                          value={
                            (data.price?.former || 0) +
                            (data.kit?.flyMore?.price?.latter ||
                              data.kit?.flyMore?.price?.former ||
                              0)
                          }
                        />
                      </Text>
                      <Text component="sup" inherit>
                        {' '}
                        (Flymore Kit)
                      </Text>
                    </Text>
                  )}
                </>
              )}
            </Text>
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

            <AnchorNextLink href={`/shop/drones/${data.category}/${linkify(data.title.long)}`}>
              <Button size="xs" variant="outline" color="black">
                Learn More
              </Button>
            </AnchorNextLink>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
}
