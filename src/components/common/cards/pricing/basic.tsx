import React from 'react';
import {
  Badge,
  Button,
  Card,
  Group,
  List,
  ListItem,
  NumberFormatter,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import ModalContactTraining from '../../modals/contact/training';
import classes from './basic.module.scss';
import { typeUnit } from '@/types/static/course';
import { IconCheck } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';

export default function Basic({
  data,
  offset,
}: {
  data: typeUnit;
  offset?: boolean;
}) {
  return (
    <Card
      className={classes.card}
      withBorder
      bg={
        data.featured
          ? 'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'
          : 'white'
      }
      c={
        data.featured
          ? 'light-dark(var(--mantine-color-white),var(--mantine-color-white))'
          : undefined
      }
    >
      <Stack justify="space-between" h={'100%'}>
        <Stack gap={'xl'} mb={'xl'}>
          <Stack>
            {data.advanced && (
              <Group justify="end" opacity={offset ? 0 : 1}>
                <Badge
                  className={
                    data.featured ? classes.badgeFeatured : classes.badge
                  }
                >
                  Advanced Course
                </Badge>
              </Group>
            )}

            <Text fz={'md'} fw={500}>
              Kshs.{' '}
              <Text
                component="span"
                inherit
                fz={28}
                fw={'bold'}
                className={
                  data.featured ? classes.titleFeatured : classes.title
                }
              >
                <NumberFormatter
                  value={
                    data.price?.discount
                      ? data.price.discount
                      : data.price?.full
                  }
                  thousandSeparator
                />
                /-
              </Text>
              {data.price?.discount && (
                <Text
                  component="sup"
                  inherit
                  fw={'bold'}
                  td={'line-through'}
                  pos={'relative'}
                  bottom={12}
                  left={8}
                  c={data.featured ? undefined : 'dimmed'}
                >
                  <NumberFormatter value={data.price?.full} thousandSeparator />
                  /-
                </Text>
              )}
            </Text>

            <Group>
              <Title
                order={3}
                fw={'bold'}
                fz={{ base: 'lg', lg: 'xl' }}
                c={
                  data.featured
                    ? 'light-dark(var(--mantine-color-white),var(--mantine-color-white))'
                    : 'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'
                }
              >
                {data.title.full == 'Multi-Rotor'
                  ? 'Remote Pilot License (RPL)'
                  : data.title.full}
              </Title>
              {data.featured && (
                <Badge
                  radius={'sm'}
                  color={data.featured ? 'sec.4' : 'pri.9'}
                  c={data.featured ? 'pri.9' : undefined}
                >
                  Most Popular
                </Badge>
              )}
            </Group>

            {data.advanced && (
              <Text>
                For RPL hoders seeking to enhance their abilities and include{' '}
                {data.title.full} to their skillset.
              </Text>
            )}
          </Stack>

          <List
            className={classes.list}
            spacing={'xs'}
            c={
              data.featured
                ? 'light-dark(var(--mantine-color-white),var(--mantine-color-white))'
                : 'light-dark(var(--mantine-color-text),var(--mantine-color-text))'
            }
            icon={
              <ThemeIcon
                size={ICON_WRAPPER_SIZE / 1.5}
                radius={'xl'}
                color="sec.4"
                c={'pri.9'}
              >
                <IconCheck size={ICON_SIZE / 1.5} stroke={ICON_STROKE_WIDTH} />
              </ThemeIcon>
            }
          >
            {data.modules?.map((module, index) => (
              <ListItem key={index}>{module}</ListItem>
            ))}
          </List>
        </Stack>

        <ModalContactTraining>
          <Button
            color={data.featured ? 'sec.4' : 'pri'}
            c={data.featured ? 'pri.9' : 'white'}
            fullWidth
            size="xs"
          >
            Enroll For{' '}
            {data.title.full == 'Multi-Rotor'
              ? 'Remote Pilot License (RPL)'
              : data.title.full}
          </Button>
        </ModalContactTraining>
      </Stack>
    </Card>
  );
}
