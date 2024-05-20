import React from "react";
import { useParams } from "react-router";

import {
	Box,
	Container,
	Grid,
	GridCol,
	Image,
	List,
	ListItem,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from "@mantine/core";

import Layout from "@src/layouts";
import Component from "@src/components";

import data from "@src/data";
import utility from "@src/utilities";
import {
	IconCheckbox,
	IconCircleCheck,
	IconHexagons,
	IconSchool,
	IconUserCheck,
} from "@tabler/icons-react";

import Partial from "@src/partials";

import classes from "./Course.module.scss";

export default function Course() {
	const { course } = useParams();

	const courseItem = data.training.desc.courses.basic
		.concat(data.training.desc.courses.advanced)
		.find((item) => utility.parser.linkify(item.title) == course);

	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				{courseItem && (
					<Stack gap={72}>
						<Box component="section">
							<Container>
								<Grid>
									<GridCol span={{ base: 12, xs: 6 }}>
										<Stack gap={"md"}>
											<Title
												order={1}
												fz={24}
												fw={500}
												c={"pri.6"}
											>
												{courseItem.title} Course
											</Title>
											<Text component="p">
												{courseItem.desc.intro}
											</Text>
											{courseItem.desc.objectives && (
												<Stack gap={"xs"}>
													<Text
														fw={500}
														component="p"
														my={0}
													>
														Objectives:
													</Text>
													<List
														spacing={"xs"}
														size={"sm"}
														icon={
															<ThemeIcon
																c={"sec.3"}
																size={20}
															>
																<IconCheckbox
																	size={16}
																	stroke={2}
																/>
															</ThemeIcon>
														}
													>
														{courseItem.desc.objectives.map(
															(item) => (
																<ListItem
																	key={item}
																>
																	{item}
																</ListItem>
															)
														)}
													</List>
												</Stack>
											)}
										</Stack>
									</GridCol>
									<GridCol
										span={{ base: 12, xs: 6 }}
										px={"md"}
									>
										<Image
											src={courseItem.img}
											alt={courseItem.title}
											maw={"100%"}
											radius={"sm"}
										/>
									</GridCol>
								</Grid>
							</Container>
						</Box>
						<Box component="section">
							<Container>
								<Grid>
									{courseItem.desc.features && (
										<GridCol
											span={{
												base: 12,
												sm: courseItem.desc.attendees
													? 8
													: 12,
											}}
										>
											<Grid>
												{courseItem.desc.features.map(
													(item) => (
														<GridCol
															span={{
																base: 12,
																sm: 6,
															}}
															key={item.title}
														>
															<Box
																h={"100%"}
																className={
																	classes.features
																}
															>
																<Stack
																	gap={"xs"}
																>
																	<Text
																		component="h2"
																		fw={500}
																		my={0}
																		c={
																			"sec.3"
																		}
																	>
																		{
																			item.title
																		}
																	</Text>
																	<Text component="p">
																		{
																			item.desc
																		}
																	</Text>
																</Stack>
															</Box>
														</GridCol>
													)
												)}
											</Grid>
										</GridCol>
									)}
									<GridCol span={{ base: 12, sm: 4 }}>
										{courseItem.desc.attendees && (
											<div>
												<Text
													component="h2"
													fw={500}
													fz={16}
												>
													Attendees:
												</Text>
												<List
													size={"sm"}
													center
													spacing={"xs"}
													icon={
														<ThemeIcon
															size={32}
															color="pri.6"
														>
															<IconUserCheck
																size={20}
																stroke={2}
																color="#74d7d1"
															/>
														</ThemeIcon>
													}
												>
													{courseItem.desc.attendees.map(
														(item) => (
															<ListItem
																key={item}
															>
																{item}
															</ListItem>
														)
													)}
												</List>
											</div>
										)}
									</GridCol>
								</Grid>
							</Container>
						</Box>

						<Component.Hr.Primary />

						<Box component="section">
							<Container>
								<Grid align="start">
									<GridCol span={{ base: 12, xs: 6 }}>
										<Stack gap={"lg"}>
											<Stack gap={"xs"}>
												<Text
													component="h2"
													fz={24}
													fw={500}
												>
													Course Overview
												</Text>
												<Text component="p">
													{courseItem.desc.overview}
												</Text>
											</Stack>
											{courseItem.desc.qualification && (
												<Stack gap={"xs"}>
													<Text
														component="h2"
														fz={16}
														fw={500}
													>
														Qualification:
													</Text>
													<List
														size={"sm"}
														spacing={"xs"}
														icon={
															<ThemeIcon
																size={20}
																color="pri.6"
															>
																<IconSchool
																	size={16}
																	stroke={1.5}
																	color="#74d7d1"
																/>
															</ThemeIcon>
														}
													>
														{courseItem.desc.qualification.map(
															(item) => (
																<ListItem
																	key={item}
																>
																	{item}
																</ListItem>
															)
														)}
													</List>
												</Stack>
											)}
											{courseItem.desc.requirements && (
												<Stack gap={"xs"}>
													<Text
														fw={500}
														component="p"
														my={0}
													>
														Requirements:
													</Text>
													<List
														spacing={"xs"}
														size={"sm"}
														center
														icon={
															<IconCircleCheck
																size={20}
																stroke={2}
																color="var(--mantine-color-pri-6)"
															/>
														}
													>
														{courseItem.desc.requirements.map(
															(item) => (
																<ListItem
																	key={item}
																>
																	{item}
																</ListItem>
															)
														)}
													</List>
												</Stack>
											)}
										</Stack>
									</GridCol>
									{courseItem.desc.modules && (
										<GridCol span={{ base: 12, xs: 6 }}>
											<Box className={classes.modules}>
												<Stack gap={"sm"}>
													<Text
														component="h2"
														fz={20}
														fw={500}
													>
														Modules
													</Text>
													<List
														fw={500}
														size={"sm"}
														spacing={"xs"}
														icon={
															<ThemeIcon
																size={20}
																color="pri.6"
															>
																<IconHexagons
																	size={16}
																	stroke={2}
																	color="#74d7d1"
																/>
															</ThemeIcon>
														}
													>
														{courseItem.desc.modules.map(
															(item) => (
																<ListItem
																	key={item}
																>
																	{item}
																</ListItem>
															)
														)}
													</List>
												</Stack>
											</Box>
										</GridCol>
									)}
								</Grid>
							</Container>
						</Box>

						<Partial.Cta />

						<Box component="section">
							<Container>
								<Stack gap={"xl"} align="center">
									<div>
										<Text
											component="h2"
											ta="center"
											fz={24}
										>
											Other Courses
										</Text>
										<Text component="p" ta="center">
											See more of what we offer in
											training
										</Text>
									</div>
									<Grid>
										{data.training.desc.courses.basic
											.concat(
												data.training.desc.courses
													.advanced
											)
											.concat(
												data.training.desc.courses
													.junior
											)
											.map(
												(item) =>
													item.title !==
														courseItem.title && (
														<GridCol
															key={item.title}
															span={{
																base: 12,
																xs: 6,
																md: 4,
															}}
														>
															<Component.Card.Training.Course
																img={item.img}
																title={
																	item.title
																}
																desc={item.desc}
																links={
																	item.links
																}
																type={item.type}
																offered={
																	item.offered
																}
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
