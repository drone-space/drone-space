import React from 'react';

import NextImage from 'next/image';

import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  Flex,
  Grid,
  GridCol,
  Group,
  Image,
  NumberFormatter,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import ModalContactShop from '@/components/common/modals/contact/shop';
import products from '@/data/products';
import CardShopAccessory from '@/components/common/cards/shop/accessory';
import CarouselImage from '@/components/common/carousels/image';
import { typeParams } from '../layout';
import {
  IconArrowRightDashed,
  IconBattery3,
  IconCheck,
  IconChevronRight,
  IconCirclePlus,
  IconCube,
  IconCubePlus,
  IconListDetails,
} from '@tabler/icons-react';
import classes from './drone.module.scss';
import { linkify } from '@/utilities/formatters/string';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';

export default function AccessoryDetail({ params }: typeParams) {
  const product = products.find((p) => linkify(p.title.long) == params.droneId);

  return (
    <LayoutPage>
      <LayoutSection id="drone-category-intro" padded shadowed>
        <Grid gutter={{ base: 32, lg: 64 }}>
          <GridCol span={{ base: 12, sm: 5 }} className={classes.card}>
            <Box pos={'sticky'} top={64}>
              {product?.images && <CarouselImage data={product.images} />}
            </Box>
          </GridCol>
          <GridCol span={{ sm: 7 }}>
            <Stack gap={'xl'}>
              <Stack>
                <Title order={2} fz={{ md: 32 }}>
                  {product?.title.long}
                </Title>

                <Flex
                  direction={{ base: 'column', xs: 'row' }}
                  align={{ xs: 'center' }}
                  gap={{ base: 'xs', xs: 'xl' }}
                >
                  <Text>
                    Kshs.{' '}
                    <Text
                      component="span"
                      inherit
                      fw={500}
                      c={
                        'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'
                      }
                      fz={{ md: 'xl' }}
                    >
                      {product?.price ? (
                        <NumberFormatter
                          value={product?.price.former}
                          thousandSeparator
                        />
                      ) : (
                        'TBD'
                      )}
                    </Text>{' '}
                    {product?.kit?.flyMore && (
                      <Text component="sup" inherit fz={'xs'}>
                        (basic kit)
                      </Text>
                    )}
                  </Text>
                  {product?.price && product?.kit?.flyMore && (
                    <>
                      <Divider
                        orientation="vertical"
                        color="pri"
                        visibleFrom="xs"
                      />

                      <Text>
                        Kshs.{' '}
                        <Text
                          component="span"
                          inherit
                          fw={500}
                          c={
                            'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'
                          }
                          fz={{ md: 'xl' }}
                        >
                          <NumberFormatter
                            value={
                              product.price.former +
                              product.kit.flyMore.price.former
                            }
                            thousandSeparator
                          />
                        </Text>{' '}
                        <Text component="sup" inherit fz={'xs'}>
                          (fly more kit)
                        </Text>
                      </Text>
                    </>
                  )}
                </Flex>

                <Stack fz={'sm'} gap={'xs'}>
                  <Text inherit>
                    Import Permits:{' '}
                    <Text component="span" inherit fw={500}>
                      Kshs.{' '}
                      <Text component="span" inherit tt={'uppercase'}>
                        3,000
                      </Text>{' '}
                      <Text component="sup" inherit fz={'xs'}>
                        (included in drone price)
                      </Text>
                    </Text>
                  </Text>

                  <Text inherit>
                    Facilitiation Fee:{' '}
                    <Text component="span" inherit fw={500}>
                      Kshs.{' '}
                      <Text component="span" inherit tt={'uppercase'}>
                        18,000
                      </Text>{' '}
                      <Text component="sup" inherit fz={'xs'}>
                        (included in drone price)
                      </Text>
                    </Text>
                  </Text>
                </Stack>

                <Stack gap={'xs'}>
                  {!product?.model && (
                    <Text>
                      Vendor:{' '}
                      <Text component="span" inherit fw={500} tt={'uppercase'}>
                        {product?.brand}
                      </Text>
                    </Text>
                  )}
                  <Text>
                    Make:{' '}
                    <Text component="span" inherit fw={500} tt={'capitalize'}>
                      {product?.make}
                    </Text>
                  </Text>
                  {product?.model && (
                    <Text>
                      Model:{' '}
                      <Text component="span" inherit fw={500} tt={'capitalize'}>
                        {product?.model}
                      </Text>
                    </Text>
                  )}
                </Stack>
              </Stack>

              <Divider
                label={
                  <Text
                    component="span"
                    inherit
                    c={
                      'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'
                    }
                  >
                    product overview
                  </Text>
                }
              />

              {typeof product?.specs.intro == 'string' ? (
                <Text>{product.specs.intro}</Text>
              ) : (
                <Grid>
                  {product?.specs.intro.map((spec, index) => (
                    <GridCol key={index} span={{ base: 12, md: 6 }}>
                      <Group gap={'xs'}>
                        <ThemeIcon
                          size={ICON_WRAPPER_SIZE / 1.5}
                          radius={'xl'}
                          color="sec.4"
                          c={'pri.9'}
                        >
                          <IconArrowRightDashed
                            size={ICON_SIZE / 1.5}
                            stroke={ICON_STROKE_WIDTH}
                          />
                        </ThemeIcon>

                        <Text fz={{ md: 'xs', lg: 'sm' }}>{spec}</Text>
                      </Group>
                    </GridCol>
                  ))}
                </Grid>
              )}

              <ModalContactShop>
                <Button
                  fullWidth
                  rightSection={
                    <IconChevronRight
                      size={ICON_SIZE}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  }
                >
                  Order the{' '}
                  {product?.title.short
                    ? product.title.short
                    : product?.title.long}
                </Button>
              </ModalContactShop>
            </Stack>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="drone-category-specs" padded shadowed>
        <Tabs defaultValue="specs" keepMounted={false}>
          <TabsList fw={500}>
            <Grid gutter={0} w={'100%'}>
              <GridCol span={{ base: 12, xs: 6, md: 'auto' }}>
                <TabsTab
                  w={'100%'}
                  value="specs"
                  leftSection={
                    <IconListDetails
                      size={ICON_SIZE}
                      stroke={ICON_STROKE_WIDTH}
                      color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
                    />
                  }
                >
                  Specifications
                </TabsTab>
              </GridCol>
              {product?.kit?.basic && (
                <GridCol span={{ base: 12, xs: 6, md: 'auto' }}>
                  <TabsTab
                    w={'100%'}
                    value="basic"
                    leftSection={
                      <IconCube
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                        color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
                      />
                    }
                  >
                    {product.kit.flyMore ? 'Basic Kit' : 'In the box'}
                  </TabsTab>
                </GridCol>
              )}
              {product?.kit?.flyMore && (
                <GridCol span={{ base: 12, xs: 6, md: 'auto' }}>
                  <TabsTab
                    w={'100%'}
                    value="flyMore"
                    leftSection={
                      <IconCubePlus
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                        color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
                      />
                    }
                  >
                    Fly More Kit
                  </TabsTab>
                </GridCol>
              )}
              {product?.accessories?.battery && (
                <GridCol span={{ base: 12, xs: 6, md: 'auto' }}>
                  <TabsTab
                    w={'100%'}
                    value="battery"
                    leftSection={
                      <IconBattery3
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                        color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
                      />
                    }
                  >
                    Intelligent Battery
                  </TabsTab>
                </GridCol>
              )}
              {product?.accessories?.other && (
                <GridCol span={{ base: 12, xs: 6, md: 'auto' }}>
                  <TabsTab
                    w={'100%'}
                    value="other"
                    leftSection={
                      <IconCirclePlus
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                        color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
                      />
                    }
                  >
                    Other
                  </TabsTab>
                </GridCol>
              )}
            </Grid>
          </TabsList>

          <TabsPanel value="specs">
            <LayoutSection id="drone-category-specs-list" padded>
              <Grid gutter={{ base: 12, md: 'md' }}>
                <GridCol span={{ md: 5 }}>
                  <Card withBorder shadow="xs" bg={'white'}>
                    <Stack w={'100%'}>
                      <Image
                        src={
                          product?.kit?.basic.image
                            ? product?.kit.basic.image
                            : product?.images[0]
                        }
                        alt={'Specs'}
                        loading="lazy"
                        component={NextImage}
                        width={1920}
                        height={1080}
                      />
                    </Stack>
                  </Card>
                </GridCol>

                <GridCol span={{ md: 1 }}>
                  <Center h={'100%'}>
                    <Divider orientation="vertical" />
                  </Center>
                </GridCol>

                <GridCol span={{ md: 6 }}>
                  <Stack gap={'xl'}>
                    <Title order={3} fz={{ md: 'xl' }}>
                      {product?.title.short} Aircraft Specifications
                    </Title>

                    <Grid gutter={'xs'}>
                      {product?.specs.aircraft.map((item, index) => (
                        <GridCol key={index} span={{ md: 12 }}>
                          <Group gap={'xs'}>
                            <ThemeIcon
                              size={ICON_WRAPPER_SIZE / 1.5}
                              radius={'xl'}
                              color="sec.4"
                              c={'pri.9'}
                              visibleFrom="xs"
                            >
                              <IconArrowRightDashed
                                size={ICON_SIZE / 1.5}
                                stroke={ICON_STROKE_WIDTH}
                              />
                            </ThemeIcon>

                            <Text fz={{ md: 'sm' }}>
                              <Text component="span" inherit fw={500}>
                                {item.label}
                              </Text>
                              : {item.desc}
                            </Text>
                          </Group>
                        </GridCol>
                      ))}
                    </Grid>
                  </Stack>
                </GridCol>
              </Grid>
            </LayoutSection>
          </TabsPanel>

          {product?.kit?.basic && (
            <TabsPanel value="basic">
              <LayoutSection id="drone-category-specs-contents" padded>
                <Grid>
                  <GridCol
                    span={{ base: 12, md: 6 }}
                    order={{ base: 3, md: 1 }}
                  >
                    <Grid>
                      {product?.kit.basic.contents.map((item, index) => (
                        <GridCol key={index} span={{ base: 6, sm: 4, md: 4 }}>
                          <Stack>
                            <Card withBorder shadow="xs" bg={'white'}>
                              <Stack w={'100%'}>
                                <Image
                                  src={item.image}
                                  alt={item.item}
                                  loading="lazy"
                                  component={NextImage}
                                  width={1920}
                                  height={1080}
                                />
                              </Stack>
                            </Card>

                            <Text fz={{ md: 'xs', lg: 'sm' }} ta={'center'}>
                              <Text component="span" inherit fw={500}>
                                x{item.qty}
                              </Text>{' '}
                              - {item.item}
                            </Text>
                          </Stack>
                        </GridCol>
                      ))}
                    </Grid>
                  </GridCol>

                  <GridCol span={{ md: 1 }} order={2} visibleFrom="md">
                    <Center h={'100%'}>
                      <Divider orientation="vertical" />
                    </Center>
                  </GridCol>

                  <GridCol span={12} order={2} hiddenFrom="md">
                    <Divider my={'xl'} />
                  </GridCol>

                  <GridCol
                    span={{ base: 12, md: 5 }}
                    order={{ base: 1, md: 3 }}
                  >
                    <Stack gap={'xl'} pos={'sticky'} top={64}>
                      <Title order={3} fz={{ md: 'xl' }}>
                        {product?.title.short}{' '}
                        {product?.kit?.flyMore ? 'Basic Kit' : 'Box Contents'}
                      </Title>

                      <Grid gutter={'xs'}>
                        {product?.kit.basic.contents.map((item, index) => (
                          <GridCol key={index} span={{ md: 12 }}>
                            <Text fz={{ md: 'sm' }}>
                              <Text component="span" inherit fw={500}>
                                x{item.qty}
                              </Text>{' '}
                              - {item.item}
                            </Text>
                          </GridCol>
                        ))}
                      </Grid>

                      <Text>
                        Kshs.{' '}
                        <Text
                          component="span"
                          inherit
                          fw={500}
                          c={
                            'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'
                          }
                          fz={{ md: 'xl' }}
                        >
                          {product.price ? (
                            <NumberFormatter
                              value={product.price.former}
                              thousandSeparator
                            />
                          ) : (
                            'TBD'
                          )}
                        </Text>
                      </Text>
                    </Stack>
                  </GridCol>
                </Grid>
              </LayoutSection>
            </TabsPanel>
          )}

          {product?.kit?.flyMore && (
            <TabsPanel value="flyMore">
              <LayoutSection id="drone-category-specs-flymore" padded>
                <Grid>
                  <GridCol
                    span={{ base: 12, md: 6 }}
                    order={{ base: 3, md: 1 }}
                  >
                    <Stack>
                      <Text
                        fw={'bold'}
                        variant="gradient"
                        gradient={{ from: 'pri.9', to: 'sec.3', deg: 135 }}
                      >
                        Everything in the basic kit plus:
                      </Text>

                      <Grid>
                        {product?.kit.flyMore.contents.map((item, index) => (
                          <GridCol key={index} span={{ base: 6, sm: 4, md: 4 }}>
                            <Stack>
                              <Card withBorder shadow="xs" bg={'white'}>
                                <Stack w={'100%'}>
                                  <Image
                                    src={item.image}
                                    alt={item.item}
                                    loading="lazy"
                                    component={NextImage}
                                    width={1920}
                                    height={1080}
                                  />
                                </Stack>
                              </Card>

                              <Text fz={{ md: 'xs', lg: 'sm' }} ta={'center'}>
                                <Text component="span" inherit fw={500}>
                                  x{item.qty}
                                </Text>{' '}
                                - {item.item}
                              </Text>
                            </Stack>
                          </GridCol>
                        ))}
                      </Grid>
                    </Stack>
                  </GridCol>

                  <GridCol span={{ md: 1 }} order={2} visibleFrom="md">
                    <Center h={'100%'}>
                      <Divider orientation="vertical" />
                    </Center>
                  </GridCol>

                  <GridCol span={12} order={2} hiddenFrom="md">
                    <Divider my={'xl'} />
                  </GridCol>

                  <GridCol
                    span={{ base: 12, md: 5 }}
                    order={{ base: 1, md: 3 }}
                  >
                    <Stack gap={'xl'} pos={'sticky'} top={64}>
                      <Title order={3} fz={{ md: 'xl' }}>
                        {product?.title.short} Fly More Kit
                      </Title>

                      <Grid gutter={'xs'}>
                        <GridCol span={{ md: 12 }}>
                          <Text
                            fw={'bold'}
                            variant="gradient"
                            gradient={{ from: 'pri.9', to: 'sec.3', deg: 135 }}
                          >
                            Everything in the basic kit plus:
                          </Text>
                        </GridCol>

                        {product?.kit.flyMore.contents.map((item, index) => (
                          <GridCol key={index} span={{ md: 12 }}>
                            <Text fz={{ md: 'sm' }}>
                              <Text component="span" inherit fw={500}>
                                x{item.qty}
                              </Text>{' '}
                              - {item.item}
                            </Text>
                          </GridCol>
                        ))}
                      </Grid>

                      <Text>
                        Kshs.{' '}
                        <Text
                          component="span"
                          inherit
                          fw={500}
                          c={
                            'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'
                          }
                          fz={{ md: 'xl' }}
                        >
                          {product.price && product?.kit.flyMore.price ? (
                            <NumberFormatter
                              value={
                                product.price.former +
                                product.kit.flyMore.price.former
                              }
                              thousandSeparator
                            />
                          ) : (
                            'TBD'
                          )}
                        </Text>
                      </Text>
                    </Stack>
                  </GridCol>
                </Grid>
              </LayoutSection>
            </TabsPanel>
          )}

          {product?.accessories?.battery && (
            <TabsPanel value="battery">
              <LayoutSection id="drone-category-specs-battery" padded>
                <Grid>
                  <GridCol span={{ md: 5 }}>
                    <CarouselImage data={product.accessories.battery.images} />
                  </GridCol>

                  <GridCol span={{ md: 1 }}>
                    <Center h={'100%'}>
                      <Divider orientation="vertical" />
                    </Center>
                  </GridCol>

                  <GridCol span={{ md: 6 }}>
                    <Stack gap={'xl'}>
                      <Title order={3} fz={{ md: 'xl' }}>
                        {product?.title.short} Intelligent Flight Battery
                      </Title>

                      <Grid gutter={'xs'}>
                        {product?.accessories?.battery?.specs.map(
                          (item, index) => (
                            <GridCol key={index} span={{ md: 12 }}>
                              <Group gap={'xs'}>
                                <ThemeIcon
                                  size={ICON_WRAPPER_SIZE / 1.5}
                                  radius={'xl'}
                                  color="sec.4"
                                  c={'pri.9'}
                                  visibleFrom="xs"
                                >
                                  <IconArrowRightDashed
                                    size={ICON_SIZE / 1.5}
                                    stroke={ICON_STROKE_WIDTH}
                                  />
                                </ThemeIcon>

                                <Text fz={{ md: 'sm' }}>
                                  <Text component="span" inherit fw={500}>
                                    {item.label}
                                  </Text>
                                  : {item.desc}
                                </Text>
                              </Group>
                            </GridCol>
                          )
                        )}
                      </Grid>

                      {product?.accessories.battery.price && (
                        <Text>
                          Kshs.{' '}
                          <Text
                            component="span"
                            inherit
                            fw={500}
                            c={
                              'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'
                            }
                            fz={{ md: 'xl' }}
                          >
                            <NumberFormatter
                              value={product?.accessories.battery.price.former}
                              thousandSeparator
                            />
                          </Text>
                        </Text>
                      )}
                    </Stack>
                  </GridCol>
                </Grid>
              </LayoutSection>
            </TabsPanel>
          )}

          {product?.accessories?.other && (
            <TabsPanel value="other">
              <LayoutSection id="drone-category-specs-other" padded>
                <Grid>
                  {product.accessories.other.map((accessory, index) => (
                    <GridCol
                      key={index}
                      span={{ base: 12, sm: 6, md: 4, lg: 3 }}
                    >
                      {accessory && <CardShopAccessory data={accessory} />}
                    </GridCol>
                  ))}
                </Grid>
              </LayoutSection>
            </TabsPanel>
          )}
        </Tabs>
      </LayoutSection>
    </LayoutPage>
  );
}
