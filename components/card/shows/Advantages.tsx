import React from "react";

import classes from "./Advantages.module.scss";
import { Card, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { Icon } from "@tabler/icons-react";

export default function Advantages({ data }: { data: { label: string; item: string; icon: { icon: Icon } } }) {
	return (
		<Card className={classes.card} padding={0} bg={"transparent"}>
			<Stack gap={"xs"}>
				<Group>
					<ThemeIcon size={20} color="sec.3" c={"pri.9"}>
						<data.icon.icon size={12} stroke={3} />
					</ThemeIcon>

					<Title order={2} fz={"md"}>
						{data.label}
					</Title>
				</Group>

				<Stack gap={"xs"}>
					<Text fz={"sm"}>{data.item}</Text>
				</Stack>
			</Stack>
		</Card>
	);
}
