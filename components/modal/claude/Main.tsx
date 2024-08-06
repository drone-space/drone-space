"use client";

import React, { useContext, useDeferredValue, useEffect, useState } from "react";

import { ReactTyped } from "react-typed";

import NextImage from "next/image";

import {
	Modal,
	Image,
	Stack,
	Text,
	ActionIcon,
	Group,
	Box,
	Title,
	Button,
	Anchor,
	Divider,
	Flex,
	Grid,
	GridCol,
	Avatar,
	Center,
	Transition,
	Skeleton,
	LoadingOverlay,
} from "@mantine/core";
import {
	useDebouncedCallback,
	useDebouncedState,
	useDisclosure,
	useElementSize,
	useResizeObserver,
	useScrollIntoView,
	useTimeout,
} from "@mantine/hooks";
import LayoutSection from "@/layouts/Section";
import FormClaude from "@/partials/forms/Claude";
import { MarkdownComponent } from "@/components/Markdown";

import classes from "./Main.module.scss";
import icons from "@/assets/icons";
import Link from "next/link";

import { ClaudeContext } from "@/contexts/Claude";
import { IconX } from "@tabler/icons-react";
import request from "@/hooks/request";
import { notifications } from "@mantine/notifications";

export default function Main() {
	const [opened, { open, close }] = useDisclosure(false);

	const claude = useContext(ClaudeContext);

	const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<HTMLDivElement, HTMLDivElement>({
		duration: 250,
		offset: -1080,
	});
	const { ref, width, height } = useElementSize();

	if (!claude) {
		throw new Error("Outside Claude Context");
	}

	const {
		newConversation,
		setNewConversation,
		submitted,
		setSubmitted,
		generating,
		setGenerating,
		conversation,
		setConversation,
		clearConversation,
	} = claude;

	const handleScroll = useDebouncedCallback(() => {
		scrollIntoView();
	}, 250);

	useEffect(() => {
		opened && handleScroll();
		// console.log(conversation);
	}, [opened, handleScroll, submitted, conversation, height]);

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				centered
				classNames={{ body: classes.body }}
				size={"xl"}
				withCloseButton={false}
				closeButtonProps={{ "aria-label": "Close modal" }}
				keepMounted={true}
			>
				<LayoutSection containerized="responsive" padded="xs" shadowed>
					<Group justify="space-between">
						<Title order={1} fz={"sm"}>
							Ask AI
						</Title>

						<Button py={2} px={6} h={"fit-content"} color="gray" variant="light" onClick={close}>
							<Text component="span" inherit py={4} fz={{ base: 10, lg: 12 }}>
								Hide Chat
							</Text>
						</Button>
					</Group>
				</LayoutSection>

				<LayoutSection containerized="responsive">
					<Grid
						gutter={0}
						ref={scrollableRef}
						h={{ md: 240, lg: 360 }}
						pr={4}
						style={{ overflowY: "auto", scrollbarWidth: "thin" }}
					>
						<Transition
							key={"greeting"}
							mounted={true}
							transition="fade"
							duration={250}
							enterDelay={0}
							exitDelay={0}
							timingFunction="ease"
						>
							{styles => (
								<GridCol span={12} style={styles} fz={{ base: "sm", lg: "md" }}>
									<Grid
										gutter={0}
										py={"md"}
										style={{
											borderBottom:
												conversation.length > 0
													? `1px solid light-dark(var(--mantine-color-gray-4),var(--mantine-color-gray-4))`
													: "",
										}}
									>
										<GridCol span={{ md: 1 }}>
											<Stack h={40} w={40} my={-4}>
												<Image
													src={icons.tools.claude}
													alt={"Claude AI"}
													loading="lazy"
													radius={"sm"}
													component={NextImage}
													width={40}
													height={40}
												/>
											</Stack>
										</GridCol>

										<GridCol span={{ md: 11 }} mt={6}>
											<MarkdownComponent
												markdown={
													"Hi! I'm Claude, an AI model trained provide Drone Space related content. Ask me anything you wish to know about the company"
												}
												animate={conversation.length < 1}
											/>
										</GridCol>
									</Grid>
								</GridCol>
							)}
						</Transition>

						<Transition
							key={"questions"}
							mounted={conversation.length < 1}
							transition="fade"
							duration={250}
							enterDelay={0}
							exitDelay={0}
							timingFunction="ease"
						>
							{styles => (
								<GridCol span={12} style={styles} fz={{ base: "sm", lg: "md" }}>
									<Grid gutter={0} pb={"md"}>
										<GridCol span={1}></GridCol>
										<GridCol span={11}>
											<Stack gap={"xs"}>
												<Text inherit>Some example questions:</Text>

												<Stack gap={"xs"} align="start" ml={{ md: "md" }}>
													{sample.questions.map(question => (
														<FormClaude key={question} automatic query={question}>
															<Button
																variant="outline"
																color="gray.6"
																fz={{ base: 10, lg: "sm" }}
																p={0}
																h={"fit-content"}
																data-autofocus={sample.questions.indexOf(question) == 0}
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

						{conversation.map(item => (
							<Transition
								key={item.content}
								mounted={true}
								transition="fade"
								duration={250}
								enterDelay={0}
								exitDelay={0}
								timingFunction="ease"
							>
								{styles => (
									<GridCol
										span={12}
										style={styles}
										fz={{ base: "sm", lg: "md" }}
										ref={conversation.indexOf(item) == conversation.length - 1 ? targetRef : null}
									>
										<Grid
											gutter={0}
											py={"md"}
											style={{
												borderTop:
													conversation.indexOf(item) > 0
														? `1px solid light-dark(var(--mantine-color-gray-4),var(--mantine-color-gray-4))`
														: "",
											}}
											ref={ref}
										>
											<GridCol span={{ md: 1 }}>
												{item.role == "assistant" ? (
													<Stack h={40} w={40} my={-4}>
														<Image
															src={icons.tools.claude}
															alt={"Claude AI"}
															loading="lazy"
															radius={"sm"}
															component={NextImage}
															width={40}
															height={40}
														/>
													</Stack>
												) : (
													<Avatar color="pri" radius={"sm"} ml={5} size={32} />
												)}
											</GridCol>

											<GridCol span={{ md: 11 }} mt={6}>
												{item.role == "assistant" ? (
													<MarkdownComponent
														markdown={item.content}
														animate={conversation.indexOf(item) == conversation.length - 1}
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
							mounted={generating}
							transition="fade"
							duration={250}
							enterDelay={250}
							exitDelay={0}
							timingFunction="ease"
						>
							{styles => (
								<GridCol span={12} style={styles} fz={{ base: "sm", lg: "md" }}>
									<Grid
										gutter={0}
										py={"md"}
										style={{
											borderTop: `1px solid light-dark(var(--mantine-color-gray-4),var(--mantine-color-gray-4))`,
										}}
									>
										<GridCol span={{ md: 1 }}>
											<Stack h={40} w={40}>
												<Image
													src={icons.tools.claude}
													alt={"Claude AI"}
													loading="lazy"
													radius={"sm"}
													component={NextImage}
													width={40}
													height={40}
												/>
											</Stack>
										</GridCol>
										<GridCol span={{ md: 11 }}>
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

				<LayoutSection
					containerized="sm"
					pt={"xs"}
					mb={"xs"}
					style={{
						boxShadow: "0px -1px 3px rgba(0, 0, 0, 0.05), 0px -1px 2px rgba(0, 0, 0, 0.1)",
					}}
				>
					<FormClaude />
				</LayoutSection>

				<LayoutSection containerized="sm" margined="xs">
					<Stack>
						<Group align="end" justify="space-between" fz={"sm"}>
							<Text inherit fz={{ base: "xs", lg: "sm" }}>
								Claude 3 Haiku model from{" "}
								<Anchor href="https://anthropic.com" target="_blank" inherit fw={500}>
									ANTHROP\C{" "}
									{/* <Stack h={24} w={24} display={"inline-flex"}>
										<Image
											src={icons.tools.claude}
											alt={"Claude AI"}
											loading="lazy"
											radius={"sm"}
											component={NextImage}
											width={24}
											height={24}
										/>
									</Stack> */}
								</Anchor>
							</Text>

							<Group gap={"xs"}>
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

								<Transition mounted={true} transition="fade" duration={250} timingFunction="ease">
									{styles => (
										<div style={styles}>
											<Button
												size="xs"
												h={"fit-content"}
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
							<Text inherit fz={{ base: 9, lg: 10 }} ta={"center"}>
								Claude may produce incorrect information about Drone Space. Double-check responses and
								contact the company directly for important information.
							</Text>

							<Group gap={"xs"} justify="center">
								{links.map(link => (
									<Anchor
										key={link.link}
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
			</Modal>

			<Group gap={4} onClick={open} className={classes.child}>
				<Text inherit fz={{ base: "xs", lg: "sm" }} fw={500}>
					Ask AI
				</Text>

				<Box h={32} w={32}>
					<Stack>
						<Image
							src={icons.tools.claude}
							alt={"Claude AI"}
							loading="lazy"
							radius={"sm"}
							component={NextImage}
							width={32}
							height={32}
						/>
					</Stack>
				</Box>
			</Group>
		</>
	);
}

const sample = {
	questions: [
		"What does Drone Space do?",
		"What kind of drones does Drone Space sell?",
		"How long is the RPL training course?",
	],
};

const links = [
	{
		link: "https://www.anthropic.com/legal/consumer-terms",
		label: "Terms of Service",
	},
	{
		link: "https://www.anthropic.com/legal/privacy",
		label: "Privacy Policy",
	},
	{
		link: "https://www.anthropic.com/legal/aup",
		label: "Usage Policy",
	},
];
