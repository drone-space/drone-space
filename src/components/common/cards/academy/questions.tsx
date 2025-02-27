import {
  Badge,
  Card,
  Grid,
  GridCol,
  Group,
  NumberFormatter,
  Progress,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import React from 'react';
import ImageDefault from '@/components/common/images/default';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { ICON_SIZE, ICON_WRAPPER_SIZE } from '@/data/constants';

export default function Questions({
  props,
}: {
  props: {
    id: string;
    image: string;
    title: string;
    progress: number;
    inProgress: boolean;
    questions: string[];
  };
}) {
  return (
    <Card bg={'gray.0'} withBorder padding={'xl'}>
      <Grid gutter={'xl'}>
        <GridCol span={{ md: 4 }}>
          <ImageDefault
            src={props.image}
            alt={'Mission'}
            height={{ base: 240, xs: 320, md: 150 }}
            mode="grid"
            radius={'sm'}
          />
        </GridCol>

        <GridCol span={{ md: 8 }}>
          <Stack h={'100%'} justify="space-between">
            <Stack>
              <Title
                order={2}
                fz={'xl'}
                c={'var(--mantine-color-text)'}
                fw={500}
              >
                {props.title}
              </Title>

              {props.inProgress && (
                <Badge
                  variant="light"
                  size="xl"
                  fw={'normal'}
                  tt={'capitalize'}
                  leftSection={
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE / 1.5}
                      c={'white'}
                      radius={'xl'}
                    >
                      <IconPlayerPlayFilled size={ICON_SIZE / 1.75} />
                    </ThemeIcon>
                  }
                >
                  Continue Learning
                </Badge>
              )}
            </Stack>

            <Group justify="end">
              {props.inProgress ? (
                <Stack gap={'xs'}>
                  <Text fz={'sm'} fw={500}>
                    In progress (<NumberFormatter value={props.progress} />{' '}
                    viewed)
                  </Text>

                  <Progress value={props.progress} />
                </Stack>
              ) : props.progress === 100 ? (
                <Text fz={'sm'} fw={500}>
                  Completed
                </Text>
              ) : (
                <Text fz={'sm'}>Not Started</Text>
              )}
            </Group>
          </Stack>
        </GridCol>
      </Grid>
    </Card>
  );
}
