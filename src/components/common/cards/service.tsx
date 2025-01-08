import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  Anchor,
  Card,
  CardSection,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import classes from './service.module.scss';
import typeService from '@/types/static/service';
import { linkify } from '@/utilities/formatters/string';

export default function Service({ data }: { data: typeService }) {
  return (
    <Card className={classes.card}>
      <CardSection>
        <Anchor
          inherit
          component={Link}
          href={`/services/${linkify(data.title)}`}
        >
          <Stack justify="center" className={classes.imageContainer}>
            <Image
              src={data.image}
              alt={data.title}
              loading="lazy"
              radius={'sm'}
              component={NextImage}
              width={1920}
              height={1080}
              className={classes.image}
            />
          </Stack>
        </Anchor>
      </CardSection>

      <Stack gap={'xs'} align="start" p={'md'}>
        <Title order={3} fz="lg" className={classes.title}>
          <Anchor
            inherit
            component={Link}
            href={`/services/${linkify(data.title)}`}
          >
            {data.title}
          </Anchor>
        </Title>
        <Text fz="sm" lineClamp={3}>
          {data.desc.intro[0]}
        </Text>
      </Stack>
    </Card>
  );
}
