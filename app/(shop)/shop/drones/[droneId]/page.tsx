import React from "react";

import NextImage from "next/image";

import {
	Badge,
	Blockquote,
	Button,
	Card,
	Center,
	Divider,
	Flex,
	Grid,
	GridCol,
	Group,
	Image,
	List,
	ListItem,
	Stack,
	Tabs,
	TabsList,
	TabsPanel,
	TabsTab,
	Text,
	ThemeIcon,
	Title,
} from "@mantine/core";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import ModalGallery from "@/components/modal/Gallery";
import ModalContactShop from "@/components/modal/contact/Shop";

import products from "@/data/products";
import link from "@/handlers/parsers/string/link";
import CardShopAccessory from "@/components/card/shop/Accessory";
import CarouselImage from "@/components/carousels/Image";

import { typeParams } from "./layout";
import {
	IconBattery3,
	IconCheck,
	IconChevronRight,
	IconCirclePlus,
	IconCube,
	IconCubePlus,
	IconListDetails,
} from "@tabler/icons-react";
import classes from "./Drone.module.scss";

export default function AccessoryDetail({ params }: typeParams) {
	const product = products.find(p => link.linkify(p.title.long) == params.droneId);

	return (
		<LayoutPage>
			<LayoutSection containerized="responsive" padded shadowed>
				<Grid gutter={{ base: 32, lg: 64 }}>
					<GridCol span={{ md: 5 }} className={classes.card}>
						{product?.images && <CarouselImage data={product.images} />}
					</GridCol>
					<GridCol span={{ md: 7 }}>
						<Stack gap={"xl"}>
							<Stack>
								<Title order={2} fz={{ md: 32 }}>
									{product?.title.long}
								</Title>

								<Text>
									Kshs.{" "}
									<Text
										component="span"
										inherit
										fw={500}
										c={"light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"}
										fz={{ md: "xl" }}
									>
										{product?.price.former}
									</Text>{" "}
									<Text component="sup" inherit fz={"xs"}>
										(drone only)
									</Text>
								</Text>

								<Stack gap={"xs"}>
									{!product?.model && (
										<Text>
											Vendor:{" "}
											<Text component="span" inherit fw={500} tt={"uppercase"}>
												{product?.brand}
											</Text>
										</Text>
									)}
									<Text>
										Make:{" "}
										<Text component="span" inherit fw={500} tt={"capitalize"}>
											{product?.make}
										</Text>
									</Text>
									{product?.model && (
										<Text>
											Model:{" "}
											<Text component="span" inherit fw={500} tt={"capitalize"}>
												{product?.model}
											</Text>
										</Text>
									)}
								</Stack>
							</Stack>

							<Divider
								label={
									<Text
										component="span"
										inherit
										c={"light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"}
									>
										product overview
									</Text>
								}
							/>

							{typeof product?.specs.intro == "string" ? (
								<Text>{product.specs.intro}</Text>
							) : (
								<Grid>
									{product?.specs.intro.map(spec => (
										<GridCol key={spec} span={{ base: 12, md: 6 }}>
											<Group gap={"xs"}>
												<ThemeIcon size={16} radius={"xl"} color="green.6" c={"white"}>
													<IconCheck size={12} stroke={3} />
												</ThemeIcon>

												<Text fz={{ md: "xs", lg: "sm" }}>{spec}</Text>
											</Group>
										</GridCol>
									))}
								</Grid>
							)}

							<ModalContactShop>
								<Button
									variant="light"
									fullWidth
									rightSection={<IconChevronRight size={16} stroke={2} />}
								>
									Order the {product?.title.short ? product.title.short : product?.title.long}
								</Button>
							</ModalContactShop>
						</Stack>
					</GridCol>
				</Grid>
			</LayoutSection>

			<LayoutSection containerized="responsive" padded shadowed>
				<Tabs defaultValue="specs" keepMounted={false}>
					<TabsList fw={500}>
						<Grid gutter={0} w={"100%"}>
							<GridCol span={{ base: 12, xs: 6, md: "auto" }}>
								<TabsTab
									w={"100%"}
									value="specs"
									leftSection={
										<IconListDetails
											color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
											size={24}
											stroke={2}
										/>
									}
								>
									Specifications
								</TabsTab>
							</GridCol>
							<GridCol span={{ base: 12, xs: 6, md: "auto" }}>
								<TabsTab
									w={"100%"}
									value="basic"
									leftSection={
										<IconCube
											color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
											size={24}
											stroke={2}
										/>
									}
								>
									What&apos;s in the Box?
								</TabsTab>
							</GridCol>
							{product?.kit.flyMore && (
								<GridCol span={{ base: 12, xs: 6, md: "auto" }}>
									<TabsTab
										w={"100%"}
										value="flyMore"
										leftSection={
											<IconCubePlus
												color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
												size={24}
												stroke={2}
											/>
										}
									>
										Fly More Kit
									</TabsTab>
								</GridCol>
							)}
							{product?.accessories?.battery && (
								<GridCol span={{ base: 12, xs: 6, md: "auto" }}>
									<TabsTab
										w={"100%"}
										value="battery"
										leftSection={
											<IconBattery3
												color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
												size={24}
												stroke={2}
											/>
										}
									>
										Intelligent Battery
									</TabsTab>
								</GridCol>
							)}
							{product?.accessories?.other && (
								<GridCol span={{ base: 12, xs: 6, md: "auto" }}>
									<TabsTab
										w={"100%"}
										value="other"
										leftSection={
											<IconCirclePlus
												color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
												size={24}
												stroke={2}
											/>
										}
									>
										Other
									</TabsTab>
								</GridCol>
							)}
						</Grid>
					</TabsList>

					<TabsPanel value="specs">
						<LayoutSection padded>
							<Grid gutter={{ base: 12, md: "md" }}>
								<GridCol span={{ md: 5 }}>
									<Card withBorder shadow="xs">
										<Stack w={"100%"}>
											<Image
												src={product?.kit.basic.image}
												alt={"In the Box"}
												loading="lazy"
												component={NextImage}
												width={1920}
												height={1080}
											/>
										</Stack>
									</Card>
								</GridCol>

								<GridCol span={{ md: 1 }}>
									<Center h={"100%"}>
										<Divider orientation="vertical" />
									</Center>
								</GridCol>

								<GridCol span={{ md: 6 }}>
									<Stack gap={"xl"}>
										<Title order={3} fz={{ md: "xl" }}>
											{product?.title.short} Aircraft Specifications
										</Title>

										<Grid gutter={"xs"}>
											{product?.specs.aircraft.map(item => (
												<GridCol key={item.label} span={{ md: 12 }}>
													<Group gap={"xs"}>
														<ThemeIcon
															size={16}
															radius={"xl"}
															color="green.6"
															c={"white"}
															visibleFrom="xs"
														>
															<IconCheck size={12} stroke={3} />
														</ThemeIcon>

														<Text fz={{ md: "sm" }}>
															<Text component="span" inherit fw={500}>
																{item.label}
															</Text>
															: {item.desc}
														</Text>
													</Group>
												</GridCol>
											))}
										</Grid>
									</Stack>
								</GridCol>
							</Grid>
						</LayoutSection>
					</TabsPanel>

					<TabsPanel value="basic">
						<LayoutSection padded>
							<Grid gutter={{ base: 32, lg: 64 }}>
								{product?.kit.basic.contents.map(item => (
									<GridCol key={item.item} span={{ base: 6, sm: 3, md: 2 }}>
										<Stack>
											<Card withBorder shadow="xs">
												<Stack w={"100%"}>
													<Image
														src={item.image}
														alt={item.item}
														loading="lazy"
														component={NextImage}
														width={1920}
														height={1080}
													/>
												</Stack>
											</Card>

											<Text fz={{ md: "xs", lg: "sm" }} ta={"center"}>
												<Text component="span" inherit fw={500}>
													x{item.qty}
												</Text>{" "}
												- {item.item}
											</Text>
										</Stack>
									</GridCol>
								))}
							</Grid>
						</LayoutSection>
					</TabsPanel>

					{product?.kit.flyMore && (
						<TabsPanel value="flyMore">
							<LayoutSection padded>
								<Grid gutter={{ base: 64, md: "md" }}>
									<GridCol span={{ base: 12, md: 6 }} order={{ base: 3, md: 1 }}>
										<Grid>
											{product?.kit.flyMore.contents.map(item => (
												<GridCol key={item.item} span={{ base: 6, sm: 4, md: 4 }}>
													<Stack>
														<Card withBorder shadow="xs">
															<Stack w={"100%"}>
																<Image
																	src={item.image}
																	alt={item.item}
																	loading="lazy"
																	component={NextImage}
																	width={1920}
																	height={1080}
																/>
															</Stack>
														</Card>

														<Text fz={{ md: "xs", lg: "sm" }} ta={"center"}>
															<Text component="span" inherit fw={500}>
																x{item.qty}
															</Text>{" "}
															- {item.item}
														</Text>
													</Stack>
												</GridCol>
											))}
										</Grid>
									</GridCol>

									<GridCol span={{ md: 1 }} order={2} visibleFrom="md">
										<Center h={"100%"}>
											<Divider orientation="vertical" />
										</Center>
									</GridCol>

									<GridCol span={12} order={2} hiddenFrom="md">
										<Divider />
									</GridCol>

									<GridCol span={{ base: 12, md: 5 }} order={{ base: 1, md: 3 }}>
										<Stack gap={"xl"}>
											<Title order={3} fz={{ md: "xl" }}>
												{product?.title.short} Fly More Kit
											</Title>

											<Grid gutter={"xs"}>
												{product?.kit.flyMore.contents.map(item => (
													<GridCol key={item.item} span={{ md: 12 }}>
														<Text fz={{ md: "sm" }}>
															<Text component="span" inherit fw={500}>
																x{item.qty}
															</Text>{" "}
															- {item.item}
														</Text>
													</GridCol>
												))}
											</Grid>

											{product?.kit.flyMore.price && (
												<Text>
													Kshs.{" "}
													<Text
														component="span"
														inherit
														fw={500}
														c={
															"light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
														}
														fz={{ md: "xl" }}
													>
														{product?.kit.flyMore.price.former}
													</Text>
												</Text>
											)}
										</Stack>
									</GridCol>
								</Grid>
							</LayoutSection>
						</TabsPanel>
					)}

					{product?.accessories?.battery && (
						<TabsPanel value="battery">
							<LayoutSection padded>
								<Grid>
									<GridCol span={{ md: 5 }}>
										<CarouselImage data={product.accessories.battery.images} />
									</GridCol>

									<GridCol span={{ md: 1 }}>
										<Center h={"100%"}>
											<Divider orientation="vertical" />
										</Center>
									</GridCol>

									<GridCol span={{ md: 6 }}>
										<Stack gap={"xl"}>
											<Title order={3} fz={{ md: "xl" }}>
												{product?.title.short} Intelligent Flight Battery
											</Title>

											<Grid gutter={"xs"}>
												{product?.accessories?.battery?.specs.map(item => (
													<GridCol key={item.label} span={{ md: 12 }}>
														<Group gap={"xs"}>
															<ThemeIcon
																size={16}
																radius={"xl"}
																color="green.6"
																c={"white"}
																visibleFrom="xs"
															>
																<IconCheck size={12} stroke={3} />
															</ThemeIcon>

															<Text fz={{ md: "sm" }}>
																<Text component="span" inherit fw={500}>
																	{item.label}
																</Text>
																: {item.desc}
															</Text>
														</Group>
													</GridCol>
												))}
											</Grid>

											{product?.accessories.battery.price && (
												<Text>
													Kshs.{" "}
													<Text
														component="span"
														inherit
														fw={500}
														c={
															"light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
														}
														fz={{ md: "xl" }}
													>
														{product?.accessories.battery.price.former}
													</Text>
												</Text>
											)}
										</Stack>
									</GridCol>
								</Grid>
							</LayoutSection>
						</TabsPanel>
					)}

					{product?.accessories?.other && (
						<TabsPanel value="other">
							<LayoutSection padded>
								<Grid>
									{product.accessories.other.map(accessory => (
										<GridCol key={accessory?.title.long} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
											{accessory && <CardShopAccessory data={accessory} />}
										</GridCol>
									))}
								</Grid>
							</LayoutSection>
						</TabsPanel>
					)}
				</Tabs>
			</LayoutSection>
		</LayoutPage>
	);
}
