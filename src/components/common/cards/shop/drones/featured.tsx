import React from 'react';
import classes from './featured.module.scss';
import {
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  GridCol,
  Text,
  Title,
} from '@mantine/core';
import { typeDrone } from '@/types/static/product';
import { IconChevronRight } from '@tabler/icons-react';
import ModalContactShop from '@/components/common/modals/contact/shop';
import Link from 'next/link';
import { linkify } from '@/utilities/formatters/string';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import ImageDefault from '@/components/common/images/default';

export default function Featured({ data }: { data: typeDrone }) {
  return (
    <Card className={classes.card} bg={'white'}>
      <Grid align="center">
        <GridCol span={{ sm: 6 }}>
          <Flex
            direction={'column'}
            gap={'xl'}
            align={{ base: 'center', sm: 'start' }}
          >
            <Badge ml={{ sm: 'md' }}>Featured Drone</Badge>

            <Box p={{ sm: 'md' }}>
              <Text
                ta={{ base: 'center', sm: 'start' }}
                component="span"
                inherit
                fz={'xs'}
                className={classes.miniTitle}
                mt={'xs'}
              >
                Your Personal Videographer
              </Text>

              <Title
                ta={{ base: 'center', sm: 'start' }}
                order={2}
                className={classes.title}
                mt={'xs'}
              >
                {data.title.long}
              </Title>

              <Text
                ta={{ base: 'center', sm: 'start' }}
                component="span"
                inherit
                fz={'lg'}
                className={classes.slogan}
                mt={'xs'}
              >
                Rise and Shine
              </Text>
            </Box>

            <Flex
              direction={{ base: 'column', sm: 'row' }}
              align={'center'}
              gap={'xs'}
            >
              <Button
                variant="transparent"
                rightSection={
                  <IconChevronRight
                    size={ICON_SIZE}
                    stroke={ICON_STROKE_WIDTH}
                  />
                }
                component={Link}
                href={`/shop/drones/${data.category}/${linkify(data.title.long)}`}
              >
                Learn More
              </Button>
              <ModalContactShop>
                <Button
                  variant="transparent"
                  rightSection={
                    <IconChevronRight
                      size={ICON_SIZE}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  }
                >
                  Inquire
                </Button>
              </ModalContactShop>
            </Flex>
          </Flex>
        </GridCol>
        <GridCol span={{ sm: 6 }}>
          <Anchor
            component={Link}
            href={`/shop/drones/${data.category}/${linkify(data.title.long)}`}
          >
            <ImageDefault
              src={
                data.images.find((i) => i.includes('front')) || data.images[0]
              }
              alt={data.title.long}
              loading="lazy"
              height={{ base: 240, sm: 280 }}
            />
          </Anchor>
        </GridCol>
      </Grid>
    </Card>
  );
}
