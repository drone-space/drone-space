import React from "react";
import { Link } from "react-router-dom";

import { Card, Text, Group, Box, Stack } from "@mantine/core";

import { IconEye, IconMessageCircle } from "@tabler/icons-react";

import classes from "./Listing.module.scss";

export interface typeCardListing {
	data: {
		image: string;
		title: string;
		date: string;
		views: number;
		comments: number;
		link: string;
	};
}

export default function Listing({ data }: typeCardListing) {
	return (
		<Card
			p="lg"
			shadow="lg"
			className={classes.card}
			radius="md"
			component={Link}
			to={data.link}
		>
			<div
				className={classes.image}
				style={{
					backgroundImage: `url('${data.image}')`,
					position: "absolute",
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				}}
			/>

			<div className={classes.overlay} />

			<Box
				className={classes.content}
				c={"white"}
				style={{
					height: "100%",
					position: "relative",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
					zIndex: 1,
				}}
			>
				<Stack gap={"xs"}>
					<Text
						fz="lg"
						className={classes.title}
						fw={500}
						lineClamp={2}
					>
						{data.title}
					</Text>

					<Group justify="space-between" gap="xs">
						<Text fz="xs" className={classes.date}>
							{data.date}
						</Text>

						<Group gap="lg" fz={"xs"}>
							<Group align="center" gap={4}>
								<IconEye
									size="1rem"
									stroke={1.5}
									color={"var(--mantine-color-dark-2)"}
								/>
								<Text inherit>{data.views}</Text>
							</Group>
							<Group align="center" gap={4}>
								<IconMessageCircle
									size="1rem"
									stroke={1.5}
									color={"var(--mantine-color-dark-2)"}
								/>
								<Text inherit>{data.comments}</Text>
							</Group>
						</Group>
					</Group>
				</Stack>
			</Box>
		</Card>
	);
}
