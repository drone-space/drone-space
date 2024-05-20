import React from "react";

import Link from "next/link";

import { Box, Container, Grid, GridCol, List, ListItem, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconCheckbox, IconHexagons, IconSchool, IconStethoscope } from "@tabler/icons-react";

import Layout from "@src/layouts";
import Component from "@src/components";

import data from "@src/data";

import classes from "./Advanced.module.scss";
import Partial from "@src/partials";

export default function Advanced() {
	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				<Stack gap={48}>
					<Container>
						<Grid>
							<GridCol span={{ base: 12, xs: 6 }}>
								<Stack gap={"sm"}>
									<Title order={2} c={"pri.6"} fz={24}>
										Advanced Training
									</Title>
									<Stack gap={"xs"}>
										<Text component="p">{data.training.desc.advanced.intro[0]}</Text>
										{data.training.desc.advanced.intro[1] && (
											<Text component="p">{data.training.desc.advanced.intro[1]}</Text>
										)}
									</Stack>
								</Stack>
							</GridCol>
							<GridCol span={{ base: 12, xs: 6 }}>
								<Box className={classes.categories}>
									<Stack gap={"md"}>
										<Stack gap={"xs"}>
											<Text fw={500} component="h2">
												{data.training.desc.advanced.categories.title}
											</Text>
											<Text>{data.training.desc.advanced.categories.desc.p1}</Text>
										</Stack>
										<List
											spacing="xs"
											size="sm"
											center
											icon={
												<ThemeIcon size={20} color="pri.6">
													<IconSchool size={16} stroke={1.5} color="#74d7d1" />
												</ThemeIcon>
											}
										>
											{data.training.desc.advanced.categories.desc.list.map(item => (
												<ListItem key={item} fw={500}>
													{item}
												</ListItem>
											))}
										</List>
									</Stack>
								</Box>
							</GridCol>
						</Grid>
					</Container>

					<Container>
						<Grid align="start">
							<GridCol span={{ base: 12, xs: 6 }}>
								<Stack gap={"sm"} className={classes.objectives}>
									<Text component="h2" fz={20}>
										{data.training.desc.advanced.objectives.title}
									</Text>
									<Stack gap={"xs"}>
										<Text component="p" fz={"sm"}>
											{data.training.desc.advanced.objectives.desc.p1}
										</Text>
										<List
											spacing={"xs"}
											size={"xs"}
											fw={500}
											icon={
												<ThemeIcon size={20} color="sec.3">
													<IconCheckbox size={16} stroke={1.5} color="#14269e" />
												</ThemeIcon>
											}
										>
											{data.training.desc.advanced.objectives.desc.list.map(item => (
												<ListItem key={item}>{item}</ListItem>
											))}
										</List>
									</Stack>
								</Stack>
							</GridCol>
							<GridCol span={{ base: 12, xs: 6 }}>
								<Stack gap={"sm"}>
									<Text component="h2" fz={20}>
										{data.training.desc.advanced.overview.title}
									</Text>
									<Text component="p">{data.training.desc.advanced.overview.desc}</Text>
								</Stack>
							</GridCol>
						</Grid>
					</Container>

					<Component.Hr.Primary />

					<Container>
						<Grid>
							<GridCol span={{ base: 12, xs: 6 }}>
								<Stack gap={"xl"}>
									<Stack gap={"sm"}>
										<Text component="h2" fz={20} c={"pri.6"}>
											{data.training.desc.advanced.duration.title}
										</Text>
										<Text>{data.training.desc.advanced.duration.desc}</Text>
									</Stack>
									<Stack gap={"sm"}>
										<Text component="h3" fz={20} c={"pri.6"}>
											{data.training.desc.advanced.exams.title}
										</Text>
										<Text component="p">{data.training.desc.advanced.exams.desc}</Text>
									</Stack>
								</Stack>
							</GridCol>
							<GridCol span={{ base: 12, xs: 6 }}>
								<Stack gap={"sm"} className={classes.modules}>
									<Text component="h2" fz={20}>
										{data.training.desc.advanced.modules.title}
									</Text>
									<Stack gap={"xs"}>
										<Text component="p" fz={"sm"}>
											{data.training.desc.advanced.objectives.desc.p1}
										</Text>
										<List
											size={"xs"}
											spacing={"xs"}
											center
											fw={500}
											c={"pri.6"}
											icon={
												<ThemeIcon size={20} color="pri.6">
													<IconHexagons size={16} stroke={1.5} color="#74d7d1" />
												</ThemeIcon>
											}
										>
											{data.training.desc.advanced.modules.desc.list.map(item => (
												<ListItem key={item}>{item}</ListItem>
											))}
										</List>
									</Stack>
								</Stack>
							</GridCol>
						</Grid>
					</Container>

					<Box className={classes.ctaDoctors}>
						<Container>
							<Grid align="center">
								<GridCol span={{ base: 12, xs: 5, sm: 7 }}>
									<Stack gap={"xs"}>
										<Text component="h2" fz={20} fw={500} ta={{ base: "center", xs: "start" }}>
											{data.training.desc.advanced.appDoc.title}
										</Text>
										<Text component="p" ta={{ base: "center", xs: "start" }}>
											<Text component="span" fw={500} c={"pri.6"}>
												Location:{" "}
											</Text>
											{data.training.desc.advanced.appDoc.desc.location}
										</Text>
									</Stack>
								</GridCol>
								<GridCol span={{ base: 12, xs: 7, sm: 5 }}>
									<List
										center
										spacing={"xs"}
										icon={
											<ThemeIcon size={64} color="sec.3" c={"pri"}>
												<IconStethoscope size={36} stroke={1.5} />
											</ThemeIcon>
										}
									>
										{data.training.desc.advanced.appDoc.desc.docs.map(item => (
											<ListItem key={item.name} className={classes.cardDoctors}>
												<Stack gap={0}>
													<Text component="p" fw={500}>
														{item.name}
													</Text>
													<Text component="p" fz={"sm"}>
														{item.email}
													</Text>
													<Text component="p" fz={"sm"}>
														{item.phone}
													</Text>
												</Stack>
											</ListItem>
										))}
									</List>
								</GridCol>
							</Grid>
						</Container>
					</Box>
					<Container>
						<Stack gap={"xl"}>
							<Text component="h2" fz={24} ta="center" fw={500}>
								Our Advanced{" "}
								<Text c="pri.6" component="span" fz={"inherit"} fw={"inherit"}>
									Courses
								</Text>
							</Text>
							<Grid>
								{data.training.desc.courses.advanced.map(item => (
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
											title={item.title}
											desc={item.desc}
											links={item.links}
											type={item.type}
											offered={item.offered}
										/>
									</GridCol>
								))}
							</Grid>
						</Stack>
					</Container>
				</Stack>
			</Layout.Section.Main>
		</Layout.Page>
	);
}
