"use client";

import React, { useRef } from "react";

import NextImage from "next/image";

import {
	Modal,
	Image,
	Stack,
	Button,
	Grid,
	GridCol,
	AspectRatio,
	Title,
	Text,
	List,
	ListItem,
	TableTr,
	TableTd,
	Table,
	TableThead,
	NumberFormatter,
	TableScrollContainer,
	Group,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import classes from "./Shows.module.scss";
import { IconArrowRight, IconChevronRight, IconDrone, IconInfoCircle } from "@tabler/icons-react";
import images from "@/assets/images";
import videos from "@/assets/videos";
import shows from "@/data/shows";
import Link from "next/link";

export default function Shows({ active }: { active?: boolean }) {
	const [opened, { open, close }] = useDisclosure(active ? true : false);

	const mobile = useMediaQuery("(max-width: 36em)");
	const tablet = useMediaQuery("(max-width: 48em)");
	const laptopmd = useMediaQuery("(max-width: 75em)");

	const rows = shows.pricing.map(item => (
		<TableTr key={item.title}>
			<TableTd w={{ md: "25%" }}>{item.title}</TableTd>
			<TableTd w={{ md: "50%" }} visibleFrom="md">
				{item.desc}
			</TableTd>
			<TableTd w={{ md: "25%" }}>
				<Text component="span" fz={{ base: 8, lg: "xs" }}>
					from{" "}
				</Text>
				<NumberFormatter prefix="$ " value={item.price} thousandSeparator />
			</TableTd>
		</TableTr>
	));

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				centered
				size={mobile ? "md" : tablet ? "80vw" : laptopmd ? "85vw" : "60vw"}
				classNames={{ content: classes.content, body: classes.body }}
				// title={"Training Workshop"}
				// closeButtonProps={{ "aria-label": "Close modal" }}
				withCloseButton={false}
			>
				<Grid>
					<GridCol span={{ base: 12, sm: 6 }} visibleFrom="sm">
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
						<Stack justify="space-between" h={"100%"}>
							<Stack gap={"xs"}>
								<Stack gap={"xs"}>
									<Group align="start" justify="space-between">
										<Title order={1} fz={"md"}>
											Drone Space Light Shows
										</Title>

										<Button
											component={Link}
											href={"/light-shows"}
											size="xs"
											// leftSection={<IconInfoCircle size={12} stroke={2} />}
											py={2}
											px={4}
											h={"fit-content"}
										>
											Learn More
										</Button>
									</Group>

									<Text inherit fz={"xs"}>
										Drone Space, an approved drone operator in Kenya, proudly stands as the leader
										and pioneer in drone technology. With a reputation for innovation and
										excellence, Drone Space is thrilled to announce the launch of its new division:
										Drone Light Shows.
									</Text>
								</Stack>

								<List
									spacing={0}
									size="xs"
									icon={
										<IconChevronRight
											size={10}
											stroke={2}
											color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
										/>
									}
								>
									{shows.features.map(feature => (
										<ListItem key={feature.label}>{feature.label}</ListItem>
									))}
								</List>
							</Stack>

							<Table
								fz={{ base: 10, lg: "xs" }}
								verticalSpacing={2}
								bg={"var(--mantine-color-pri-9)"}
								c={"var(--mantine-color-white)"}
								style={{ borderRadius: "var(--mantine-radius-sm)", overflow: "hidden" }}
								withColumnBorders
							>
								<TableThead bg={"var(--mantine-color-sec-3)"} c={"var(--mantine-color-pri-9)"}>
									<TableTr>
										<Table.Th>Package</Table.Th>
										<Table.Th visibleFrom="md" />
										<Table.Th>Pricing</Table.Th>
									</TableTr>
								</TableThead>
								<Table.Tbody>{rows}</Table.Tbody>
							</Table>
						</Stack>
					</GridCol>
				</Grid>
			</Modal>

			<Button
				onClick={open}
				size="xs"
				leftSection={<IconDrone size={16} stroke={2} />}
				rightSection={<IconArrowRight size={16} stroke={2} />}
				color="white"
				variant="light"
			>
				Drone Light Shows
			</Button>
		</>
	);
}
