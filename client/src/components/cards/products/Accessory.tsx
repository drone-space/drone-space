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

import typeAccessory from "@src/types/accessory";

import classes from "./Accessory.module.scss";

export default function Accessory({ data }: { data: typeAccessory }) {
	return (
		<Box className={classes.card} h={"100%"}>
			<Box pos={"relative"}>
				<Box bg={"white"} className={classes.imageContainer}>
					<Image
						src={data.image}
						alt={data.title.long}
						p={"xs"}
						className={classes.image}
						w={{ base: "66%", xs: "75%", sm: "66%" }}
					/>
				</Box>
			</Box>

			<Stack justify="space-between" p={"md"} gap={"md"} bg={"pri"}>
				<Stack gap={"xs"} fz={"xs"}>
					<Title
						order={2}
						className={classes.title}
						ta={!data.specs ? "center" : "inherit"}
					>
						{data.title.short}
					</Title>

					<Text inherit lineClamp={2}>
						{data.specs && typeof data.specs == "string"
							? data.specs
							: data.specs.map((spec) => (
									<Text key={spec} component="span" inherit>
										{spec}{" "}
										{data.specs.indexOf(spec) !=
											data.specs.length - 1 && <>| </>}
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
						{data.price.former}
					</Text>{" "}
					/-
				</Text>
			</Stack>
		</Box>
	);
}
