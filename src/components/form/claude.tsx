'use client';

import React from 'react';

import { ActionIcon, Group, Stack, Textarea, Tooltip } from '@mantine/core';

import { IconBrandTelegram, IconMicrophone } from '@tabler/icons-react';
import appData from '@/data/app';
import classes from './claude.module.scss';
import { getHotkeyHandler } from '@mantine/hooks';
import { FormClaudeType } from '@/hooks/form/claude';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';

export default function Claude({
  props,
}: {
  props: {
    form: FormClaudeType;
    submitted: boolean;
    handleSubmit: () => void;
    listening: boolean;
    startListening: () => void;
  };
}) {
  return (
    <form onSubmit={props.form.onSubmit(props.handleSubmit)} noValidate>
      <Stack gap={'xs'}>
        <Textarea
          required
          placeholder={`Ask Hekima about ${appData.name.company}`}
          autosize
          minRows={2}
          maxRows={4}
          {...props.form.getInputProps('content')}
          onKeyDown={getHotkeyHandler([
            [
              'shift + Enter',
              () =>
                props.form.setFieldValue(
                  'content',
                  props.form.values.content + '\n'
                ),
            ],
            ['Enter', props.form.onSubmit(props.handleSubmit)],
          ])}
          data-autofocus={true}
          classNames={classes}
          w={'100%'}
          disabled={props.submitted}
        />

        <Group justify="end">
          <Group gap={'xs'}>
            {props.form.values.content.length > 0 && !props.listening ? (
              <ActionIcon
                size={ICON_WRAPPER_SIZE / 1.2}
                variant="subtle"
                type="submit"
                loading={props.submitted}
              >
                <IconBrandTelegram
                  size={ICON_WRAPPER_SIZE / 1.2}
                  stroke={ICON_STROKE_WIDTH}
                />
              </ActionIcon>
            ) : (
              <Tooltip label="Dictate" color="pri" withArrow fz={'xs'}>
                <ActionIcon
                  size={ICON_WRAPPER_SIZE / 1.2}
                  variant="subtle"
                  onClick={props.startListening}
                >
                  <IconMicrophone
                    size={ICON_SIZE / 1.2}
                    stroke={ICON_STROKE_WIDTH}
                  />
                </ActionIcon>
              </Tooltip>
            )}
          </Group>
        </Group>
      </Stack>
    </form>
  );
}

{
  /* <Tooltip label="Stop voice mode" color="pri" withArrow fz={'xs'}>
                <ActionIcon
                  size={ICON_WRAPPER_SIZE / 1.2}
                  variant="subtle"
                  onClick={() => stopListening()}
                  radius={'xl'}
                  style={{ borderWidth: ICON_STROKE_WIDTH }}
                >
                  <IconSquareFilled
                    size={ICON_SIZE / 1.7}
                    stroke={ICON_STROKE_WIDTH}
                  />
                </ActionIcon>
              </Tooltip> */
}
