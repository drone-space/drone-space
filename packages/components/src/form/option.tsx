'use client';

import React, { useEffect, useState } from 'react';
import { useFormOption } from '@repo/hooks/form/option';
import {
  Button,
  Checkbox,
  Grid,
  GridCol,
  Group,
  Switch,
  Textarea,
  TextInput,
} from '@mantine/core';
import { OptionGet } from '@repo/types/models/option';
import { useStoreOption } from '@repo/libraries/zustand/stores/option';

export default function Option({
  props,
}: {
  props?: {
    questionId?: string;
    optionId?: string;
    onSubmit?: () => void;
    onCancel?: () => void;
  };
}) {
  const options = useStoreOption((s) => s.options);
  const option = options?.find((qi) => qi.id == props?.optionId);

  const { form, handleSubmit, submitted } = useFormOption({
    defaultValues: { ...option, question_id: props?.questionId },
  });

  return (
    <form
      noValidate
      onSubmit={form.onSubmit(() => {
        handleSubmit();
        if (props?.onSubmit) props?.onSubmit();
      })}
    >
      <Grid>
        <GridCol span={{ base: 12 }}>
          <Textarea
            required
            label="Option Content"
            placeholder="Option content"
            key={form.key('content')}
            {...form.getInputProps('content')}
            data-autofocus
            autosize
            minRows={3}
            maxRows={8}
          />
        </GridCol>

        <GridCol span={{ base: 12 }}>
          <Checkbox
            label={`This is a correct option.`}
            key={form.key('correct')}
            {...form.getInputProps('correct', { type: 'checkbox' })}
          />
        </GridCol>

        <GridCol span={{ base: 12 }}>
          <Group>
            <Button
              disabled={submitted}
              color="gray"
              variant="light"
              size="xs"
              onClick={() => {
                if (props?.onSubmit) props.onSubmit();
              }}
            >
              Cancel
            </Button>

            <Button type="submit" loading={submitted} size="xs">
              {!!option?.updated_at ? 'Update' : 'Create'}
            </Button>
          </Group>
        </GridCol>
      </Grid>
    </form>
  );
}
