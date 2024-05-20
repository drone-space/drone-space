import React from "react";

import { Stack, Text, Title } from "@mantine/core";

import classes from "./Stat.module.scss";

export interface typeCardStats {
	stat: string;
	title: string;
}

export default function Stat({ stat, title }: typeCardStats) {
	return (
		<Stack align="center" gap={"xs"} h={"100%"} className={classes.card}>
			<Text
				component="p"
				fz={40}
				fw={900}
				my={0}
				c={"sec.3"}
				ta={"center"}
			>
				{stat}
			</Text>
			<Title order={3} fz={16} ta={"center"}>
				{title}
			</Title>
		</Stack>
	);
}
