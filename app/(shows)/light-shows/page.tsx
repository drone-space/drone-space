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
	Button,
	Card,
	Center,
	Divider,
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
import AccordionShows from "@/components/accordions/Shows";
import CardShowsPrice from "@/components/card/shows/Price";
import TableShows from "@/components/tables/Shows";
import ModalContactShows from "@/components/modal/contact/Shows";

import {
	IconBallAmericanFootball,
	IconBuildingSkyscraper,
	IconCalendarPlus,
	IconConfetti,
	IconDeviceGamepad,
	IconNumber1,
	IconNumber2,
	IconNumber3,
	IconNumber4,
	IconPhone,
	IconSoccerField,
	IconTicket,
} from "@tabler/icons-react";
import images from "@/assets/images";
import videos from "@/assets/videos";
import { it } from "node:test";
import contact from "@/data/contact";

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
				icon: IconSoccerField,
				label: "Sporting Events",
				item: "Elevate pre-game or halftime shows at major sporting events with dynamic drone performances that engage and entertain fans.",
			},
			{
				icon: IconTicket,
				label: "Public Events",
				item: "Enrich city celebrations, cultural festivals, and community gatherings with captivating light shows that foster a sense of unity and excitement.",
			},
		],
		icons: [{ icon: IconNumber1 }, { icon: IconNumber2 }, { icon: IconNumber3 }, { icon: IconNumber4 }],
		pricing: [
			{
				title: "Small Shows",
				desc: "Up to 100 Drones",
				price: 87000,
			},
			{
				title: "Medium Shows",
				desc: "Up to 200 Drones",
				price: 117000,
			},
			{
				title: "Mid-Large Shows",
				desc: "Up to 300 Drones",
				price: 147000,
			},
			{
				title: "Large Shows",
				desc: "Up to 500+ Drones",
				price: 250000,
			},
			{
				title: "High-End Custom Shows",
				desc: "Depending on level of customization and complexity",
				price: 300000,
				custom: true,
			},
		],
		timeline: [
			{
				title: "Preperation Task",
				desc: [
					{
						item: "Site and launch pad selection",
						duration: "1",
					},
					{
						item: "Location check by pilot",
						duration: "1",
					},
					{
						item: "Working out the technical rider for the launch",
						duration: "1",
					},
					{
						item: "Risk assessment and mitigation",
						duration: "1",
					},
					{
						item: "Contract negotiation and signing",
						duration: "1",
					},
				],
			},
			{
				title: "Creative and Pre-production Task",
				desc: [
					{
						item: "Concept discussion with client",
						duration: "1 - 2",
					},
					{
						item: "Preparing the Storyboard",
						duration: "1 - 2",
					},
					{
						item: "Creating the static figures",
						duration: "1 - 2",
					},
					{
						item: "Full animation (10 days before the 1st test flight)",
						duration: "1 - 2",
					},
					{
						item: "Preparing the technical part of the animation, crosscheck designers and pilots",
						duration: "1 - 3",
					},
				],
			},
			{
				title: "Tech Preperation Task",
				desc: [
					{
						item: "Team appointment",
						duration: "1",
					},
					{
						item: "KCAA authorization and permits",
						duration: "1 - 3",
					},
					{
						item: "County permits",
						duration: "1 - 3",
					},
					{
						item: "Site preparation",
						duration: null,
					},
				],
			},
			{
				title: "On-Site Task",
				desc: [
					{
						item: "Team arrival",
						duration: "3 - 4",
					},
					{
						item: "Tests with a small set of drones",
						duration: "3 - 4",
					},
					{
						item: "Dress rehearsal",
						duration: "4",
					},
					{
						item: "Reserve day",
						duration: "4",
					},
					{
						item: "Show time",
						duration: "4",
					},
				],
			},
			{
				title: "Event Activations",
				desc: [
					{
						item: "Soundtrack production of the drone light show",
						duration: "2 - 4",
					},
					{
						item: "Capturing the show",
						duration: "4",
					},
				],
			},
			{
				title: "After The Show",
				desc: [
					{
						item: "Team debrief and packing of equipment",
						duration: "4",
					},
					{
						item: "Preparation and approval of the content publication with client",
						duration: "5",
					},
					{
						item: "Report and delivery of raw footage",
						duration: "5",
					},
				],
			},
		],
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
					</Stack>

					<Grid gutter={"xl"}>
						<GridCol span={{ base: 12, sm: 6 }}>
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
						<GridCol span={{ base: 12, sm: 6 }}>
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
				shadowed
				containerized={"responsive"}
				bg={"light-dark(var(--mantine-color-pri-light),var(--mantine-color-pri-light))"}
			>
				<Stack gap={48}>
					<Stack gap={"xs"} align="center">
						<Title order={2} fw={"bold"} ta={"center"} fz={{ md: 24 }} w={{ md: "80%" }}>
							Versatile Applications
						</Title>

						<Text ta={"center"} w={{ md: "80%" }}>
							Drone Space light shows are perfect for a wide range of events and celebrations, adding a
							unique and memorable touch to any occasion
						</Text>
					</Stack>

					<Grid>
						{data.applications.map(application => (
							<GridCol key={application.label} span={{ base: 12, xs: 6, md: 3 }}>
								<CardShowsApplications data={application} />
							</GridCol>
						))}
					</Grid>
				</Stack>
			</LayoutSection>

			<LayoutSection padded shadowed containerized={"responsive"}>
				<Grid gutter={{ base: 48, md: "md" }}>
					<GridCol span={{ basE: 12, md: 5.5 }}>
						<Stack gap={48}>
							<Stack gap={"xs"} align="center">
								<Title
									order={2}
									fw={"bold"}
									ta={"center"}
									fz={{ md: "md", lg: "lg" }}
									w={{ md: "80%" }}
								>
									FAQ&apos;s
								</Title>

								<Text fz={{ base: "sm", lg: "md" }} ta={"center"}>
									Below are some general questions to familiarize yourself
								</Text>
							</Stack>

							<AccordionShows variant="default" />
						</Stack>
					</GridCol>

					<GridCol span={{ md: 1 }} visibleFrom="md">
						<Center h={"100%"}>
							<Divider orientation="vertical" color="sec.3" />
						</Center>
					</GridCol>

					<GridCol span={{ basE: 12, md: 5.5 }}>
						<Stack gap={48}>
							<Stack gap={"xs"} align="center">
								<Title
									order={2}
									fw={"bold"}
									ta={"center"}
									fz={{ md: "md", lg: "lg" }}
									w={{ md: "80%" }}
								>
									Factors Affecting the Cost
								</Title>

								<Text fz={{ base: "sm", lg: "md" }} ta={"center"}>
									Here are some general considerations and typical pricing ranges
								</Text>
							</Stack>

							<AccordionShows variant="factors" />
						</Stack>
					</GridCol>
				</Grid>
			</LayoutSection>

			<LayoutSection
				padded
				shadowed
				containerized={"responsive"}
				bg={"light-dark(var(--mantine-color-sec-light),var(--mantine-color-sec-light))"}
			>
				<Stack gap={48}>
					<Stack gap={"xs"} align="center">
						<Title order={2} fw={"bold"} ta={"center"} fz={{ md: 24 }} w={{ md: "80%" }}>
							Typical Pricing Ranges
						</Title>
					</Stack>

					<Grid justify="center">
						{data.pricing.map(
							price =>
								data.pricing.indexOf(price) < 3 && (
									<GridCol key={price.title} span={{ base: 12, xs: 6, md: 4 }}>
										<CardShowsPrice data={price} />
									</GridCol>
								)
						)}

						{data.pricing.map(
							price =>
								data.pricing.indexOf(price) > 2 && (
									<GridCol key={price.title} span={{ base: 12, xs: 6, md: 5 }}>
										<CardShowsPrice data={price} />
									</GridCol>
								)
						)}
					</Grid>
				</Stack>
			</LayoutSection>

			<LayoutSection padded containerized={"responsive"}>
				<Stack gap={48}>
					<Stack gap={"xs"} align="center">
						<Title order={2} fw={"bold"} ta={"center"} fz={{ md: 24 }} w={{ md: "80%" }}>
							Project Timeline
						</Title>

						<Text ta={"center"} w={{ md: "80%" }}>
							All our drone light shows take 12-15 minutes
						</Text>
					</Stack>

					<Grid>
						{data.timeline.map(item => (
							<GridCol key={item.title} span={{ base: 12, md: 6 }}>
								<Card
									withBorder
									bg={"gray.1"}
									style={{ boxShadow: "var(--mantine-shadow-xs)" }}
									h={"100%"}
								>
									<Stack>
										<Title order={3} fw={"bold"} ta={"center"} fz={{ md: "lg" }}>
											<Text component="span" inherit visibleFrom="md">
												{data.timeline.indexOf(item) + 1}.{" "}
											</Text>
											{item.title}
										</Title>
										<TableShows data={item.desc} />
									</Stack>
								</Card>
							</GridCol>
						))}
					</Grid>
				</Stack>
			</LayoutSection>

			<LayoutSection
				padded
				containerized={"responsive"}
				bg={"light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"}
				c={"light-dark(var(--mantine-color-white),var(--mantine-color-white))"}
			>
				<Stack gap={48}>
					<Grid align="center">
						<GridCol span={{ base: 12, md: 8, lg: 9 }}>
							<Stack gap={"xs"}>
								<Title
									order={2}
									fw={"bold"}
									ta={{ base: "center", md: "start" }}
									fz={{ base: "lg", sm: "xl" }}
									c={"light-dark(var(--mantine-color-sec-3),var(--mantine-color-sec-3))"}
								>
									Book Your Drone Light Show Today
								</Title>

								<Text ta={{ base: "center", md: "start" }} fz={{ base: "xs", md: "sm" }}>
									Drone Space&apos;s commitment to excellence and innovation ensures that our drone
									light shows will not only meet but exceed the expectations of our clients and
									audiences. As we continue to lead the way in drone technology, we invite you to
									experience the magic and wonder of our drone light shows, setting new standards for
									entertainment in Kenya and beyond.
								</Text>
							</Stack>
						</GridCol>

						<GridCol span={{ base: 12, md: 4, lg: 3 }}>
							<Flex
								direction={{ base: "column", sm: "row", md: "column" }}
								justify={"center"}
								align={{ base: "center", md: "end" }}
								gap={"md"}
							>
								<ModalContactShows>
									<Button
										miw={200}
										color="sec.3"
										c={"pri"}
										leftSection={<IconCalendarPlus size={16} stroke={1.5} />}
									>
										Book Show
									</Button>
								</ModalContactShows>
								<Button
									component="a"
									href={`tel:${contact.phones.find(p => p.type == "primary")?.value}`}
									miw={200}
									color="sec.3"
									c={"pri"}
									leftSection={<IconPhone size={16} stroke={1.5} />}
								>
									{contact.phones.find(p => p.type == "primary")?.value}
								</Button>
							</Flex>
						</GridCol>
					</Grid>
				</Stack>
			</LayoutSection>
		</LayoutPage>
	);
}
