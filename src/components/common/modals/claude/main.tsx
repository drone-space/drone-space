'use client';

import React, { useEffect } from 'react';
import NextImage from 'next/image';
import {
  Modal,
  Image,
  Stack,
  Text,
  Group,
  Box,
  Title,
  Button,
  Anchor,
  Grid,
  GridCol,
  Avatar,
  Center,
  Transition,
  Skeleton,
} from '@mantine/core';
import {
  useDebouncedCallback,
  useDisclosure,
  useElementSize,
  useMediaQuery,
  useScrollIntoView,
} from '@mantine/hooks';
import LayoutSection from '@/components/layout/section';
import FormClaude from '@/components/form/claude';
import { MarkdownComponent } from '@/components/wrapper/markdown';
import classes from './main.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { updateConversation } from '@/libraries/redux/slices/claude';
import { images } from '@/assets/images';

export default function Main() {
  const [opened, { open, close }] = useDisclosure(false);

  const mobile = useMediaQuery('(max-width: 36em)');

  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >({
    duration: 250,
    offset: -1080,
  });
  const { ref, height } = useElementSize();

  const conversation = useAppSelector((state) => state.claude.value);
  const dispatch = useAppDispatch();

  const clearConversation = () => {
    dispatch(updateConversation([]));
  };

  // const { submitted, generating } = claude;

  const handleScroll = useDebouncedCallback(() => {
    scrollIntoView();
  }, 300);

  useEffect(() => {
    if (opened) {
      handleScroll();
    }

    // console.log(conversation);
  }, [
    opened,
    handleScroll,
    // submitted,
    conversation,
    height,
  ]);

  // layout logic
  const { ref: ref2, height: height2 } = useElementSize();
  const { ref: ref3, height: height3 } = useElementSize();
  // end layout logic

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        classNames={{ body: classes.body, inner: classes.inner }}
        size={mobile ? undefined : 'xl'}
        fullScreen={mobile}
        withCloseButton={false}
        closeButtonProps={{ 'aria-label': 'Close modal' }}
        keepMounted={true}
        // style={{ zIndex: 10000 }}
      >
        <LayoutSection id="modal-claude-new" padded="xs" shadowed ref={ref2}>
          <Group justify="space-between">
            <Title order={1} fz={'sm'}>
              Ask AI
            </Title>

            <Button
              py={2}
              px={6}
              h={'fit-content'}
              color="gray"
              variant="light"
              onClick={close}
            >
              <Text component="span" inherit py={4} fz={{ base: 10, lg: 12 }}>
                Hide Chat
              </Text>
            </Button>
          </Group>
        </LayoutSection>

        <LayoutSection id="modal-claude-new2">
          <Grid
            gutter={0}
            ref={scrollableRef}
            pr={4}
            h={{
              base: `calc(92.5vh - ${height2 + height3}px)`,
              md: 240,
              lg: 280,
            }}
            style={{ overflowY: 'auto', scrollbarWidth: 'thin' }}
          >
            <Transition
              key={'transition-greeting'}
              mounted={true}
              transition="fade"
              duration={250}
              enterDelay={0}
              exitDelay={0}
              timingFunction="ease"
            >
              {(styles) => (
                <GridCol span={12} style={styles} fz={{ base: 'sm', lg: 'md' }}>
                  <Grid
                    gutter={0}
                    py={'md'}
                    style={{
                      borderBottom:
                        conversation.length > 0
                          ? `1px solid light-dark(var(--mantine-color-gray-4),var(--mantine-color-gray-4))`
                          : '',
                    }}
                  >
                    <GridCol span={{ base: 2, xs: 1 }}>
                      <Stack h={40} w={40} my={-4}>
                        <Image
                          src={images.icons.claude}
                          alt={'Hekima AI'}
                          loading="lazy"
                          radius={'sm'}
                          component={NextImage}
                          width={40}
                          height={40}
                        />
                      </Stack>
                    </GridCol>

                    <GridCol span={{ base: 10, xs: 11 }} mt={6}>
                      <MarkdownComponent
                        markdown={
                          "Hi! I'm Hekima, an AI model trained provide Drone Space related content. Ask me anything you wish to know about the company."
                        }
                        animate={conversation.length < 1}
                      />
                    </GridCol>
                  </Grid>
                </GridCol>
              )}
            </Transition>

            <Transition
              key={'transition-questions'}
              mounted={conversation.length < 1}
              transition="fade"
              duration={250}
              enterDelay={0}
              exitDelay={0}
              timingFunction="ease"
            >
              {(styles) => (
                <GridCol span={12} style={styles} fz={{ base: 'sm', lg: 'md' }}>
                  <Grid gutter={0} pb={'md'}>
                    <GridCol span={{ base: 2, xs: 1 }}></GridCol>
                    <GridCol span={{ base: 10, xs: 11 }}>
                      <Stack gap={'xs'}>
                        <Text inherit>Some example questions:</Text>

                        <Stack gap={'xs'} align="start" ml={{ md: 'md' }}>
                          {sample.questions.map((question, index) => (
                            <FormClaude key={index} automatic query={question}>
                              <Button
                                variant="outline"
                                color="gray.6"
                                fz={{ base: 10, lg: 'sm' }}
                                p={0}
                                h={'fit-content'}
                                data-autofocus={
                                  sample.questions.indexOf(question) == 0
                                }
                              >
                                <Text component="span" inherit p={6} fw={500}>
                                  {question}
                                </Text>
                              </Button>
                            </FormClaude>
                          ))}
                        </Stack>
                      </Stack>
                    </GridCol>
                  </Grid>
                </GridCol>
              )}
            </Transition>

            {conversation.map((item, index) => (
              <Transition
                key={index}
                mounted={true}
                transition="fade"
                duration={250}
                enterDelay={0}
                exitDelay={0}
                timingFunction="ease"
              >
                {(styles) => (
                  <GridCol
                    span={12}
                    style={styles}
                    fz={{ base: 'sm', lg: 'md' }}
                    ref={
                      conversation.indexOf(item) == conversation.length - 1
                        ? targetRef
                        : null
                    }
                  >
                    <Grid
                      gutter={0}
                      py={'md'}
                      style={{
                        borderTop:
                          conversation.indexOf(item) > 0
                            ? `1px solid light-dark(var(--mantine-color-gray-4),var(--mantine-color-gray-4))`
                            : '',
                      }}
                      ref={ref}
                    >
                      <GridCol span={{ base: 2, xs: 1 }}>
                        {item.role == 'assistant' ? (
                          <Stack h={40} w={40} my={-4}>
                            <Image
                              src={images.icons.claude}
                              alt={'Hekima AI'}
                              loading="lazy"
                              radius={'sm'}
                              component={NextImage}
                              width={40}
                              height={40}
                            />
                          </Stack>
                        ) : (
                          <Avatar color="pri" radius={'sm'} ml={5} size={32} />
                        )}
                      </GridCol>

                      <GridCol span={{ base: 10, xs: 11 }} mt={6}>
                        {item.role == 'assistant' ? (
                          <MarkdownComponent
                            markdown={item.content}
                            animate={
                              conversation.indexOf(item) ==
                              conversation.length - 1
                            }
                          />
                        ) : (
                          <Text inherit>{item.content}</Text>
                        )}
                      </GridCol>
                    </Grid>
                  </GridCol>
                )}
              </Transition>
            ))}

            <Transition
              // mounted={generating}
              mounted={false}
              transition="fade"
              duration={250}
              enterDelay={250}
              exitDelay={0}
              timingFunction="ease"
            >
              {(styles) => (
                <GridCol span={12} style={styles} fz={{ base: 'sm', lg: 'md' }}>
                  <Grid
                    gutter={0}
                    py={'md'}
                    style={{
                      borderTop: `1px solid light-dark(var(--mantine-color-gray-4),var(--mantine-color-gray-4))`,
                    }}
                  >
                    <GridCol span={{ base: 2, xs: 1 }}>
                      <Stack h={40} w={40}>
                        <Image
                          src={images.icons.claude}
                          alt={'Hekima AI'}
                          loading="lazy"
                          radius={'sm'}
                          component={NextImage}
                          width={40}
                          height={40}
                        />
                      </Stack>
                    </GridCol>
                    <GridCol span={{ base: 10, xs: 11 }}>
                      <Stack gap={4} mt={6}>
                        <Skeleton height={8} radius="sm" />
                        <Skeleton height={8} mt={6} radius="sm" />
                        <Skeleton height={8} mt={6} width="70%" radius="sm" />
                      </Stack>
                    </GridCol>
                  </Grid>
                </GridCol>
              )}
            </Transition>
          </Grid>
        </LayoutSection>

        <Stack gap={0} ref={ref3}>
          <LayoutSection
            id="modal-claude-ref3"
            containerized="sm"
            pt={'xs'}
            mb={'xs'}
            style={{
              boxShadow:
                '0px -1px 3px rgba(0, 0, 0, 0.05), 0px -1px 2px rgba(0, 0, 0, 0.1)',
            }}
          >
            <FormClaude />
          </LayoutSection>

          <LayoutSection
            id="modal-claude-footer"
            containerized="sm"
            margined="xs"
          >
            <Stack>
              <Group align="end" justify="space-between" fz={'sm'}>
                <Text inherit fz={{ base: 'xs', lg: 'sm' }}>
                  Model from{' '}
                  <Anchor
                    href="https://anthropic.com"
                    target="_blank"
                    inherit
                    fw={500}
                  >
                    ANTHROP\C{' '}
                    {/* <Stack h={24} w={24} display={"inline-flex"}>
										<Image
											src={icons.tools.claude}
											alt={"Hekima AI"}
											loading="lazy"
											radius={"sm"}
											component={NextImage}
											width={24}
											height={24}
										/>
									</Stack> */}
                  </Anchor>
                </Text>

                <Group gap={'xs'}>
                  {/* <Transition
									mounted={conversation.length > 0}
									transition="fade"
									duration={250}
									timingFunction="ease"
								>
									{styles => (
										<div style={styles}>
											<FormClaude automatic regenerating>
												<Button
													size="xs"
													h={"fit-content"}
													variant="light"
													color="pri"
													fw={500}
													p={0}
													disabled={generating}
												>
													<Text component="span" inherit px={6} py={6}>
														Regenerate
													</Text>
												</Button>
											</FormClaude>
										</div>
									)}
								</Transition> */}

                  <Transition
                    mounted={true}
                    transition="fade"
                    duration={250}
                    timingFunction="ease"
                  >
                    {(styles) => (
                      <div style={styles}>
                        <Button
                          size="xs"
                          h={'fit-content'}
                          variant="light"
                          color="pri"
                          fw={500}
                          p={0}
                          onClick={clearConversation}
                          disabled={conversation.length < 1}
                        >
                          <Text component="span" inherit px={6} py={6}>
                            Clear Chat
                          </Text>
                        </Button>
                      </div>
                    )}
                  </Transition>
                </Group>
              </Group>

              <Stack gap={0}>
                <Text inherit fz={{ base: 9, lg: 10 }} ta={'center'}>
                  Hekima may produce incorrect information about Drone Space.
                  Double-check responses and contact the company directly for
                  important information.
                </Text>

                <Group gap={'xs'} justify="center">
                  {links.map((link, index) => (
                    <Anchor
                      key={index}
                      href={link.link}
                      target="_blank"
                      underline="always"
                      c="gray.6"
                      fz={{ base: 9, lg: 11 }}
                    >
                      {link.label}
                    </Anchor>
                  ))}
                </Group>
              </Stack>
            </Stack>
          </LayoutSection>
        </Stack>
      </Modal>

      <Center>
        <Group gap={4} onClick={open} className={classes.child}>
          <Text inherit fz={{ base: 'xs', lg: 'sm' }} fw={500}>
            Ask Hekima
          </Text>

          <Box h={39} w={39}>
            <Stack>
              <Image
                src={images.icons.claude}
                alt={'Hekima AI'}
                loading="lazy"
                radius={'sm'}
                component={NextImage}
                width={31}
                height={31}
              />
            </Stack>
          </Box>
        </Group>
      </Center>
    </>
  );
}

const sample = {
  questions: [
    'What does Drone Space do?',
    'What kind of drones does Drone Space sell?',
    'How long is the RPL training course?',
  ],
};

const links = [
  {
    link: 'https://www.anthropic.com/legal/consumer-terms',
    label: 'Terms of Service',
  },
  {
    link: 'https://www.anthropic.com/legal/privacy',
    label: 'Privacy Policy',
  },
  {
    link: 'https://www.anthropic.com/legal/aup',
    label: 'Usage Policy',
  },
];
