import React from "react";

import classes from "./Understand.module.scss";
import { Card, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { Icon } from "@tabler/icons-react";

export default function Understand({ data }: { data: { label: string; item: string } }) {
	return (
		<Card className={classes.card} padding={"md"}>
			<Stack gap={"xs"}>
				<Group>
					{/* <ThemeIcon size={20} color="sec.3" c={"pri.9"}>
						<data.icon.icon size={12} stroke={3} />
					</ThemeIcon> */}

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
