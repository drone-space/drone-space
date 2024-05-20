import React from "react";
import { Link } from "react-router-dom";

import { Text, Stack, AspectRatio, Image, Grid, GridCol } from "@mantine/core";

import classes from "./Aside.module.scss";

export interface typeCardAside {
	data: {
		image: string;
		title: string;
		date: string;
		views: number;
		comments: number;
		link: string;
	};
}

export default function Aside({ data }: typeCardAside) {
	return (
		<Link to={data.link} className={classes.card}>
			<Grid align="center">
				<GridCol span={4}>
					<AspectRatio
						ratio={1920 / 1080}
						className={classes.imageContainer}
					>
						<Image src={data.image} alt={data.title} />
					</AspectRatio>
				</GridCol>

				<GridCol span={8}>
					<Stack gap={0}>
						<Text fz={8} tt={"uppercase"}>
							{data.date}
						</Text>
						<Text lineClamp={1} className={classes.title}>
							{data.title}
						</Text>
					</Stack>
				</GridCol>
			</Grid>
		</Link>
	);
}
