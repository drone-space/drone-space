import React from 'react';

import Link from 'next/link';

import {
  Anchor,
  Badge,
  Card,
  CardSection,
  Group,
  Text,
  Title,
} from '@mantine/core';

import classes from './main.module.scss';
import { PostRelations } from '@/types/models/post';
import { linkify, processUrl } from '@/utilities/formatters/string';
import { getRegionalDate } from '@/utilities/formatters/date';
import ImageDefault from '@/components/common/images/default';
import { HOSTED_BASE_URL } from '@/data/constants';

export default function Main({ post }: { post: PostRelations }) {
  const path = `/blog/${linkify(post.title)}-${post.id}`;

  return (
    <Card className={classes.card} bg={'transparent'}>
      <CardSection
        style={{
          borderRadius: 'var(--mantine-radius-lg)',
          overflow: 'hidden',
        }}
      >
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
            height={200}
            mode="grid"
          />

          <div className={classes.overlay}>
            <Group>
              <Badge
                color="white"
                c={'var(--mantine-color-pri-8)'}
                radius={'xs'}
              >
                {getRegionalDate(post.created_at).date}
              </Badge>
            </Group>
          </div>
        </Anchor>
      </CardSection>

      <CardSection mt={'lg'}>
        <Title
          order={3}
          fz={{ base: 'xl' }}
          className={classes.title}
          lineClamp={1}
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

        <Text className={classes.desc} lineClamp={3} mt={'md'}>
          {post.excerpt}
        </Text>
      </CardSection>
    </Card>
  );
}
