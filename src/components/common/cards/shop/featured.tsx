import { images } from '@/assets/images';
import products from '@/data/products';
import { linkify } from '@/utilities/formatters/string';
import {
  BackgroundImage,
  Badge,
  Button,
  Card,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import ModalContactShop from '../../modals/contact/shop';

export default function Featured() {
  const productFeatured = products.find((p: any) => p.featured);

  if (!productFeatured) return;

  return (
    <Card padding={0}>
      <BackgroundImage src={images.web.drone} radius="sm" p={'md'}>
        <Overlay opacity={0.3} style={{ zIndex: 0 }} />

        <Stack
          c={'var(--mantine-color-body)'}
          pos={'relative'}
          style={{ zIndex: 1 }}
        >
          <Badge
            color="var(--mantine-color-white)"
            variant={'light'}
            size="xs"
            lts={2}
          >
            Featured
          </Badge>

          <Title
            order={3}
            fz={'md'}
            fw={500}
            tt={'uppercase'}
            c={'var(--mantine-color-body)'}
          >
            {productFeatured.title.long}
          </Title>

          <Group>
            <ModalContactShop
              props={{
                initialValues: {
                  subject: `${productFeatured.title.short} Purchase Inquiry`,
                  message: `I'd like to order the ${productFeatured.title.long}.`,
                },
              }}
            >
              <Button color="sec.3" size={'compact-xs'}>
                Order Now
              </Button>
            </ModalContactShop>

            <Button
              size={'compact-xs'}
              variant="outline"
              color="white"
              component={Link}
              href={`/shop/drones/${productFeatured.category}/${linkify(productFeatured.title.long)}`}
            >
              Learn More
            </Button>
          </Group>
        </Stack>
      </BackgroundImage>
    </Card>
  );
}
