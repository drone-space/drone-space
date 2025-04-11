import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Group,
  Paper,
  ScrollArea,
  Skeleton,
  Stack,
  Text,
} from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import LayoutSection from '@/components/layout/section';
import { FormClaudeType } from '@/hooks/form/claude';
import { MarkdownComponent } from '@/components/wrapper/markdown';

// Sample questions data
const sampleQuestions = [
  'What does Drone Space do?',
  'What kind of drones does Drone Space sell?',
  'How long is the RPL training course?',
];

export default function AI({
  opened,
  conversation,
  form,
  submitted,
  handleSubmit,
  updated,
  setUpdated,
}: {
  opened: boolean;
  conversation: any[];
  form: FormClaudeType;
  submitted: boolean;
  handleSubmit: (sv?: any, nv?: boolean) => void;
  updated: boolean;
  setUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >();

  // Scroll into view when new messages appear
  useEffect(() => {
    setTimeout(
      () => {
        if (submitted || opened) {
          if (targetRef?.current) {
            targetRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'end',
            });
          }
        }
      },
      opened ? 250 : 50
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted, opened]);

  // Set updated state when submitted
  useEffect(() => {
    if (submitted && !updated) setUpdated(true);
  }, [submitted, updated, setUpdated]);

  return (
    <LayoutSection id="content" containerized={false} bordered>
      <ScrollArea
        h={'40vh'}
        scrollbarSize={8}
        fz={'xs'}
        px={'xs'}
        type="auto"
        ref={scrollableRef}
      >
        <Stack gap={'xs'} mt={'xs'}>
          <WelcomeMessage />

          {/* Show sample questions only when there's no conversation */}
          {!conversation.length && !form.values.content.trim().length && (
            <SampleQuestions
              questions={sampleQuestions}
              submitted={submitted}
              handleSubmit={handleSubmit}
            />
          )}
        </Stack>

        {/* Conversation history */}
        {conversation.map((item, index) => {
          const lastItem = index === conversation.length - 1;

          return (
            <Box key={index}>
              {item.role === 'assistant' ? (
                <AssistantMessage
                  content={item.content}
                  isLast={lastItem}
                  animate={lastItem && updated && !submitted}
                  submitted={submitted}
                />
              ) : (
                <UserMessage content={item.content} />
              )}
            </Box>
          );
        })}

        {submitted && (
          <Box h={'37.5vh'} ref={targetRef}>
            <UserMessage content={form.values.content} />
            <TypingIndicator />
          </Box>
        )}

        <div ref={targetRef}></div>
      </ScrollArea>
    </LayoutSection>
  );
}

// Welcome message component
function WelcomeMessage() {
  return (
    <MarkdownComponent
      markdown={
        "Hi! I'm Hekima, an AI model trained provide Drone Space related content. Ask me anything you wish to know about the company."
      }
      animate={false}
    />
  );
}

// Typing indicator component
function TypingIndicator() {
  return (
    <>
      <Text fz={'xs'} c={'dimmed'}>
        Thinking...
      </Text>
      <Skeleton h={'0.75rem'} mt={'xs'} />
      <Skeleton h={'0.75rem'} mt={'xs'} w={'70%'} />
      <Skeleton h={'0.75rem'} my={'xs'} w={'50%'} />
    </>
  );
}

function SampleQuestions({
  questions,
  submitted,
  handleSubmit,
}: {
  questions: string[];
  submitted: boolean;
  handleSubmit: (sv?: any, nv?: boolean) => void;
}) {
  return (
    <Stack gap={'xs'} pl={'xs'}>
      <Text inherit>Some general questions:</Text>

      <Stack gap={'xs'} align="start" pl={{ xs: 'md' }}>
        {questions.map((question, index) => (
          <Button
            key={index}
            variant="light"
            fw={'normal'}
            size="compact-xs"
            disabled={submitted}
            onClick={async () => await handleSubmit(question.trim(), true)}
          >
            {question}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}

function UserMessage({ content }: { content: string }) {
  return (
    <Group justify="end" my={'sm'}>
      <Paper
        bg={'var(--mantine-color-pri-light)'}
        c={'var(--mantine-color-pri-9)'}
        px={'xs'}
        maw={'70%'}
        py={5}
      >
        <Text inherit ta={'end'}>
          {content}
        </Text>
      </Paper>
    </Group>
  );
}

function AssistantMessage({
  content,
  isLast,
  animate,
  submitted,
}: {
  content: string;
  isLast: boolean;
  animate: boolean;
  submitted: boolean;
}) {
  return (
    <Box my={'xs'} mih={isLast && !submitted ? '30vh' : undefined}>
      <MarkdownComponent markdown={content} animate={animate} />
    </Box>
  );
}
