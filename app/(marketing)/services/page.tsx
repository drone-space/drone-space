import React from "react";

import { Metadata } from "next";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import services from "@/data/services";
import {
	Grid,
	GridCol,
	Stack,
	Image,
	Title,
	Text,
	List,
	ThemeIcon,
	ListItem,
	Button,
	Group,
	Anchor,
} from "@mantine/core";

import NextImage from "next/image";
import Link from "next/link";
import link from "@/handlers/parsers/string/link";
import { IconArrowRight, IconCheck, IconChevronRight } from "@tabler/icons-react";

export const metadata: Metadata = { title: "Drone Solutions" };

export default async function Services() {
	return (
		<LayoutPage>
			{services.map(service => (
				<LayoutSection
					key={service.title}
					padded={96}
					containerized={"responsive"}
					bg={
						services.indexOf(service) % 2 == 0
							? undefined
							: "light-dark(var(--mantine-color-gray-1),var(--mantine-color-gray-1))"
					}
				>
					<Grid gutter={{ base: 32, md: 64 }}>
						<GridCol
							span={{ sm: 6, lg: 7 }}
							order={{ base: 2, sm: services.indexOf(service) % 2 == 0 ? 1 : 2 }}
						>
							<Stack gap={"xl"} align="start">
								<Stack gap={"xs"}>
									<Title order={2} fz={{ sm: "xl", md: 24 }} fw={"bold"}>
										{service.title}
									</Title>

									<Text fz={{ sm: "sm", lg: "md" }}>{service.desc.intro[0]}</Text>

									<List
										visibleFrom="md"
										withPadding={true}
										icon={
											<ThemeIcon size={16} color="green.6" c={"white"} radius={"xl"}>
												<IconCheck size={12} stroke={2} />
											</ThemeIcon>
										}
									>
										{service.desc.features.desc.map(
											item =>
												service.desc.features.desc.indexOf(item) < 3 && (
													<ListItem key={item.title} fz={{ md: "sm", lg: "md" }}>
														{item.title}
													</ListItem>
												)
										)}
									</List>
								</Stack>

								<Anchor
									underline="hover"
									component={Link}
									href={`/services/${link.linkify(service.title)}`}
								>
									<Group gap={"xs"}>
										<Text component="span" inherit fz={"sm"}>
											More on {service.title}
										</Text>
										<IconChevronRight color="var(--mantine-color-pri-9)" size={16} stroke={2} />
									</Group>
								</Anchor>
							</Stack>
						</GridCol>
						<GridCol
							span={{ sm: 6, lg: 5 }}
							order={{ base: 1, sm: services.indexOf(service) % 2 == 0 ? 2 : 1 }}
						>
							<Stack>
								<Image
									src={service.image}
									alt={"Gallery Image"}
									loading="lazy"
									radius={"sm"}
									component={NextImage}
									width={1920}
									height={1080}
								/>
							</Stack>
						</GridCol>
					</Grid>
				</LayoutSection>
			))}
		</LayoutPage>
	);
}
