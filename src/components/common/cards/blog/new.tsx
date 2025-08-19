import React from 'react';

import Link from 'next/link';

import {
  Anchor,
  Badge,
  Box,
  Card,
  Grid,
  GridCol,
  Group,
  Text,
  Title,
} from '@mantine/core';

import classes from './new.module.scss';

import { linkify, processUrl } from '@/utilities/formatters/string';
import { getRegionalDate } from '@/utilities/formatters/date';
import { PostRelations } from '@/types/models/post';
import ImageDefault from '@/components/common/images/default';
import { HOSTED_BASE_URL } from '@/data/constants';

export default function New({ post }: { post: PostRelations }) {
  const path = `/blog/${linkify(post.title)}-${post.id}`;

  return (
    <Card className={classes.card} withBorder>
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
              src={processUrl(post.image, HOSTED_BASE_URL.DEFAULT)}
              alt={post.title}
              height={360}
              mode="grid"
            />

            <div className={classes.overlay}>
              <Group>
                <Badge
                  color="white"
                  c={'var(--mantine-color-pri-7)'}
                  radius={'xs'}
                >
                  {getRegionalDate(post.created_at).date}
                </Badge>
              </Group>
            </div>
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
          </Box>
        </GridCol>
      </Grid>
    </Card>
  );
}
