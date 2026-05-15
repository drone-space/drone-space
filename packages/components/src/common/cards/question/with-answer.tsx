'ude client';

import {
  Card,
  CardSection,
  Group,
  Stack,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import { useStoreAnswer } from '@repo/libraries/zustand/stores/answer';
import React from 'react';
import { useStoreOption } from '@repo/libraries/zustand/stores/option';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import { IconCheck, IconX } from '@tabler/icons-react';

export default function WithAnswer({
  props,
}: {
  props: { questionId: string; answerId: string };
}) {
  const questions = useStoreQuestion((s) => s.questions);
  const question = questions?.find((q) => q.id == props.questionId);
  const answers = useStoreAnswer((s) => s.answers);
  const answer = answers?.find((a) => a.id == props.answerId);
  const options = useStoreOption((s) => s.options);
  const questionOptions = options?.filter(
    (qo) => qo.question_id == question?.id
  );
  // const option = questionOptions?.find((o) => o.id == answer?.option_id);

  return (
    <Card bg={'transparent'} radius={0}>
      <Stack>
        <CardSection>
          <Text>{question?.content}</Text>
        </CardSection>

        <CardSection>
          <Stack gap={'xs'}>
            {questionOptions?.map((qo) => {
              const isUserAnswer = qo.id == answer?.option_id;
              const isCorrect = qo.correct;

              const displayProps = {
                icon: isCorrect ? IconCheck : IconX,
                color: isCorrect ? 'green' : 'red',
              };

              return (
                <Group gap={'xs'} key={qo.id}>
                  <ThemeIcon
                    size={ICON_WRAPPER_SIZE - 4}
                    variant="outline"
                    color={`${displayProps.color}.6`}
                  >
                    <displayProps.icon
                      size={ICON_SIZE - 4}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  </ThemeIcon>

                  <Text>
                    {qo.content}{' '}
                    <Text component="span" inherit c={'blue.6'}>
                      {isUserAnswer ? '(Your answer)' : ''}
                    </Text>
                  </Text>
                </Group>
              );
            })}
          </Stack>
        </CardSection>
      </Stack>
    </Card>
  );
}
