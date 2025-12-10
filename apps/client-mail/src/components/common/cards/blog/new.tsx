import React from 'react';
import {
  Badge,
  Box,
  Card,
  Grid,
  GridCol,
  Group,
  Text,
  Title,
} from '@mantine/core';
import { linkify, processUrl } from '@repo/utilities/url';
import { getRegionalDate } from '@repo/utilities/date-time';
import { PostRelations } from '@repo/types/models/post';
import ImageDefault from '@repo/components/common/images/default';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import classes from './new.module.scss';
import NextLink from '@repo/components/common/anchor/next-link';

export default function New({ post }: { post: PostRelations }) {
  const path = `/blog/${linkify(post.title)}-${post.id}`;

  return (
    <Card className={classes.card} h={'100%'}>
      <Grid gutter={0}>
        <GridCol span={{ base: 12, sm: 6 }}>
          <NextLink underline="hover" inherit href={path} pos={'relative'}>
            <ImageDefault
              src={processUrl(
                post.image,
                PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT
              )}
              alt={post.title}
              height={360}
              mode="grid"
            />

            <div className={classes.overlay}>
              <Group>
                <Badge color="white" c={'var(--mantine-color-pri-8)'}>
                  {getRegionalDate(post.created_at).date}
                </Badge>
              </Group>
            </div>
          </NextLink>
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
              <NextLink underline="hover" inherit href={path} c={'inherit'}>
                {post.title}
              </NextLink>
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
