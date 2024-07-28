import React from "react";
import Link from "next/link";
import NextImage from "next/image";

import { Anchor, AspectRatio, Box, Button, Card, CardSection, Group, Image, Stack, Text, Title } from "@mantine/core";

import { IconArrowRight } from "@tabler/icons-react";

import classes from "./Service.module.scss";

import typeService from "@/types/service";
import link from "@/handlers/parsers/string/link";

export default function Service({ data }: { data: typeService }) {
	return (
		<Card className={classes.card}>
			<CardSection>
				<Anchor inherit component={Link} href={`/services/${link.linkify(data.title)}`}>
					<Stack justify="center" className={classes.imageContainer}>
						<Image
							src={data.image}
							alt={data.title}
							loading="lazy"
							radius={"sm"}
							component={NextImage}
							width={1920}
							height={1080}
							className={classes.image}
						/>
					</Stack>
				</Anchor>
			</CardSection>

			<Stack gap={"xs"} align="start" p={"md"}>
				<Title order={3} fz="lg" className={classes.title}>
					<Anchor inherit component={Link} href={`/services/${link.linkify(data.title)}`}>
						{data.title}
					</Anchor>
				</Title>
				<Text fz="sm" lineClamp={3}>
					{data.desc.intro[0]}
				</Text>
			</Stack>
		</Card>
	);
}
