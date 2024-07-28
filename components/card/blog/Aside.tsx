import React from "react";

import Link from "next/link";
import NextImage from "next/image";

import { Text, Stack, Image, Grid, GridCol, Title, Anchor } from "@mantine/core";

import link from "@/handlers/parsers/string/link";

import classes from "./Aside.module.scss";

import { typeBlog } from "@/types/blog";

export default function Aside({ data }: typeBlog) {
	return (
		<Grid align="center" className={classes.card}>
			<GridCol span={4}>
				<Anchor
					underline="never"
					component={Link}
					href={`/stories/blog/${link.linkify(data.titleLink ? data.titleLink : data.title)}`}
				>
					<Stack justify="center" className={classes.imageContainer}>
						<Image
							src={data.image}
							alt={data.title}
							component={NextImage}
							width={1920}
							height={1080}
							className={classes.image}
							loading="lazy"
						/>
					</Stack>
				</Anchor>
			</GridCol>

			<GridCol span={8}>
				<Stack gap={0}>
					<Text fz={8} tt={"uppercase"}>
						{data.date}
					</Text>
					<Title order={3} lineClamp={2} fz={"xs"}>
						<Anchor
							component={Link}
							inherit
							underline="never"
							fw={"bold"}
							href={`/stories/blog/${link.linkify(data.titleLink ? data.titleLink : data.title)}`}
							className={classes.link}
						>
							{data.title}
						</Anchor>
					</Title>
				</Stack>
			</GridCol>
		</Grid>
	);
}
