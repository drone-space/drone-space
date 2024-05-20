import React from "react";

import { Stack, Title } from "@mantine/core";

import Component from "../../components";

import data from "../../data";

import classes from "./Blog.module.scss";

export default function Blog() {
	return (
		<Stack gap={"xl"} className={classes.aside}>
			<Stack gap={"md"} className={classes.section}>
				<Title order={2} className={classes.title}>
					Related Posts
				</Title>
				<Stack gap={"xs"}>
					{data.blogs.map((item) => (
						<Component.Card.Blog.Aside
							key={item.title}
							data={item}
						/>
					))}
				</Stack>
			</Stack>
		</Stack>
	);
}
