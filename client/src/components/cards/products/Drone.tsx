import React from "react";
import { Link } from "react-router-dom";

import {
	AspectRatio,
	Badge,
	Box,
	Button,
	Group,
	Image,
	Stack,
	Text,
	Title,
} from "@mantine/core";

import typeProduct from "@src/types/product";

import classes from "./Drone.module.scss";

export default function Drone({ data }: { data: typeProduct }) {
	return (
		<Box className={classes.card} h={"100%"}>
			<Box pos={"relative"}>
				<AspectRatio
					ratio={1620 / 1080}
					bg={"white"}
					className={classes.imageContainer}
				>
					<Image
						src={data.image.drone}
						alt={data.desc.title.long}
						p={"xs"}
						className={classes.image}
					/>
				</AspectRatio>

				<Box className={classes.overlay}>
					<Stack justify="space-between" h={"100%"}>
						<Group
							align="center"
							justify="space-between"
							className={classes.badge}
						>
							{data.filters.featured && (
								<Badge size="xs" color="sec.3" c={"pri.6"}>
									Featured Drone
								</Badge>
							)}
							{data.filters.starter && (
								<Badge size="xs" c={"sec.3"}>
									Starter Pack
								</Badge>
							)}
							{!data.filters.available && (
								<Badge size="xs" color="red">
									Out of Stock
								</Badge>
							)}
						</Group>
						{data.link && (
							<Button
								size="xs"
								color="sec.3"
								c={"pri.6"}
								component={Link}
								to={data.link}
								className={classes.button}
							>
								{data.desc.title.short} Details
							</Button>
						)}
					</Stack>
				</Box>
			</Box>

			<Stack justify="space-between" p={"md"} gap={"md"} bg={"pri"}>
				<Stack gap={"xs"} fz={"xs"}>
					<Title
						order={2}
						className={classes.title}
						ta={!data.desc.specs ? "center" : "inherit"}
					>
						{data.desc.title.short}
					</Title>

					<Text inherit lineClamp={2}>
						{data.desc.specs && typeof data.desc.specs == "string"
							? data.desc.specs
							: data.desc.specs.map((spec) => (
									<Text key={spec} component="span" inherit>
										{spec}{" "}
										{data.desc.specs.indexOf(spec) !=
											data.desc.specs.length - 1 && (
											<>| </>
										)}
									</Text>
							  ))}
					</Text>
				</Stack>
				<Text mb={0} fz={"xs"}>
					Kshs.{" "}
					<Text
						component="span"
						fw={500}
						fz={"sm"}
						td={"strikethrough"}
						c={"sec.3"}
					>
						{data.desc.price.former}
					</Text>{" "}
					/-
				</Text>
			</Stack>
		</Box>
	);
}
