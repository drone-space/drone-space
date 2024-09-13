import React from "react";

import classes from "./Applications.module.scss";
import { Card, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { Icon } from "@tabler/icons-react";

export default function Applications({ data }: { data: { label: string; item: string; icon: Icon } }) {
	return (
		<Card className={classes.card}>
			<Stack>
				<ThemeIcon size={40} color="sec.3" c={"pri.9"} className={classes.icon}>
					<data.icon size={32} stroke={1} />
				</ThemeIcon>

				<Stack>
					<Title order={2} fz={"md"} className={classes.title}>
						{data.label}
					</Title>

					<Text fz={"sm"}>{data.item}</Text>
				</Stack>
			</Stack>
		</Card>
	);
}
