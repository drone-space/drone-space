import React from "react";

import { AspectRatio, Center, Image, Title } from "@mantine/core";

import classes from "./Link.module.scss";

interface typeCardProductLink {
	data: {
		image: string;
		title: string;
	};
}

export default function Link({ data }: typeCardProductLink) {
	return (
		<Center className={classes.card}>
			<AspectRatio className={classes.imageContainer}>
				<Image
					src={data.image}
					alt={data.title}
					className={classes.image}
				/>
			</AspectRatio>
			<div className={classes.overlay}></div>
			<Title order={2} className={classes.title}>
				{data.title}
			</Title>
		</Center>
	);
}
