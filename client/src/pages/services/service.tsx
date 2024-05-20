import React from "react";

import {
	Box,
	Container,
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

import { IconCircleCheck, IconPaperclip } from "@tabler/icons-react";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import Component from "@src/components";

import data from "@src/data";
import utility from "@src/utilities";
import typeService from "@src/types/service";

import classes from "./Service.module.scss";
import { useParams } from "react-router";

import document from "@src/assets/documents";

export default function Service() {
	const { service } = useParams();

	const serviceItem: typeService = data.services.find(item => utility.parser.linkify(item.title) == service);

	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				{serviceItem && (
					<Stack gap={64}>
						<Box component="section">
							<Container>
								<Grid>
									<GridCol span={{ base: 12, sm: 6 }}>
										<Stack gap={"sm"}>
											<Title order={2} c={"pri.6"} fz={24}>
												{serviceItem.title}
											</Title>
											<Stack gap={"xs"}>
												{serviceItem.desc.intro.map(item => (
													<Text key={item} component="p">
														{item}
													</Text>
												))}
											</Stack>
											<Stack gap={"xs"}>
												<Text component="p">
													Some of the key features and benefits of this service include:
												</Text>
												<List center spacing={"xs"} size="sm">
													{serviceItem.desc.features.map(item => (
														<ListItem
															key={item.title}
															icon={
																<ThemeIcon size={20} color="sec.4">
																	<IconCircleCheck
																		size={16}
																		stroke={1.5}
																		color="#14269e"
																	/>
																</ThemeIcon>
															}
															fw={500}
														>
															{item.title}
														</ListItem>
													))}
												</List>
											</Stack>
										</Stack>
									</GridCol>
									<GridCol span={{ base: 12, sm: 6 }}>
										<Stack gap={"xl"} align="end">
											<Image
												src={serviceItem.image}
												alt="Drone Consultancy Image"
												maw={"100%"}
												radius={"sm"}
											/>
											<Text
												component="a"
												href={document.profile}
												download={"dronespace-company-profile"}
												className={classes.card}
												w={{
													base: "100%",
													xs: "50%",
													sm: "75%",
													md: "50%",
												}}
											>
												<Stack gap={"xs"}>
													<Text component="h2" mt={0} fw={500} c={"pri.6"}>
														Company Profile
													</Text>
													<Group align="center" gap={2}>
														<ThemeIcon size={20} className={classes.icon}>
															<IconPaperclip size={16} stroke={2} />
														</ThemeIcon>
														<Text component="span" ml={"xs"}>
															Download Brochure
														</Text>
													</Group>
												</Stack>
											</Text>
										</Stack>
									</GridCol>
								</Grid>
							</Container>
						</Box>
						{serviceItem.desc.features[0].desc && (
							<Box component="section">
								<Container>
									<Grid>
										<GridCol span={12}>
											<Grid>
												{serviceItem.desc.features.map(item => (
													<GridCol
														key={item.title}
														span={{
															base: 12,
															sm: 6,
														}}
													>
														<Stack gap={"xs"} className={classes.feature}>
															<Text component="h2" fw={500} my={0} c={"sec.3"}>
																{item.title}
															</Text>
															<Text component="p" my={0}>
																{item.desc}
															</Text>
														</Stack>
													</GridCol>
												))}
											</Grid>
										</GridCol>
									</Grid>
								</Container>
							</Box>
						)}
						{/* <Partial.Cta /> */}
						<Box component="section">
							<Container>
								<Stack gap={"xl"} align="center">
									<div>
										<Text component="h2" fz={24} ta="center">
											Other Services
										</Text>
										<Text component="p" ta="center">
											See more of what we specialize in and how we do it
										</Text>
									</div>
									<Grid>
										{data.services.map(
											item =>
												item.title !== serviceItem.title && (
													<GridCol
														key={item.title}
														span={{
															base: 12,
															xs: 6,
															sm: 4,
														}}
													>
														<Component.Card.Feature.Service
															image={item.image}
															title={item.title}
															desc={item.desc}
														/>
													</GridCol>
												)
										)}
									</Grid>
								</Stack>
							</Container>
						</Box>
					</Stack>
				)}
			</Layout.Section.Main>
		</Layout.Page>
	);
}
