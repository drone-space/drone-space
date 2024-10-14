"use client";

import React, { useState } from "react";

import { Box, Button, Center, Checkbox, Grid, GridCol, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { IconCheck, IconX } from "@tabler/icons-react";

import text from "@/handlers/validators/form/special/text";
import email from "@/handlers/validators/form/special/email";
import phone from "@/handlers/validators/form/special/phone";
import capitalize from "@/handlers/parsers/string/capitalize";

import request from "@/hooks/request";
import { downloadBrochure } from "@/handlers/downloaders/brochure";

export default function Brochure() {
	const [submitted, setSubmitted] = useState(false);

	const form = useForm({
		initialValues: {
			fname: "",
			lname: "",
			email: "",
			phone: "",
			company: "",
		},

		validate: {
			fname: value => text(value, 2, 24),
			lname: value => text(value, 2, 24),
			email: value => email(value),
			phone: value => phone(value),
			company: value => value.trim().length > 0 && text(value, 2, 24),
		},
	});

	const parse = () => {
		return {
			fname: capitalize.word(form.values.fname.trim()),
			lname: capitalize.word(form.values.lname.trim()),
			email: form.values.email.trim().toLowerCase(),
			phone: form.values.phone?.trim() ? (form.values.phone.trim().length > 0 ? form.values.phone : null) : null,
			company: capitalize.words(form.values.company.trim()),
		};
	};

	const handleSubmit = async () => {
		if (form.isValid()) {
			try {
				setSubmitted(true);

				const res = await request.post(process.env.NEXT_PUBLIC_API_URL + "/api/mailchimp", {
					method: "POST",
					body: JSON.stringify(parse()),
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				});

				if (!res) {
					notifications.show({
						id: "subscribe-failed-no-response",
						icon: <IconX size={16} stroke={1.5} />,
						title: "Server Unavailable",
						message: `There was no response from the server.`,
						variant: "failed",
					});
				} else {
					notifications.show({
						id: "subscribe-success",
						icon: <IconCheck size={16} stroke={1.5} />,
						title: "Submitted",
						message: "Your download will start momentarily",
						variant: "success",
					});

					// trigger download
					await downloadBrochure();
				}
			} catch (error) {
				notifications.show({
					id: "subscribe-failed",
					icon: <IconX size={16} stroke={1.5} />,
					title: "Submisstion Failed",
					message: (error as Error).message,
					variant: "failed",
				});
			} finally {
				form.reset();
				setSubmitted(false);
			}
		}
	};

	return (
		<Box component="form" onSubmit={form.onSubmit(values => handleSubmit())} noValidate>
			<Grid gutter={"xs"}>
				<GridCol span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
					<TextInput
						required
						// label={"First Name"}
						placeholder="First Name *"
						{...form.getInputProps("fname")}
					/>
				</GridCol>

				<GridCol span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
					<TextInput
						required
						// label={"Last Name"}
						placeholder="Last Name *"
						{...form.getInputProps("lname")}
					/>
				</GridCol>

				<GridCol span={{ base: 12 }}>
					<TextInput
						required
						// label={"Email"}
						placeholder={`Email *`}
						{...form.getInputProps("email")}
					/>
				</GridCol>

				<GridCol span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
					<TextInput
						required
						// label={"Phone"}
						placeholder="Phone *"
						{...form.getInputProps("phone")}
					/>
				</GridCol>

				<GridCol span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
					<TextInput
						// label={"Company"}
						placeholder="Company"
						{...form.getInputProps("company")}
					/>
				</GridCol>

				<GridCol span={12}>
					<Grid gutter={"xs"} mt={"md"}>
						<GridCol span={{ base: 12, md: 6 }} visibleFrom="md">
							<Center>
								<Button
									fullWidth
									type="reset"
									variant="light"
									onClick={() => form.reset()}
									disabled={submitted}
								>
									Clear
								</Button>
							</Center>
						</GridCol>
						<GridCol span={{ base: 12, md: 6 }}>
							<Center>
								<Button fullWidth type="submit" loading={submitted}>
									{submitted ? "Downloading" : "Download"}
								</Button>
							</Center>
						</GridCol>
					</Grid>
				</GridCol>
			</Grid>
		</Box>
	);
}
