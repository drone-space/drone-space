"use client";

import React, { useEffect, useState } from "react";

import LayoutSection from "@/layouts/Section";
import { Box, Button, Card, Container, Grid, GridCol, Stack, Text, TextInput, Title } from "@mantine/core";

import classes from "./Main.module.scss";
import { isEmail, useForm } from "@mantine/form";
import email from "@/handlers/validators/form/special/email";
import request from "@/hooks/request";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import images from "@/assets/images";
import contact from "@/data/contact";
import { usePathname } from "next/navigation";

interface typeNewsletter {
	email: string;
}

export default function Main() {
	const pathname = usePathname();

	const [selectedVariant, setSelectedVariant] = useState<"pri" | "sec" | undefined>(undefined);

	useEffect(() => {
		// Randomly choose between two values
		const randomChoice = Math.random() < 0.5 ? "pri" : "sec";
		setSelectedVariant(randomChoice);
	}, [pathname]); // This ensures the random value is set on mount

	const [submitted, setSubmitted] = useState(false);

	const form = useForm({
		initialValues: { email: "" },
		validate: { email: isEmail("Invalid email") },
	});

	const parse = (rawData: typeNewsletter) => {
		return { email: rawData.email.trim().toLowerCase() };
	};

	const handleSubmit = async (formValues: typeNewsletter) => {
		if (form.isValid()) {
			try {
				setSubmitted(true);

				const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/mailchimp", {
					method: "POST",
					body: JSON.stringify(parse(formValues)),
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				});

				const res = await response.json();

				if (!res) {
					notifications.show({
						id: "form-contact-failed-no-response",
						icon: <IconX size={16} stroke={1.5} />,
						title: "Server Unavailable",
						message: `There was no response from the server.`,
						variant: "failed",
					});
				} else {
					if (res.title == "Invalid Resource") {
						notifications.show({
							id: "form-contact-failed-invalid",
							icon: <IconX size={16} stroke={1.5} />,
							title: res.title,
							message: "Please provide a real email address",
							variant: "failed",
						});
					} else if (res.title == "Member Exists") {
						notifications.show({
							id: "form-contact-failed-exists",
							icon: <IconX size={16} stroke={1.5} />,
							title: res.title,
							message: `The owner of that email is already a subscriber.`,
							variant: "failed",
						});
					} else if (res.title == "Forgotten Email Not Subscribed") {
						notifications.show({
							id: "form-contact-failed-forgotten",
							icon: <IconX size={16} stroke={1.5} />,
							title: res.title,
							message: `That email was permanently deleted. You will be redirected to the re-subscribe page`,
							variant: "failed",
						});

						setTimeout(() => window.open(res.url, "_blank"), 5000);
					} else if (res.status >= 400) {
						notifications.show({
							id: "form-contact-failed",
							icon: <IconX size={16} stroke={1.5} />,
							title: res.title,
							message: res.detail,
							variant: "failed",
						});
					} else {
						notifications.show({
							id: "form-contact-success",
							icon: <IconCheck size={16} stroke={1.5} />,
							title: "Subscribed",
							message: "You are now a subscriber",
							variant: "success",
						});
					}
				}
			} catch (error) {
				notifications.show({
					id: "form-contact-failed",
					icon: <IconX size={16} stroke={1.5} />,
					title: "Subscription Failed",
					message: (error as Error).message,
					variant: "failed",
				});
			} finally {
				form.reset();
				setSubmitted(false);
			}
		}
	};

	const bg = {
		pri: images.patterns.image1.pri,
		sec: images.patterns.image1.sec,
	};

	return (
		<LayoutSection
			containerized="responsive"
			padded="xl"
			className={classes.section}
			style={{ backgroundImage: `url('${selectedVariant == "pri" ? bg.pri : bg.sec}')` }}
		>
			<div className={classes.overlay}></div>

			<Stack gap={"xl"} py={"xl"} pos={"relative"} align="center">
				<Stack align="center">
					<Title order={2} c={"white"} ta={"center"}>
						Join the {contact.name.company} Community!
					</Title>
					<Text ta={"center"} w={{ md: "80%" }}>
						Stay in the loop with the latest updates, exclusive offers, and insider news from{" "}
						{contact.name.company}. Sign up for our newsletter and be the first to know about everything we
						have in store!
					</Text>
				</Stack>

				<Box
					w={"100%"}
					maw={480}
					component="form"
					onSubmit={form.onSubmit(values => handleSubmit(values))}
					noValidate
				>
					<Grid gutter={{ base: "md", xs: 0 }}>
						<GridCol span={{ base: 12, xs: 9 }}>
							<TextInput
								required
								placeholder={`Your Email`}
								{...form.getInputProps("email")}
								variant="filled"
								classNames={{
									input: classes.input,
								}}
							/>
						</GridCol>
						<GridCol span={{ base: 12, xs: 3 }}>
							<Button
								fullWidth
								type="submit"
								loading={submitted}
								className={classes.button}
								color={selectedVariant == "pri" ? "pri" : "sec.3"}
								c={selectedVariant == "pri" ? "sec.3" : "pri"}
							>
								{submitted ? "Subscribing" : "Subscribe"}
							</Button>
						</GridCol>
					</Grid>
				</Box>
			</Stack>
		</LayoutSection>
	);
}
