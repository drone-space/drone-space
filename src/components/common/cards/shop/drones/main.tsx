import {
  BackgroundImage,
  Button,
  Card,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';
import classes from './main.module.scss';
import { typeDrone } from '@/types/static/product';
import { linkify } from '@/utilities/formatters/string';
import Link from 'next/link';
import ModalContactShop from '@/components/common/modals/contact/shop';

export default function Main({ data }: { data: typeDrone }) {
  return (
    <Card className={classes.card} padding={0} pos={'relative'} h={'100%'}>
      <BackgroundImage
        src={
          data.images.find((i) => i.includes('skew')) ||
          data.images.find((i) => i.includes('front')) ||
          ''
        }
        radius="sm"
        pos={'relative'}
      >
        <Overlay opacity={0.2} zIndex={0} />

        <Stack
          p={'xl'}
          pos={'relative'}
          style={{ zIndex: 1 }}
          mih={{ base: 420, md: 540, lg: 600 }}
          c={'var(--mantine-color-text)'}
          ta={'center'}
          justify="space-between"
        >
          <div>
            <Title
              order={3}
              fz={{ lg: '2.5rem' }}
              tt={'uppercase'}
              c={'var(--mantine-color-black)'}
            >
              {data.title.short ? data.title.short : data.title.long}
            </Title>

            {data.tag && (
              <Text fw={500} fz={'sm'}>
                {data.tag}
              </Text>
            )}
          </div>

          <Stack>
            <Group justify="center" gap={'xs'}>
              <ModalContactShop
                props={{
                  initialValues: {
                    subject: `${data.title.short} Drone Purchase Inquiry`,
                  },
                }}
              >
                <Button radius={'xl'}>Inquire</Button>
              </ModalContactShop>

              <Button
                radius={'xl'}
                variant="outline"
                color="black"
                component={Link}
                href={`/shop/drones/${data.category}/${linkify(data.title.long)}`}
              >
                Learn More
              </Button>
            </Group>

            {data.desc && (
              <Text fz={'xs'} visibleFrom="md">
                {data.desc}
              </Text>
            )}
          </Stack>
        </Stack>
      </BackgroundImage>
    </Card>
  );
}
