import React from "react";

import { Stack, Group, Text, ThemeIcon, Button, Flex, Title, Grid, GridCol } from "@mantine/core";

import {
	IconCheck,
	IconFileDownload,
	IconArrowRight,
	IconCamera,
	IconSeeding,
	IconChartBar,
} from "@tabler/icons-react";

import LayoutSection from "@/layouts/Section";

import courses from "@/data/courses";
import Link from "next/link";
import link from "@/handlers/parsers/string/link";
import categories from "@/data/categories";

export default function Categories() {
	return (
		<LayoutSection
			shadowed
			padded
			containerized={"responsive"}
			bg={"light-dark(var(--mantine-color-pri-light), var(--mantine-color-pri-light))"}
		>
			<Grid align="center" gutter={32}>
				<GridCol span={{ md: 5 }}>
					<Stack gap={"xs"}>
						<Title ta={{ base: "center", md: "start" }} order={2}>
							Discover More Drones
						</Title>
						<Text ta={{ base: "center", md: "start" }} w={{ md: "80%" }}>
							Browse though our catalogue to see more of what we offer!
						</Text>
					</Stack>
				</GridCol>
				<GridCol span={{ md: 7 }}>
					<Flex direction={"column"} align={{ base: "center", md: "end" }}>
						<Grid>
							{categories.map(category => (
								<GridCol key={category.label} span={{ base: 12, xs: 4 }}>
									<Button
										fullWidth
										key={category.label}
										mih={{ xs: 120 }}
										miw={{ xs: 160 }}
										component={Link}
										href={`/shop/drones/${link.linkify(category.label)}`}
									>
										<Flex direction={{ base: "row", xs: "column" }} gap={"md"} align="center">
											<category.icon size={24} stroke={1.5} />
											<Text component="span" inherit ta={"center"}>
												{category.label} Drones
											</Text>
										</Flex>
									</Button>
								</GridCol>
							))}
						</Grid>
					</Flex>
				</GridCol>
			</Grid>
		</LayoutSection>
	);
}
