import React from "react";
import { Link } from "react-router-dom";

import {
	Badge,
	Box,
	Button,
	Card,
	CardSection,
	Group,
	Image,
	Stack,
	Text,
} from "@mantine/core";

import { IconArrowRight } from "@tabler/icons-react";

import classes from "./Course.module.scss";

export interface typeCardTrainingCourse {
	img: string;
	title: string;
	desc: { intro: string };
	links: {
		default: string;
		specific: { link: string; label: string }[];
	};
	type: boolean;
	offered: boolean;
}

export default function Course({
	img,
	title,
	desc,
	links,
	type,
	offered,
}: typeCardTrainingCourse) {
	return (
		<Card shadow="sm" pt={0} px={"md"} h={"100%"} className={classes.card}>
			<Stack justify="space-between" h={"100%"}>
				<Box>
					<CardSection className={classes.imageSection}>
						<Image
							src={img}
							maw={"100%"}
							alt={title}
							className={classes.image}
						/>
					</CardSection>

					<Text fw={500} fz="lg" mt={"sm"} className={classes.title}>
						{title}
					</Text>

					<Text mt="xs" fz="sm" lineClamp={3}>
						{desc.intro}
					</Text>
				</Box>

				<Group align={links.specific ? "apart" : "right"} mt={"md"}>
					<Button
						component={Link}
						to={links.default}
						disabled={!offered}
					>
						{offered ? `${title} Details` : `Coming Soon`}
					</Button>
					{links.specific &&
						links.specific.map((item) => (
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

				<Badge size="xs" c={"sec.3"} className={classes.overlay}>
					{type && `${type} Course`}
				</Badge>
			</Stack>
		</Card>
	);
}
