import React from 'react';
import { EmailGet } from '@repo/types/models/email';
import {
  ActionIcon,
  Badge,
  Card,
  Group,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import {
  IconCornerUpLeft,
  IconCornerUpRight,
  IconDotsVertical,
  IconFlame,
  IconPaperclip,
  IconTrash,
} from '@tabler/icons-react';
import MenuEmailActions from '../menus/email/actions';
import classes from './email.module.scss';

export default function Email({ props }: { props: EmailGet }) {
  return (
    <Card
      padding={0}
      pl={'xs'}
      pr={5}
      py={5}
      radius={'md'}
      withBorder
      style={{ borderWidth: 2, cursor: 'pointer' }}
      className={classes.card}
    >
      <Stack gap={0}>
        <Group justify="space-between" gap={'xs'} wrap="nowrap">
          <Tooltip label={`${props.from_name} ${`<${props.from_email}>`}`}>
            <Title
              order={3}
              fz={'sm'}
              c={'var(--mantine-color-text)'}
              lineClamp={1}
            >
              {props.from_name} {`<${props.from_email}>`}
            </Title>
          </Tooltip>

          <Group gap={'xs'} justify="end">
            <MenuEmailActions>
              <Tooltip label={'More actions'}>
                <Group>
                  <ActionIcon size={ICON_WRAPPER_SIZE - 4} variant="default">
                    <IconDotsVertical
                      size={ICON_SIZE - 4}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  </ActionIcon>
                </Group>
              </Tooltip>
            </MenuEmailActions>
          </Group>
        </Group>

        <Group>
          <Tooltip label={props.subject}>
            <Text lineClamp={1} fz={'sm'}>
              {props.subject}
            </Text>
          </Tooltip>
        </Group>

        <Group justify="space-between" mt={'xs'}>
          <Group>
            <Tooltip label={`Attachments: ${1}`}>
              <Badge
                variant="default"
                size="sm"
                px={5}
                h={22.4}
                leftSection={
                  <IconPaperclip
                    size={ICON_SIZE - 4}
                    stroke={ICON_STROKE_WIDTH}
                  />
                }
              >
                1
              </Badge>
            </Tooltip>
          </Group>

          <Group justify="end" gap={5}>
            <Tooltip label={'Reply'}>
              <Group>
                <ActionIcon
                  size={ICON_WRAPPER_SIZE - 4}
                  fz={'xs'}
                  variant="default"
                >
                  <IconCornerUpLeft
                    size={ICON_SIZE - 4}
                    stroke={ICON_STROKE_WIDTH}
                  />
                </ActionIcon>
              </Group>
            </Tooltip>

            <Tooltip label={'Forward'}>
              <Group>
                <ActionIcon
                  size={ICON_WRAPPER_SIZE - 4}
                  fz={'xs'}
                  variant="default"
                >
                  <IconCornerUpRight
                    size={ICON_SIZE - 4}
                    stroke={ICON_STROKE_WIDTH}
                  />
                </ActionIcon>
              </Group>
            </Tooltip>

            <Tooltip label={'Junk'}>
              <Group>
                <ActionIcon
                  size={ICON_WRAPPER_SIZE - 4}
                  fz={'xs'}
                  variant="default"
                >
                  <IconFlame size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
                </ActionIcon>
              </Group>
            </Tooltip>

            <Tooltip label={'Delete'}>
              <Group>
                <ActionIcon
                  size={ICON_WRAPPER_SIZE - 4}
                  fz={'xs'}
                  variant="default"
                >
                  <IconTrash size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
                </ActionIcon>
              </Group>
            </Tooltip>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
}
