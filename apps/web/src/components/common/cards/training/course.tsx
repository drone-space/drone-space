import {
  Anchor,
  Badge,
  Card,
  CardSection,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';
import classes from './course.module.scss';
import NextImage from 'next/image';
import { typeUnit } from '@/types/static/course';
import { linkify } from '@repo/utils/formatters';
import Link from 'next/link';

export default function Course({
  data,
  type,
}: {
  data: typeUnit;
  type: 'basic' | 'advanced';
}) {
  return (
    <Card className={classes.card}>
      <Stack>
        <CardSection>
          <Anchor
            component={Link}
            href={`/training/${type}/${linkify(data.title.full)}`}
          >
            <Stack className={classes.imageContainer}>
              <Image
                src={data.image}
                alt={'Gallery Image'}
                loading="lazy"
                title={data.title.full}
                component={NextImage}
                className={classes.image}
                width={1920}
                height={1080}
              />
            </Stack>
          </Anchor>
        </CardSection>

        <Stack gap={'xs'}>
          <Title order={3} fz={{ md: 'lg', lg: 'xl' }}>
            <Anchor
              component={Link}
              inherit
              href={`/training/${type}/${linkify(data.title.full)}`}
              className={classes.title}
            >
              {data.title.full}
            </Anchor>
          </Title>
          <Text lineClamp={5}>{data.desc}</Text>
        </Stack>
      </Stack>

      {data.available == false && (
        <Stack align="end" p={'md'} className={classes.overlay}>
          <Badge color="pri">Coming Soon</Badge>
        </Stack>
      )}
    </Card>
  );
}
