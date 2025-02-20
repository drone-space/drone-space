import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { typeMenuNavbar } from '@/types/components/menu';
import {
  Card,
  Center,
  Grid,
  GridCol,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import React from 'react';

export default function Menu({ props }: { props: typeMenuNavbar }) {
  return (
    <Card padding={'xs'} bg={'transparent'}>
      <Grid>
        <GridCol span={2}>
          {props.leftSection && (
            <Center>
              <ThemeIcon size={ICON_WRAPPER_SIZE + 4} color="sec.3">
                <props.leftSection
                  size={ICON_SIZE + 4}
                  stroke={ICON_STROKE_WIDTH}
                  color="var(--mantine-color-pri-9)"
                />
              </ThemeIcon>
            </Center>
          )}
        </GridCol>

        <GridCol span={10}>
          <Title order={2} fz={'sm'} lh={1}>
            {props.label}
          </Title>

          <Text mt={4} fz={'xs'}>
            {props.desc}
          </Text>
        </GridCol>
      </Grid>
    </Card>
  );
}
