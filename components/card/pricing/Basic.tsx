import React from "react";

import {
	Badge,
	Button,
	Card,
	Group,
	List,
	ListItem,
	NumberFormatter,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from "@mantine/core";

import ModalCoursePricing from "@/components/modal/course/Pricing";

import classes from "./Basic.module.scss";

import { typeUnit } from "@/types/course";
import { IconCheck } from "@tabler/icons-react";

export default function Basic({ data, offset }: { data: typeUnit; offset?: boolean }) {
	return (
		<Card
			className={classes.card}
			withBorder
			bg={data.featured ? "light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))" : undefined}
			c={data.featured ? "light-dark(var(--mantine-color-white),var(--mantine-color-white))" : undefined}
		>
			<Stack justify="space-between" h={"100%"}>
				<Stack gap={"xl"} mb={"xl"}>
					<Stack>
						{data.advanced && (
							<Group justify="end" opacity={offset ? 0 : 1}>
								<Badge className={data.featured ? classes.badgeFeatured : classes.badge}>
									Advanced Course
								</Badge>
							</Group>
						)}

						<Text fz={"md"} fw={500}>
							Kshs.{" "}
							<Text
								component="span"
								inherit
								fz={28}
								fw={"bold"}
								className={data.featured ? classes.titleFeatured : classes.title}
							>
								<NumberFormatter
									value={data.price?.discount ? data.price.discount : data.price?.full}
									thousandSeparator
								/>
								/-
							</Text>
							{data.price?.discount && (
								<Text
									component="sup"
									inherit
									fw={"bold"}
									td={"line-through"}
									pos={"relative"}
									bottom={12}
									left={8}
									c={data.featured ? undefined : "dimmed"}
								>
									<NumberFormatter value={data.price?.full} thousandSeparator />
									/-
								</Text>
							)}
						</Text>

						<Group>
							<Title
								order={3}
								fw={"bold"}
								fz={{ base: "lg", lg: "xl" }}
								c={
									data.featured
										? "light-dark(var(--mantine-color-white),var(--mantine-color-white))"
										: "light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
								}
							>
								{data.title.full == "Multi-Rotor" ? "Remote Pilot License (RPL)" : data.title.full}
							</Title>
							{data.featured && (
								<Badge
									radius={"sm"}
									color={data.featured ? "sec.4" : "pri.9"}
									c={data.featured ? "pri.9" : undefined}
								>
									Most Popular
								</Badge>
							)}
						</Group>

						{data.advanced && (
							<Text>
								For RPL hoders seeking to enhance their abilities and include {data.title.full} to their
								skillset.
							</Text>
						)}
					</Stack>

					<List
						className={classes.list}
						spacing={"xs"}
						c={
							data.featured
								? "light-dark(var(--mantine-color-white),var(--mantine-color-white))"
								: "light-dark(var(--mantine-color-gray-8),var(--mantine-color-gray-8))"
						}
						icon={
							<ThemeIcon size={16} radius={"xl"} color="green.6" c={"white"}>
								<IconCheck size={12} stroke={3} />
							</ThemeIcon>
						}
					>
						{data.modules?.map(module => (
							<ListItem key={module}>{module}</ListItem>
						))}
					</List>
				</Stack>

				<ModalCoursePricing data={data}>
					<Button color={data.featured ? "sec.4" : "pri"} c={"white"} fullWidth>
						{data.title.full} Details
					</Button>
				</ModalCoursePricing>
			</Stack>
		</Card>
	);
}
