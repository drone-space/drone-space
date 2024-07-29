import React from "react";

import { Stack, Group, Text, ThemeIcon, Button, Flex, Title } from "@mantine/core";

import { IconCheck, IconFileDownload, IconArrowRight, IconPhoneCall } from "@tabler/icons-react";

import LayoutSection from "@/layouts/Section";
import ModalContactCallback from "@/components/modal/contact/Callback";
import documents from "@/assets/documents";

import courses from "@/data/courses";

export default function Service() {
	return (
		<LayoutSection
			shadowed
			padded
			containerized={"responsive"}
			bg={"light-dark(var(--mantine-color-pri-light), var(--mantine-color-pri-light))"}
		>
			<Stack gap={"xl"} align="center">
				<Title ta={"center"} order={2}>
					Request A Callback Today
				</Title>

				<Stack gap={"sm"} align="center">
					<Text ta={"center"} w={{ md: "80%" }}>
						Find out more about our services. Get in touch with us and one of our representatives will get
						back to you within 24 hours.
					</Text>
				</Stack>

				<Group justify="center">
					<Button
						component="a"
						href={documents.profile}
						download={"company-profile"}
						leftSection={<IconFileDownload size={16} stroke={1.5} />}
					>
						Company Profile
					</Button>
					<ModalContactCallback>
						<Button leftSection={<IconPhoneCall size={16} stroke={1.5} />} variant="light">
							Request Callback
						</Button>
					</ModalContactCallback>
				</Group>
			</Stack>
		</LayoutSection>
	);
}
