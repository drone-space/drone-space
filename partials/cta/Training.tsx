import React from "react";

import { Stack, Group, Text, ThemeIcon, Button, Flex, Title } from "@mantine/core";

import { IconCheck, IconFileDownload, IconArrowRight, IconSchool } from "@tabler/icons-react";

import LayoutSection from "@/layouts/Section";
import ModalContactTraining from "@/components/modal/contact/Training";
import documents from "@/assets/documents";

import courses from "@/data/courses";

export default function Training({ data }: { data: { type: "junior" | "basic" | "advanced" } }) {
	let title;
	let process;

	switch (data.type) {
		case "junior":
			title = "Junior Holiday Camp";
			process = null;
			break;
		case "basic":
			title = courses.basic.title.short;
			process = courses.basic.process;
			break;
		case "advanced":
			title = courses.advanced.title.short;
			process = courses.advanced.process;
			break;
		default:
			break;
	}

	return (
		<LayoutSection
			shadowed
			padded
			containerized={"responsive"}
			bg={"light-dark(var(--mantine-color-pri-light), var(--mantine-color-pri-light))"}
		>
			<Stack gap={"xl"} align="center">
				<Title ta={"center"} order={2}>
					Enroll for {title} Training Today
				</Title>

				<Stack gap={"sm"} align="center">
					<Text ta={"center"} w={{ md: "80%" }}>
						Gain knowledge and an understanding of the evolving regulations and how they apply to training
						of Remote Pilots as well as add drone operation skills to your CV.
					</Text>

					{process && (
						<Flex direction={{ base: "column", sm: "row" }} align={"center"} gap={{ base: "xs", md: "lg" }}>
							{process.map(item => (
								<Group gap={"xs"} key={item.title} fw={500}>
									<ThemeIcon size={16} color="green.6" c={"white"} radius={"xl"}>
										<IconCheck size={12} stroke={2} />
									</ThemeIcon>

									<span>{item.title}</span>
								</Group>
							))}
						</Flex>
					)}
				</Stack>

				<Group justify="center">
					<Button
						component="a"
						href={documents.brochure}
						download={"brochure"}
						leftSection={<IconFileDownload size={16} stroke={1.5} />}
					>
						Get the Brochure
					</Button>
					<ModalContactTraining>
						<Button leftSection={<IconSchool size={16} stroke={1.5} />} variant="light">
							Join the next Class
						</Button>
					</ModalContactTraining>
				</Group>
			</Stack>
		</LayoutSection>
	);
}
