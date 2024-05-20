import React from "react";

import { Center, Image } from "@mantine/core";

import classes from "./Partner.module.scss";

export default function Partner({
	image,
	title,
	width,
}: {
	image: string;
	title: string;
	width: string;
}) {
	return (
		<Center h={"100%"} w={"100%"} mx={"auto"} className={classes.card}>
			<Image
				src={image}
				alt={title}
				w={width}
				py={"xl"}
				className={classes.image}
			/>
		</Center>
	);
}
