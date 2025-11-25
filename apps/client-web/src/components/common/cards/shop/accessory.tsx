import {
  Anchor,
  Card,
  Divider,
  Flex,
  Group,
  Image,
  List,
  ListItem,
  NumberFormatter,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import React from 'react';
import NextImage from 'next/image';
import classes from './accessory.module.scss';
import { typeAccessory } from '@/types/product';
import { IconArrowRightDashed } from '@tabler/icons-react';
import { linkify } from '@repo/utilities/url';
import Link from 'next/link';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';

export default function Accessory({ data }: { data: typeAccessory }) {
  return (
    <Card className={classes.card} padding={0} withBorder>
      <Stack justify="space-between" h={'100%'}>
        <div>
          <div className={classes.imageSection}>
            <Anchor
              component={Link}
              inherit
              href={`/shop/accessories/${linkify(data.title.long)}`}
            >
              <Flex
                direction={'column'}
                justify={'center'}
                className={classes.imageContainer}
                h={{ md: 280 }}
              >
                <Image
                  src={
                    data.images.find((i) => i.includes('front')) ||
                    data.images[0]
                  }
                  alt={data.title.long}
                  loading="lazy"
                  component={NextImage}
                  width={1920}
                  height={1080}
                  className={classes.image}
                />
              </Flex>

              <div className={classes.overlay}></div>
            </Anchor>
          </div>

          <Divider />

          <Stack p={'md'}>
            <Title order={3} className={classes.title} fz={{ md: 'md' }}>
              <Anchor
                component={Link}
                inherit
                href={`/shop/accessories/${linkify(data.title.long)}`}
              >
                {data.title.short ? data.title.short : data.title.long}
              </Anchor>
            </Title>

            {typeof data.specs == 'string' ? (
              <Text lineClamp={3} fz={{ md: 'sm' }}>
                {data.specs}
              </Text>
            ) : (
              <Stack gap={0}>
                <List
                  listStyleType="none"
                  icon={
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE / 1.5}
                      color="sec.3"
                      c={'pri.8'}
                    >
                      <IconArrowRightDashed
                        size={ICON_SIZE / 1.5}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>
                  }
                >
                  {data.specs.map(
                    (spec, index) =>
                      data.specs.indexOf(spec) < 5 && (
                        <ListItem key={index}>
                          <Text
                            component="span"
                            inherit
                            fz={{ md: 'sm' }}
                            lineClamp={1}
                          >
                            <Text component="span" inherit fw={500}>
                              {spec.label}
                            </Text>
                            : {spec.desc}
                          </Text>
                        </ListItem>
                      )
                  )}
                </List>
                <Text component="span" inherit fw={500} ml={32}>
                  ...
                </Text>
              </Stack>
            )}
          </Stack>
        </div>

        {data.price && (
          <Group p={'md'} bg={'pri.8'} c={'var(--mantine-color-body)'}>
            <Text>
              Kshs.{' '}
              <Text
                component="span"
                inherit
                fw={500}
                c={'var(--mantine-color-sec-3)'}
              >
                <NumberFormatter value={data.price.former} thousandSeparator />
              </Text>
            </Text>
          </Group>
        )}
      </Stack>
    </Card>
  );
}
