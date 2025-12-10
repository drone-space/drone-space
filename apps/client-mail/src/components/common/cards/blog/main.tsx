import React from 'react';
import { Badge, Box, Card, Group, Text, Title } from '@mantine/core';
import classes from './main.module.scss';
import { PostRelations } from '@repo/types/models/post';
import { linkify, processUrl } from '@repo/utilities/url';
import { getRegionalDate } from '@repo/utilities/date-time';
import ImageDefault from '@repo/components/common/images/default';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import NextLink from '@repo/components/common/anchor/next-link';

export default function Main({ post }: { post: PostRelations }) {
  const path = `/blog/${linkify(post.title)}-${post.id}`;

  return (
    <Card className={classes.card} h={'100%'}>
      <div
        style={{
          borderRadius: 'var(--mantine-radius-lg)',
          overflow: 'hidden',
        }}
      >
        <NextLink underline="hover" inherit href={path} pos={'relative'}>
          <ImageDefault
            src={processUrl(post.image, PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT)}
            alt={post.title}
            height={200}
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
      </div>

      <Box mt={'lg'}>
        <Title
          order={3}
          fz={{ base: 'xl' }}
          className={classes.title}
          lineClamp={2}
        >
          <NextLink underline="hover" inherit href={path} c={'inherit'}>
            {post.title}
          </NextLink>
        </Title>

        <Text className={classes.desc} lineClamp={3} mt={'md'}>
          {post.excerpt}
        </Text>
      </Box>
    </Card>
  );
}
