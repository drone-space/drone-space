import React from 'react';
import {
  Badge,
  Button,
  Card,
  Divider,
  Group,
  List,
  ListItem,
  NumberFormatter,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import classes from './basic.module.scss';
import { typeUnit } from '@/types/course';
import { IconCheck } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import ModalContactTraining from '@repo/components/common/modals/contact/training';

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
          ? 'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'
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
              <Badge color="sec.3" c="pri.9">
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
                : 'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'
            }
          >
            {data.title.full == 'Multi-Rotor'
              ? 'Remote Pilot License (RPL)'
              : data.title.full}
          </Title>

          {data.featured && (
            <>
              <Stack gap={'xs'} fz={'sm'} c={'dimmed'} maw={{ md: '80%' }}>
                <Text inherit component="span">
                  Radiotelephony is now part of RPL and therefore no longer
                  offered separately.
                </Text>

                <div>
                  <Text inherit component="span">
                    RPL applicants are now required to undertake:
                  </Text>
                  <List size={'sm'}>
                    <ListItem>an English Proficiency exam and</ListItem>
                    <ListItem>an Oral Radiotelephony exam</ListItem>
                  </List>
                </div>

                <div>
                  <Text inherit component="span">
                    The price above is exclusive of medical and exam fees:
                  </Text>
                  <List size={'sm'}>
                    <ListItem>
                      Medical fees:{' '}
                      <Text inherit component="span" fw={500} c={'sec.3'}>
                        <NumberFormatter
                          value={10600}
                          thousandSeparator
                          prefix="Kes. "
                        />
                      </Text>
                    </ListItem>
                    <ListItem>
                      RPL exam fees:{' '}
                      <Text inherit component="span" fw={500} c={'sec.3'}>
                        <NumberFormatter
                          value={4000}
                          thousandSeparator
                          prefix="Kes. "
                        />
                      </Text>{' '}
                      (paid to KCAA)
                    </ListItem>
                    <ListItem>
                      Radiotelephony exam fees:{' '}
                      <Text inherit component="span" fw={500} c={'sec.3'}>
                        <NumberFormatter
                          value={5100}
                          thousandSeparator
                          prefix="Kes. "
                        />
                      </Text>{' '}
                      (paid to KCAA)
                    </ListItem>
                  </List>
                </div>
              </Stack>

              <Divider color="dimmed" />
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
              <Text w={{ md: '75%' }} fz={'sm'} mb={'md'} c={'dimmed'}>
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

        <ModalContactTraining
          props={{
            initialValues: {
              subject: `${courseTitle} Course Inquiry`,
              message: `I'm interested in enrolling in your ${courseTitle} drone training program.`,
            },
          }}
        >
          <Button
            color={data.featured ? 'sec.3' : 'pri'}
            c={data.featured ? 'pri.9' : 'white'}
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
