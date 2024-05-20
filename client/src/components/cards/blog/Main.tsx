import React from "react";
import { Link } from "react-router-dom";

import { Text, Group, Box, Stack, AspectRatio, Image } from "@mantine/core";

import { IconEye, IconMessageCircle } from "@tabler/icons-react";

import classes from "./Main.module.scss";

export interface typeCardMain {
	data: {
		image: string;
		title: string;
		desc: {
			p: string[];
			quotes: { cite: string; title: string }[] | null;
			list: { title: string; desc: string }[] | null;
			images: { title: string; img: string }[] | null;
		};
		date: string;
		views: number;
		comments: number;
		link: string;
	};
}

export default function Main({ data }: typeCardMain) {
	return (
		<Box className={classes.card}>
			<Stack gap={"md"}>
				<Link to={data.link}>
					<AspectRatio ratio={1920 / 1080} className={classes.image}>
						<Image src={data.image} alt={data.title} />
						<div className={classes.overlay} />
					</AspectRatio>
				</Link>
				<Text
					lineClamp={2}
					component={Link}
					to={data.link}
					className={classes.title}
				>
					{data.title}
				</Text>
			</Stack>

			<Stack gap={"xs"}>
				<Text fz={"sm"} inherit className={classes.date} lineClamp={2}>
					{data.desc.p[0]}
				</Text>

				<Group justify="space-between" fz={"xs"} fw={500} c={"dark.2"}>
					<Text inherit className={classes.date}>
						{data.date}
					</Text>

					<Group gap="xs">
						<Group align="center" gap={4}>
							<IconEye
								size="1rem"
								stroke={1.5}
								// color={"var(--mantine-color-dark-2)"}
							/>
							<Text inherit>{data.views}</Text>
						</Group>
						<Group align="center" gap={4}>
							<IconMessageCircle
								size="1rem"
								stroke={1.5}
								// color={"var(--mantine-color-dark-2)"}
							/>
							<Text inherit>{data.comments}</Text>
						</Group>
					</Group>
				</Group>
			</Stack>
		</Box>
	);
}
