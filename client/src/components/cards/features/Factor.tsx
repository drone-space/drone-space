import React from "react";

import { Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";

import { Icon } from "@tabler/icons-react";

import classes from "./Factor.module.scss";

export default function Factor({
	data,
}: {
	data: { icon: Icon; title: string; desc: string };
}) {
	return (
		<Stack className={classes.card} h={"100%"}>
			<Group align="end" justify="space-between">
				<Title order={3} className={classes.title}>
					{data.title}
				</Title>
				<ThemeIcon className={classes.icon} size={48}>
					<data.icon size={24} />
				</ThemeIcon>
			</Group>
			<Text className={classes.desc}>{data.desc}</Text>
		</Stack>
	);
}
