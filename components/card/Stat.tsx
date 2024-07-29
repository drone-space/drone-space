import React from "react";

import { Stack, Text, Title } from "@mantine/core";

import classes from "./Stat.module.scss";

export interface typeCardStats {
	stat: string;
	title: string;
}

export default function Stat({ data }: { data: typeCardStats }) {
	return (
		<Stack align="center" gap={"xs"} className={classes.card}>
			<Text component="p" fz={{ base: 28, sm: 32, lg: 32 }} fw={700} ta={"center"} className={classes.stat}>
				{data.stat}
			</Text>
			<Title
				order={3}
				fw={500}
				fz={{ base: "sm", sm: "lg", md: "sm", lg: "md" }}
				ta={"center"}
				className={classes.title}
			>
				{data.title}
			</Title>
		</Stack>
	);
}
