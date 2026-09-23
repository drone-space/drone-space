'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useFormQuestion } from '@repo/hooks';
import {
  Button,
  Card,
  Checkbox,
  Grid,
  GridCol,
  Group,
  Select,
  Textarea,
  TextInput,
} from '@mantine/core';
import { QuestionGet } from '@repo/types';
import { useStoreQuestion } from '@repo/store';
import { PartialSectionOptions } from '../partial/section/options';
import { useStoreOption } from '@repo/store';
import { OptionGet } from '@repo/types';
import { useStoreQuiz } from '@repo/store';
import { useRouter } from 'next/navigation';

export function FormQuestion({
  props,
  options,
}: {
  options?: { inline?: boolean };
  props?: {
    quizId?: string;
    question?: QuestionGet;
    onSubmit?: () => void;
    onCancel?: () => void;
    setAddFromExisting?: React.Dispatch<React.SetStateAction<boolean>>;
  };
}) {
  const router = useRouter();

  const [quizId, setQuizId] = useState<string | null>('');

  const quizzes = useStoreQuiz((s) => s.quizzes);

  const { form, handleSubmit, submitted, stay, setStay } = useFormQuestion({
    defaultValues: { ...props?.question },
    options: { quizId: quizId || props?.quizId },
  });

  const optionsStore = useStoreOption((s) => s.options);
  const optionsQuestion = optionsStore?.filter((oi) => oi.questionId == form.values.id);

  const handleComplete = () => {
    if (!stay) {
      router.push('/admin/questions');
    } else {
      form.reset();
    }
  };

  return (
    <>
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
              disabled={!options?.inline && !!form.values.id}
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
              disabled={!options?.inline && !!form.values.id}
            />
          </GridCol>

          {!options?.inline && (
            <GridCol span={{ base: 12 }}>
              <Select
                required
                label="Select Quiz"
                placeholder="Select quiz"
                key={form.key('status')}
                searchable
                value={quizId}
                onChange={setQuizId}
                disabled={!!form.values.id}
                data={(quizzes || []).map((qi) => {
                  return {
                    label: qi.title,
                    value: qi.id,
                  };
                })}
              />
            </GridCol>
          )}

          {!options?.inline && (
            <GridCol span={{ base: 12 }}>
              <Checkbox
                mt={'xs'}
                label={`Stay on this page after ${!!props?.question?.updatedAt ? 'updating' : 'creating'} quiz.`}
                checked={stay}
                onChange={(event) => setStay(event.currentTarget.checked)}
              />
            </GridCol>
          )}

          <GridCol span={{ base: 12 }}>
            <Group mt={'xs'}>
              <Button
                disabled={submitted}
                size="xs"
                color="gray"
                variant="light"
                display={!options?.inline && form.values.id ? 'none' : undefined}
                onClick={() => {
                  if (props?.onSubmit) props.onSubmit();
                  if (props?.setAddFromExisting) props.setAddFromExisting(false);
                }}
              >
                Cancel
              </Button>

              <Button
                size="xs"
                type="submit"
                loading={submitted}
                display={!options?.inline && form.values.id ? 'none' : undefined}
              >
                {!!props?.question?.updatedAt ? 'Update' : 'Create'}
              </Button>
            </Group>
          </GridCol>
        </Grid>
      </form>

      {!options?.inline && form.values.id && (
        <GridCol span={{ base: 12 }}>
          <Card withBorder>
            <PartialSectionOptions
              props={{
                questionId: form.values.id,
                questionOptions: optionsQuestion || [],
              }}
            />
          </Card>
        </GridCol>
      )}

      {!options?.inline && form.values.id && (optionsQuestion || []).length == 4 && (
        <Group mt={'xs'}>
          <Button size="xs" onClick={handleComplete}>
            Done
          </Button>
        </Group>
      )}
    </>
  );
}
