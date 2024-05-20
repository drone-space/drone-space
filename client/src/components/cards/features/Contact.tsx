import React from "react";

import { Anchor, Stack, Text, ThemeIcon } from "@mantine/core";

import { Icon } from "@tabler/icons-react";

import classes from "./Contact.module.scss";

interface typeCardFeatureContact {
	data: {
		icon: Icon;
		title: string;
		desc: { link: string; label: string }[];
	};
}

export default function Contact({ data }: typeCardFeatureContact) {
	return (
		<Stack align={"center"} gap={"xs"} className={classes.card}>
			<ThemeIcon size={48} radius={"sm"} className={classes.icon}>
				<data.icon size={36} stroke={2} />
			</ThemeIcon>
			<Text my={"sm"} fw={500} className={classes.title}>
				{data.title}
			</Text>
			<Stack gap={4}>
				{data.desc.map((item) => (
					<Anchor
						key={item.link}
						href={item.link}
						className={classes.link}
						fz="sm"
						ta="center"
					>
						{item.label}
					</Anchor>
				))}
			</Stack>
		</Stack>
	);
}
