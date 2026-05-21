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
    questionId?: string;
    onSubmit?: () => void;
    onCancel?: () => void;
  };
}) {
  const questions = useStoreQuestion((s) => s.questions);
  const question = questions?.find((qi) => qi.id == props?.questionId);

  const { form, handleSubmit, submitted } = useFormQuestion({
    defaultValues: { ...question },
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
            minRows={3}
            maxRows={8}
          />
        </GridCol>

        <GridCol span={{ base: 12 }}>
          <Group>
            <Button
              disabled={submitted}
              color="gray"
              variant="light"
              onClick={() => {
                if (props?.onSubmit) props.onSubmit();
              }}
            >
              Cancel
            </Button>

            <Button type="submit" loading={submitted}>
              {!!question?.updated_at ? 'Update' : 'Create'}
            </Button>
          </Group>
        </GridCol>
      </Grid>
    </form>
  );
}
