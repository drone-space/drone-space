"use client";

import React, { useContext, useEffect, useState } from "react";

import { ActionIcon, Box, Button, Center, Grid, GridCol, Group, Stack, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { IconCheck, IconSend, IconX } from "@tabler/icons-react";

import text from "@/handlers/validators/form/special/text";
import hasLength from "@/handlers/validators/form/generic/length";
import email from "@/handlers/validators/form/special/email";
import phone from "@/handlers/validators/form/special/phone";
import capitalize from "@/handlers/parsers/string/capitalize";

import request from "@/hooks/request";

import contact from "@/data/contact";

import classes from "./Claude.module.scss";

import { ClaudeContext, typeClaudeTurn } from "@/contexts/Claude";
import { getHotkeyHandler } from "@mantine/hooks";
import ai from "@/data/ai";

interface typePrompt {
	content: string;
}

export default function Claude({
	query,
	chaff,
	children,
	regenerating,
	automatic,
}: {
	query?: string;
	chaff?: string;
	children?: React.ReactNode;
	regenerating?: boolean;
	automatic?: boolean;
}) {
	const claude = useContext(ClaudeContext);

	if (!claude) {
		throw new Error("Outside Claude Context");
	}

	const { submitted, setSubmitted, conversation, setConversation } = claude;

	const form = useForm({
		initialValues: { content: query ? query : "" },
		validate: { content: value => !regenerating && value.trim().length < 1 },
	});

	const error = { title: "", message: "" };

	const parse = (rawData: typePrompt) => {
		return rawData.content.trim();
	};

	const handleSubmit = async (formValues: typePrompt) => {
		if (form.isValid()) {
			try {
				setSubmitted(true);

				const res = await request.post(process.env.NEXT_PUBLIC_API_URL + "/api/claude", {
					method: "POST",
					body: JSON.stringify({
						model: process.env.NEXT_PUBLIC_CLAUDE_MODEL,
						max_tokens: 1024,
						messages: !regenerating
							? [...conversation, { role: "user", content: parse(formValues) }]
							: conversation,
						system: [
							{
								type: "text",
								text: ai.system,
								cache_control: { type: "ephemeral" },
							},
						],
					}),
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				});

				if (!res) {
					notifications.show({
						id: "form-contact-failed-no-response",
						icon: <IconX size={16} stroke={1.5} />,
						title: "Server Unavailable",
						message: `There was no response from the server.`,
						variant: "failed",
					});
				} else {
					// add latest exchange to context
					if (!regenerating) {
						setConversation([
							...conversation,
							{ role: "user", content: parse(formValues) },
							{ role: res.role, content: res.content[0].text },
						]);
					} else {
						conversation.length > 0 &&
							(conversation[conversation.length - 1].role == "assistant"
								? setConversation(
										conversation
											.filter(t => t.content != conversation[conversation.length - 1].content)
											.concat({ role: res.role, content: res.content[0].text })
								  )
								: setConversation(
										conversation.concat({ role: res.role, content: res.content[0].text })
								  ));
					}
				}
			} catch (error) {
				notifications.show({
					id: "form-contact-failed",
					icon: <IconX size={16} stroke={1.5} />,
					title: "Prompt Failed",
					message: "Could not generate response.",
					variant: "failed",
				});

				console.log(error);
			} finally {
				!automatic && form.reset();
				setSubmitted(false);
			}
		}
	};

	return automatic || regenerating ? (
		<form onClick={form.onSubmit(values => handleSubmit(values))}>{children}</form>
	) : (
		<form onSubmit={form.onSubmit(values => handleSubmit(values))} noValidate>
			<Group
				// display={regenerating ? "none" : undefined}
				wrap="nowrap"
				gap={"xs"}
				align="end"
				className={classes.group}
			>
				<Textarea
					required
					placeholder={`Ask Claude about ${contact.name.company}`}
					autosize
					minRows={1}
					maxRows={5}
					{...form.getInputProps("content")}
					onKeyDown={getHotkeyHandler([["mod+Enter", form.onSubmit(values => handleSubmit(values))]])}
					classNames={{ input: classes.input }}
					w={"100%"}
					disabled={submitted}
				/>

				<Stack align="end" justify="end">
					<ActionIcon w={32} h={32} variant="light" type="submit" loading={submitted}>
						<IconSend size={24} stroke={2} />
					</ActionIcon>
				</Stack>
			</Group>
		</form>
	);
}
