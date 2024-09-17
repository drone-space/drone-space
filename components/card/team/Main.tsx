"use client";

import React, { useState } from "react";

import NextImage from "next/image";

import { ActionIcon, Anchor, Avatar, Card, Group, Image, Stack, Text, Title, Transition } from "@mantine/core";

import classes from "./Main.module.scss";

import { typeTeam } from "@/types/team";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

export default function Main({ data }: { data: typeTeam }) {
	const [opened, setOpened] = useState(false);

	return (
		<Card className={classes.card} withBorder padding={"xl"}>
			<Stack justify="space-between" align="center" h={"100%"}>
				<Stack align="center" gap={"xl"}>
					{data.image ? (
						<Stack h={"100%"} w={120} className={classes.imageContainer}>
							<Image
								src={data.image}
								alt={"Drone Shop"}
								loading="lazy"
								component={NextImage}
								width={1080}
								height={1080}
							/>
						</Stack>
					) : (
						<Avatar size={120} color="pri" />
					)}

					<Transition
						mounted={!opened}
						enterDelay={!opened ? 350 : 0}
						transition="fade"
						duration={250}
						timingFunction="ease"
					>
						{styles => (
							<div style={styles}>
								<Stack gap={6}>
									<Title order={2} fz={"md"} fw={"bold"} ta={"center"}>
										{data.name}
									</Title>
									<Text fz={"xs"} fw={500} ta={"center"} c={"sec.4"}>
										{data.position}
									</Text>
									<Text fz={"xs"} fw={500} ta={"center"} c={"dimmed"}>
										{data.qualification}
									</Text>
								</Stack>
							</div>
						)}
					</Transition>

					<Transition
						mounted={opened}
						enterDelay={opened ? 350 : 0}
						transition="fade"
						duration={250}
						timingFunction="ease"
					>
						{styles => (
							<div style={styles}>
								<Stack gap={6}>
									<Text fz={"xs"} fw={500} ta={"center"} c={"dimmed"}>
										{data.bio}
									</Text>
								</Stack>
							</div>
						)}
					</Transition>
				</Stack>

				{!opened ? (
					<ActionIcon variant="subtle" onClick={() => setOpened(true)}>
						<IconChevronDown size={16} stroke={1.5} />
					</ActionIcon>
				) : (
					<ActionIcon variant="subtle" onClick={() => setOpened(false)}>
						<IconChevronUp size={16} stroke={1.5} />
					</ActionIcon>
				)}
			</Stack>
		</Card>
	);
}
