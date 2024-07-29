import React from "react";

import { ThemeIcon, Text, Flex, Title, Card, Stack } from "@mantine/core";

import { Icon } from "@tabler/icons-react";

import classes from "./Why.module.scss";

interface typeCardFeatureWhy {
	icon: Icon;
	title: string;
	desc: string;
}

export default function Why({ data }: { data: typeCardFeatureWhy }) {
	return (
		<Card className={classes.card}>
			<Stack align="center">
				<ThemeIcon size={48} radius={48} className={classes.icon}>
					<data.icon size={24} stroke={2} />
				</ThemeIcon>

				<Stack gap={"xs"} align="center">
					<Title ta={"center"} order={2} fz={"xl"}>
						{data.title}
					</Title>
					<Text ta={"center"} fz={{ base: "sm", lg: "md" }}>
						{data.desc}
					</Text>
				</Stack>
			</Stack>
		</Card>
	);
}
