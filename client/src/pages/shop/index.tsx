import React from "react";
import { Link } from "react-router-dom";

import {
	AspectRatio,
	Badge,
	Box,
	Button,
	Container,
	Divider,
	Flex,
	Grid,
	GridCol,
	Group,
	Image,
	List,
	ListItem,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from "@mantine/core";
import { IconCamera, IconDrone, IconPlant, IconReportAnalytics } from "@tabler/icons-react";

import Layout from "@src/layouts";
import Component from "@src/components";

import data from "@src/data";

import classes from "./Product.module.scss";
import utility from "@src/utilities";
import Partial from "@src/partials";

export default function Products() {
	const products = {
		featured: data.products.find(item => item.filters.featured),
		// deals: {
		// 	christmas: data.products.find(
		// 		(item) => item.desc.title.short == "Mini 3 Pro"
		// 	),
		// },
	};

	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			navSec={<Partial.Navbar.Shop />}
			hero={<Component.Hero.Shop />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main
				title={{ plain: "Which Drone Should I", highlight: "Buy?" }}
				desc="The drone you get mainly depends on the purpose for
				which you need it. There are plenty of factors to
				consider before selecting a drone."
			>
				<Container>
					<Stack gap={"xl"}>
						<Grid>
							{data.factors.map(factor => (
								<GridCol key={factor.title} span={{ base: 12, xs: 6, md: 4 }}>
									<Component.Card.Feature.Factor data={factor} />
								</GridCol>
							))}
						</Grid>
					</Stack>
				</Container>
			</Layout.Section.Main>
			<Layout.Section.Cta
				title={{ plain: "Discover", highlight: "More Drones" }}
				desc="Browse though our catalogue to see more of what we offer!"
				anchors={[
					{
						icon: IconCamera,
						link: "camera-drones",
						label: "Camera Drones",
					},
					{
						icon: IconReportAnalytics,
						link: "enterprise-drones",
						label: "Enterprise Drones",
					},
					{
						icon: IconPlant,
						link: "agriculture-drones",
						label: "Agriculture Drones",
					},
				]}
			/>
			{products.featured && (
				<Layout.Section.Main
					title={{
						plain: "Our",
						highlight: "Featured Drone",
					}}
					bg="gray.1"
				>
					<Container>
						<Stack gap={"xl"}>
							<Grid gutter={"xl"} pb={"xs"} align="center">
								<GridCol span={{ base: 12, sm: 5 }}>
									<Box pos={"relative"}>
										<AspectRatio ratio={1920 / 1080} className={classes.imageContainer}>
											<Image
												src={products.featured.image.drone}
												alt={products.featured.desc.title.long}
											/>
										</AspectRatio>
										<div className={classes.overlay}>
											<Group align="center" justify="space-between">
												<Stack gap={8}>
													{products.featured.filters.featured && (
														<Badge size="xs" my={0}>
															Featured Drone
														</Badge>
													)}
													{products.featured.filters.starter && (
														<Badge size="xs" my={0} color="sec.3" c={"pri.6"}>
															Starter Pack Drone
														</Badge>
													)}
												</Stack>
											</Group>
										</div>
									</Box>
								</GridCol>
								<GridCol span={{ base: 12, sm: 7 }}>
									<Stack gap={"lg"} fz={"sm"}>
										<Title order={1} fz={20} fw={500}>
											{products.featured.desc.title.long}
										</Title>
										<Stack gap={4}>
											<Text component="p" mb={0} fz={"inherit"}>
												Kshs.{" "}
												<Text
													component="span"
													size={"md"}
													td={"strikethrough"}
													c={"pri.6"}
													fw={500}
												>
													{products.featured.desc.price.former}
												</Text>{" "}
												/-
												<Text component="sup" c={"pri.6"} fw={500} fz={"xs"}>
													{" "}
													(drone only)
												</Text>
											</Text>
											<Text component="p" fz={"inherit"}>
												Vendor:{" "}
												<Text component="span" tt={"uppercase"} fz={"inherit"} fw={500}>
													{products.featured.filters.brand}
												</Text>
											</Text>
											{products.featured.filters.make && (
												<Text component="p" fz={"inherit"}>
													Type:{" "}
													<Text component="span" tt={"capitalize"} fz={"inherit"} fw={500}>
														{products.featured.filters.make}
													</Text>
												</Text>
											)}
										</Stack>
										<Stack gap={"xs"}>
											<Divider
												label="Specifications"
												labelPosition="left"
												color="pri"
												fw={500}
												w={"50%"}
											/>
											{typeof products.featured.desc.specs == "string" ? (
												<Text component="p" fz={"inherit"}>
													{products.featured.desc.specs}
												</Text>
											) : (
												<List
													spacing={"xs"}
													size="xs"
													fw={500}
													icon={
														<ThemeIcon size={20} color="pri.6">
															<IconDrone size={16} stroke={1.5} color="#74d7d1" />
														</ThemeIcon>
													}
												>
													<Grid>
														{products.featured.desc.specs.map(spec => (
															<GridCol
																key={spec}
																span={{
																	base: 12,
																	sm: 6,
																}}
															>
																<ListItem key={spec}>{spec}</ListItem>
															</GridCol>
														))}
													</Grid>
												</List>
											)}
										</Stack>
									</Stack>
								</GridCol>
							</Grid>
							<Flex
								direction={{ base: "column", xs: "row" }}
								w={{ base: "100%", sm: "50%" }}
								mx={"auto"}
								gap={"xs"}
							>
								<Component.Modal.Purchase />
								<Button
									color="sec.3"
									c={"pri"}
									component={Link}
									fullWidth
									to={`${utility.parser.linkify(products.featured.desc.title.long)}`}
								>
									{products.featured.desc.title.short} Details
								</Button>
							</Flex>
						</Stack>
					</Container>
				</Layout.Section.Main>
			)}
		</Layout.Page>
	);
}
