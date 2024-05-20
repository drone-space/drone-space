import React from "react";
import { Link } from "react-router-dom";

import { Breadcrumbs, Text } from "@mantine/core";

import { IconChevronRight } from "@tabler/icons-react";

import classes from "./Hero.module.scss";

export interface typeCrumbHero {
	data: { label: string; link: string }[];
}

export default function Hero({ data }: typeCrumbHero) {
	return (
		<Breadcrumbs
			separator={<IconChevronRight size={14} color="white" />}
			className={classes.crumb}
		>
			{data.map((item) => (
				<Text
					key={item.link}
					component={Link}
					to={item.link}
					className={classes.link}
					fz={"sm"}
					fw={500}
					onClick={(e) => e.preventDefault()}
				>
					{item.label}
				</Text>
			))}
		</Breadcrumbs>
	);
}
