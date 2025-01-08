import {
  Anchor,
  Card,
  CardSection,
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
import { typeAccessory } from '@/types/static/product';
import { IconCheck } from '@tabler/icons-react';
import { linkify } from '@/utilities/formatters/string';
import Link from 'next/link';

export default function Accessory({ data }: { data: typeAccessory }) {
  return (
    <Card className={classes.card}>
      <Stack justify="space-between" h={'100%'}>
        <Stack>
          <CardSection className={classes.imageSection}>
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
          </CardSection>

          <Stack>
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
                      size={16}
                      radius={'xl'}
                      color="green.6"
                      c={'white'}
                    >
                      <IconCheck size={12} stroke={3} />
                    </ThemeIcon>
                  }
                >
                  {data.specs.map(
                    (spec) =>
                      data.specs.indexOf(spec) < 3 && (
                        <ListItem key={spec.label}>
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
        </Stack>

        {data.price && (
          <Group mt={'xs'}>
            <Text>
              Kshs.{' '}
              <Text
                component="span"
                inherit
                fw={500}
                c={
                  'light-dark(var(--mantine-color-pri-9), var(--mantine-color-pri-9))'
                }
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
