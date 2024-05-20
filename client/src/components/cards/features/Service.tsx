import React from "react";
import { Link } from "react-router-dom";

import {
	AspectRatio,
	Box,
	Button,
	Card,
	CardSection,
	Group,
	Image,
	Stack,
	Text,
	Title,
} from "@mantine/core";

import { IconArrowRight } from "@tabler/icons-react";

import classes from "./Service.module.scss";

import typeService from "@src/types/service";

export default function Service({ image, title, desc }: typeService) {
	return (
		<Box h={"100%"} className={classes.card}>
			<Box pos={"relative"}>
				<AspectRatio
					ratio={1920 / 1080}
					className={classes.imageContainer}
				>
					<Image src={image} alt={title} className={classes.image} />
				</AspectRatio>
				<Group justify={"end"} className={classes.overlay}>
					{desc.links.specific &&
						desc.links.specific.map((item) => (
							<Button
								key={item.link}
								component={Link}
								to={item.link}
							>
								<Group align="center">
									<span>{item.label}</span>
									<IconArrowRight size={16} stroke={1.5} />
								</Group>
							</Button>
						))}
				</Group>
			</Box>

			<Stack gap={"xs"} align="start" p={"md"}>
				<Title order={3} fz="lg" className={classes.title}>
					{title}
				</Title>
				<Text fz="sm" lineClamp={3}>
					{desc.intro[0]}
				</Text>
				<Button component={Link} to={desc.links.default}>
					{title} Details
				</Button>
			</Stack>
		</Box>
	);
}
