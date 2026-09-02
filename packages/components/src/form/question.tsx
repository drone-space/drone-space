'use client';

import React, { useEffect, useState } from 'react';
import { useFormQuestion } from '@repo/hooks/form/question';
import {
  Button,
  Checkbox,
  Grid,
  GridCol,
  Group,
  Textarea,
  TextInput,
} from '@mantine/core';
import { QuestionGet } from '@repo/types/models/question';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';

export default function Question({
  props,
}: {
  props?: {
    quizId?: string;
    question?: QuestionGet;
    onSubmit?: () => void;
    onCancel?: () => void;
    setAddFromExisting?: React.Dispatch<React.SetStateAction<boolean>>;
  };
}) {
  const { form, handleSubmit, submitted } = useFormQuestion({
    defaultValues: { ...props?.question },
    options: { quizId: props?.quizId },
  });

  return (
    <form
      noValidate
      onSubmit={form.onSubmit(() => {
        handleSubmit();
        if (props?.onSubmit) props.onSubmit();
      })}
    >
      <Grid>
        <GridCol span={{ base: 12 }}>
          <Textarea
            required
            label="Question Content"
            placeholder="Question content"
            key={form.key('content')}
            {...form.getInputProps('content')}
            data-autofocus
            autosize
            minRows={1}
            maxRows={8}
          />
        </GridCol>

        <GridCol span={{ base: 12 }}>
          <Textarea
            // required
            label="Answer Explanation"
            placeholder="Answer explanation"
            key={form.key('explanation')}
            {...form.getInputProps('explanation')}
            data-autofocus
            autosize
            minRows={2}
            maxRows={8}
          />
        </GridCol>

        <GridCol span={{ base: 12 }}>
          <Group mt={'xs'}>
            <Button
              disabled={submitted}
              size="xs"
              color="gray"
              variant="light"
              onClick={() => {
                if (props?.onSubmit) props.onSubmit();
                if (props?.setAddFromExisting) props.setAddFromExisting(false);
              }}
            >
              Cancel
            </Button>

            <Button size="xs" type="submit" loading={submitted}>
              {!!props?.question?.updated_at ? 'Update' : 'Create'}
            </Button>
          </Group>
        </GridCol>
      </Grid>
    </form>
  );
}
