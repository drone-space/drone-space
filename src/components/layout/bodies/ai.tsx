import React, { useEffect } from 'react';
import {
  ActionIcon,
  Box,
  Button,
  Group,
  Paper,
  ScrollArea,
  Skeleton,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
import { useClipboard, useScrollIntoView } from '@mantine/hooks';
import LayoutSection from '@/components/layout/section';
import { FormClaudeType } from '@/hooks/form/claude';
import { MarkdownComponent } from '@/components/wrapper/markdown';
import {
  IconCheck,
  IconCopy,
  IconPencil,
  IconRefresh,
  IconVolume,
} from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { useTTS } from '@/hooks/tts';

// Sample questions data
const sampleQuestions = [
  'What does Drone Space do?',
  'What kind of drones does Drone Space sell?',
  'How long is the RPL training course?',
];

import classes from './ai.module.scss';

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

  // tts hook
  const { fetching, streamSpeech } = useTTS();

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
    const clipboard = useClipboard({ timeout: 1000 });
    const clipIndicators = {
      icon: clipboard.copied ? IconCheck : IconCopy,
    };

    return (
      <Stack
        gap={'xs'}
        align="start"
        my={'xs'}
        mih={isLast && !submitted ? '30vh' : undefined}
        className={classes.assistant}
      >
        <MarkdownComponent markdown={content} animate={animate} />

        <Group gap={5} className={classes.assistantActions}>
          <Tooltip label="Copy" withArrow fz={'xs'}>
            <ActionIcon
              size={ICON_WRAPPER_SIZE / 1.25}
              color="gray"
              variant={clipboard.copied ? 'light' : 'subtle'}
              onClick={() => {
                if (!clipboard.copied) clipboard.copy(content);
              }}
            >
              <clipIndicators.icon
                size={ICON_SIZE / 1.25}
                stroke={ICON_STROKE_WIDTH}
              />
            </ActionIcon>
          </Tooltip>

          <Tooltip label="Read Aloud" withArrow fz={'xs'}>
            <ActionIcon
              size={ICON_WRAPPER_SIZE / 1.25}
              color="gray"
              variant="subtle"
              loading={fetching}
              onClick={() => streamSpeech({ text: content })}
            >
              <IconVolume size={ICON_SIZE / 1.25} stroke={ICON_STROKE_WIDTH} />
            </ActionIcon>
          </Tooltip>

          <Tooltip label="Regenerate" withArrow fz={'xs'}>
            <ActionIcon
              size={ICON_WRAPPER_SIZE / 1.25}
              color="gray"
              variant="subtle"
              loading={fetching}
              onClick={() => {}}
            >
              <IconRefresh size={ICON_SIZE / 1.25} stroke={ICON_STROKE_WIDTH} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Stack>
    );
  }

  return (
    <LayoutSection id="content" containerized={false} bordered>
      <ScrollArea
        h={'40vh'}
        scrollbarSize={8}
        fz={'sm'}
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
  const clipboard = useClipboard({ timeout: 1000 });
  const clipIndicators = {
    icon: clipboard.copied ? IconCheck : IconCopy,
  };

  return (
    <Stack align="end" my={'sm'} gap={'xs'} className={classes.user}>
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

      <Group justify="end" gap={5} className={classes.userActions}>
        <Tooltip label="Copy" withArrow fz={'xs'}>
          <ActionIcon
            size={ICON_WRAPPER_SIZE / 1.25}
            color="gray"
            variant={clipboard.copied ? 'light' : 'subtle'}
            onClick={() => {
              if (!clipboard.copied) clipboard.copy(content);
            }}
          >
            <clipIndicators.icon
              size={ICON_SIZE / 1.25}
              stroke={ICON_STROKE_WIDTH}
            />
          </ActionIcon>
        </Tooltip>

        <Tooltip label="Edit" withArrow fz={'xs'}>
          <ActionIcon
            size={ICON_WRAPPER_SIZE / 1.25}
            color="gray"
            variant="subtle"
            onClick={() => {}}
          >
            <IconPencil size={ICON_SIZE / 1.25} stroke={ICON_STROKE_WIDTH} />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Stack>
  );
}
