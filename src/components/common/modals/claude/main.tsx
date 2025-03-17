'use client';

import React, { useEffect, useState } from 'react';
import {
  Anchor,
  Box,
  Button,
  Group,
  Modal,
  Paper,
  ScrollArea,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure, useScrollIntoView } from '@mantine/hooks';
import FormClaude from '@/components/form/claude';
import LayoutSection from '@/components/layout/section';
import { IconMessageCirclePlus } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import { useAppSelector } from '@/hooks/redux';
import ImageDefault from '../../images/default';
import { images } from '@/assets/images';
import { MarkdownComponent } from '@/components/wrapper/markdown';
import { useFormClaude } from '@/hooks/form/claude';

export default function Main({ children }: { children: React.ReactNode }) {
  const [updated, setUpdated] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const { form, submitted, handleSubmit, resetConversation } = useFormClaude();
  const conversation = useAppSelector((state) => state.claude.value);
  const { targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >();

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

  useEffect(() => {
    if (submitted && !updated) {
      setUpdated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted]);

  const handleClose = () => {
    setUpdated(false);
    close();
    form.reset();
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={handleClose}
        withCloseButton={false}
        padding={0}
        size={'lg'}
        centered
      >
        <LayoutSection
          id="header"
          containerized={false}
          px={'xs'}
          padded={'xs'}
          shadowed
        >
          <Group justify="space-between" align="start">
            <Group gap={'xs'}>
              <Box style={{ overflow: 'hidden' }}>
                <ImageDefault
                  src={images.icons.claude.default}
                  alt={'Hekima AI'}
                  loading="lazy"
                  radius={'sm'}
                  width={28}
                  height={28}
                  style={{ transform: 'scale(1.4)' }}
                />
              </Box>

              <Title order={2} fz={'md'} mt={5}>
                AI Assistant
              </Title>
            </Group>

            <Group>
              <Button
                size="compact-xs"
                color="gray"
                variant="light"
                fz={'xs'}
                onClick={handleClose}
              >
                Hide Chat
              </Button>
            </Group>
          </Group>
        </LayoutSection>

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
              <MarkdownComponent
                markdown={
                  "Hi! I'm Hekima, an AI model trained provide Drone Space related content. Ask me anything you wish to know about the company."
                }
                animate={false}
              />

              {!conversation.length && !form.values.content.trim().length && (
                <Stack gap={'xs'} pl={'xs'}>
                  <Text inherit>Some general questions:</Text>

                  <Stack gap={'xs'} align="start" pl={{ xs: 'md' }}>
                    {sample.questions.map((question, index) => (
                      <Button
                        key={index}
                        variant="light"
                        fw={'normal'}
                        size="compact-xs"
                        disabled={submitted}
                        onClick={async () =>
                          await handleSubmit(question.trim(), true)
                        }
                      >
                        {question}
                      </Button>
                    ))}
                  </Stack>
                </Stack>
              )}
            </Stack>

            {conversation.map((item, index) => {
              const lastItem =
                conversation.indexOf(item) == conversation.length - 1;

              return (
                <Box key={index}>
                  {item.role == 'assistant' ? (
                    <Box
                      my={'xs'}
                      mih={lastItem && !submitted ? '30vh' : undefined}
                    >
                      <MarkdownComponent
                        markdown={item.content}
                        animate={lastItem && updated && !submitted}
                      />
                    </Box>
                  ) : (
                    <UserTurn props={{ content: item.content }} />
                  )}
                </Box>
              );
            })}

            {submitted ? (
              <Box h={'37.5vh'} ref={targetRef}>
                <UserTurn props={{ content: form.values.content }} />

                <>
                  <Text fz={'xs'} c={'dimmed'}>
                    Thinking...
                  </Text>
                  <Skeleton h={'0.75rem'} mt={'xs'} />
                  <Skeleton h={'0.75rem'} mt={'xs'} w={'70%'} />
                  <Skeleton h={'0.75rem'} my={'xs'} w={'50%'} />
                </>
              </Box>
            ) : (
              <div ref={targetRef}></div>
            )}
          </ScrollArea>
        </LayoutSection>

        <LayoutSection
          id="inpur"
          containerized={false}
          bordered
          bg={'var(--mantine-color-gray-1)'}
          px={'xs'}
          padded={'xs'}
        >
          <FormClaude props={{ form, submitted, handleSubmit }} />
        </LayoutSection>

        <LayoutSection
          id="footer"
          containerized={false}
          px={'xs'}
          padded={'xs'}
        >
          <Stack gap={'xs'}>
            <Group justify="space-between" fz={'xs'}>
              <Text inherit>
                Model from{' '}
                <Anchor href={anthropic} target="_blank" inherit fw={500}>
                  ANTHROP\C
                </Anchor>
              </Text>

              <Group gap={'xs'}>
                <Button
                  size="compact-xs"
                  onClick={resetConversation}
                  disabled={conversation.length < 1}
                  leftSection={
                    <IconMessageCirclePlus
                      size={ICON_SIZE / 1.5}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  }
                >
                  New Chat
                </Button>
              </Group>
            </Group>

            <Stack gap={5} c={'dimmed'} ta={'center'} fz={10}>
              <Text inherit c={'dimmed'} ta={'center'}>
                Hekima may produce incorrect information. Double-check
                responses.
              </Text>

              <Group justify="center" gap={'xs'}>
                <Anchor
                  inherit
                  href={links.terms}
                  c={'dimmed'}
                  underline="always"
                >
                  Terms of Service
                </Anchor>

                <Anchor
                  inherit
                  href={links.privacy}
                  c={'dimmed'}
                  underline="always"
                >
                  Privacy Policy
                </Anchor>

                <Anchor
                  inherit
                  href={links.usage}
                  c={'dimmed'}
                  underline="always"
                >
                  Usage Policy
                </Anchor>
              </Group>
            </Stack>
          </Stack>
        </LayoutSection>
      </Modal>

      <div onClick={open} style={{ cursor: 'pointer' }}>
        {children}
      </div>
    </>
  );
}

const anthropic = 'https://www.anthropic.com';

const links = {
  terms: `${anthropic}/legal/consumer-terms`,
  privacy: `${anthropic}/legal/privacy`,
  usage: `${anthropic}/legal/aup`,
};

const sample = {
  questions: [
    'What does Drone Space do?',
    'What kind of drones does Drone Space sell?',
    'How long is the RPL training course?',
  ],
};

const UserTurn = ({ props }: { props: { content: string } }) => {
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
          {props.content}
        </Text>
      </Paper>
    </Group>
  );
};
