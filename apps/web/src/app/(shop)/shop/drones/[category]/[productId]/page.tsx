import React from 'react';
import {
  Anchor,
  Alert,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Divider,
  Flex,
  Grid,
  GridCol,
  Group,
  NumberFormatter,
  Spoiler,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { LayoutPage } from '@repo/ui';
import { LayoutSection } from '@repo/ui';
import { ModalContactShop } from '@repo/ui';
import CardShopAccessory from '@web/ui/common/cards/shop/accessory';
import CarouselImage from '@web/ui/common/carousels/image';
import { typeParams } from '../layout';
import {
  IconArrowRightDashed,
  IconCirclePlus,
  IconCube,
  IconCubePlus,
  IconInfoCircle,
  IconTruckDelivery,
} from '@tabler/icons-react';
import classes from './drone.module.css';
import { linkify } from '@repo/utils';
import { ICON_SIZE, ICON_STROKE_WIDTH, ICON_WRAPPER_SIZE, SECTION_SPACING } from '@repo/constants';
import { ImageDefault } from '@repo/ui';
import { LayoutIntroPage } from '@repo/ui';
import { images } from '@repo/constants';
import classesBadge from './page.module.css';
import { products } from '@repo/constants';

export const dynamic = 'force-static';
// export const revalidate = 3600;

export async function generateStaticParams() {
  // const { items: productsFetched, error } = await productsGet();
  const { items: productsFetched }: { items: any } = { items: products };

  // if (error) throw error;
  if (productsFetched == null) return [];

  return productsFetched.map((p: any) => ({
    category: p.category,
    // productId: `${linkify(p.title.long)}-${p.id}`,
    productId: `${linkify(p.title.long)}`,
  }));
}

export default async function DroneDetail({ params }: { params: Promise<typeParams> }) {
  const id = (await params).productId;
  const product = products.find((p) => linkify(p.title.long) == id);
  const kitContents = mergeKitContents(
    product?.kit?.basic?.contents || [],
    product?.kit?.flyMore?.contents || [],
  );

  const isContactPrice =
    Boolean(product?.contactForPrice) || typeof product?.price?.former !== 'number';
  const isEquipment = product?.category === 'field-equipment' || isContactPrice;

  const hasBasicTab = Boolean(
    product?.kit?.basic &&
    (product.kit.basic.image || product.kit.basic.contents?.some((item) => Boolean(item.image))),
  );
  const hasFlyMoreTab = Boolean(product?.kit?.flyMore);
  const hasOtherAccessories = Boolean(product?.accessories?.other?.length);
  const showBottomTabs = hasBasicTab || hasFlyMoreTab || hasOtherAccessories;

  const defaultTab = hasBasicTab
    ? 'basic'
    : hasFlyMoreTab
      ? 'flyMore'
      : hasOtherAccessories
        ? 'other'
        : undefined;

  return (
    <LayoutPage>
      <LayoutIntroPage
        props={{
          path: isEquipment ? 'Shop Equipment' : `${product?.category} Drones`,
          title: product?.title.long || product?.title.short || 'Shop Item',
          bg: images.web.hero.light,
        }}
      />

      <LayoutSection id="drone-category-intro" padded bg={'var(--mantine-color-gray-1)'}>
        <Grid gap={{ base: 32, lg: 64 }}>
          <GridCol span={{ base: 12, sm: 5.5 }} className={classes.card}>
            <Box pos={'sticky'} top={64}>
              {product?.images && <CarouselImage data={product.images} />}
            </Box>
          </GridCol>

          <GridCol span={{ sm: 6.5 }}>
            <Group gap={'xs'} mt={'md'}>
              {product?.new && <Badge className={classesBadge.badge}>New Arrival</Badge>}

              {product?.available == false && <Badge color="yellow">Currently Unavailable</Badge>}

              {product?.kit?.flyMore?.price?.latter && (
                <Badge size={'md'} color={'red'}>
                  On Sale
                </Badge>
              )}
            </Group>

            <Stack gap={'xl'} mt={'md'}>
              <div>
                <Flex
                  direction={{ base: 'column', md: 'row' }}
                  align={{ md: 'center' }}
                  gap={{ base: 'xs', md: 'xl' }}
                  mt={'md'}
                >
                  {isContactPrice ? (
                    <Text
                      fw={600}
                      c={'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'}
                      fz={{ md: 'xl' }}
                    >
                      Contact Us
                    </Text>
                  ) : (
                    <>
                      <Text>
                        Kes.{' '}
                        <Text
                          component="span"
                          inherit
                          fw={500}
                          c={'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'}
                          fz={{ md: 'xl' }}
                        >
                          <NumberFormatter value={product?.price?.former || 0} thousandSeparator />
                        </Text>{' '}
                        {product?.kit?.flyMore && (
                          <Text component="sup" inherit fz={'xs'}>
                            (basic kit)
                          </Text>
                        )}
                      </Text>

                      {product?.kit?.flyMore && (
                        <>
                          <Divider orientation="vertical" visibleFrom="xs" color="sec.3" />

                          <Text>
                            Kes.{' '}
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
                                  (product?.price?.former || 0) +
                                  (product.kit.flyMore.price?.former || 0)
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
                    </>
                  )}
                </Flex>

                {product?.additionalCosts && (
                  <Group gap={5} mt={5} c={'dimmed'} align="start" wrap="nowrap">
                    <Group mt={4}>
                      <IconInfoCircle size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
                    </Group>

                    <Spoiler
                      maxHeight={0}
                      showLabel={
                        <Anchor fz={'sm'} c={'dimmed'} underline="hover" m={0}>
                          View additional costs
                        </Anchor>
                      }
                      hideLabel={
                        <Anchor fz={'sm'} c={'dimmed'} underline="hover" m={0}>
                          Hide
                        </Anchor>
                      }
                    >
                      <Text inherit fz={'sm'}>
                        Shipping Cost:{' '}
                        <Text component="span" inherit fz={'md'}>
                          Kes.{' '}
                          <Text component="span" inherit fw={500}>
                            <NumberFormatter
                              value={product.additionalCosts.shipping}
                              thousandSeparator
                            />
                          </Text>
                        </Text>
                      </Text>
                    </Spoiler>
                  </Group>
                )}
              </div>

              {!isEquipment && (
                <div>
                  <Text fz={'sm'}>
                    Import Permits:{' '}
                    <Text component="span" inherit fw={500}>
                      Kes.{' '}
                      <Text component="span" inherit tt={'uppercase'}>
                        3,000
                      </Text>{' '}
                      <Text component="sup" inherit fz={'xs'}>
                        (included in price)
                      </Text>
                    </Text>
                  </Text>

                  <Text fz={'sm'} mt={'xs'}>
                    Facilitiation Fee:{' '}
                    <Text component="span" inherit fw={500}>
                      Kes.{' '}
                      <Text component="span" inherit tt={'uppercase'}>
                        18,000
                      </Text>{' '}
                      <Text component="sup" inherit fz={'xs'}>
                        (included in price)
                      </Text>
                    </Text>
                  </Text>
                </div>
              )}

              <div>
                {!product?.model && (
                  <Text mt={'xs'}>
                    Vendor:{' '}
                    <Text component="span" inherit fw={500} tt={'uppercase'}>
                      {product?.brand}
                    </Text>
                  </Text>
                )}

                <Text mt={'xs'}>
                  Make:{' '}
                  <Text component="span" inherit fw={500} tt={'capitalize'}>
                    {product?.make}
                  </Text>
                </Text>

                {product?.model && (
                  <Text mt={'xs'}>
                    Model:{' '}
                    <Text component="span" inherit fw={500} tt={'capitalize'}>
                      {product?.model}
                    </Text>
                  </Text>
                )}
              </div>
            </Stack>

            {product?.specs?.desc && (
              <>
                <Divider mt={'xl'} />

                <Text mt={'xl'} fz={'sm'}>
                  {product.specs.desc}
                </Text>
              </>
            )}

            {product?.iframe && (
              <Box mt={'xl'}>
                <iframe
                  width="100%"
                  height="400"
                  src={product.iframe.src}
                  title={product.iframe.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{
                    borderWidth: 0,
                    borderRadius: 'var(--mantine-radius-lg)',
                    overflow: 'hidden',
                  }}
                ></iframe>
              </Box>
            )}

            <Divider
              label={
                <Text
                  component="span"
                  inherit
                  c={'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'}
                >
                  Specification Overview
                </Text>
              }
              labelPosition="left"
              mt={'xl'}
            />

            {typeof product?.specs?.intro == 'string' ? (
              <Text my={'xl'}>{product.specs.intro}</Text>
            ) : (
              <Grid my={'xl'}>
                {product?.specs?.intro &&
                  product.specs.intro.map((spec, index) => (
                    <GridCol key={index} span={{ base: 12 }}>
                      <Group gap={'xs'}>
                        <ThemeIcon size={ICON_WRAPPER_SIZE / 1.5} color="sec.3" c={'pri.9'}>
                          <IconArrowRightDashed size={ICON_SIZE / 1.5} stroke={ICON_STROKE_WIDTH} />
                        </ThemeIcon>

                        <Text fz={{ base: 'xs', lg: 'sm' }}>{spec}</Text>
                      </Group>
                    </GridCol>
                  ))}
              </Grid>
            )}

            {product?.kit?.basic &&
              (Boolean(product.kit.basic.contents?.length) ||
                Boolean(product.kit.basic.otherContents?.length)) && (
                <>
                  <Divider
                    label={
                      <Text
                        component="span"
                        inherit
                        c={'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'}
                      >
                        {product.kit.flyMore ? 'Basic Kit Contents' : 'In the Box'}
                      </Text>
                    }
                    labelPosition="left"
                    mt={'xl'}
                  />

                  <Grid my={'lg'} gap={'xs'}>
                    {product.kit.basic.contents?.map((item, index) => (
                      <GridCol key={index} span={{ base: 12 }}>
                        <Text fz={{ base: 'xs', lg: 'sm' }}>
                          <Text component="span" inherit fw={500}>
                            x{item.qty}
                          </Text>{' '}
                          - {item.item}
                        </Text>
                      </GridCol>
                    ))}

                    {product.kit.basic.otherContents?.map((oi) => (
                      <GridCol key={oi} span={{ base: 12 }}>
                        <Text fz={'sm'} c={'dimmed'}>
                          {oi}
                        </Text>
                      </GridCol>
                    ))}
                  </Grid>
                </>
              )}
          </GridCol>
        </Grid>

        <Group justify="center" mt={SECTION_SPACING / 2}>
          <ModalContactShop
            props={{
              initialValues: {
                subject: isEquipment
                  ? `${product?.title.short} Equipment Inquiry`
                  : `${product?.title.short} Drone Purchase Inquiry`,
                message: isEquipment
                  ? `Hello, I would like pricing and availability details for the ${product?.title.long}.`
                  : `I'd like to order the ${product?.title.long}.`,
              },
            }}
          >
            <Button
              miw={{ base: 240, sm: 480 }}
              color="pri"
              leftSection={<IconTruckDelivery size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
            >
              {isEquipment
                ? `Contact Us About ${product?.title.short || product?.title.long}`
                : `Order the ${product?.title.short ? product.title.short : product?.title.long}`}
            </Button>
          </ModalContactShop>
        </Group>
      </LayoutSection>

      {showBottomTabs && (
        <LayoutSection id="drone-category-specs" padded shadowed>
          <Tabs defaultValue={defaultTab}>
            <TabsList fw={500}>
              <Grid gap={0} w={'100%'}>
                {hasBasicTab && (
                  <GridCol
                    span={{
                      base: 6,
                      xs: hasFlyMoreTab || hasOtherAccessories ? 6 : 12,
                    }}
                  >
                    <TabsTab w={'100%'} value="basic">
                      <Stack align="center">
                        <IconCube
                          size={ICON_SIZE}
                          stroke={ICON_STROKE_WIDTH}
                          color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
                        />

                        {product?.kit?.flyMore ? 'Basic Kit' : 'In the box'}
                      </Stack>
                    </TabsTab>
                  </GridCol>
                )}

                {hasFlyMoreTab && (
                  <GridCol span={{ base: 6, xs: 6 }}>
                    <TabsTab w={'100%'} value="flyMore">
                      <Stack align="center">
                        <IconCubePlus
                          size={ICON_SIZE}
                          stroke={ICON_STROKE_WIDTH}
                          color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
                        />

                        <span>Fly More Kit</span>
                      </Stack>
                    </TabsTab>
                  </GridCol>
                )}

                {hasOtherAccessories && (
                  <GridCol
                    span={{
                      base: hasFlyMoreTab ? 12 : 6,
                      xs: 6,
                    }}
                  >
                    <TabsTab w={'100%'} value="other">
                      <Stack align="center">
                        <IconCubePlus
                          size={ICON_SIZE}
                          stroke={ICON_STROKE_WIDTH}
                          color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
                        />

                        <span>Accessories (Extras)</span>
                      </Stack>
                    </TabsTab>
                  </GridCol>
                )}
              </Grid>
            </TabsList>

            {hasBasicTab && product?.kit?.basic && (
              <TabsPanel value="basic">
                <LayoutSection
                  id="drone-category-specs-contents"
                  mt={SECTION_SPACING / 2}
                  containerized={false}
                >
                  <Grid>
                    <GridCol span={{ base: 12, md: 6 }} order={{ base: 3, md: 1 }}>
                      <Grid>
                        {product.kit.basic.contents.map((item, index) => (
                          <GridCol key={index} span={{ base: 6, sm: 4, md: 4 }}>
                            {Boolean(item.image) && (
                              <Card withBorder bg={'var(--mantine-color-body)'} padding={0}>
                                <ImageDefault
                                  src={item.image || ''}
                                  alt={item.item}
                                  loading="lazy"
                                  height={{
                                    base: 120,
                                    xs: 240,
                                    sm: 160,
                                    md: 180,
                                  }}
                                />
                              </Card>
                            )}

                            <Text fz={{ md: 'xs', lg: 'sm' }} ta={'center'} mt={'md'}>
                              <Text component="span" inherit fw={500}>
                                x{item.qty}
                              </Text>{' '}
                              - {item.item}
                            </Text>
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

                    <GridCol span={{ base: 12, md: 5 }} order={{ base: 1, md: 3 }}>
                      {product.kit.basic.image === null ? null : (
                        <Card withBorder bg={'var(--mantine-color-body)'} mb={64}>
                          <ImageDefault
                            src={
                              product.kit.basic.image
                                ? product.kit.basic.image
                                : product?.images?.[0] || ''
                            }
                            alt={`${product.title.long || ''} box contents`}
                            fit={'contain'}
                            loading="lazy"
                            height={{ base: 320, xs: 400, md: 320, lg: 360 }}
                          />
                        </Card>
                      )}

                      <Box pos={'sticky'} top={64}>
                        <Title order={3} fz={{ md: 'xl' }}>
                          {product?.title.short}{' '}
                          {product.kit.flyMore ? 'Basic Kit' : 'Box Contents'}
                        </Title>

                        <Grid gap={'xs'} mt={'xl'}>
                          {product.kit.basic.contents.map((item, index) => (
                            <GridCol key={index} span={{ md: 12 }}>
                              <Text fz={{ md: 'sm' }}>
                                <Text component="span" inherit fw={500}>
                                  x{item.qty}
                                </Text>{' '}
                                - {item.item}
                              </Text>
                            </GridCol>
                          ))}

                          {product.kit.basic.otherContents &&
                            product.kit.basic.otherContents.map((oi) => (
                              <GridCol key={oi} span={{ md: 12 }}>
                                <Text fz={{ md: 'sm' }}>{oi}</Text>
                              </GridCol>
                            ))}
                        </Grid>

                        <Text mt={'xl'}>
                          {isContactPrice ? (
                            <Text
                              component="span"
                              inherit
                              fw={500}
                              c={
                                'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'
                              }
                              fz={{ md: 'xl' }}
                            >
                              Contact Us
                            </Text>
                          ) : (
                            <>
                              Kes.{' '}
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
                                  value={product?.price?.former || 0}
                                  thousandSeparator
                                />
                              </Text>
                            </>
                          )}
                        </Text>

                        {product?.additionalCosts && (
                          <Group gap={5} mt={5} c={'dimmed'} align="start" wrap="nowrap">
                            <Group mt={2}>
                              <IconInfoCircle size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
                            </Group>

                            <Text inherit fz={'sm'}>
                              <Text component="span" inherit fw={500}>
                                Additional Costs:
                              </Text>
                              <br />
                              Shipping Cost:{' '}
                              <Text component="span" inherit fz={'md'}>
                                Kes.{' '}
                                <Text component="span" inherit fw={500}>
                                  <NumberFormatter
                                    value={product.additionalCosts.shipping}
                                    thousandSeparator
                                  />
                                </Text>
                              </Text>
                            </Text>
                          </Group>
                        )}
                      </Box>
                    </GridCol>
                  </Grid>
                </LayoutSection>
              </TabsPanel>
            )}

            {hasFlyMoreTab && product?.kit?.flyMore && (
              <TabsPanel value="flyMore">
                <LayoutSection
                  id="drone-category-specs-flymore"
                  mt={SECTION_SPACING / 2}
                  containerized={false}
                >
                  <Grid>
                    <GridCol span={{ base: 12, md: 6 }} order={{ base: 3, md: 1 }}>
                      <Grid>
                        {kitContents.map((item, index) => (
                          <GridCol key={index} span={{ base: 6, sm: 4, md: 4 }}>
                            {Boolean(item.image) && (
                              <Card withBorder bg={'var(--mantine-color-body)'}>
                                <ImageDefault
                                  src={item.image}
                                  alt={item.item}
                                  loading="lazy"
                                  height={{
                                    base: 120,
                                    xs: 240,
                                    sm: 160,
                                    md: 120,
                                    lg: 160,
                                  }}
                                />
                              </Card>
                            )}

                            <Text fz={{ md: 'xs', lg: 'sm' }} ta={'center'} mt={'xl'}>
                              <Text component="span" inherit fw={500}>
                                x{item.qty}
                              </Text>{' '}
                              - {item.item}
                            </Text>
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

                    <GridCol span={{ base: 12, md: 5 }} order={{ base: 1, md: 3 }}>
                      <Card withBorder bg={'var(--mantine-color-body)'} mb={64}>
                        <ImageDefault
                          src={
                            product.kit.flyMore.image
                              ? product.kit.flyMore.image
                              : product?.images?.[0] || ''
                          }
                          alt={'Specs'}
                          loading="lazy"
                          height={{ base: 320, xs: 400, md: 320, lg: 360 }}
                        />
                      </Card>

                      <Box pos={'sticky'} top={64}>
                        <Title order={3} fz={{ md: 'xl' }}>
                          {product?.title.short} Fly More Kit
                        </Title>

                        <Grid mt={'xl'} gap={'xs'}>
                          {kitContents.map((item, index) => (
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

                        {!isContactPrice && product?.price && (
                          <Text inherit mt={'xl'}>
                            Kes.{' '}
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
                                  (product.price.former || 0) +
                                  (product.kit.flyMore.price?.latter ||
                                    product.kit.flyMore.price?.former ||
                                    0)
                                }
                                thousandSeparator
                              />
                            </Text>{' '}
                            {product.kit.flyMore.price?.latter && (
                              <>
                                <Text component="sup" inherit fz={'sm'} td={'line-through'}>
                                  <NumberFormatter
                                    value={
                                      (product.price.former || 0) +
                                      (product.kit.flyMore.price?.former || 0)
                                    }
                                    thousandSeparator
                                  />{' '}
                                </Text>{' '}
                                <Text component="span" inherit fz={'sm'} c={'green'} fw={500}>
                                  (
                                  {(
                                    (1 -
                                      ((product.price.former || 0) +
                                        (product.kit.flyMore.price?.latter || 0)) /
                                        ((product.price.former || 0) +
                                          (product.kit.flyMore.price?.former || 0))) *
                                    100
                                  ).toFixed(1)}
                                  % off )
                                </Text>
                              </>
                            )}
                          </Text>
                        )}
                      </Box>
                    </GridCol>
                  </Grid>
                </LayoutSection>
              </TabsPanel>
            )}

            {hasOtherAccessories && (
              <TabsPanel value="other">
                <LayoutSection
                  id="drone-category-specs-other"
                  mt={SECTION_SPACING / 2}
                  containerized={false}
                >
                  <Alert
                    variant="light"
                    color="blue"
                    title="Note"
                    icon={<IconInfoCircle size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
                  >
                    The following accessories/extras are not included in the {product?.title.short}{' '}
                    box by default. They come separately and are therefore{' '}
                    <Text component={'span'} inherit fw={500}>
                      charged separately
                    </Text>
                    . The prices for each are incuded below.
                  </Alert>

                  <Grid mt={'xl'}>
                    {product?.accessories?.other?.map((accessory, index) => (
                      <GridCol key={index} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                        {accessory && <CardShopAccessory data={accessory} />}
                      </GridCol>
                    ))}
                  </Grid>
                </LayoutSection>
              </TabsPanel>
            )}
          </Tabs>
        </LayoutSection>
      )}
    </LayoutPage>
  );
}

function mergeKitContents(basicContents: any[], flyMoreContents: any[]) {
  const mergedMap = new Map();

  const allContents = basicContents.concat(flyMoreContents);

  allContents.forEach(({ qty, item, image }) => {
    if (mergedMap.has(item)) {
      const existing = mergedMap.get(item);
      mergedMap.set(item, {
        ...existing,
        qty: existing.qty + qty,
      });
    } else {
      mergedMap.set(item, { qty, item, image });
    }
  });

  return Array.from(mergedMap.values());
}
