import React from "react";

import NextImage from "next/image";

import { Card, Center, Flex, Group, Image, Stack, Title } from "@mantine/core";

import classes from "./Link.module.scss";

export default function Link({ data }: { data: { title: string; image: string } }) {
	return (
		<Card className={classes.card}>
			<Flex direction={"column"} justify={"center"} className={classes.imageContainer} h={96}>
				<Image
					src={data.image}
					alt={data.title}
					loading="lazy"
					component={NextImage}
					width={1920}
					height={1080}
					className={classes.image}
				/>
			</Flex>

			<Center className={classes.overlay}>
				<Title order={2} fz={{ md: "xl" }} className={classes.title}>
					{data.title}
				</Title>
			</Center>
		</Card>
	);
}
