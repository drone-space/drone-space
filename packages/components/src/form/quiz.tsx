'use client';

import React, { useEffect, useState } from 'react';
import { useFormQuiz } from '@repo/hooks/form/quiz';
import {
  Button,
  Checkbox,
  Grid,
  GridCol,
  Group,
  Select,
  Textarea,
  TextInput,
} from '@mantine/core';
import { QuizGet } from '@repo/types/models/quiz';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import { capitalizeWords } from '@repo/utilities/string';
import { Status } from '@repo/types/models/enums';

export default function Quiz({ props }: { props?: { quizId?: string } }) {
  const quizzes = useStoreQuiz((s) => s.quizzes);
  const quiz = quizzes?.find((qi) => qi.id == props?.quizId);

  const { form, handleSubmit, submitted, stay, setStay } = useFormQuiz({
    defaultValues: quiz,
  });

  useEffect(() => {
    if (quizzes === undefined) return;
    if (quizzes === null) return;

    form.setValues({ ...quiz });
  }, [quizzes]);

  return (
    <form noValidate onSubmit={form.onSubmit(() => handleSubmit())}>
      <Grid>
        <GridCol span={{ base: 12 }}>
          <TextInput
            label="Title"
            placeholder="Quiz Title"
            required
            key={form.key('title')}
            {...form.getInputProps('title')}
            data-autofocus
          />
        </GridCol>

        <GridCol span={{ base: 12 }}>
          <Textarea
            label="Description"
            placeholder="Quiz description"
            key={form.key('description')}
            {...form.getInputProps('description')}
            autosize
            minRows={3}
            maxRows={8}
          />
        </GridCol>

        <GridCol span={{ base: 12 }}>
          <Checkbox
            label={`Stay on this page after ${!!quiz?.updated_at ? 'updating' : 'creating'} quiz.`}
            key={form.key('stay')}
            checked={stay}
            onChange={(event) => setStay(event.currentTarget.checked)}
          />
        </GridCol>

        <GridCol span={{ base: 12 }}>
          <Select
            placeholder="Pick value"
            key={form.key('status')}
            {...form.getInputProps('status')}
            data={[
              {
                label: capitalizeWords(Status.ACTIVE),
                value: Status.ACTIVE,
              },
              {
                label: capitalizeWords(Status.DRAFT),
                value: Status.DRAFT,
              },
              {
                label: capitalizeWords(Status.INACTIVE),
                value: Status.INACTIVE,
              },
            ]}
          />
        </GridCol>

        <GridCol span={{ base: 12 }}>
          <Group mt={'xl'}>
            <Button type="submit" loading={submitted}>
              {!!quiz?.updated_at ? 'Update' : 'Create'}
            </Button>
          </Group>
        </GridCol>
      </Grid>
    </form>
  );
}
