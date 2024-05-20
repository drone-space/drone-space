import React from "react";
import { useState } from "react";

import { Anchor, Box, Button, Checkbox, Grid, Input, Select, Text, TextInput, Textarea } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

// utils
import { IMaskInput } from "react-imask";
import emailjs from "@emailjs/browser";

// icons
import { IconCheck, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Contact() {
	const [submitted, setSubmitted] = useState(false);

	const form = useForm({
		initialValues: {
			fname: "",
			lname: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
			// policy: false,
		},

		validate: {
			fname: value => (value.trim().length < 2 ? "At least 2 letters" : null),
			lname: value => (value.trim().length < 2 ? "At least 2 letters" : null),
			email: value => (/^\S+@\S+$/.test(value.trim()) ? null : "Invalid email"),
			phone: value => (value && value.trim().length < 18 ? "Invalid Phone Number" : null),
			subject: value => (value.trim().length < 1 ? "Please select a topic" : null),
			message: value => (value.trim().length < 10 ? "Message Too Short" : null),
			// policy: isNotEmpty("You must accept to proceed"),
		},
	});

	const formKeySelector = (subject: string) => {
		const formKey = {
			info: "8R-8SX1GJXdg5jKcg",
			training: "MbhWUntPHPMQK_IsL",
		};

		switch (subject) {
			case "Drone Space Training":
				return formKey.training;
			case "Course Enrollment":
				return formKey.training;
			default:
				return formKey.info;
		}
	};

	const handleSubmit = async () => {
		if (form.isValid()) {
			setSubmitted(true);

			const templateParams = {
				name: `${
					form.values.fname.trim().toLowerCase().charAt(0).toUpperCase() +
					form.values.fname.trim().slice(1).toLowerCase()
				} ${
					form.values.lname.trim().toLowerCase().charAt(0).toUpperCase() +
					form.values.lname.trim().slice(1).toLowerCase()
				}`,
				email: form.values.email.trim().toLowerCase(),
				phone: form.values.phone,
				subject: form.values.subject == "Other" ? "General" : `${form.values.subject}`,
				message: form.values.message.trim(),
			};

			try {
				await emailjs
					.send("service_gmail", "general_inquiries", templateParams, formKeySelector(form.values.subject))
					.then(() => {
						notifications.show({
							id: "contact-form-success",
							withCloseButton: false,
							color: "pri.6",
							icon: <IconCheck size={16} stroke={1.5} />,
							autoClose: 10000,
							title: "Inquiry Sent",
							message: "Someone will get back to you within 24 hours",
							styles: theme => ({
								icon: {
									color: theme.colors.sec[4],
								},
								closeButton: {
									color: theme.colors.pri[6],
								},
							}),
						});
					})
					.then(() => form.reset());
			} catch (error) {
				notifications.show({
					id: "contact-form-fail",
					color: "red",
					icon: <IconX size={16} stroke={1.5} />,
					autoClose: 10000,
					title: "Send Failed",
					message: `Sorry, an error occurred.`,
					styles: theme => ({
						closeButton: {
							color: theme.colors.red[6],
						},
					}),
				});
			}

			setSubmitted(false);
		}
	};

	return (
		<Box component="form" onSubmit={form.onSubmit(handleSubmit)} noValidate>
			<Grid pb={"md"}>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<TextInput required label={"First Name"} placeholder="Your Name" {...form.getInputProps("fname")} />
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<TextInput required label={"Last Name"} placeholder="Your Name" {...form.getInputProps("lname")} />
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<Input.Wrapper label={"Email"} id="email" required>
						<Input
							id="email"
							component={IMaskInput}
							type="email"
							placeholder="Your Email"
							{...form.getInputProps("email")}
						/>
					</Input.Wrapper>
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<Input.Wrapper label={"Phone"} id="phone">
						<Input
							component={IMaskInput}
							id="phone"
							placeholder="Your Phone"
							mask={"+(254) 700 000-000"}
							{...form.getInputProps("phone")}
						/>
					</Input.Wrapper>
				</Grid.Col>
				<Grid.Col span={12}>
					<Select
						label="Inquiry"
						description="What are you inquiring about?"
						placeholder="Select an inquiry"
						data={[
							"Course Enrollment",
							"Drone Purchase",
							"Callback Request",
							"Drone Space Services",
							"Drone Space Training",
							"Other",
						]}
						required
						{...form.getInputProps("subject")}
					/>
				</Grid.Col>
				<Grid.Col span={12}>
					<Textarea
						label={"Message"}
						required
						placeholder="Write your message here..."
						autosize
						minRows={3}
						maxRows={10}
						{...form.getInputProps("message")}
					/>
				</Grid.Col>
				{/* <Grid.Col span={{ base: 12, sm: 12 }}>
					<Checkbox
						size="xs"
						label={
							<Text inherit>
								I have read and accept the{" "}
								<Anchor
									component={Link}
									to={"/policy/terms-and-conditions"}
									inherit
									fw={500}
								>
									terms of use
								</Anchor>
								.
							</Text>
						}
						{...form.getInputProps("policy", { type: "checkbox" })}
					/>
				</Grid.Col> */}
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<Button
						type="reset"
						fullWidth
						color="sec.3"
						c={"pri"}
						onClick={() => form.reset()}
						disabled={submitted}
					>
						Clear
					</Button>
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<Button type="submit" fullWidth loading={submitted}>
						{submitted ? "Submitting" : "Submit"}
					</Button>
				</Grid.Col>
			</Grid>
		</Box>
	);
}
