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
  SECTION_SPACING,
} from '@/data/constants';

export default function Basic({
  data,
  offset,
}: {
  data: typeUnit;
  offset?: boolean;
}) {
  const courseTitle =
    data.title.full == 'Multi-Rotor' ? 'RPL' : data.title.full;

  return (
    <Card
      className={classes.card}
      withBorder
      bg={
        data.featured
          ? 'light-dark(var(--mantine-color-pri-8),var(--mantine-color-pri-8))'
          : 'white'
      }
      c={
        data.featured
          ? 'light-dark(var(--mantine-color-white),var(--mantine-color-white))'
          : undefined
      }
      p={{
        base: 'md',
        xs: SECTION_SPACING / 3,
        sm: 'md',
        lg: SECTION_SPACING / 3,
      }}
    >
      <Stack justify="space-between" h={'100%'}>
        <Stack>
          {data.advanced && (
            <Group justify="end" opacity={offset ? 0 : 1}>
              <Badge color="sec.3" c="pri.8">
                Advanced Course
              </Badge>
            </Group>
          )}

          <Text fz={'md'} fw={500} mb={'md'}>
            Kshs.{' '}
            <Text component="span" inherit fz={28} fw={'bold'}>
              <NumberFormatter
                value={
                  data.price?.discount ? data.price.discount : data.price?.full
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

          <Title
            order={3}
            fw={'bold'}
            fz={{ base: 'lg', lg: 'xl' }}
            c={
              data.featured
                ? 'light-dark(var(--mantine-color-white),var(--mantine-color-white))'
                : 'light-dark(var(--mantine-color-pri-8),var(--mantine-color-pri-8))'
            }
          >
            {data.title.full == 'Multi-Rotor'
              ? 'Remote Pilot License (RPL)'
              : data.title.full}
          </Title>

          {data.featured && (
            <>
              <Text component="span" fz={'xs'} c={'sec.3'} mb={'md'}>
                Exclusive of Medical
              </Text>
            </>
          )}

          {data.title.full == 'Radio Telephony' && (
            <>
              <Text component="span" inherit fz={'xs'} mb={'md'}>
                Exclusive of Exam, English Proficiency
                <br /> and License Fees
              </Text>
            </>
          )}

          {data.advanced && (
            <>
              <Text w={{ md: '75%' }} fz={'sm'} mb={'md'}>
                For RPL hoders seeking to enhance their abilities and include{' '}
                {data.title.full} to their skillset.
              </Text>
            </>
          )}

          <List
            className={classes.list}
            mb={'xl'}
            mt={'sm'}
            spacing={'xs'}
            c={
              data.featured
                ? 'light-dark(var(--mantine-color-white),var(--mantine-color-white))'
                : 'light-dark(var(--mantine-color-text),var(--mantine-color-text))'
            }
            icon={
              <ThemeIcon
                size={ICON_WRAPPER_SIZE / 1.5}
                color="sec.3"
                c={'pri.8'}
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

        <ModalContactTraining
          props={{
            initialValues: {
              subject: `${courseTitle} Training Inquiry`,
              message: `I'm interested in enrolling in your ${courseTitle} drone training program.`,
            },
          }}
        >
          <Button
            color={data.featured ? 'sec.3' : 'pri'}
            c={data.featured ? 'pri.8' : 'white'}
            fullWidth
            size="sm"
          >
            Enroll For {courseTitle}
          </Button>
        </ModalContactTraining>
      </Stack>
    </Card>
  );
}
