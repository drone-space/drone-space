import React from "react";

import classes from "./Price.module.scss";
import { Card, Group, NumberFormatter, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { Icon } from "@tabler/icons-react";

export default function Price({ data }: { data: { title: string; desc: string; price: number; custom?: boolean } }) {
	return (
		<Card className={classes.card}>
			<Stack align="center">
				<Text fw={"bold"} fz={{ md: 24 }} ta={"center"}>
					<Text component="span" inherit fw={"normal"} fz={"md"}>
						${" "}
					</Text>
					<NumberFormatter value={data.price} thousandSeparator />
					{data.custom && (
						<Text ta={"center"} component="sup" inherit fz={"xs"}>
							{" "}
							(and above)
						</Text>
					)}
				</Text>

				<Stack align="center">
					<Title ta={"center"} order={3} fz={"lg"} className={classes.title}>
						{data.title}
					</Title>

					<Text ta={"center"} fz={"sm"}>
						{data.desc}
					</Text>
				</Stack>
			</Stack>
		</Card>
	);
}
