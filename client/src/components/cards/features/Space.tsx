import React from "react";

import { List, ListItem, Stack, Title } from "@mantine/core";

import hr from "@src/components/hr";

import classes from "./Space.module.scss";

export interface typeCardSpaces {
	title: string;
	listItems: string[];
}

export default function Space({ title, listItems }: typeCardSpaces) {
	return (
		<Stack h={"100%"} w={"100%"} gap={"xs"} className={classes.card}>
			<Title order={3}>{title}</Title>

			<hr.Secondary />

			<List size={"sm"} spacing={"xs"} listStyleType="none">
				{listItems.map((item) => (
					<ListItem key={item} c="white">
						{item}.
					</ListItem>
				))}
			</List>
		</Stack>
	);
}
