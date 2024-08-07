import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import FormContact from "@/partials/forms/Contact";
import HeroShows from "@/partials/heros/Shows";

import {
	Anchor,
	AspectRatio,
	Avatar,
	Card,
	Flex,
	Grid,
	GridCol,
	Group,
	Stack,
	Text,
	ThemeIcon,
	Title,
	Tooltip,
} from "@mantine/core";

import CardShowsAdvantages from "@/components/card/shows/Advantages";
import CardShowsApplications from "@/components/card/shows/Applications";

import {
	IconBuildingSkyscraper,
	IconConfetti,
	IconDeviceGamepad,
	IconNumber1,
	IconNumber2,
	IconNumber3,
	IconNumber4,
	IconTicket,
} from "@tabler/icons-react";
import images from "@/assets/images";
import videos from "@/assets/videos";

export const metadata: Metadata = { title: "Drone Light Show" };

export default async function LighShow() {
	const data = {
		advantages: [
			{
				label: "Eco-Friendly",
				item: "Unlike traditional fireworks, our drone light shows produce no harmful smoke, debris, or noise pollution, making them an environmentally responsible choice.",
			},
			{
				label: "Enhanced Safety",
				item: "Drones pose a significantly lower risk of fire and accidents compared to fireworks, ensuring a safe experience for all spectators.",
			},
			{
				label: "Innovation",
				item: "As a cutting-edge technology, drone light shows offer a modern and innovative form of entertainment, setting new standards for visual displays.",
			},
			{
				label: "Reusability",
				item: "Our drones are designed for multiple uses, offering a sustainable and cost-effective alternative to single-use fireworks.",
			},
		],
		applications: [
			{
				icon: IconConfetti,
				label: "Festivals and Holidays",
				item: "Celebrate national holidays such as Mashujaa Day, Jamhuri Day, Christmas, and New Year’s Eve with spectacular drone light shows that create unforgettable experiences for communities.",
			},
			{
				icon: IconBuildingSkyscraper,
				label: "Corporate Events",
				item: "Enhance product launches, corporate anniversaries, and brand promotions with customized drone displays that leave a lasting impression on clients and stakeholders.",
			},
			{
				icon: IconDeviceGamepad,
				label: "Sporting Events",
				item: "Elevate pre-game or halftime shows at major sporting events with dynamic drone performances that engage and entertain fans.",
			},
			{
				icon: IconTicket,
				label: "Public Events",
				item: "Enrich city celebrations, cultural festivals, and community gatherings with captivating light shows that foster a sense of unity and excitement. applications",
			},
		],
		icons: [{ icon: IconNumber1 }, { icon: IconNumber2 }, { icon: IconNumber3 }, { icon: IconNumber4 }],
	};

	return (
		<LayoutPage>
			<HeroShows />

			<LayoutSection padded shadowed containerized={"responsive"}>
				<Stack gap={48}>
					<Stack gap={"xs"} align="center">
						<Title order={2} fw={"bold"} ta={"center"} fz={{ md: 24 }} w={{ md: "80%" }}>
							Advantages of Drone Space Light Shows
						</Title>

						{/* <Text ta={"center"}>{data.hub.prose}</Text> */}
					</Stack>

					<Grid gutter={"xl"}>
						<GridCol span={{ base: 12, md: 6 }}>
							<AspectRatio ratio={1920 / 1080} h={"100%"}>
								<video
									width="100%"
									controls
									autoPlay
									muted
									loop
									style={{ borderRadius: "var(--mantine-radius-sm)", overflow: "hidden" }}
									poster={images.gallery.innovation.jamuhuri.yr2020.image9}
									height={"100%"}
								>
									<source src={videos.hero.lightShow} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							</AspectRatio>
						</GridCol>
						<GridCol span={{ base: 12, md: 6 }}>
							<Grid>
								{data.advantages.map(advantage => (
									<GridCol key={advantage.label} span={{ base: 12 }}>
										<CardShowsAdvantages
											data={{
												...advantage,
												icon: data.icons[data.advantages.indexOf(advantage)],
											}}
										/>
									</GridCol>
								))}
							</Grid>
						</GridCol>
					</Grid>
				</Stack>
			</LayoutSection>

			<LayoutSection
				padded
				containerized={"responsive"}
				bg={"light-dark(var(--mantine-color-pri-light),var(--mantine-color-pri-light))"}
			>
				<Stack gap={48}>
					<Stack gap={"xs"} align="center">
						<Title order={2} fw={"bold"} ta={"center"} fz={{ md: 24 }} w={{ md: "80%" }}>
							Versatile Applications
						</Title>

						<Text ta={"center"}>
							Drone Space light shows are perfect for a wide range of events and celebrations, adding a
							unique and memorable touch to any occasion
						</Text>
					</Stack>

					<Grid>
						{data.applications.map(application => (
							<GridCol key={application.label} span={{ base: 12, md: 3 }}>
								<CardShowsApplications data={application} />
							</GridCol>
						))}
					</Grid>
				</Stack>
			</LayoutSection>
		</LayoutPage>
	);
}
