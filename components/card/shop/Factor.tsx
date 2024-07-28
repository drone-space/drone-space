import { Card, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import React from "react";

import classes from "./Factor.module.scss";
import { Icon } from "@tabler/icons-react";

export default function Factor({ data }: { data: { title: string; desc: string; icon: Icon } }) {
	return (
		<Card className={classes.card}>
			<Stack>
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
		</Card>
	);
}
