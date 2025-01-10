'use client';

import React from 'react';

import { ActionIcon, Group, Stack, Textarea } from '@mantine/core';

import { IconSend } from '@tabler/icons-react';
import appData from '@/data/app';
import classes from './claude.module.scss';
import { getHotkeyHandler } from '@mantine/hooks';
import { useFormClaude } from '@/hooks/form/claude';

export default function Claude({
  query,
  children,
  regenerating,
  automatic,
}: {
  query?: string;
  chaff?: string;
  children?: React.ReactNode;
  regenerating?: boolean;
  automatic?: boolean;
}) {
  const { form, submitted, handleSubmit } = useFormClaude({
    query,
    regenerating,
    automatic,
  });

  return automatic || regenerating ? (
    <form onClick={form.onSubmit(handleSubmit)}>{children}</form>
  ) : (
    <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
      <Group
        // display={regenerating ? "none" : undefined}
        wrap="nowrap"
        gap={'xs'}
        align="end"
        className={classes.group}
      >
        <Textarea
          required
          placeholder={`Ask Hekima about ${appData.name.company}`}
          autosize
          minRows={1}
          maxRows={4}
          {...form.getInputProps('content')}
          onKeyDown={getHotkeyHandler([
            ['mod+Enter', form.onSubmit(handleSubmit)],
          ])}
          classNames={{ input: classes.input }}
          w={'100%'}
          disabled={submitted}
        />

        <Stack align="end" justify="end">
          <ActionIcon
            w={32}
            h={32}
            variant="light"
            type="submit"
            loading={submitted}
          >
            <IconSend size={24} stroke={2} />
          </ActionIcon>
        </Stack>
      </Group>
    </form>
  );
}
