'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useFormQuestion } from '@repo/hooks/form/question';
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
import { QuestionGet } from '@repo/types/models/question';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import SectionOptions from '../partial/section/options';
import { useStoreOption } from '@repo/libraries/zustand/stores/option';
import { OptionGet } from '@repo/types/models/option';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import { useRouter } from 'next/navigation';

export default function Question({
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
  const optionsQuestion = optionsStore?.filter(
    (oi) => oi.question_id == form.values.id
  );

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
                label={`Stay on this page after ${!!props?.question?.updated_at ? 'updating' : 'creating'} quiz.`}
                key={form.key('stay')}
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
                display={
                  !options?.inline && form.values.id ? 'none' : undefined
                }
                onClick={() => {
                  if (props?.onSubmit) props.onSubmit();
                  if (props?.setAddFromExisting)
                    props.setAddFromExisting(false);
                }}
              >
                Cancel
              </Button>

              <Button
                size="xs"
                type="submit"
                loading={submitted}
                display={
                  !options?.inline && form.values.id ? 'none' : undefined
                }
              >
                {!!props?.question?.updated_at ? 'Update' : 'Create'}
              </Button>
            </Group>
          </GridCol>
        </Grid>
      </form>

      {!options?.inline && form.values.id && (
        <GridCol span={{ base: 12 }}>
          <Card withBorder>
            <SectionOptions
              props={{
                questionId: form.values.id,
                questionOptions: optionsQuestion || [],
              }}
            />
          </Card>
        </GridCol>
      )}

      {!options?.inline &&
        form.values.id &&
        (optionsQuestion || []).length == 4 && (
          <Group mt={'xs'}>
            <Button size="xs" onClick={handleComplete}>
              Done
            </Button>
          </Group>
        )}
    </>
  );
}
