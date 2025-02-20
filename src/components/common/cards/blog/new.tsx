import React from 'react';

import Link from 'next/link';

import {
  Anchor,
  Badge,
  Box,
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  NumberFormatter,
  Text,
  Title,
} from '@mantine/core';

import classes from './new.module.scss';

import { linkify, processUrl } from '@/utilities/formatters/string';
import { getRegionalDate } from '@/utilities/formatters/date';
import { PostRelations } from '@/types/models/post';
import { IconCircleFilled, IconMessageCircle } from '@tabler/icons-react';
import ImageDefault from '@/components/common/images/default';
import {
  HOSTED_BASE_URL,
  ICON_SIZE,
  ICON_STROKE_WIDTH,
} from '@/data/constants';

export default function New({ post }: { post: PostRelations }) {
  const path = `/resources/blog/${linkify(post.title)}-${post.id}`;

  return (
    <Card className={classes.card} withBorder bg={'transparent'}>
      <Grid gutter={0}>
        <GridCol span={{ base: 12, sm: 6 }}>
          <Anchor
            component={Link}
            underline="hover"
            inherit
            href={path}
            title={post.title}
            pos={'relative'}
          >
            <ImageDefault
              src={processUrl(post.image, HOSTED_BASE_URL.DRONE_SPACE)}
              alt={post.title}
              height={420}
              mode="grid"
            />

            <div className={classes.overlay}></div>
          </Anchor>
        </GridCol>

        <GridCol span={{ base: 12, sm: 6 }}>
          <Box
            px={{ base: 'lg', sm: 'xl' }}
            py={{ base: 'lg', md: 32 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Badge
              size="sm"
              color="blue"
              radius={'sm'}
              leftSection={<IconCircleFilled size={4} />}
            >
              latest
            </Badge>

            <Title
              mt={'md'}
              order={3}
              fz={28}
              lh={{ md: 1 }}
              className={classes.title}
            >
              <Anchor
                component={Link}
                underline="hover"
                inherit
                href={path}
                c={'inherit'}
                title={post.title}
              >
                {post.title}
              </Anchor>
            </Title>

            <Text mt={'md'} className={classes.desc} lineClamp={6}>
              {post.excerpt}
            </Text>

            <Divider mt={'lg'} />

            <Group mt={'md'} justify="space-between" fz={'sm'}>
              <Text inherit>{getRegionalDate(post.createdAt).date}</Text>

              {post._count.comments && (
                <Group gap={4}>
                  <IconMessageCircle
                    size={ICON_SIZE - 4}
                    stroke={ICON_STROKE_WIDTH}
                  />

                  <NumberFormatter
                    thousandSeparator
                    value={post._count.comments}
                  />
                </Group>
              )}
            </Group>
          </Box>
        </GridCol>
      </Grid>
    </Card>
  );
}
