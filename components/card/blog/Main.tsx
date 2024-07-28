import React from "react";

import Link from "next/link";
import NextImage from "next/image";

import { Text, Group, Box, Stack, Image, Anchor, Title } from "@mantine/core";

import { IconEye, IconMessageCircle } from "@tabler/icons-react";

import link from "@/handlers/parsers/string/link";

import classes from "./Main.module.scss";

import { typeBlog } from "@/types/blog";

export default function Main({ data }: typeBlog) {
	return (
		<Box className={classes.card}>
			<Stack gap={"md"}>
				<Anchor
					component={Link}
					underline="never"
					href={`/stories/blog/${link.linkify(data.titleLink ? data.titleLink : data.title)}`}
				>
					<Stack className={classes.imageContainer} mah={170}>
						<Image
							src={data.image}
							alt={data.title}
							loading="lazy"
							component={NextImage}
							width={1920}
							height={1080}
							className={classes.image}
						/>
					</Stack>
				</Anchor>
				<Title order={2} lineClamp={2} fz={"md"} fw={"bold"}>
					<Anchor
						inherit
						component={Link}
						underline="never"
						href={`/stories/blog/${link.linkify(data.titleLink ? data.titleLink : data.title)}`}
						className={classes.link}
					>
						{data.title}
					</Anchor>
				</Title>
			</Stack>

			<Stack gap={"xs"}>
				{/* <Text fz={"sm"} inherit className={classes.date} lineClamp={4}>
					{data.desc.p[0]}
				</Text> */}

				<Group justify="space-between" fz={"xs"} fw={500} c={"dark.2"}>
					<Text inherit className={classes.date}>
						{data.date}
					</Text>

					{/* <Group gap="xs">
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
					</Group> */}
				</Group>
			</Stack>
		</Box>
	);
}
