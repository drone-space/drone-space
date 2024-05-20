import React from "react";

import { ThemeIcon, Text, Flex, Title } from "@mantine/core";

import { Icon } from "@tabler/icons-react";

import classes from "./Why.module.scss";

interface typeCardFeatureWhy {
	icon: Icon;
	title: React.ReactNode;
	desc: string;
}

export default function Why({ icon: Icon, title, desc }: typeCardFeatureWhy) {
	return (
		<Flex
			direction={"column"}
			align={{ base: "center" }}
			gap={"xs"}
			className={classes.card}
		>
			<ThemeIcon size={48} radius={48} className={classes.icon}>
				<Icon size={24} stroke={1.5} />
			</ThemeIcon>
			<Title order={2} className={classes.title}>
				{title}
			</Title>
			<Text fz="sm" ta="center" className={classes.desc}>
				{desc}
			</Text>
		</Flex>
	);
}
