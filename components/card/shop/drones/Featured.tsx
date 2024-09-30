import React from "react";

import NextImage from "next/image";

import classes from "./Featured.module.scss";
import { Anchor, Badge, Button, Card, Flex, Grid, GridCol, Group, Image, Stack, Text, Title } from "@mantine/core";

import { typeDrone } from "@/types/product";
import { IconArrowRight, IconChevronCompactRight, IconChevronRight } from "@tabler/icons-react";
import ModalContactShop from "@/components/modal/contact/Shop";
import Link from "next/link";
import link from "@/handlers/parsers/string/link";

export default function Featured({ data }: { data: typeDrone }) {
	return (
		<Card className={classes.card}>
			<Grid align="center" maw={960}>
				<GridCol span={{ sm: 6 }}>
					<Flex direction={"column"} gap={"xl"} align={{ base: "center", sm: "start" }}>
						<Badge ml={{ sm: "md" }}>Featured Drone</Badge>

						<Stack gap={"xs"} p={{ sm: "md" }}>
							<Text
								ta={{ base: "center", sm: "start" }}
								component="span"
								inherit
								fz={"xs"}
								className={classes.miniTitle}
							>
								Your Personal Videographer
							</Text>
							<Title ta={{ base: "center", sm: "start" }} order={2} className={classes.title}>
								{data.title.long}
							</Title>
							<Text
								ta={{ base: "center", sm: "start" }}
								component="span"
								inherit
								fz={"lg"}
								className={classes.slogan}
							>
								Rise and Shine
							</Text>
						</Stack>

						<Flex direction={{ base: "column", sm: "row" }} align={"center"} gap={"xs"}>
							<Button
								variant="transparent"
								rightSection={<IconChevronRight size={16} stroke={2} />}
								component={Link}
								href={`/shop/drones/${data.category}/${link.linkify(data.title.long)}`}
							>
								Learn More
							</Button>
							<ModalContactShop>
								<Button variant="transparent" rightSection={<IconChevronRight size={16} stroke={2} />}>
									Inquire
								</Button>
							</ModalContactShop>
						</Flex>
					</Flex>
				</GridCol>
				<GridCol span={{ sm: 6 }}>
					<Anchor component={Link} href={`/shop/drones/${data.category}/${link.linkify(data.title.long)}`}>
						<Stack className={classes.imageContainer} w={"100%"}>
							<Image
								src={data.images.find(i => i.includes("front")) || data.images[0]}
								alt={data.title.long}
								loading="lazy"
								component={NextImage}
								width={1920}
								height={1080}
								className={classes.image}
							/>
						</Stack>
					</Anchor>
				</GridCol>
			</Grid>
		</Card>
	);
}
