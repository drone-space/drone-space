import React from "react";
import { useParams } from "react-router";

import {
	AspectRatio,
	Badge,
	Box,
	Container,
	Divider,
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

import { IconDrone } from "@tabler/icons-react";

import Layout from "@src/layouts";
import Component from "@src/components";

import data from "@src/data";
import utility from "@src/utilities";

import classes from "./Product.module.scss";
import Partial from "@src/partials";

export default function Product() {
	const { product } = useParams();

	const productItem = data.products.find(item => utility.parser.linkify(item.desc.title.long) == product);

	const relatedProducts = data.products.filter(
		item =>
			item.filters.type.includes(productItem?.filters.type[0]) &&
			item.desc.title.long != productItem.desc.title.long
	);

	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			navSec={<Partial.Navbar.Shop />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main bg="gray.1">
				{productItem && (
					<Stack gap={"xl"}>
						<Container w={"100%"}>
							<Grid gutter={"xl"} pb={"xs"}>
								<GridCol span={{ base: 12, sm: 5 }}>
									<Box pos={"relative"}>
										<AspectRatio ratio={1920 / 1080} className={classes.imageContainer}>
											<Image src={productItem.image.drone} alt={productItem.desc.title.long} />
										</AspectRatio>
										<div className={classes.overlay}>
											<Group align="center" justify="space-between">
												<Stack gap={8}>
													{productItem.filters.featured && (
														<Badge size="xs" my={0}>
															Featured Drone
														</Badge>
													)}
													{productItem.filters.starter && (
														<Badge size="xs" my={0} color="sec.3" c={"pri.6"}>
															Starter Pack Drone
														</Badge>
													)}
												</Stack>
												{/* <Stack gap={8} align="end">
												{productItem.filters
													.featured && (
													<Badge size="xs" my={0}>
														Featured Drone
													</Badge>
												)}
												{productItem.filters
													.starter && (
													<Badge
														size="xs"
														my={0}
														color="sec.3"
														c={"pri.6"}
													>
														Starter Pack Drone
													</Badge>
												)}
											</Stack> */}
											</Group>
										</div>
									</Box>
								</GridCol>
								<GridCol span={{ base: 12, sm: 7 }}>
									<Stack gap={"lg"} fz={"sm"}>
										<Title order={1} fz={20} fw={500}>
											{productItem.desc.title.long}
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
													{productItem.desc.price.former}
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
													{productItem.filters.brand}
												</Text>
											</Text>
											{productItem.filters.make && (
												<Text component="p" fz={"inherit"}>
													Type:{" "}
													<Text component="span" tt={"capitalize"} fz={"inherit"} fw={500}>
														{productItem.filters.make}
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
											{typeof productItem.desc.specs == "string" ? (
												<Text component="p" fz={"inherit"}>
													{productItem.desc.specs}
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
														{productItem.desc.specs.map(spec => (
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
										<Component.Modal.Purchase />
									</Stack>
								</GridCol>
							</Grid>
						</Container>
						<Container>
							<Component.Tab.Product data={productItem} />
						</Container>
					</Stack>
				)}
			</Layout.Section.Main>

			{relatedProducts.length > 0 && (
				<Layout.Section.Main title={{ plain: "Related", highlight: "Products" }}>
					<Container>
						<Grid align="stretch">
							{relatedProducts.map(
								product =>
									relatedProducts.indexOf(product) < 4 && (
										<GridCol
											key={product.desc.title.long}
											span={{
												base: 12,
												xs: 6,
												md: 3,
											}}
										>
											<Component.Card.Product.Drone data={product} />
										</GridCol>
									)
							)}
						</Grid>
					</Container>
				</Layout.Section.Main>
			)}
		</Layout.Page>
	);
}
