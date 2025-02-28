import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import {
  ActionIcon,
  Card,
  CardSection,
  Divider,
  Group,
  Title,
} from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import React from 'react';

export default function Academy({
  children,
  props,
}: {
  children: React.ReactNode;
  props: {
    title: string;
    footer: React.ReactNode;
    closeFunction: () => void;
  };
}) {
  return (
    <Card>
      <CardSection bg={'var(--mantine-color-gray-1)'} p={padding}>
        <Group justify="space-between" align="start">
          <Title order={3} c={'var(--mantine-color-text)'} fw={'normal'}>
            {props.title}
          </Title>

          <ActionIcon
            size={ICON_WRAPPER_SIZE}
            variant="transparent"
            color="gray"
            onClick={props.closeFunction}
            aria-label="Close Modal"
          >
            <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          </ActionIcon>
        </Group>
      </CardSection>

      <CardSection p={padding}>{children}</CardSection>

      <CardSection>
        <Divider />
      </CardSection>

      <CardSection p={padding}>{props.footer}</CardSection>
    </Card>
  );
}

const padding = 'lg';
