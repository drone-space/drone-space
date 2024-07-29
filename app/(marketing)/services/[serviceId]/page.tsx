import React from "react";

import NextImage from "next/image";
import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";

import { typeParams } from "./layout";
import services from "@/data/services";
import link from "@/handlers/parsers/string/link";

import { Grid, GridCol, Stack, Title, Text, ThemeIcon, List, ListItem, Button, Image } from "@mantine/core";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import CardServiceFeature from "@/components/card/service/Feature";
import CtaService from "@/partials/cta/Service";

export default function ServiceDetails({ params }: typeParams) {
	const data = services.find(s => link.linkify(s.title) == params.serviceId);

	const featureless = data?.desc.features.desc.find(f => !f.desc);

	return (
		<LayoutPage>
			<LayoutSection
				bordered={featureless ? false : true}
				shadowed={featureless ? true : false}
				padded
				containerized="responsive"
			>
				<Grid gutter={{ base: 32, md: 64 }}>
					<GridCol span={{ sm: 6, lg: 7 }}>
						<Stack gap={"xl"}>
							<Stack gap={"xs"}>
								{/* <Title order={2} fz={{ sm: "xl", md: 24 }} fw={"bold"}>
								{data?.title}
							</Title> */}

								<Stack gap={"xs"}>
									{data?.desc.intro.map(item => (
										<Text key={item} fz={{ sm: "sm", lg: "md" }}>
											{item}
										</Text>
									))}
								</Stack>
							</Stack>

							<List
								visibleFrom="md"
								withPadding={true}
								icon={
									<ThemeIcon size={16} color="green.6" c={"white"} radius={"xl"}>
										<IconCheck size={12} stroke={2} />
									</ThemeIcon>
								}
							>
								{data?.desc.features.desc.map(item => (
									<ListItem key={item.title} fz={{ md: "sm", lg: "md" }}>
										{item.title}
									</ListItem>
								))}
							</List>
						</Stack>
					</GridCol>
					<GridCol span={{ sm: 6, lg: 5 }}>
						<Stack>
							<Image
								src={data?.image}
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

			{!featureless && (
				<LayoutSection
					shadowed
					padded
					containerized="responsive"
					bg={"light-dark(var(--mantine-color-gray-1),var(--mantine-color-gray-1))"}
				>
					<Stack gap={"xl"} align="center">
						<Stack gap={"xs"}>
							<Title order={2} fz={{ sm: "xl", md: 24 }} fw={"bold"} ta={"center"}>
								Features
							</Title>
							<Text ta={"center"}>{data?.desc.features.title}</Text>
						</Stack>

						<Grid justify="center">
							{data?.desc.features.desc.map(feature => (
								<GridCol
									key={feature.title}
									span={data?.desc.features.desc.length < 4 ? { md: 4 } : { md: 6 }}
								>
									<CardServiceFeature data={feature} />
								</GridCol>
							))}
						</Grid>
					</Stack>
				</LayoutSection>
			)}

			<CtaService />
		</LayoutPage>
	);
}
