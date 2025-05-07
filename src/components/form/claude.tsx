'use client';

import React from 'react';

import { ActionIcon, Group, Textarea } from '@mantine/core';

import { IconArrowUp } from '@tabler/icons-react';
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
  props: { form: FormClaudeType; submitted: boolean; handleSubmit: () => void };
}) {
  return (
    <form onSubmit={props.form.onSubmit(props.handleSubmit)} noValidate>
      <Group wrap="nowrap" align="end" gap={'xs'}>
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

        <ActionIcon
          size={ICON_WRAPPER_SIZE / 1.25}
          type="submit"
          loading={props.submitted}
        >
          <IconArrowUp size={ICON_SIZE / 1.25} stroke={ICON_STROKE_WIDTH} />
        </ActionIcon>
      </Group>
    </form>
  );
}
