import React from "react";

import { Metadata } from "next";
import Link from "next/link";
import NextImage from "next/image";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import FormContact from "@/partials/forms/Contact";
import HeroShows from "@/partials/heros/Shows";

import {
	Anchor,
	AspectRatio,
	Avatar,
	Box,
	Button,
	Card,
	Center,
	Container,
	Divider,
	Flex,
	Grid,
	GridCol,
	Group,
	Image,
	List,
	ListItem,
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
import CardShowsUnderstand from "@/components/card/shows/Understand";

import {
	IconBallAmericanFootball,
	IconBuildingSkyscraper,
	IconCalendarPlus,
	IconChevronsRight,
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
import shows from "@/data/shows";

export const metadata: Metadata = { title: "Drone Light Show" };

export default async function LighShow() {
	const data = shows;

	return (
		<LayoutPage>
			<HeroShows />

			<LayoutSection
				shadowed
				style={{ borderTop: "3px solid var(--mantine-color-sec-3)" }}
				bg={"light-dark(var(--mantine-color-pri-light),var(--mantine-color-pri-light))"}
			>
				<Grid gutter={0}>
					<GridCol span={{ base: 12, sm: 6 }}>
						<Stack h={"100%"}>
							<Image
								src={images.shows.talk}
								alt={"Let's Talk Drone Light Shows"}
								loading="lazy"
								mih={"100%"}
								component={NextImage}
								width={1920}
								height={1080}
							/>
						</Stack>
					</GridCol>
					<GridCol span={{ base: 12, sm: 6 }}>
						<Container size={"sm"} py={64} px={{ md: "xl" }}>
							<Stack>
								<Title order={2} fw={"bold"} ta={{ base: "center", md: "start" }} fz={{ md: 24 }}>
									Let&apos;s Talk Drone Light Shows
								</Title>

								<Divider color="sec.3" size={2} />

								<List
									spacing={"xs"}
									icon={<IconChevronsRight size={32} stroke={2} color="var(--mantine-color-pri-9)" />}
								>
									{data.talk.map(item => (
										<ListItem key={item}>{item}</ListItem>
									))}
								</List>
							</Stack>
						</Container>
					</GridCol>
				</Grid>
			</LayoutSection>

			<LayoutSection
				// padded
				shadowed
				// containerized={"responsive"}
			>
				<Grid gutter={0}>
					<GridCol span={{ base: 12, sm: 6 }} order={{ base: 1, sm: 2 }}>
						<Stack h={"100%"}>
							<Image
								src={images.shows.understanding}
								alt={"Understanding Drone Light Shows"}
								loading="lazy"
								mih={"100%"}
								component={NextImage}
								width={1920}
								height={1080}
							/>
						</Stack>
					</GridCol>
					<GridCol span={{ base: 12, sm: 6 }} order={{ base: 2, sm: 1 }}>
						<Container size={"sm"} py={64} px={{ md: "xl" }}>
							<Stack gap={"xl"}>
								<Title order={2} fw={"bold"} ta={{ base: "center", sm: "start" }} fz={{ md: 24 }}>
									Understanding Drone Light Shows
								</Title>

								<Grid>
									{data.understand.map(item => (
										<GridCol key={item.label} span={{ base: 12, md: 6 }}>
											<CardShowsUnderstand data={item} />
										</GridCol>
									))}
								</Grid>
							</Stack>
						</Container>
					</GridCol>
				</Grid>
			</LayoutSection>

			<LayoutSection shadowed bg={"light-dark(var(--mantine-color-pri-light),var(--mantine-color-pri-light))"}>
				<Grid gutter={0}>
					<GridCol span={{ base: 12, sm: 6 }}>
						<AspectRatio ratio={1920 / 1080} h={"100%"}>
							<video
								width="100%"
								controls
								autoPlay
								muted
								loop
								// style={{ borderRadius: "var(--mantine-radius-sm)", overflow: "hidden" }}
								poster={images.gallery.innovation.jamuhuri.yr2020.image9}
								height={"100%"}
							>
								<source src={videos.hero.lightShow} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</AspectRatio>
					</GridCol>
					<GridCol span={{ base: 12, sm: 6 }}>
						<Container size={"sm"} py={64} px={{ md: "xl" }}>
							<Stack gap={"xl"}>
								<Title
									order={2}
									fw={"bold"}
									ta={{ base: "center", sm: "start" }}
									fz={{ md: 24 }}
									w={{ md: "75%" }}
								>
									Advantages of Drone Space Light Shows
								</Title>

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
							</Stack>
						</Container>
					</GridCol>
				</Grid>
			</LayoutSection>

			<LayoutSection shadowed>
				<Grid gutter={0}>
					<GridCol span={{ base: 12, sm: 6 }} order={{ base: 1, sm: 2 }}>
						<Stack h={"100%"}>
							<Image
								src={images.shows.hny}
								alt={"Why Choose Drone Light Shows?"}
								loading="lazy"
								mih={"100%"}
								component={NextImage}
								width={1920}
								height={1080}
							/>
						</Stack>
					</GridCol>
					<GridCol span={{ base: 12, sm: 6 }} order={{ base: 2, sm: 1 }}>
						<Container size={"sm"} py={64} px={{ md: "xl" }}>
							<Stack gap={"xl"}>
								<Title
									order={2}
									fw={"bold"}
									ta={{ base: "center", sm: "start" }}
									fz={{ md: 24 }}
									w={{ md: "80%" }}
								>
									Why Choose Drone Light Shows Over Fireworks?
								</Title>

								<List spacing={"xs"} listStyleType="none">
									{data.why.map(item => (
										<Stack key={item.label} gap={0}>
											{data.why.indexOf(item) > 0 && (
												<Divider size={3} color="sec.3" variant="dotted" my={"xs"} />
											)}

											<ListItem>
												<Text component="span" inherit fw={"bold"} c={"pri.9"}>
													{item.label}
												</Text>
												: {item.item}
											</ListItem>
										</Stack>
									))}
								</List>
							</Stack>
						</Container>
					</GridCol>
				</Grid>
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

			<LayoutSection
				padded={96}
				containerized={"responsive"}
				c={"light-dark(var(--mantine-color-white),var(--mantine-color-white))"}
				style={{
					backgroundImage: `url(${images.shows.ready})`,
					backgroundPosition: "center center",
					backgroundSize: "cover",
				}}
				pos={"relative"}
			>
				<Box
					pos={"absolute"}
					left={0}
					top={0}
					right={0}
					bottom={0}
					style={{ backgroundColor: "rgba(0,0,0,0.40)" }}
				></Box>

				<Stack gap={48} pos={"relative"}>
					<Grid align="center">
						<GridCol span={{ base: 12, md: 8, lg: 9 }}>
							<Stack gap={"xs"}>
								<Title
									order={2}
									fw={"bold"}
									ta={{ base: "center", md: "start" }}
									fz={{ base: "lg", sm: "xl", md: 28 }}
									c={"light-dark(var(--mantine-color-sec-3),var(--mantine-color-sec-3))"}
								>
									Your Brand, Your Story, Our Drones:
									<br />
									Be the First to Make a Statement in Kenya!
								</Title>

								<Text ta={{ base: "center", md: "start" }} fz={{ base: "xs", md: "sm" }}>
									As one of the leading providers of drone light shows in Kenya, Drone Space is at the
									forefront of this innovative technology. Join the ranks of innovative brands by
									booking your exclusive drone light show with us.
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

			<LayoutSection padded shadowed containerized={"responsive"}>
				<Grid gutter={{ base: "xl", md: "md" }}>
					<GridCol span={{ base: 12, md: 5.5 }}>
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

					<GridCol span={{ base: 12, md: 5.5 }}>
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
									The following are some factors that determine the pricing
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
				bg={"light-dark(var(--mantine-color-pri-light),var(--mantine-color-pri-light))"}
			>
				<Stack gap={48}>
					<Stack gap={"xs"} align="center">
						<Title order={2} fw={"bold"} ta={"center"} fz={{ md: 24 }} w={{ md: "80%" }}>
							Typical Pricing Ranges
						</Title>

						<Text fz={{ base: "sm", lg: "md" }} ta={"center"}>
							Here are some general considerations and typical pricing ranges
						</Text>
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

					<Text ta={"center"}>
						<Text component="span" inherit fw={500} c={"pri"}>
							Note:
						</Text>{" "}
						All our drone light shows take 12-15 minutes.
					</Text>
				</Stack>
			</LayoutSection>

			<LayoutSection padded containerized={"responsive"}>
				<Stack gap={48}>
					<Stack gap={"xs"} align="center">
						<Title order={2} fw={"bold"} ta={"center"} fz={{ md: 24 }} w={{ md: "80%" }}>
							Project Timeline
						</Title>
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
				padded={96}
				containerized={"responsive"}
				c={"light-dark(var(--mantine-color-white),var(--mantine-color-white))"}
				style={{
					backgroundImage: `url(${images.shows.talk})`,
					backgroundPosition: "top center",
					backgroundSize: "cover",
				}}
				pos={"relative"}
			>
				<Box
					pos={"absolute"}
					left={0}
					top={0}
					right={0}
					bottom={0}
					style={{ backgroundColor: "rgba(0,0,0,0.40)" }}
				></Box>

				<Stack gap={48} pos={"relative"}>
					<Grid align="center">
						<GridCol span={{ base: 12, md: 8, lg: 9 }}>
							<Stack gap={"xs"}>
								<Title
									order={2}
									fw={"bold"}
									ta={{ base: "center", md: "start" }}
									fz={{ base: "lg", sm: "xl", md: 28 }}
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
